import * as theme from 'styles/theme'
import * as media from 'styles/media'

const Button = ({
    text,
    url,
}) => (
    <a href={url}>
        {text}
        <style jsx>{`
            a {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                height: 6rem;
                min-width: 26rem;
                background-color: ${theme.colorPrimary};
                border-radius: 3rem;
                color: #FFFFFF;
                font-size: 1.4rem;
                text-transform: uppercase;
                letter-spacing: .3rem;
                font-weight: ${theme.fontWeightBold};
            }

            a:hover {
                color: #FFFFFF;
            }

            @media ${media.xsmallOnly} {
                a {
                    min-width: auto;
                    width: 100%;
                }
            }
        `}</style>
    </a>
);

export default Button;
