import React from 'react';

const withFooter = (WrappedComponent) => props => {
  return (
    <div>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withFooter;
