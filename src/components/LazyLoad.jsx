import { Suspense } from 'react';

const LazyLoad = ({ children, fallback = <div>Loading...</div> }) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyLoad; 