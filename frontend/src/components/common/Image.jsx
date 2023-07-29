import React from 'react';

const Image = ({ src, width, height, className }) => {
  return <img className={`common-image img-fluid ${className}`} src={src} alt="Service" style={{ width, height }}/>;
};

export default Image;