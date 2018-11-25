import MaxWidthContainer from 'components/MaxWidthContainer'
import * as theme from 'styles/theme'
import * as media from 'styles/media'

const FlinderImages = () => (
    <div className="container">
        <MaxWidthContainer>
            <div className="imagesContainer">
                <img src="/static/img/projects/flinder-01.png" />
                <img src="/static/img/projects/flinder-02.png" />
                <img src="/static/img/projects/flinder-03.png" />
                <img src="/static/img/projects/flinder-04.png" />
            </div>
        </MaxWidthContainer>
        <style jsx>{`
            .container {
                background-color: ${theme.colorLightest};
                padding: 12rem 0;
            }

            .imagesContainer {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            img {
                width: 260px;
            }

            @media ${media.xlargeDown} {
                .imagesContainer {
                    padding: 0 6rem;
                }

                img:last-of-type {
                    display: none;
                }
            }

            @media ${media.largeDown} {
                .container {
                    padding-top: 8rem; /* 12rem - margin-top of img */
                }

                .imagesContainer {
                    flex-wrap: wrap;
                    padding: 0 12rem;
                }

                img:last-of-type {
                    display: inline;
                }

                img {
                    margin-top: 4rem;
                }
            }

            @media (max-width: 900px) {
                .imagesContainer {
                    padding: 0 4rem;
                }
            }

            @media ${media.smallOnly} {
                .imagesContainer {
                    padding: 0 2rem;
                }
            }

            @media (max-width: 635px) {
                .container {
                    padding-top: 10rem; /* 12rem - margin-top of img */
                }

                .imagesContainer {
                    display: block;
                    padding: 0;
                }

                img {
                    display: block;
                    margin: auto;
                    margin-top: 2rem;
                }

                img:last-of-type {
                    display: block;
                }
            }
        `}</style>
    </div>
);

export default FlinderImages;
