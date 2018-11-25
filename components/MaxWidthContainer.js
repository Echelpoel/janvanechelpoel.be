import * as theme from 'styles/theme'

const MaxWidthContainer = ({ children }) => (
    <div>
        {children}
        <style jsx>{`
            max-width: ${theme.maxWidth};
            margin: auto;
            padding: 0 2rem;
        `}</style>
    </div>
)

export default MaxWidthContainer;
