import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #303030;
    
`

export const FooterWrap = styled.div`
    padding: 10px 5px;
    max-width: 1100px;
    margin-top: 50px;
    margin-left: 20px;
    margin-right: 20px;
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin-left: 40px;
    margin-top: 20px;
    margin-bottom: 10px;

    @media screen and (max-width: 820px){
       flex-direction: column;
`

export const WebsiteRights = styled.small `
        color: #fff;
        margin-bottom: 10px;
        font-size: 13px;

        @media screen and (max-width: 768px){
            font-size: 11px;
}
`

export const SocialIcons = styled.div `
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        padding-left: 50px;
        margin-right: -140px;

        @media screen and (max-width: 820px){
            padding-left: 0px;
            margin-right: 0px;
        }
`

export const SocialIconLink = styled.a `
        color: #fff;
        font-size: 15px;

        &:hover{
            color: #f57b1d;
            transition: 0.4s ease-in-out;
        }
`
