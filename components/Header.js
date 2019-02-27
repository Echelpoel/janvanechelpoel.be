import MaxWidthContainer from 'components/MaxWidthContainer'
import SocialLinkList from 'components/SocialLinkList'
import HireBanner from 'components/HireBanner'
import { SITE_NAME } from 'constants/global'
import {
    HEADING,
    SUBHEADING,
    CTA_LABEL,
    CTA_URL,
    CTA_TEXT,
} from 'constants/header'
import * as theme from 'styles/theme'
import * as media from 'styles/media'

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
                <HireBanner />
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

            @media ${media.largeDown} {
                .contentContainer {
                    width: auto;
                }
            }

            @media ${media.xsmallOnly} {
                nav {
                    display: block;
                    text-align: center;
                }

                h1 {
                    font-size: 3.6rem;
                }

                p.subHeading {
                    font-size: 1.8rem;
                    padding: 0;
                }
            }
        `}</style>
    </header>
);

export default Header;
