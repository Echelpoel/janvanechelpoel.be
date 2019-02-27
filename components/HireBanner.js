import IconArrowRight from 'components/icons/ArrowRight'
import {
    HIRE_BANNER_TAG,
    HIRE_BANNER_TEXT,
    HIRE_BANNER_URL,
} from 'constants/header'
import * as theme from 'styles/theme'
import * as media from 'styles/media'

const HireBanner = () => (
    <a href={HIRE_BANNER_URL} className="banner">
        <span className="tag">{HIRE_BANNER_TAG}</span>
        <span>{HIRE_BANNER_TEXT}</span>
        <div className="icon-container">
            <IconArrowRight />
        </div>

        <style jsx>{`
            a.banner {
                width: 680px;
                margin: auto;
                margin-top: 6rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-radius: .8rem;
                background-color: ${theme.colorLightest};
                padding: 2.4rem 3.6rem;
                font-size: 1.5rem;
                font-weight: ${theme.fontWeightMedium};
                line-height: 1;
                transition: .3s;
            }

            a.banner:hover {
                background-color: #fff;
                color: ${theme.colorDark};
                box-shadow: 0 1px 6px 0 #DAE0EE;
                transform: translateY(-5px);
            }

            .tag {
                border-radius: .4rem;
                padding: .8rem 1.6rem;
                background-color: ${theme.colorPrimary};
                color: #fff;
                font-size: 1rem;
                font-weight: ${theme.fontWeightBold};
                text-transform: uppercase;
            }

            .icon-container {
                margin-right: 1.6rem;
                transition: .3s;
            }

            a.banner:hover .icon-container {
                transform: translateX(10px);
            }

            @media ${media.largeDown} {
                a.banner {
                    width: auto;
                    max-width: 680px;
                }
            }

            @media (max-width: 750px) {
                a.banner {
                    padding: 2.4rem;
                }

                .icon-container {
                    margin-right: 0;
                }
            }

            @media ${media.smallOnly} {
                a.banner,
                .tag {
                    display: block;
                }

                a.banner {
                    line-height: 1.6;
                }
                
                .tag {
                    max-width: 200px;
                    margin: auto;
                    margin-bottom: 1.6rem;
                    line-height: 1;
                }

                .icon-container {
                    display: none;
                }
            }

            @media (max-width: 420px) {
                .tag {
                    width: auto;
                    max-width: none;
                }
            }
        `}</style>
    </a>
);

export default HireBanner;
