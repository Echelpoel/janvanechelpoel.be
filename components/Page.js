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
        </Head>
        {children}
        <style jsx global>{`
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
