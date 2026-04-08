const Badge = ({ text }: { text: string }) => (
  <span className="bg-[#C3B1E1]/20 text-[#4A0E4E] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#C3B1E1]/30">
    {text}
  </span>
);

export default Badge;