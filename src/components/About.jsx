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
      className="w-full p-[1px] rounded-xl shadow-[0_8px_32px_rgba(0,207,255,0.1),0_16px_64px_rgba(0,0,0,0.3)]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-gradient-to-br from-[#0A0A0F]/90 via-[#18122B]/80 to-[#0A0A0F]/90 backdrop-blur-sm border-2 border-[#00CFFF] border-opacity-20 rounded-xl py-10 px-8 min-h-[280px] flex justify-evenly items-center flex-col group hover:-translate-y-3 hover:border-opacity-50 transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,207,255,0.25),0_20px_80px_rgba(0,0,0,0.4)]"
      >
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#00CFFF]/10 to-[#915EFF]/10 border-4 border-[#FFD700] shadow-[0_4px_20px_rgba(255,215,0,0.3)] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />
        </div>

        <h3 className="text-white text-xl font-bold font-['Inter'] text-center tracking-wide">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <div className={`${styles.badgeStyle} inline-flex mx-auto mb-4`}>
          <span className="text-[#00CFFF] text-sm font-medium font-['Inter']">What I Do</span>
        </div>
        <h2 className={`${styles.sectionHeadText}`}>Services</h2>
        <div className="flex items-center justify-center mt-4 mb-6">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#00CFFF] to-transparent mx-2"></div>
        </div>
      </motion.div>
      
      <div className="w-full flex justify-center mb-8">
        <p className="text-[#b0b0b0] text-base md:text-lg font-['Inter'] max-w-2xl text-center leading-relaxed">
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
