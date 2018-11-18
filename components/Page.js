import { Fragment } from 'react'
import Head from 'next/head'
import * as theme from 'styles/theme'
import { SITE_TITLE, SITE_DESCRIPTION } from 'constants/global'

const Page = ({ children }) => (
    <Fragment>
        <Head>
            <title>{SITE_TITLE}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={SITE_DESCRIPTION} />
            <link rel="shortcut icon" type="image/x-icon" href="/static/img/favicon.ico" />
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
            }

            a {
                text-decoration: none;
                color: ${theme.colorDark};
            }

            a:hover {
                color: ${theme.colorPrimary};
            }
        `}</style>
    </Fragment>
)

export default Page;
