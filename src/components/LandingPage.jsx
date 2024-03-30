import {React, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import AOS from 'aos';
import 'aos/dist/aos.css';
import Content from './Content';
import Carousel from './Carousel';
import Descript from './Descript';
import Previous from './Previous';
import { Link } from 'react-router-dom';
 
const Landingpage = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (

    <div >    
       <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="container-fluid p-0" style={{ overflow: 'hidden' }}> 

        <Carousel/>
        
        <Descript/>

        <Content/>

        <Previous/>       

        <Link to="/events" style={{ textDecoration: 'none', color: 'inherit' }}>
          <p style={{ textAlign: 'center', fontSize: '25px', cursor: 'pointer', color:'#F25A3C' }}>SEE MORE <span style={{ fontSize: '30px',  }}>&rarr;</span></p>
        </Link>        
      </div>
    </div>
    
  );
};

export default Landingpage;
