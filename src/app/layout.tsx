import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode
}

const rootLayout = ({
  children,
}: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default rootLayout;