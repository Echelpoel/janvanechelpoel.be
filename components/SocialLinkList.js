import { SOCIAL_LINKS } from 'constants/global'
import * as theme from 'styles/theme'

const SocialLinkList = () => (
    <ul className="socialLinksList">
        {SOCIAL_LINKS.map((social) => (
            <li key={social.name}>
                <a href={social.url} target="_blank">{social.name}</a>
            </li>
        ))}
        <style jsx>{`
            ul.socialLinksList li {
                display: inline-block;
                margin-right: 3rem;
            }

            ul.socialLinksList li:last-of-type {
                margin-right: 0;
            }

            ul.socialLinksList li a {
                font-size: 1.2rem;
                color: ${theme.colorGrey};
                text-transform: lowercase;
            }

            ul.socialLinksList li a:hover {
                color: ${theme.colorDark};
            }
        `}</style>
    </ul>
);

export default SocialLinkList;
