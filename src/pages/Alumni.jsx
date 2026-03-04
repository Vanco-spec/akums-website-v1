import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import AlumniHero from "../components/AlumniHero";
import AlumniComingSoon from "../components/AlumniComingSoon";
import AlumniEngagement from '../components/AlumniEngagement';
import AlumniUpdates from '../components/AlumniUpdates';
import AlumniRecruit from '../components/AlumniRecruit';

function Alumni() {
  return (
    <>
      <AlumniHero />
      <AlumniComingSoon />
      <AlumniRecruit />
      <AlumniEngagement />
    </>
  );
}

export default Alumni