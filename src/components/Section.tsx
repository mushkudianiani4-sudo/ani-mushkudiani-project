import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const Section = ({ title, subtitle, children }: SectionProps) => {
  return (
    <section className="py-16 px-6 container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 italic">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        )}
      </div>
      <div className="w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;