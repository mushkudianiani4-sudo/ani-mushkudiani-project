import { ReactNode } from 'react';

// ლოკალური ტიპი, რომ იმპორტმა არ აწითლოს
interface SectionProps {
  title: string;      // სექციის მთავარი სათაური
  subtitle?: string;  // სექციის ქვესათაური (არააუცილებელი)
  children: ReactNode; // სექციის შიგთავსი
}

const Section = ({ title, subtitle, children }: SectionProps) => {
  return (
    <section className="py-16 px-6 container mx-auto">
      {/* სექციის სათაურის ბლოკი */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 italic">
          {title}
        </h2>
        
        {/* თუ ქვესათაური არსებობს, მხოლოდ მაშინ გამოჩნდეს */}
        {subtitle && (
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        )}
      </div>

      {/* აქ ჩაჯდება ის კონტენტი, რომელსაც სექციაში მოათავსებ */}
      <div className="w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;