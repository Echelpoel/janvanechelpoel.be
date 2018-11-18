import * as theme from 'styles/theme'

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
        `}</style>
    </a>
);

export default Button;
