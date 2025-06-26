import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-lg shadow-xl"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-transparent backdrop-blur-sm border-2 border-[#00CFFF] border-opacity-30 rounded-lg py-8 px-12 min-h-[280px] flex justify-evenly items-center flex-col group hover:-translate-y-2 transition-all duration-300"
      >
        <div className="w-24 h-24 rounded-full bg-[#18122B] border-4 border-[#FFD700] shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
          <img src={icon} alt="web-development" className="w-14 h-14 object-contain" loading="lazy" />
        </div>

        <h3 className="text-white text-xl font-bold font-mono text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <div className={`${styles.badgeStyle} inline-flex mx-auto mb-4`}>
          <span className="text-[#00CFFF] text-sm font-medium font-mono">What I Do</span>
        </div>
        <h2 className={`${styles.sectionHeadText}`}>Services</h2>
        <div className="flex items-center justify-center mt-4 mb-6">
          <div className="w-12 h-1 bg-[#00CFFF] mx-2"></div>
        </div>
      </motion.div>
      
      <div className="w-full flex justify-center mb-8">
        <p className="text-[#b0b0b0] text-base md:text-lg font-mono max-w-2xl text-center leading-relaxed">
          I offer a wide range of technical services to help businesses succeed in the digital world, 
          leveraging cutting-edge technologies for optimal solutions.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
