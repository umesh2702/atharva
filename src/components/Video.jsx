import React, { useEffect, useState } from 'react';
import '../CSS/Video.css'; // Import the CSS file
import Bv2 from '../images/BV2.mp4';

const Video = () => {
  const [words, setWords] = useState([
    { text: 'Build awesome apps with YourCompany.', className: 'text-blue-500 dark:text-blue-500'},
  ]);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true);
      setCharIndex((prevCharIndex) =>
        prevCharIndex === words[index].text.length - 1 ? prevCharIndex : prevCharIndex + 1
      );
    }, 100);

    return () => clearInterval(interval);
  }, [index, words]);

  useEffect(() => {
    if (charIndex === words[index].text.length - 1) {
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
          setCharIndex(0);
        }, 500);
      }, 2000);
    }
  }, [charIndex, index, words]);

  return (
    <div className="landing-page">
      <video autoPlay muted loop className="video-background">
        <source src={Bv2} type="video/mp4" />
      </video>
      <div className="content">
        <div className="typewriter-container text-white" style={{ textAlign: 'center' }}>
          <h1 className="text-4xl font-bold mb-6" style={{fontSize: 70}}>Welcome To ADSC</h1>
          <div className="typewriter">
            <span className={`animate-blink${isVisible ? ' opacity-100' : ' opacity-0'}`}>
              {words[index].text.slice(0, charIndex + 1)}
            </span>
          </div>
        </div>
        <div className="button-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm" style={{ borderRadius: 10, padding: 6, marginRight: 5 }}>
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm" style={{ borderRadius: 10, padding: 5, marginLeft: 5, paddingLeft: 9, paddingRight: 9 }}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
