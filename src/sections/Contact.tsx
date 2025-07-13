import { motion } from "framer-motion";
import { BiSend } from "react-icons/bi";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaBehance,
  FaTelegramPlane,
} from "react-icons/fa";
export default function Contact() {
  return (
    <section id="contact" className="mx-auto px-5 py-16">
      <div className="relative md:-mb-52 bg-white dark:bg-gray-900 shadow-md rounded-lg p-12  border border-slate-50 dark:border-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900 mb-4">
              Let’s discuss your Project
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alte.
            </p>

            <div className="space-y-6">
              {/* Address Card */}
              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 dark:hover:shadow-purple-100 dark:hover:shadow-sm rounded-lg shadow-md hover:shadow-lg  transition-shadow duration-300">
                <div className="bg-purple-500 text-white p-3 rounded-full">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Address:
                  </p>
                  <p className="font-medium text-gray-800 dark:text-white">
                    New Mexico 31134
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-center space-x-4 p-4 bg-white dark:hover:shadow-purple-100 dark:hover:shadow-sm dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 p-3 rounded-full">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    My Email:
                  </p>
                  <p className="font-medium text-gray-800 dark:text-white">
                    mymail@mail.com
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-center space-x-4 p-4 bg-white dark:hover:shadow-purple-100 dark:hover:shadow-sm dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 p-3 rounded-full">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Call Me Now:
                  </p>
                  <p className="font-medium text-gray-800 dark:text-white">
                    00-1234 00000
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-6">
                {[
                  {
                    icon: <FaTelegramPlane />,
                    link: "https://t.me/yourusername",
                  },
                  {
                    icon: <FaFacebook />,
                    link: "https://facebook.com/yourprofile",
                  },
                  {
                    icon: <FaInstagram />,
                    link: "https://instagram.com/yourhandle",
                  },
                  {
                    icon: <FaBehance />,
                    link: "https://behance.net/yourprofile",
                  },
                  {
                    icon: <FaLinkedin />,
                    link: "https://linkedin.com/in/yourprofile",
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

          {/* Right Side */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 shadow-md rounded-md p-6"
          >
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer w-full border-b border-gray-300 bg-transparent text-gray-900 dark:text-white placeholder-transparent focus:border-purple-700 dark:focus:border-white focus:outline-none py-2"
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all 
      peer-placeholder-shown:top-2 
      peer-placeholder-shown:text-base 
      peer-placeholder-shown:text-gray-400 
      peer-focus:top-[-14px] 
      peer-focus:text-sm 
      peer-focus:text-purple-700
            dark:peer-focus:text-white"
              >
                Name <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer w-full border-b border-gray-300 bg-transparent text-gray-900 dark:focus:border-white dark:text-white placeholder-transparent focus:border-purple-700 focus:outline-none py-2"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all 
      peer-placeholder-shown:top-2 
      peer-placeholder-shown:text-base 
      peer-placeholder-shown:text-gray-400 
      peer-focus:top-[-14px] 
      peer-focus:text-sm 
      peer-focus:text-purple-700
            dark:peer-focus:text-white"
              >
                Email <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Location */}
            <div className="relative">
              <input
                type="text"
                id="location"
                className="peer w-full border-b border-gray-300 bg-transparent dark:focus:border-white text-gray-900 dark:text-white placeholder-transparent focus:border-purple-700 focus:outline-none py-2"
                placeholder="Location"
              />
              <label
                htmlFor="location"
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all 
      peer-placeholder-shown:top-2 
      peer-placeholder-shown:text-base 
      peer-placeholder-shown:text-gray-400 
      peer-focus:top-[-14px] 
      peer-focus:text-sm 
      peer-focus:text-purple-700
            dark:peer-focus:text-white"
              >
                Location <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Budget + Subject */}
            <div className="grid grid-cols-2 gap-4">
              {/* Budget */}
              <div className="relative">
                <input
                  type="text"
                  id="budget"
                  className="peer w-full border-b border-gray-300 bg-transparent text-gray-900 dark:text-white placeholder-transparent dark:focus:border-white focus:border-purple-700 focus:outline-none py-2"
                  placeholder="Budget"
                />
                <label
                  htmlFor="budget"
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-2 
        peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-400 
        peer-focus:top-[-14px] 
        peer-focus:text-sm 
        peer-focus:text-purple-700
              dark:peer-focus:text-white"
                >
                  Budget <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Subject */}
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  className="peer w-full border-b border-gray-300 bg-transparent text-gray-900 dark:text-white placeholder-transparent dark:focus:border-white focus:border-purple-700 focus:outline-none py-2"
                  placeholder="Subject"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-2 
        peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-400 
        peer-focus:top-[-14px] 
        peer-focus:text-sm 
        peer-focus:text-purple-700
              dark:peer-focus:text-white"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                placeholder="Message"
                className="peer w-full border-b border-gray-300 bg-transparent text-gray-900 dark:text-white placeholder-transparent dark:focus:border-white focus:border-purple-700 focus:outline-none py-2 resize-none"
                rows={4}
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all 
      peer-placeholder-shown:top-2 
      peer-placeholder-shown:text-base 
      peer-placeholder-shown:text-gray-400 
      peer-focus:top-[-14px] 
      peer-focus:text-sm 
      peer-focus:text-purple-700
            dark:peer-focus:text-white"
              >
                Message <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Submit Button */}
            <button className="flex items-center gap-2 bg-purple-500 text-white px-6 py-2 rounded-md shadow hover:bg-purple-600 transition">
              Submit <BiSend className="text-xl" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
