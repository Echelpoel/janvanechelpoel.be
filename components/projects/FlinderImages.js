import MaxWidthContainer from 'components/MaxWidthContainer'
import * as theme from 'styles/theme'

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
        `}</style>
    </div>
);

export default FlinderImages;
