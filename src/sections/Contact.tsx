import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { BiSend } from "react-icons/bi";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface FormFields {
  name: string;
  email: string;
  location: string;
  budget: string;
  subject: string;
  message: string;
  [key: string]: string;
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormFields>>({});

  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // error हटाओ अगर user टाइप कर रहा है
    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  const validateForm = () => {
    let newErrors: Partial<FormFields> = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return; // validation fail हुआ तो आगे मत जाओ

    setLoading(true);
    emailjs
      .send(
        "service_tuj6xbs",
        "template_x3l05mm",
        formData,
        "r-GcuH1D9zn5JW5Ov"
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            location: "",
            budget: "",
            subject: "",
            message: "",
          });
        },
        () => {
          alert("❌ Failed to send message. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="mx-auto md:px-10 px-6 py-12 sm:py-16">
      <div className="z-10 md:-mb-52 relative bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 sm:p-10 md:p-12 border border-slate-50 dark:border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-gray-900 mb-4">
              Let’s discuss your Project
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>

            <div className="space-y-6">
              {[
                /* Contact Cards */
                {
                  icon: <FaMapMarkerAlt />,
                  label: "Address:",
                  value: "Jinnah Town Tandoallahyar Sindh",
                },
                {
                  icon: <FaEnvelope />,
                  label: "My Email:",
                  value: "zainqaimi@gmail.com",
                },
                {
                  icon: <FaPhoneAlt />,
                  label: "Call Me Now:",
                  value: "0311-7271739",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 dark:hover:shadow-purple-100 dark:hover:shadow-sm rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-purple-500 text-white p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.label}
                    </p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* Social Icons */}
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  { icon: <FaWhatsapp />, link: "tel:03117271739" },
                  {
                    icon: <FaFacebook />,
                    link: "https://www.facebook.com/zain.qaimi.94",
                  },
                  { icon: <FaGithub />, link: "https://github.com/zainqaimi" },
                  {
                    icon: <FaLinkedin />,
                    link: "https://www.linkedin.com/in/zain-qaimi-8b35b8305/",
                  },
                  {
                    icon: <MdEmail />,
                    link: "mailto:zainqaimi@gmail.com",
                  },
                ].map(({ icon, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full text-purple-500 dark:text-purple-300 transition-all duration-300 hover:bg-purple-600 hover:text-white"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side (Form) */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 shadow-md rounded-md p-4 sm:p-6"
          >
            {/* Inputs */}
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "location", label: "Location", type: "text" },
            ].map(({ id, label, type }) => (
              <div key={id}>
                <div className="relative">
                  <input
                    type={type}
                    id={id}
                    value={formData[id]}
                    onChange={handleChange}
                    placeholder={label}
                    className={`peer w-full border-b ${
                      errors[id] ? "border-red-500" : "border-gray-300"
                    } bg-transparent text-gray-900 dark:text-white placeholder-transparent focus:border-purple-700 dark:focus:border-white focus:outline-none py-2`}
                  />
                  <label
                    htmlFor={id}
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all 
                      peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-14px] peer-focus:text-sm peer-focus:text-purple-700 dark:peer-focus:text-white"
                  >
                    {label} <span className="text-red-500">*</span>
                  </label>
                </div>
                {errors[id] && (
                  <p className="text-red-500 text-sm mt-1">{errors[id]}</p>
                )}
              </div>
            ))}

            {/* Budget + Subject Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: "budget", label: "Budget" },
                { id: "subject", label: "Subject" },
              ].map(({ id, label }) => (
                <div key={id}>
                  <div className="relative">
                    <input
                      type="text"
                      id={id}
                      value={formData[id]}
                      onChange={handleChange}
                      placeholder={label}
                      className={`peer w-full border-b ${
                        errors[id] ? "border-red-500" : "border-gray-300"
                      } bg-transparent text-gray-900 dark:text-white placeholder-transparent focus:border-purple-700 dark:focus:border-white focus:outline-none py-2`}
                    />
                    <label
                      htmlFor={id}
                      className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all 
                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-14px] peer-focus:text-sm peer-focus:text-purple-700 dark:peer-focus:text-white"
                    >
                      {label} <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {errors[id] && (
                    <p className="text-red-500 text-sm mt-1">{errors[id]}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Message */}
            <div>
              <div className="relative">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className={`peer w-full border-b ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } bg-transparent text-gray-900 dark:text-white placeholder-transparent focus:border-purple-700 dark:focus:border-white focus:outline-none py-2 resize-none`}
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-14px] peer-focus:text-sm peer-focus:text-purple-700 dark:peer-focus:text-white"
                >
                  Message <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 bg-purple-500 text-white px-6 py-2 rounded-md shadow hover:bg-purple-600 transition w-full sm:w-auto"
            >
              {loading ? "Sending..." : "Submit"} <BiSend className="text-xl" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
