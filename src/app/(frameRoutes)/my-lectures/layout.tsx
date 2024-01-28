export async function generateMetadata() {
  return {
    title: '찜한 강의',
  };
}

function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default Layout;
