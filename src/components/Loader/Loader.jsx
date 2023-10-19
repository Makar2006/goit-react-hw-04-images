import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const MyLoader = () => {
  return (
    <div>
      <ThreeDots color="#008000" height={80} width={80} />
    </div>
  );
};

export default MyLoader;
