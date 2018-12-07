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
        {renderImages()}
        <MaxWidthContainer>
            <div className="descriptionContainer">
                <div className="metaContainer">
                    <div className="iconContainer">
                        <img src={iconUrl} alt={title} />
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <div className="subtitle">{subtitle}</div>
                    </div>
                </div>
                <p>{description}</p>
                <ul>
                    {links.map(link => (
                        <li key={link.id}>
                            <a href={link.url} target="_blank">{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </MaxWidthContainer>
        <style jsx>{`
            section {
                background-color: #FFFFFF;
            }

            .descriptionContainer {
                padding: 5rem 0;
                padding-left: 2rem;
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
                margin: 4rem 0;
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
