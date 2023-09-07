import Footer from 'components/ui/Footer';
import TopBar from 'components/ui/TopBar';

interface RootLayoutProps {
  children: React.ReactNode;
}

const rootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="relative flex h-full w-full flex-col">
      <TopBar />
      <div className="m-auto w-full flex-1 flex-col bg-bg">{children}</div>
      <Footer />
    </div>
  );
};

export default rootLayout;
