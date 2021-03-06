/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const textVariant = {
  normal: `
  text-black-light 
  `,
  bold: `
    font-bold text-black-light 
  `,
  semibold: `
    font-semibold text-black-light 
  `,
  medium: `
    font-medium text-black-light 
  `,
  em: `
    font-semibold text-primary
  `,
  'em-link': `
    font-bold underline text-primary
  `,
  'bold-em': `
    font-bold text-primary 
  `,
  tooltip: `
    text-white
  `
};

const textType = {
  '2xl': `
  text-3xl
  `,
  xl: `
  text-2xl
  `,
  lg: `
  text-xl 
  `,
  md: `
  text-lg leading-snug
  `,
  sm: `
  text-base leading-snug
  `,
  xs: `
  text-sm
  `
};

const Text = ({ type, variant, children, ...props }) => {
  const classes = `font-sans ${type ? textType[type] : ''} ${
    variant ? textVariant[variant] : 'normal'
  }`;

  switch (type) {
    case '2xl':
      return (
        <h1 className={classes} {...props}>
          {children}
        </h1>
      );
    case 'xl':
      return (
        <h2 className={classes} {...props}>
          {children}
        </h2>
      );
    case 'lg':
      return (
        <h3 className={classes} {...props}>
          {children}
        </h3>
      );
    case 'md':
      return (
        <p className={classes} {...props}>
          {children}
        </p>
      );
    case 'sm':
      return (
        <p className={classes} {...props}>
          {children}
        </p>
      );
    case 'xs':
      return (
        <p className={classes} {...props}>
          {children}
        </p>
      );
    default:
      return (
        <span className={classes} {...props}>
          {children}
        </span>
      );
  }
};

export default Text;

Text.defaultProps = {
  variant: 'normal',
  type: null
};

Text.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired
};
