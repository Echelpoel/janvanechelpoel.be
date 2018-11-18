import MaxWidthContainer from 'components/MaxWidthContainer'
import SocialLinkList from 'components/SocialLinkList'
import { SITE_NAME, SOCIAL_LINKS } from 'constants/global'
import {
    HEADING,
    SUBHEADING,
    CTA_LABEL,
    CTA_URL,
    CTA_TEXT,
} from 'constants/header'
import * as theme from 'styles/theme'

const Header = () => (
    <header>
        <MaxWidthContainer>
            <nav>
                <a href="/" className="siteName">{SITE_NAME}</a>
                <SocialLinkList />
            </nav>
            <div className="contentContainer">
                <img src="/static/img/me-lol.png" alt="le me" />
                <h1>{HEADING}</h1>
                <p className="subHeading">{SUBHEADING}</p>
                <div className="CTAContainer">
                    <div className="CTALabel">{CTA_LABEL}</div>
                    <a href={CTA_URL}>{CTA_TEXT}</a>
                </div>
            </div>
        </MaxWidthContainer>
        <style jsx>{`
            header {
                padding-bottom: 100px;
                background-color: #FFFFFF;
            }

            nav {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 4rem 0;
            }

            a.siteName {
                color: ${theme.colorDark};
                font-size: 1.4rem;
                font-weight: ${theme.fontWeightMedium};
            }

            .contentContainer {
                width: 860px;
                margin: auto;
                margin-top: 4rem;
                text-align: center;
            }

            img {
                width: 100px;
            }

            h1 {
                margin-top: 1rem;
            }

            p.subHeading {
                font-size: 2.1rem;
                padding: 0 4rem;
            }

            .CTAContainer {
                margin-top: 8rem;
            }

            .CTALabel {
                color: ${theme.colorDark};
                font-weight: ${theme.fontWeightBold};
                font-size: 1.2rem;
                text-transform: uppercase;
            }

            .CTAContainer a {
                color: ${theme.colorPrimary};
                font-weight: ${theme.fontWeightBold};
                font-size: 2rem;
            }
        `}</style>
    </header>
);

export default Header;
