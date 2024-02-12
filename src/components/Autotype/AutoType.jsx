import React, { useEffect, useState } from 'react';
import './AutoTypeParagraph.scss'
const Typewriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p>{displayText}</p>;
};

const AutoType = () => {
  return (
    <div className='Autotype'>
      <div className='Type'>
      <Typewriter   text="Heello I'm Shireen Ansari, a recent computer science graduate deeply passionate about crafting user-friendly websites. Specializing in Web Development since 2022, my projects reflect a seamless blend of creativity and precision. With a keen eye for detail, I offer a commitment to high-quality solutions that prioritize an intuitive user experience. Experienced and ready to collaborate, I'm excited to discuss how my skills can contribute to your team's success! Feel free to explore my portfolio to see the results of my dedication."

       speed={40} />
      </div>
      <img src='/about.png'/>
    </div>
  );
};

export default AutoType;
