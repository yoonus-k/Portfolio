const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  // Hero section typography
  heroHeadText:
    "font-sans font-extrabold text-5xl md:text-7xl text-white leading-tight tracking-tight",
  heroSubText:
    "font-mono text-lg md:text-2xl text-[#00CFFF]",

  // Section typography
  sectionHeadText:
    "font-sans font-black text-white md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] leading-tight tracking-tight",
  sectionSubText:
    "font-mono sm:text-[18px] text-[14px] text-[#00CFFF] uppercase tracking-wider",
    
  // Button styles with hover effects
  primaryButton:
    "relative overflow-hidden bg-transparent border-2 border-[#00CFFF] text-[#00CFFF] hover:bg-[#00CFFF] hover:text-[#18122B] font-mono px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 group",
  secondaryButton:
    "relative overflow-hidden bg-transparent border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#18122B] font-mono px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 group",
  
  // Badge styles
  badgeStyle:
    "inline-flex items-center px-4 py-2 bg-opacity-20 bg-[#00CFFF] backdrop-blur-sm rounded-full mb-6 border border-[#00CFFF] border-opacity-30",
  
  // Card styles
  cardStyle: 
    "bg-opacity-10 bg-white backdrop-blur-sm rounded-xl border border-white border-opacity-10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2",
    
  // Animation related styles
  gradientText:
    "bg-clip-text text-transparent bg-gradient-to-r from-[#00CFFF] to-[#915EFF]",
};

export { styles };
