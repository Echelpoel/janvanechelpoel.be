import * as theme from 'styles/theme'

const MaxWidthContainer = ({ children }) => (
    <div>
        {children}
        <style jsx>{`
            max-width: ${theme.maxWidth};
            margin: auto;
        `}</style>
    </div>
)

export default MaxWidthContainer;
