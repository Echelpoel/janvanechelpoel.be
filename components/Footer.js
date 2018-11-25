import MaxWidthContainer from 'components/MaxWidthContainer'
import SocialLinkList from 'components/SocialLinkList'
import { COPYRIGHT_TEXT } from 'constants/global'
import * as theme from 'styles/theme'
import * as media from 'styles/media'

const Footer = () => (
    <footer>
        <MaxWidthContainer>
            <div className="contentContainer">
                <div className="copyrightText">{COPYRIGHT_TEXT}</div>
                <SocialLinkList />
            </div>
        </MaxWidthContainer>
        <style jsx>{`
            footer {
                background-color: #FFFFFF;
                border-top: .1rem solid ${theme.colorGreyLight};
                padding: 5rem 0;
            }

            .copyrightText {
                color: ${theme.colorGreyDark};
                font-size: 1.4rem;
                font-weight: ${theme.fontWeightMedium};
            }

            .contentContainer {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            @media ${media.xsmallOnly} {
                .contentContainer {
                    display: block;
                    text-align: center;
                }
            }
        `}</style>
    </footer>
);

export default Footer;
