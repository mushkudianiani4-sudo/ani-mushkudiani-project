// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'filled' | 'outline';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'filled', onClick }) => {
  const baseClasses = "px-8 py-3 rounded-full font-bold transition-all duration-300 uppercase tracking-wider text-sm";
  const filledClasses = "bg-[#3F2F24] text-[#E8D9CE] hover:bg-[#2F241B] shadow-lg shadow-[#3F2F24]/20";
  const outlineClasses = "border-2 border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-[#3F2F24]";

  return (
    <button
      className={`${baseClasses} ${variant === 'filled' ? filledClasses : outlineClasses}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;