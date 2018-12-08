import MaxWidthContainer from 'components/MaxWidthContainer'
import * as theme from 'styles/theme'

const Project = ({
    renderImages,
    iconUrl,
    title,
    subtitle,
    description,
    links,
}) => (
    <section>
        <MaxWidthContainer>
            <div className="projectHeader">
                <div className="projectTop">
                    <div className="metaContainer">
                        <div className="iconContainer">
                            <img src={iconUrl} alt={title} />
                        </div>
                        <div>
                            <h3>{title}</h3>
                            <div className="subtitle">{subtitle}</div>
                        </div>
                    </div>
                    <ul>
                        {links.map(link => (
                            <li key={link.id}>
                                <a href={link.url} target="_blank">{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <p>{description}</p>
            </div>
        </MaxWidthContainer>
        {renderImages()}
        <style jsx>{`
            section {
                background-color: ${theme.colorLightest};
                margin-bottom: 1.5rem;
                color: ${theme.projectFontColor};
            }

            .projectHeader {
                padding: 12rem 2rem 8rem 2rem;
            }

            .projectTop {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-bottom: 4rem;
                border-bottom: .1rem solid ${theme.projectHeaderBorderColor};
            }

            .metaContainer {
                display: flex;
                align-items: top;
                justify-content: flex-start;
            }

            .iconContainer {
                margin-right: 1.5rem;
            }

            .iconContainer img {
                width: 6rem;
            } 

            .subtitle {
                text-transform: uppercase;
                font-size: 1.2rem;
            }

            p {
                max-width: 760px;
                margin-top: 4rem;
            }

            ul li {
                display: inline-block;
                margin-right: 6rem;
            }
            ul li:last-of-type {
                margin-right: 0;
            }

            a {
                display: block;
                margin-top: 1rem;
                font-weight: ${theme.fontWeightBold};
            }
        `}</style>
    </section>
);

Project.defaultProps = {
    renderImages: () => {},
};

export default Project;
