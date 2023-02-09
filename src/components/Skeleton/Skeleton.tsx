import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={439}
      height={492}
      viewBox="0 0 439 492"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="777" cy="345" r="103" />
      <circle cx="818" cy="508" r="124" />
      <circle cx="1015" cy="843" r="219" />
      <circle cx="875" cy="729" r="112" />
      <circle cx="835" cy="544" r="138" />
      <rect x="738" y="440" rx="10" ry="10" width="280" height="26" />
      <rect x="610" y="477" rx="10" ry="10" width="280" height="88" />
      <rect x="785" y="558" rx="10" ry="10" width="95" height="30" />
      <rect x="772" y="596" rx="20" ry="20" width="152" height="45" />
      <rect x="1" y="8" rx="15" ry="15" width="400" height="400" />
      <rect x="51" y="419" rx="10" ry="10" width="296" height="30" />
      <rect x="90" y="463" rx="10" ry="10" width="216" height="24" />
    </ContentLoader>
  );
};

export default Skeleton;
