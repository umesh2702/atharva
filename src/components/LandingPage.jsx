import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import AOS from 'aos';
import 'aos/dist/aos.css';
import Content from './Content';
import Carousel from './Carousel';
import Descript from './Descript';
import Previous from './Previous';
import { Link } from 'react-router-dom';
import Video from './Video';
import AdvancedBannerTop from './AdvancedBannerTop';

const Landingpage = ({ Login }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="container-fluid p-0" style={{ overflow: 'hidden' }}>
        <Video />
        <AdvancedBannerTop />
        <Descript />
        <Carousel />
        <Content />
        <Previous />
        {Login ? (
          <Link to="/events" style={{ textDecoration: 'none' }}>
            <p style={{ textAlign: 'center', fontSize: '25px', cursor: 'pointer', color: '#F25A3C' }}>
              SEE MORE <span style={{ fontSize: '30px' }}>&rarr;</span>
            </p>
          </Link>
        ) : (
          <p style={{ textAlign: 'center', fontSize: '25px', cursor: 'pointer', color: '#F25A3C', textDecoration: 'none' }} onClick={() => alert('Login Required')}>
            SEE MORE <span style={{ fontSize: '30px' }}>&rarr;</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Landingpage;
