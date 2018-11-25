const breakpoints = {
    xsmall: 430,
    medium: 700,
    large: 1024,
    xlarge: 1200,
    xxlarge: 1440,
};

export const xsmallOnly = `(max-width: ${breakpoints.xsmall - 1}px)`;
export const smallOnly = `(max-width: ${breakpoints.medium - 1}px)`;
export const mediumOnly = `(min-width: ${breakpoints.medium}px) and (max-width: ${breakpoints.large - 1}px)`;
export const largeDown = `(max-width: ${breakpoints.large - 1}px)`;
export const largeAndUp = `(min-width: ${breakpoints.large}px)`;
export const largeOnly = `(min-width: ${breakpoints.large}px) and (max-width: ${breakpoints.xlarge - 1}px)`;
export const xlargeDown = `(max-width: ${breakpoints.xlarge}px)`;
