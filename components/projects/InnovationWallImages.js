import MaxWidthContainer from 'components/MaxWidthContainer'
import * as theme from 'styles/theme'
import * as media from 'styles/media'
import { INNOVATIONWALL_TITLE } from 'constants/projects';

const FlinderImages = () => (
    <div className="container">
        <MaxWidthContainer>
            <div className="imagesContainer">
                <img src="/static/img/projects/innovationwall/innovationwall-01.png" alt={INNOVATIONWALL_TITLE} />
                <div className="appImageContainer">
                    <img src="/static/img/projects/innovationwall/innovationwall-02.png" alt={INNOVATIONWALL_TITLE} />
                </div>
            </div>
        </MaxWidthContainer>
        <style jsx>{`
            .container {
                background-color: ${theme.colorLightest};
                height: 68rem;
                overflow: hidden;
            }

            .imagesContainer {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .appImageContainer {
                position: absolute;
                bottom: 0;
                right: 4rem;
                width: 24rem;
            }

            img {
                width: 100%;
            }

            @media ${media.xlargeDown} {
                .container {
                    height: auto;
                    padding-bottom: 12rem;
                }

                .appImageContainer {
                    bottom: -2rem;
                }
            }

            @media ${media.largeDown} {
                .imagesContainer {
                    width: 100%;
                    display: block;
                    text-align: center;
                }

                .appImageContainer {
                    position: relative;
                    bottom: auto;
                    right: auto;
                    margin: auto;
                    margin-top: 4rem;
                }
            }
        `}</style>
    </div>
);

export default FlinderImages;
