import React from "react";
import {
  FooterContainer,
  FooterTop,
  FooterBrand,
  BrandDescription,
  LogoContainer,
  FooterColumns,
  FooterColumn,
  ColumnTitle,
  FooterLink,
  Divider,
  FooterBottom,
  CopyRight,
  SocialLinks,
  SocialIcon,
} from "./Footer.style";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  geoValue,
  getRealEstateData,
  paramsValue,
} from "@/redux/reducer/location";
import { useRouter } from "next/router";
import { RiInstagramLine, RiLinkedinFill, RiTwitterLine } from "react-icons/ri";

function Footer() {
  const dispatch = useAppDispatch();
  const params = useAppSelector(paramsValue);
  const geo = useAppSelector(geoValue);
  const router = useRouter();

  const handleClicky: any = async (type: string) => {
    await dispatch(getRealEstateData({ type: type, data: { ...params, geo } }));
    router.push("/map");
  };

  return (
    <FooterContainer>
      <FooterTop>
        <FooterBrand>
          <LogoContainer>
            <Image
              alt="logo"
              src={logo}
              width={48}
              height={48}
              style={{ height: "auto" }}
            />
          </LogoContainer>
          <BrandDescription>
            Discover your dream home with our modern real estate platform. We
            make finding, buying, and renting properties simple and seamless.
          </BrandDescription>
        </FooterBrand>

        <FooterColumns>
          <FooterColumn>
            <ColumnTitle>Explore</ColumnTitle>
            <FooterLink onClick={() => handleClicky("sale")}>
              Buy a Home
            </FooterLink>
            <FooterLink onClick={() => handleClicky("rent")}>
              Rent a Home
            </FooterLink>
            <FooterLink>Neighborhoods</FooterLink>
            <FooterLink>Price Trends</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Company</ColumnTitle>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Our Mission</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Contact</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Support</ColumnTitle>
            <FooterLink>Help Center</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Terms of Service</FooterLink>
          </FooterColumn>
        </FooterColumns>
      </FooterTop>

      <Divider />

      <FooterBottom>
        <CopyRight>
          &copy; {new Date().getFullYear()} Marketplace. All rights reserved.
        </CopyRight>
        <SocialLinks>
          <SocialIcon aria-label="Twitter">
            <RiTwitterLine size={18} />
          </SocialIcon>
          <SocialIcon aria-label="Instagram">
            <RiInstagramLine size={18} />
          </SocialIcon>
          <SocialIcon aria-label="LinkedIn">
            <RiLinkedinFill size={18} />
          </SocialIcon>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
