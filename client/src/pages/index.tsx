import Head from "next/head";
import styled, { css } from "styled-components";
import { breakpoints } from "@/styles/breakpoints";
import { PageTemplate } from "@/templates/PageTemplate";
import { useAppDispatch } from "@/redux/hooks";
import {
  getRealEstateData,
  paramsValue,
  geoValue,
  geolocateUser,
} from "@/redux/reducer/location";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useAppSelector } from "@/redux/hooks";
import { BiSearch } from "react-icons/bi";

const heroImage =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80";
const buyImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80";
const rentImage =
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80";

const HeroSection = styled.div`
  background: linear-gradient(
      170deg,
      rgba(15, 15, 26, 0.75) 0%,
      rgba(108, 99, 255, 0.35) 100%
    ),
    url(${heroImage}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
  padding: 2rem;
  text-align: center;
  gap: 1.5rem;
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0;
  max-width: 700px;
  line-height: 1.15;
  @media ${breakpoints.M} {
    font-size: 3.5rem;
  }
`;

const HeroSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1rem;
  margin: 0;
  max-width: 500px;
  @media ${breakpoints.M} {
    font-size: 1.15rem;
  }
`;

const SearchWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 0.35rem 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  max-width: 540px;
`;

const SearchIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.35rem;
  color: rgba(255, 255, 255, 0.6);
  flex-shrink: 0;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: #1a1a2e;
  margin: 0;
  @media ${breakpoints.M} {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 0.95rem;
  text-align: center;
  color: #6b6b7b;
  margin: 0;
  max-width: 550px;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 0 1rem;
`;

const Spacing = styled.div<{ size?: string }>`
  height: ${({ size }) => size || "4rem"};
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0 1.5rem;
  @media ${breakpoints.M} {
    flex-direction: row;
    gap: 2.5rem;
  }
`;

export default function Home() {
  const dispatch = useAppDispatch();
  const params = useAppSelector(paramsValue);
  const geo = useAppSelector(geoValue);
  const router = useRouter();
  const HomepageSection = dynamic(
    () => import("../components/HomepageSection/HomepageSection"),
    { ssr: false },
  );

  const PlacesAutocomplete = dynamic(
    () => import("../components/PlacesAutocomplete/PlacesAutocomplete"),
    { ssr: false },
  );

  const handlePlaceSelect = async (place: {
    lat: number;
    lng: number;
    formattedAddress: string;
    addressComponents: any[];
  }) => {
    const geo = { lat: place.lat, lng: place.lng };
    let city = "";
    let state_code = "";
    for (const comp of place.addressComponents) {
      const types: string[] = comp.types || [];
      if (types.includes("locality")) {
        city = comp.longText || comp.long_name || "";
      }
      if (types.includes("administrative_area_level_1")) {
        state_code = comp.shortText || comp.short_name || "";
      }
    }
    await dispatch(
      getRealEstateData({
        type: "sale",
        data: { state_code, city, geo },
      }),
    );
    router.push("/map");
  };

  const handleClicky = async (type: string) => {
    let currentGeo = geo;
    if (!currentGeo || (!currentGeo.lat && !currentGeo.lng)) {
      const result = await dispatch(geolocateUser()).unwrap();
      currentGeo = { lat: result.lat, lng: result.lng };
    }
    await dispatch(
      getRealEstateData({ type, data: { ...params, geo: currentGeo } }),
    );
    router.push("/map");
  };

  return (
    <>
      <Head>
        <title>Marketplace — Find Your Dream Home</title>
        <meta
          name="description"
          content="Modern real estate marketplace. Buy, sell, and rent properties with ease."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageTemplate>
          <HeroSection>
            <HeroTitle>Find the home you&apos;ve always dreamed of</HeroTitle>
            <HeroSubtitle>
              Explore thousands of listings across the country. Buy your perfect
              home or find your next rental.
            </HeroSubtitle>
            <SearchWrapper>
              <SearchIconWrap>
                <BiSearch size={20} />
              </SearchIconWrap>
              <PlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}
                placeholder="Search city, neighborhood, or zip..."
                onSelect={handlePlaceSelect}
                variant="hero"
              />
            </SearchWrapper>
          </HeroSection>

          <Spacing />

          <HomepageSection />

          <Spacing />

          <SectionHeader>
            <SectionTitle>Start your journey</SectionTitle>
            <SectionSubtitle>
              Whether you&apos;re looking to buy your dream home or find the
              perfect rental, we&apos;ve got you covered.
            </SectionSubtitle>
          </SectionHeader>

          <Spacing size="2rem" />

          <BadgeContainer>
            <HomepageBadge
              logo={buyImage}
              title="Buy a Home"
              description="Browse properties for sale and find the perfect place to call home. From cozy apartments to luxury estates."
              buttondesc="Explore Homes"
              Click={() => handleClicky("sale")}
            />
            <HomepageBadge
              logo={rentImage}
              title="Rent a Home"
              description="Discover rental listings that match your lifestyle and budget. Flexible options in top neighborhoods."
              buttondesc="Find Rentals"
              Click={() => handleClicky("rent")}
            />
          </BadgeContainer>

          <Spacing />
        </PageTemplate>
      </main>
    </>
  );
}

import HomepageBadge from "@/components/HomepageBadge/HomepageBadge";
