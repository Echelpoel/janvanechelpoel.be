import MaxWidthContainer from 'components/MaxWidthContainer'
import SocialLinkList from 'components/SocialLinkList'
import * as theme from 'styles/theme'
import { COPYRIGHT_TEXT } from 'constants/global'

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
        `}</style>
    </footer>
);

export default Footer;
