export async function generateMetadata() {
  return {
    title: '스코프',
  };
}

function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default Layout;
