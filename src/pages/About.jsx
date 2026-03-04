import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import AboutHero from '../components/AboutHero';
import AboutWhoWeAre from '../components/AboutWhoWeAre';
import AkumsTraditions from '../components/AboutTradition';
import AboutNavigation from '../components/AboutNavigation';
import AboutMission from '../components/AboutMission';
import AboutWhatWeDo from '../components/AboutWhatWeDo';
import AboutConnect from '../components/AboutConnent';
import AboutSponsors from '../components/AboutSponsors';

function About() {
  return (
    <>
      <AboutHero />
      <AboutWhoWeAre />
      <AboutMission />
      <AboutWhatWeDo />
      <AboutNavigation />
      <AkumsTraditions />
      <AboutSponsors />
              
    </>
  );
}

export default About