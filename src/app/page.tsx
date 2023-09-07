import Home from 'pages/Home';
import TopBar from 'components/ui/TopBar';
import Footer from 'components/ui/Footer';

const page = () => {
  return (
    <div className="relative flex h-full w-full flex-col">
      <TopBar />
      <div className="w-full">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default page;
