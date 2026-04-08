interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button = ({ label, variant, onClick, type = 'button' }: ButtonProps) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300 active:scale-95 text-sm uppercase tracking-widest";
  
  const variants = {
    primary: "bg-[#4A0E4E] text-white hover:bg-[#3A0B3D] shadow-lg shadow-[#4A0E4E]/20",
    secondary: "bg-[#C3B1E1] text-[#4A0E4E] hover:bg-[#B3A1D1]",
    outline: "border-2 border-[#4A0E4E] text-[#4A0E4E] hover:bg-[#4A0E4E] hover:text-white"
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {label}
    </button>
  );
};

export default Button;