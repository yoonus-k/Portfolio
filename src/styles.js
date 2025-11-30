const styles = {
  paddingX: "sm:px-20 px-8",
  paddingY: "sm:py-20 py-8",
  padding: "sm:px-20 px-8 sm:py-20 py-12",

  // Hero section typography - Using Space Grotesk for modern premium feel
  heroHeadText:
    "font-['Space_Grotesk'] font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight",
  heroSubText:
    "font-['Inter'] text-lg md:text-xl text-[#00CFFF] font-medium",

  // Section typography - Using Inter for clean professional look
  sectionHeadText:
    "font-['Space_Grotesk'] font-bold text-white md:text-[56px] sm:text-[48px] xs:text-[40px] text-[32px] leading-[1.2] tracking-tight",
  sectionSubText:
    "font-['Inter'] sm:text-[16px] text-[14px] text-[#00CFFF] uppercase tracking-[0.2em] font-semibold",
    
  // Button styles with enhanced premium effects
  primaryButton:
    "relative overflow-hidden bg-gradient-to-r from-[#00CFFF]/10 to-transparent border-2 border-[#00CFFF] text-[#00CFFF] hover:from-[#00CFFF] hover:to-[#00CFFF]/90 hover:text-[#0A0A0F] hover:border-[#00CFFF] font-['Inter'] px-10 py-3.5 rounded-xl text-base font-semibold shadow-[0_4px_20px_rgba(0,207,255,0.15)] hover:shadow-[0_8px_30px_rgba(0,207,255,0.35)] transition-all duration-300 group backdrop-blur-sm",
  secondaryButton:
    "relative overflow-hidden bg-gradient-to-r from-[#FFD700]/10 to-transparent border-2 border-[#FFD700] text-[#FFD700] hover:from-[#FFD700] hover:to-[#FFD700]/90 hover:text-[#0A0A0F] hover:border-[#FFD700] font-['Inter'] px-10 py-3.5 rounded-xl text-base font-semibold shadow-[0_4px_20px_rgba(255,215,0,0.15)] hover:shadow-[0_8px_30px_rgba(255,215,0,0.35)] transition-all duration-300 group backdrop-blur-sm",
  
  // Badge styles with premium subtle effects
  badgeStyle:
    "inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#00CFFF]/10 to-[#00CFFF]/5 backdrop-blur-md rounded-full mb-8 border border-[#00CFFF]/40 shadow-[0_2px_10px_rgba(0,207,255,0.1)]",
  
  // Card styles with multi-layer shadows and refined borders
  cardStyle: 
    "bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12),0_4px_12px_rgba(145,94,255,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2),0_8px_24px_rgba(145,94,255,0.15)] transition-all duration-500 hover:-translate-y-3 hover:border-white/20",
    
  // Animation related styles
  gradientText:
    "bg-clip-text text-transparent bg-gradient-to-r from-[#00CFFF] to-[#915EFF]",
};

export { styles };
