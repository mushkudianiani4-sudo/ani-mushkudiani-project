import Section from "./Section";

const reviews = [
  {
    id: 1,
    name: "მარიამ ბ.",
    rating: 5,
    text: "საუკეთესო კრუასანები მთელ ქალაქში! ატმოსფერო საოცრად მყუდროა.",
  },
  {
    id: 2,
    name: "გიორგი მ.",
    rating: 5,
    text: "Moon ლატე უბრალოდ ხელოვნებაა. მომსახურება ყოველთვის უმაღლეს დონეზეა.",
  },
  {
    id: 3,
    name: "სალომე ქ.",
    rating: 5,
    text: "შესანიშნავი ადგილი სამუშაოდ და მეგობრებთან შესახვედრად. გირჩევთ!",
  },
];

const Testimonials = () => {
  return (
    <Section title="რას ამბობენ ჩვენზე" subtitle="ჩვენი კმაყოფილი სტუმრების შეფასებები">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group"
          >
            <div className="absolute -top-5 right-8 text-7xl text-orange-100 dark:text-gray-700 font-serif leading-none group-hover:text-orange-200 dark:group-hover:text-gray-600 transition-colors">
              "
            </div>
            <div className="flex text-orange-400 mb-4 mt-2 relative z-10">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed relative z-10">
              {review.text}
            </p>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center font-bold text-lg">
                {review.name[0]}
              </div>
              <span className="font-bold text-gray-800 dark:text-white">{review.name}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
