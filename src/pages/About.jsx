import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/about_page.css';

import AboutHero from '../components/AboutHero';
import AboutWhoWeAre from '../components/AboutWhoWeAre';
import AkumsTraditions from '../components/AboutTradition';
import AboutNavigation from '../components/AboutNavigation';
import AboutMission from '../components/AboutMission';
import AboutWhatWeDo from '../components/AboutWhatWeDo';
import AboutSponsors from '../components/AboutSponsors';

function About() {
  return (
    <main className="about-page">
      <AboutHero />
      <AboutWhoWeAre />
      <AboutMission />
      <AboutWhatWeDo />
      <AkumsTraditions />
      <AboutNavigation />
      <AboutSponsors />
    </main>
  );
}

export default About;
