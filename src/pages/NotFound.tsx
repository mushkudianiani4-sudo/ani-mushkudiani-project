import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-9xl font-bold text-orange-600">404</h1>
      <h2 className="text-3xl font-semibold mt-4 text-gray-800 dark:text-white">
        უი! გვერდი ვერ მოიძებნა
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2 mb-8">
        როგორც ჩანს, ეს მისამართი ჩვენს მენიუში არ არის.
      </p>
      <Link
        to="/"
        className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-all shadow-lg"
      >
        დაბრუნდი მთავარზე
      </Link>
    </div>
  );
};

export default NotFound;
