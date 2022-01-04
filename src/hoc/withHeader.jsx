import React from 'react';

const withHeader = (WrappedComponent) => props => {
  return (
    <div>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withHeader;
