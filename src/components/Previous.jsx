import React from 'react';
import image from '../images/inaug.JPG';
import image1 from '../images/2k22.png';
import image2 from '../images/sql4.JPG';

function Previous() {
  const events = [
    { title: "Inaugaration", image: image },
    { title: "Orientation", image: image1 },
    { title: "SQL Unleashed", image: image2 }
  ];

  return (
    <div>
      <div className="mt-5">
        <h2 className="text-center" style={{color:'#F25A3C'}}>Our Events</h2>
        <div className="row justify-content-center" style={{ width: '90%', marginLeft: '5%' }} data-aos="fade-left" data-aos-duration="2000">
          {events.map((event, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img src={event.image} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Previous;
