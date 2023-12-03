export async function generateMetadata() {
  return {
    title: '강의',
  };
}

function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default Layout;
