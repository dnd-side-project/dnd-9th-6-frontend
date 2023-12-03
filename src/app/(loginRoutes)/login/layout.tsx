export async function generateMetadata() {
  return {
    title: '로그인',
  };
}

function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default Layout;
