import React, { useCallback, useEffect, useRef, useState } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import styled, { css } from "styled-components";

type PlaceResult = {
  lat: number;
  lng: number;
  formattedAddress: string;
  addressComponents: google.maps.places.AddressComponent[];
};

type Props = {
  apiKey: string;
  placeholder?: string;
  onSelect: (place: PlaceResult) => void;
  variant?: "hero" | "section";
};

let initialized = false;
let placesReady: Promise<google.maps.PlacesLibrary> | null = null;

function getPlacesLibrary(apiKey: string) {
  if (!initialized) {
    setOptions({ key: apiKey, v: "weekly" });
    initialized = true;
  }
  if (!placesReady) {
    placesReady = importLibrary("places");
  }
  return placesReady;
}

type Suggestion = {
  text: string;
  placePrediction: google.maps.places.PlacePrediction;
};

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
`;

const Input = styled.input<{ $variant: "hero" | "section" }>`
  width: 100%;
  border: none;
  outline: none;
  font-family: "Inter", sans-serif;

  ${({ $variant }) =>
    $variant === "hero"
      ? css`
          background: transparent;
          color: #fff;
          font-size: 0.95rem;
          padding: 0.5rem 0.25rem;
          &::placeholder {
            color: rgba(255, 255, 255, 0.45);
          }
        `
      : css`
          background: #f8f8fa;
          color: #1a1a2e;
          font-size: 0.85rem;
          padding: 0.5rem 0.75rem;
          border: 1px solid #e0e0e8;
          border-radius: 10px;
          min-height: 40px;
          transition: border-color 0.15s ease;
          &:focus {
            border-color: #6c63ff;
            background: #fff;
            box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.08);
          }
          &::placeholder {
            color: #9d9daa;
            font-size: 0.83rem;
          }
        `}
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  border: 1px solid #e0e0e8;
  border-radius: 12px;
  margin: 4px 0 0;
  padding: 4px 0;
  list-style: none;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  max-height: 260px;
  overflow-y: auto;
`;

const DropdownItem = styled.li<{ $active: boolean }>`
  padding: 0.55rem 0.75rem;
  font-size: 0.85rem;
  color: #1a1a2e;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  ${({ $active }) =>
    $active &&
    css`
      background: #f0efff;
    `}
  &:hover {
    background: #f0efff;
  }
`;

export default function PlacesAutocomplete({
  apiKey,
  placeholder = "Search city, neighborhood, or zip...",
  onSelect,
  variant = "hero",
}: Props) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [ready, setReady] = useState(false);
  const tokenRef = useRef<google.maps.places.AutocompleteSessionToken | null>(
    null,
  );
  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    getPlacesLibrary(apiKey).then(() => {
      tokenRef.current = new google.maps.places.AutocompleteSessionToken();
      setReady(true);
    });
  }, [apiKey]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const fetchSuggestions = useCallback(
    async (input: string) => {
      if (!ready || !input.trim()) {
        setSuggestions([]);
        return;
      }
      try {
        const request: any = {
          input,
          includedRegionCodes: ["us"],
          language: "en-US",
        };
        if (tokenRef.current) request.sessionToken = tokenRef.current;

        const { suggestions: results } =
          await google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(
            request,
          );

        const mapped: Suggestion[] = results
          .filter((s: any) => s.placePrediction)
          .map((s: any) => ({
            text: s.placePrediction.text.toString(),
            placePrediction: s.placePrediction,
          }));

        setSuggestions(mapped);
        setOpen(mapped.length > 0);
        setActiveIdx(-1);
      } catch {
        setSuggestions([]);
      }
    },
    [ready],
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!val.trim()) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    debounceRef.current = setTimeout(() => fetchSuggestions(val), 200);
  };

  const handleSelect = async (suggestion: Suggestion) => {
    setOpen(false);
    setQuery(suggestion.text);
    setSuggestions([]);

    const place = suggestion.placePrediction.toPlace();
    await place.fetchFields({
      fields: ["formattedAddress", "location", "addressComponents"],
    });

    // Refresh session token after selection
    tokenRef.current = new google.maps.places.AutocompleteSessionToken();

    const loc = place.location;
    if (!loc) return;

    onSelect({
      lat: loc.lat(),
      lng: loc.lng(),
      formattedAddress: place.formattedAddress || "",
      addressComponents: place.addressComponents || [],
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIdx >= 0) {
      e.preventDefault();
      handleSelect(suggestions[activeIdx]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <Wrapper ref={wrapperRef}>
      <Input
        $variant={variant}
        type="text"
        value={query}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        placeholder={placeholder}
        autoComplete="off"
      />
      {open && suggestions.length > 0 && (
        <Dropdown role="listbox">
          {suggestions.map((s, i) => (
            <DropdownItem
              key={i}
              $active={i === activeIdx}
              role="option"
              onMouseDown={() => handleSelect(s)}
            >
              {s.text}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
}
