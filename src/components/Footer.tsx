import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaImages,
  FaBlog,
  FaAddressCard,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Contact Info Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Let's discuss your Project
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-700 dark:text-gray-300">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Address:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    New Mexico 31134
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-700 dark:text-gray-300">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    My Email:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    mymail@mail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-700 dark:text-gray-300">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Call Me Now:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    00-1234 00000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-2">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-900 dark:text-white"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-900 dark:text-white"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="location"
                  className="block font-medium text-gray-900 dark:text-white"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="budget"
                  className="block font-medium text-gray-900 dark:text-white"
                >
                  Budget*
                </label>
                <input
                  type="text"
                  id="budget"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label
                  htmlFor="subject"
                  className="block font-medium text-gray-900 dark:text-white"
                >
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label
                  htmlFor="message"
                  className="block font-medium text-gray-900 dark:text-white"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
                >
                  <FaPaperPlane /> Submit
                </button>
              </div>
            </form>
          </div>

          {/* Additional Info Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              B Brooklyn
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
        </div>

        {/* Navigation and Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-12">
          <nav className="flex flex-wrap justify-center gap-8 mb-10">
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg"
            >
              <FaHome className="text-blue-500" /> Home
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg"
            >
              <FaUser className="text-blue-500" /> About
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg"
            >
              <FaTools className="text-blue-500" /> Services
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg"
            >
              <FaProjectDiagram className="text-blue-500" /> Process
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg"
            >
              <FaImages className="text-blue-500" /> Portfolio
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg"
            >
              <FaBlog className="text-blue-500" /> Blog
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg"
            >
              <FaAddressCard className="text-blue-500" /> Contact
            </a>
          </nav>

          <div className="text-center text-gray-500 dark:text-gray-400 text-lg">
            <p>
              Copyright © {new Date().getFullYear()} Pisto. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
