import { Fragment } from 'react'
import Head from 'next/head'
import * as theme from 'styles/theme'
import {
    SITE_TITLE,
    SITE_DESCRIPTION,
    SITE_NAME,
    SITE_URL,
} from 'constants/global'

const Page = ({ children }) => (
    <Fragment>
        <Head>
            <title>{SITE_TITLE}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={SITE_DESCRIPTION} />
            <link rel="shortcut icon" type="image/x-icon" href="/static/img/favicon.ico" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:url" content={SITE_URL} />
            <meta property="og:title" content={SITE_TITLE} />
            <meta property="og:description" content={SITE_DESCRIPTION} />
            <meta property="og:image" content="https://janvanechelpoel.be/static/img/social.jpg" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={SITE_NAME} />
            
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-37968019-1"></script>
            <script dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                    
                        gtag('config', 'UA-37968019-1');
                    `
                }}
            />
        </Head>
        {children}
        <style jsx global>{`
            @font-face {
                font-family: 'InterUI';
                src: url('/static/fonts/InterUI-Bold.woff2') format('woff2'),
                    url('/static/fonts/InterUI-Bold.woff') format('woff');
                font-weight: bold;
                font-style: normal;
            }

            @font-face {
                font-family: 'InterUI';
                src: url('/static/fonts/InterUI-Medium.woff2') format('woff2'),
                    url('/static/fonts/InterUI-Medium.woff') format('woff');
                font-weight: 500;
                font-style: normal;
            }

            @font-face {
                font-family: 'InterUI';
                src: url('/static/fonts/InterUI-Regular.woff2') format('woff2'),
                    url('/static/fonts/InterUI-Regular.woff') format('woff');
                font-weight: normal;
                font-style: normal;
            }

            /*
                1. Prevent padding and border from affecting element width https://goo.gl/pYtbK7
                2. The base font-size is set at 62.5% for having the convenience of sizing rems in a way that is similar to using px: 1.6rem = 16px
            */
            html {
                box-sizing: border-box;
                font-size: 62.5%;
            }

            body {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                font-family: ${theme.defaultFontFamily};
                color: ${theme.defaultFontColor};
                font-size: ${theme.defaultFontSize};
                margin: 0;
                line-height: ${theme.defaultLineHeight};
                background-color: ${theme.colorDark};
            }

            a {
                text-decoration: none;
                color: ${theme.colorDark};
            }

            a:hover {
                color: ${theme.colorPrimary};
            }

            ul {
                list-style: none;
                margin: 0;
                padding: 0;
            }

            h1,
            h2,
            h3,
            h4 {
                color: ${theme.colorDark};
            }

            h1 {
                font-size: 5.6rem;
                font-weight: ${theme.fontWeightBold};
                line-height: 1.2;
            }

            h2 {
                font-size: 3.6rem;
                font-weight: ${theme.fontWeightBold};
                margin: 0;
            }

            h3 {
                font-size: 2.3rem;
                font-weight: ${theme.fontWeightMedium};
                margin: 0;
            }

            h4 {
                font-size: 2.1rem;
                font-weight: ${theme.fontWeightMedium};
                margin: 0;
            }
        `}</style>
    </Fragment>
)

export default Page;
