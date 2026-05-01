import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=60"
          alt="Cafe Interior"
          className="w-full h-full object-cover"
          fetchPriority="high"
          width="1200"
          height="800"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          კეთილი იყოს შენი მობრძანება{" "}
          <span className="text-orange-500">Cafe Moon</span>-ში
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
          აღმოაჩინე გემრიელი ყავა და მყუდრო გარემო ქუთაისის გულში.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button label="ნახე მენიუ" variant="primary" />
          <Button label="დაგვიკავშირდი" variant="outline" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
