import TopBar from 'components/TopBar';
import Footer from 'components/ui/Footer';

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
