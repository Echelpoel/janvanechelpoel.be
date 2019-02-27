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
                color: #fff;
                font-size: 1.4rem;
                text-transform: uppercase;
                letter-spacing: .3rem;
                font-weight: ${theme.fontWeightBold};
                transition: .3s cubic-bezier(.2, .8, .2, 1);
            }

            a:hover {
                color: #fff;
                background-color: ${theme.colorPrimaryDark};
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
