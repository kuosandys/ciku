/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const headingType = {
  h1: `
  text-5xl text-white font-bold
  `,
  'h1/2': `
  text-4xl text-black-light leading-snug
  `,
  h2: `
  text-3xl text-black-light 
  `,
  h3: `
  text-2xl text-black-light leading-normal
  `,
  h4: `
  text-lg text-black-light  font-bold leading-snug 
  `
};

const Heading = ({ type, children, ...props }) => {
  const classes = `font-serif ${headingType[type]}`;

  switch (type) {
    case 'h1':
      return (
        <h1 className={classes} {...props}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={classes} {...props}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={classes} {...props}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={classes} {...props}>
          {children}
        </h4>
      );
    default:
      return (
        <h1 className={classes} {...props}>
          {children}
        </h1>
      );
  }
};

export default Heading;

Heading.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
