import React from 'react'
import atharvalogo from '../images/atharva logo.png'

function Descript() {
  return (
<section className="mt-5" style={{color:'white'}}>
      <div className="container">
        <div className="row">
        <div className="col-md-6" >
            <div className="right-content" style={{ borderRadius:'10%'}}>
              {/* Insert your image here */}
              <img src={atharvalogo} alt="mage" className="img-fluid" />
            </div>
          </div>

          <div className="col-md-6" style={{}} >
            <div className="left-content" >
              <div className="">
              <p style={{
  padding: '10px',
  fontSize: '3rem',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Sacramento', 
  /* color: rgb(8, 36, 61); */
  backgroundImage: 'linear-gradient(to right, #F25A3C, #c46218, #f95220)',
  WebkitBackgroundClip: 'text', /* Apply the gradient as a clip to the text */
  WebkitTextFillColor: 'transparent', /* Make the text transparent */
  fontWeight: 'bold',
}}>
 ADSC welcomes you
</p>               
 <p style={{fontSize:'1.2rem'}}>Atharva Data Science Community emerged as a group of passionate students from the department of CSE-Data Science at Malla Reddy Engineering College who are determined to make a positive impact in the world of technology. Our enthusiasm for learning and our unwavering dedication to sharing our knowledge is truly inspiring. By creating a platform for individuals to explore and deepen their understanding of Data Science, we are empowering the next generation of innovators and creators. Atharva Data Science Community is a testament to what can be accomplished when we, the driven individuals come together sharing a purpose. We are not just shaping our own future, but also of the future endeavors of the tech industry as a whole.</p>
              
                </div>
            </div>
          </div>

          
        </div>
      </div>
      </section>  )
}

export default Descript