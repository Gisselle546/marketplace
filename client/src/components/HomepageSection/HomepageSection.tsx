import React from "react";
import {
  HomepageSectionWrapper,
  SectionHeadline,
  SectionTagline,
  StatsRow,
  StatItem,
  StatNumber,
  StatLabel,
  CTAButton,
} from "./HomepageSection.style";
import { useAppSelector } from "@/redux/hooks";
import { selectValue } from "@/redux/reducer/register";
import { useRouter } from "next/router";

function HomepageSection() {
  const count = useAppSelector(selectValue);
  const router = useRouter();

  return (
    <HomepageSectionWrapper>
      <SectionHeadline>
        Trusted by thousands to find their perfect home
      </SectionHeadline>
      <SectionTagline>
        We connect buyers, renters, and sellers with the tools they need to make
        confident real estate decisions.
      </SectionTagline>

      <StatsRow>
        <StatItem>
          <StatNumber>12K+</StatNumber>
          <StatLabel>Listings</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>8K+</StatNumber>
          <StatLabel>Happy Clients</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>200+</StatNumber>
          <StatLabel>Cities</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>98%</StatNumber>
          <StatLabel>Satisfaction</StatLabel>
        </StatItem>
      </StatsRow>

      <CTAButton onClick={() => router.push(count ? "/map" : "/signup")}>
        {count ? "Explore Homes Near You" : "Get Started — It's Free"}
      </CTAButton>
    </HomepageSectionWrapper>
  );
}

export default HomepageSection;
