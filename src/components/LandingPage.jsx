import {React, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import image from '../images/1.png'
import image1 from '../images/2.png'
import image2 from '../images/3.png'
import atharvalogo from '../images/atharva logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Content from './Content';
import Carousel from './Carousel';
 
const Landingpage = () => {
  const events = [image,image1,image2]; // Previous events array

  
  // Carousel interval/*style={{background: 'linear-gradient(135deg, #F25A3C, #EF8535 70%)', minHeight: '100vh', padding: '20px'}}
  useEffect(() => {
    AOS.init();
  }, [])


  return (

    <div >    
 
      {/* Meta tags for responsive design */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="container-fluid p-0" style={{ overflow: 'hidden' }}> {/* Hide scroll bar */}

          <Carousel/>
        
        {/* Description */}
        <section className="mt-5">
      <div className="container">
        <div className="row">
        <div className="col-md-6" >
            <div className="right-content" style={{ borderRadius:'10%'}}>
              {/* Insert your image here */}
              <img src={atharvalogo} alt="mage" className="img-fluid" />
            </div>
          </div>
          {/* Left column for text */}
          <div className="col-md-6" style={{backgroundColor:'#FF7F40', borderRadius:'10%'}} data-aos="zoom-in" data-aos-duration="3000">
            <div className="left-content" >
              <h2 className="text-center">About Us</h2>
              <div className="text-center">
                <p>Welcome to ATHARVA DATASCIENCE COMMUNITY.</p>
                <p>Atharva Data Science Community emerged as a group of passionate students from the department of CSE-Data Science at Malla Reddy Engineering College who are determined to make a positive impact in the world of technology. Our enthusiasm for learning and our unwavering dedication to sharing our knowledge is truly inspiring. By creating a platform for individuals to explore and deepen their understanding of Data Science, we are empowering the next generation of innovators and creators. Atharva Data Science Community is a testament to what can be accomplished when we, the driven individuals come together sharing a purpose. We are not just shaping our own future, but also of the future endeavors of the tech industry as a whole.</p>
                <p>Atharva Data Science Community emerged as a group of passionate students from the department of CSE-Data Science at Malla Reddy Engineering College who are determined to make a positive impact in the world of technology. Our enthusiasm for learning and our unwavering dedication to sharing our knowledge is truly inspiring. By creating a platform for individuals to explore and deepen their understanding of Data Science, we are empowering the next generation of innovators and creators. Atharva Data Science Community is a testament to what can be accomplished when we, the driven individuals come together sharing a purpose. We are not just shaping our own future, but also of the future endeavors of the tech industry as a whole.</p>
              
                </div>
            </div>
          </div>

          {/* Right column for image */}
          
        </div>
      </div>
      </section>
<Content/>

        {/* Previous Events */}
        <div >
          
        <div className="mt-5"  >
          <h2 className="text-center">Previous Events</h2>
          <div className="d-flex justify-content-between"  style={{width:'90%', marginLeft:'5%',}} data-aos="fade-left" data-aos-duration="2000">
            {events.map((event, index) => (
              <div key={index} className="card" style={{ width: '22rem' }}  >
                <div className="card-body" >
                  <img src={event} alt="" style={{ width: '100%' }}/>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
    
  );
};

export default Landingpage;
