import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import FoundingStory from '../routes/Founding_story_and_team';
import Whoweare from '../routes/whoweare';
import OurValues from '../routes/OurValues';
import Services from '../routes/Services';
import AbiSearch from '../routes/AbiSearch';
import DcQrScanner from '../routes/DcQrScanner';
import Vas from '../routes/Vas';
import UserCentricApproach from '../routes/UserCentricApproach';
import HowToUse from '../routes/HowToUse';
import More from '../routes/More';
import StartupMission from '../routes/StartupMission';
import InnovationAndTechnology from '../routes/Innovation_and_technology';
import MarketDifferentiation from '../routes/Market_differentiation';
import Contactus from '../routes/Contactus';
import Layout from './Layout'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="founding_story_and_team" element={<FoundingStory />} />
          <Route path="who-we-are" element={<Whoweare />} />
          <Route path="our-values" element={<OurValues />} />
          <Route path="services" element={<Services />} />
          <Route path="abi" element={<AbiSearch />} />
          <Route path="dcqr" element={<DcQrScanner />} />
          <Route path="vas" element={<Vas />} />
          <Route path="user_centric_approach" element={<UserCentricApproach />} />
          <Route path="How_to_use" element={<HowToUse />} />
          <Route path="more" element={<More />} />
          <Route path="startup_mission" element={<StartupMission />} />
          <Route path="innovation_and_technology" element={<InnovationAndTechnology />} />
          <Route path="market_differentiation" element={<MarketDifferentiation />} />
          <Route path="contact_us" element={<Contactus />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
