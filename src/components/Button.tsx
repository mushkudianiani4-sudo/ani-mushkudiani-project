interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit';
}

const Button = ({ label, onClick, variant = 'primary', type = 'button' }: ButtonProps) => {
  const baseStyles = "px-6 py-2 rounded-full font-medium transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-orange-600 text-white hover:bg-orange-700 shadow-md hover:shadow-lg",
    secondary: "bg-gray-800 text-white hover:bg-gray-900",
    outline: "border-2 border-orange-600 text-orange-600 hover:bg-orange-50"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;