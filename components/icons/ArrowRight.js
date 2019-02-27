import * as theme from 'styles/theme'

const IconArrowRight = ({ color }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path
            fill={color}
            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
        />
    </svg>
);

IconArrowRight.defaultProps = {
    color: theme.colorPrimary,
};

export default IconArrowRight;
