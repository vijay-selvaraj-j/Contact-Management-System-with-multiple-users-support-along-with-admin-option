import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
      }
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>
                        Copyright © {new Date().getFullYear()} Vijay Projects Pvt Ltd.
                    </WebsiteRights>
                    <SocialIcons>
                    <SocialIconLink href="/" target="_blank" 
                        aria-label="Facebook"><FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Instagram"><FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Twitter"><FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="LinkedIn"><FaLinkedin/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="YouTube"><FaYoutube/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
