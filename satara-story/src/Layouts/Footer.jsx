// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaBell,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-satara-dark text-gray-300 pt-12 pb-6 border-t-4 border-satara-red">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Column 1: About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-black text-white">
                <span className="text-satara-red">SATARA</span> STORY
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              "सत्याच्या शोधात" - सातारा जिल्ह्यासह महाराष्ट्र, देश आणि जगातील ताज्या, अचूक आणि विश्वासार्ह बातम्यांचे निर्भीड व्यासपीठ.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100067772194876"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/@satarastory6110"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-600 transition"
              >
                <FaYoutube />
              </a>
              <Link
                to="/instagram"
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </Link>
              <Link
                to="/whatsapp"
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500 transition"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>

          {/* Column 2: Important Sections */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              महत्त्वाचे विभाग
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/satara-district" className="hover:text-satara-red transition">
                  सातारा जिल्हा
                </Link>
              </li>
              <li>
                <Link to="/maharashtra" className="hover:text-satara-red transition">
                  महाराष्ट्र बातम्या
                </Link>
              </li>
              <li>
                <Link to="/politics" className="hover:text-satara-red transition">
                  राजकारण
                </Link>
              </li>
              <li>
                <Link to="/farming" className="hover:text-satara-red transition">
                  शेती आणि शिवार
                </Link>
              </li>
              <li>
                <Link to="/sports" className="hover:text-satara-red transition">
                  क्रीडा विश्व
                </Link>
              </li>
              <li>
                <Link to="/entertainment" className="hover:text-satara-red transition">
                  मनोरंजन
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: About Us */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              आमच्याबद्दल
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  संपर्क साधा (Contact)
                </Link>
              </li>
              <li>
                <Link to="/advertise" className="hover:text-white transition">
                  जाहिरात द्या (Advertise)
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition">
                  गोपनीयता धोरण (Privacy Policy)
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  अटी व शर्ती (Terms)
                </Link>
              </li>
              <li>
                <Link to="/epaper" className="hover:text-white transition text-satara-red font-semibold">
                  E-Paper Subscription
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Updates */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              अपडेट्स मिळवा
            </h4>
            <p className="text-xs text-gray-400 mb-3">
              आमच्या WhatsApp चॅनेलला जॉईन व्हा आणि मिळवा ताज्या बातम्या थेट तुमच्या मोबाईलवर.
            </p>
            <a
              href="https://whatsapp.com/channel/your-channel-id"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition mb-4"
            >
              <FaWhatsapp className="mr-2" /> Join WhatsApp Channel
            </a>
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border border-gray-600 transition flex items-center justify-center">
              <FaBell className="mr-2 text-yellow-500" /> Enable Notifications
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-6 text-center md:flex md:justify-between md:text-left text-xs text-gray-500">
          <p>© 2026 SATARA STORY. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed &amp; Developed as per Premium Standards</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;