import Content from "../components/Home components/Content";
import DCQRScanner from "../components/Home components/DCQRScanner";
import Hero from "../components/Home components/Hero";
import Overview from "../components/Home components/Overview";
import Vas from "../components/Home components/Vas";

const Home = () => {
  return( <div>
    <Hero/>
    <Overview/>
    <DCQRScanner/>
    <Vas/>
    <Content/>
  </div>);
};

export default Home;
