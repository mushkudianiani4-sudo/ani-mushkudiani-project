import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Section from "../components/Section";

const Contact = () => {
  useEffect(() => {
    document.title = "კონტაქტი | Cafe Moon";
  }, []);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("სახელი სავალდებულოა"),
      email: Yup.string()
        .email("არასწორი ელ-ფოსტა")
        .required("ელ-ფოსტა სავალდებულოა"),
      message: Yup.string()
        .min(10, "მინ. 10 სიმბოლო")
        .required("შეტყობინება სავალდებულოა"),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert("შეტყობინება გაიგზავნა წარმატებით!");
      formik.resetForm();
    },
  });

  return (
    <Section
      title="დაგვიკავშირდით"
      subtitle="გვესტუმრეთ ქუთაისის გულში, თეთრ ხიდთან"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-orange-100 dark:border-gray-700 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 italic">
              მისამართი
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              ქუთაისი, პუშკინის ქუჩა #5 <br />
              (თეთრი ხიდის მიმდებარედ)
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-orange-100 dark:border-gray-700 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 italic">
              კონტაქტი
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">📞 +995 555 555 555</p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">📧 hello@cafemoon.ge</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-orange-100 dark:border-gray-700 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 italic">
              სამუშაო საათები
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
              ყოველდღე: 09:00 - 23:00
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-50 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 italic">
            მოგვწერეთ
          </h3>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <input
                aria-label="თქვენი სახელი"
                placeholder="თქვენი სახელი"
                className={`w-full p-4 bg-gray-50 dark:bg-gray-700 dark:text-white rounded-2xl outline-none focus:ring-2 text-sm md:text-base transition-all ${formik.touched.name && formik.errors.name ? "ring-2 ring-red-500 bg-red-50 dark:bg-red-900/30" : "focus:ring-orange-500"}`}
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm mt-1 ml-2 font-medium">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>

            <div>
              <input
                aria-label="თქვენი ელ-ფოსტა"
                placeholder="თქვენი ელ-ფოსტა"
                className={`w-full p-4 bg-gray-50 dark:bg-gray-700 dark:text-white rounded-2xl outline-none focus:ring-2 text-sm md:text-base transition-all ${formik.touched.email && formik.errors.email ? "ring-2 ring-red-500 bg-red-50 dark:bg-red-900/30" : "focus:ring-orange-500"}`}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm mt-1 ml-2 font-medium">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div>
              <textarea
                aria-label="თქვენი შეტყობინება"
                placeholder="თქვენი შეტყობინება"
                className={`w-full p-4 bg-gray-50 dark:bg-gray-700 dark:text-white rounded-2xl h-32 outline-none focus:ring-2 resize-none text-sm md:text-base transition-all ${formik.touched.message && formik.errors.message ? "ring-2 ring-red-500 bg-red-50 dark:bg-red-900/30" : "focus:ring-orange-500"}`}
                {...formik.getFieldProps("message")}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-sm mt-1 ml-2 font-medium">
                  {formik.errors.message}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-700 active:scale-95 transition-all duration-300"
            >
              გაგზავნა
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 w-full h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-orange-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.3946445579997!2d42.703410315438514!3d42.27041597919313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8cf3500c50d5%3A0x6334520932822f36!2sWhite%20Bridge!5e0!3m2!1sen!2sge!4v1713251200000!5m2!1sen!2sge"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Cafe Moon — ქუთაისი, თეთრი ხიდი"
        ></iframe>
      </div>
    </Section>
  );
};

export default Contact;
