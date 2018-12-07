import MaxWidthContainer from 'components/MaxWidthContainer'
import * as theme from 'styles/theme'
import * as media from 'styles/media'

const FlinderImages = () => (
    <div className="container">
        <MaxWidthContainer>
            <div className="imagesContainer">
                <img src="/static/img/projects/beatswitch/beatswitch-01.png" />
            </div>
        </MaxWidthContainer>
        <style jsx>{`
            .container {
                background-color: ${theme.colorLightest};
                padding-top: 12rem;
                height: 680px;
                overflow: hidden;
            }

            .imagesContainer {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            img {
                width: 100%;
            }

            @media ${media.xlargeDown} {
                .container {
                    height: auto;
                    padding-bottom: 12rem;
                }
            }
        `}</style>
    </div>
);

export default FlinderImages;
