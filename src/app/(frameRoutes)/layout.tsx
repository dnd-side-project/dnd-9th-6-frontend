import Footer from 'components/ui/Footer';
import TopBar from 'components/ui/TopBar';

interface RootLayoutProps {
  children: React.ReactNode;
}

const rootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="flex flex-col">
      <TopBar />
      {children}
      <Footer />
    </div>
  );
};

export default rootLayout;
