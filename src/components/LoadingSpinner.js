import React from 'react';

function LoadingSpinner() {
  return (
<div className="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-black/50 backdrop-blur-xs z-50 overflow-hidden">
<div className="w-12 h-12 border-4 border-customColor border-t-transparent rounded-full animate-spin items-center justify-center"></div>
  </div>
  );
}

export default LoadingSpinner;
