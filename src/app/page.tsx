import Home from 'pages/Home';
import Footer from './(frameRoutes)/components/Footer';
import TopBar from 'components/ui/TopBar';

const page = () => {
  return (
    <div className="relative flex h-full w-full flex-col">
      <TopBar />
      <div className="m-auto w-full flex-1 flex-col bg-bg">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default page;
