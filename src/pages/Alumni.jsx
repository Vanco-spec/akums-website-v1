import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/alumni_page.css';

import { motion } from 'framer-motion';

import AlumniHero from "../components/AlumniHero";
import AlumniComingSoon from "../components/AlumniComingSoon";
import AlumniRecruit from '../components/AlumniRecruit';
import AlumniEngagement from '../components/AlumniEngagement';
import AlumniFinalCta from '../components/AlumniFinalCta';

function Alumni() {
  return (
    <main className="alumni-page">
      <AlumniHero />
      <AlumniComingSoon />
      <AlumniRecruit />
      <AlumniEngagement />
      <AlumniFinalCta />

      <motion.a
        href="#apply"
        className="floating-cta d-none d-md-flex align-items-center justify-content-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <i className="bi bi-person-plus-fill me-2"></i>
        Join Alumni
      </motion.a>
    </main>
  );
}

export default Alumni;
