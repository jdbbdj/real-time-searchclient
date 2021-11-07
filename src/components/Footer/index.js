import React from 'react';
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const FooterSection = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About Us
                            </FooterLinkTitle>                               
                                <FooterLink to="/">
                                    How it works?
                                </FooterLink>
                                <FooterLink to="/">
                                    Testimonials
                                </FooterLink>
                                <FooterLink to="/">
                                    Careers
                                </FooterLink>
                                <FooterLink to="/">
                                    Investor
                                </FooterLink>
                                <FooterLink to="/">
                                    Terms of Service
                                </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Contact Us
                            </FooterLinkTitle>                               
                                <FooterLink to="/">
                                    Contact
                                </FooterLink>
                                <FooterLink to="/">
                                    Support
                                </FooterLink>
                                <FooterLink to="/">
                                    Destinations
                                </FooterLink>
                                <FooterLink to="/">
                                    Sponsorships
                                </FooterLink>

                        </FooterLinkItems>

                        
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Videos
                            </FooterLinkTitle>                               
                                <FooterLink to="/">
                                    Submit Video
                                </FooterLink>
                                <FooterLink to="/">
                                    Ambassadors
                                </FooterLink>
                                <FooterLink to="/">
                                    Agency
                                </FooterLink>
                                <FooterLink to="/">
                                    Influencer
                                </FooterLink>

                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Business
                            </FooterLinkTitle>                               
                                <FooterLink to="/">
                                    Operation
                                </FooterLink>
                                <FooterLink to="/">
                                    Engineers
                                </FooterLink>
                                <FooterLink to="/">
                                    Managers
                                </FooterLink>
                        </FooterLinkItems>

                        
                    </FooterLinksWrapper>

                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            Geo
                        </SocialLogo>
                        <WebsiteRights>
                            Geo &copy; {new Date().getFullYear()} <br></br>
                            All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default FooterSection
