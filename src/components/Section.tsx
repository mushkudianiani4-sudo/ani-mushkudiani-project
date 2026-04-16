import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  bgGray?: boolean;
}

const Section = ({ title, subtitle, children, bgGray = false }: SectionProps) => {
  return (
    <section className={`py-20 px-6 ${bgGray ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
