export async function generateMetadata() {
  return {
    title: '내 프로필',
  };
}

function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default Layout;
