import React from 'react';
import { Link } from 'react-router-dom';
import {
  GoHomeFill,
  GoCalendar,
  GoCloud,
} from "react-icons/go";
import { FaNewspaper, FaLandmark, FaMapMarkerAlt, FaTractor, FaChartLine, FaFutbol, FaFilm, FaCamera, FaBars, FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";

function Header() {
  return (
    <>
      {/* ================= STICKY WRAPPER ================= */}
      <div className="sticky top-0 z-50 shadow-sm">

        {/* Top Bar */}
        <div className="bg-gray-100 border-b border-gray-200 text-sm hidden md:block">
          <div className="container mx-auto px-4 py-1 flex justify-between items-center">
            <div className="flex items-center space-x-4 text-gray-600">
              <span className="flex items-center gap-1">
                <GoCalendar /> बुधवार, २३ सप्टेंबर २०२६
              </span>
              <span className="flex items-center gap-1">
                <GoCloud /> सातारा: 28°C
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/epaper" className="text-satara-red  font-semibold flex items-center gap-1">
                <FaNewspaper /> E-Paper
              </Link>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/profile.php?id=100067772194876" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaFacebookF />
                </a>
                <a href="https://www.youtube.com/@satarastory6110" target="_blank" rel="noreferrer" className="text-red-600 hover:text-red-800">
                  <FaYoutube />
                </a>
                <Link to="/instagram-account" className="text-pink-600 hover:text-pink-800">
                  <FaInstagram />
                </Link>
                <Link to="whatsapp" className="text-green-500 hover:text-green-700">
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className="bg-white py-4">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <div className="flex items-center">
                <img
                  src="https://placehold.co/100x100/8B4513/FFFFFF?text=Mudrika"
                  alt="Shivmudra"
                  className="h-16 w-16 mr-2 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <div className="flex items-center text-4xl font-black tracking-tight">
                    <span className="text-satara-red uppercase">Satara</span>
                    <span className="text-satara-dark mx-2 flex items-center">
                      <FaPenNib size={32} className="mt-1" />
                    </span>
                    <span className="text-satara-blue uppercase">Story</span>
                  </div>
                  <span className="text-gray-600 text-sm tracking-widest text-right w-full mt-1">
                    It's All About Satara....
                  </span>
                </div>
              </div>
            </div>

            {/* Ad Banner */}
            <div className="hidden lg:block">
              <div className="ad-banner w-[728px] h-[90px] flex items-center justify-center border border-dashed border-gray-300 bg-gray-200 text-gray-500">
                Advertisement (728x90)
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-2xl text-satara-dark focus:outline-none">
              <FaBars />
            </button>
          </div>

          {/* Navigation */}
          <nav className="bg-dark-navy-blue text-white mt-4 md:block hidden">
            <div className="container mx-auto px-4">
              <ul className="flex flex-col md:flex-row md:space-x-1 lg:space-x-4 py-2 md:py-0 overflow-x-auto whitespace-nowrap text-sm lg:text-base font-medium">
                <li>
                  <Link to="/" className="flex items-center gap-1 px-3 py-3 hover:bg-satara-red transition duration-300">
                    <GoHomeFill /> मुख्यपृष्ठ
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="flex items-center gap-1 px-3 py-3 hover:bg-satara-red transition duration-300">
                    <FaNewspaper /> ताज्या बातम्या
                  </Link>
                </li>
                <li>
                  <Link to="/politics" className="flex items-center gap-1 px-3 py-3 hover:bg-satara-red transition duration-300">
                    <FaLandmark /> राजकारण
                  </Link>
                </li>
                <li>
                  <Link to="/satara" className="flex items-center gap-1 px-3 py-3 hover:bg-satara-red transition duration-300">
                    <FaMapMarkerAlt /> सातारा
                  </Link>
                </li>
                <li>
                  <Link to="/farming" className="flex items-center gap-1 px-3 py-3 hover:bg-satara-red transition duration-300">
                    <FaTractor /> शेती
                  </Link>
                </li>
                <li>
                  <Link to="/business" className="flex items-center gap-1 px-3 py-3 hover:bg-satara-red transition duration-300">
                    <FaChartLine /> व्यवसाय
                  </Link>
                </li>
                <li>
                  <Link to="/sports" className="flex items-center gap-1 px-3 py-3 hover:bg-satara-red transition duration-300">
                    <FaFutbol /> क्रीडा
                  </Link>
                </li>
                <li>
                  <Link to="/entertainment" className="flex items-center gap-1 px-3 py-3 hover:bg-satara-red transition duration-300">
                    <FaFilm /> मनोरंजन
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="flex items-center gap-1 px-3 py-3 hover:bg-satara-red transition duration-300">
                    <FaCamera /> गॅलरी
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
      {/* ================= END STICKY WRAPPER ================= */}

      {/* ================= BREAKING NEWS TICKER (scroll होईल) ================= */}
      <div className="bg-satara-red text-white flex items-center shadow-md overflow-hidden">
        <div className="bg-satara-dark px-4 py-2 font-bold uppercase whitespace-nowrap z-10 flex items-center border border-red-500">
          <span className="animate-pulse mr-2 h-2 w-2 bg-red-500 rounded-full inline-block"></span>
          Breaking News
        </div>

        <div className="flex-1 overflow-hidden relative">
          <div className="flex whitespace-nowrap animate-ticker">
            <div className="px-6 py-2">साताऱ्यात मुसळधार पाऊस, अनेक गावांचा संपर्क तुटला, जनजीवन विस्कळीत</div>
            <div className="px-6 py-2">|</div>
            <div className="px-6 py-2">मुख्यमंत्री यांचा लवकरच सातारा दौरा, विकासकामांचा घेणार आढावा</div>
            <div className="px-6 py-2">|</div>
            <div className="px-6 py-2">कराडमध्ये नवीन उद्योग प्रकल्पाची घोषणा, हजारो तरुणांना मिळणार रोजगार</div>
            <div className="px-6 py-2">|</div>
            <div className="px-6 py-2">महाबळेश्वर पर्यटनाला वेग, विकेंडला पर्यटकांची मोठी गर्दी</div>
            <div className="px-6 py-2">|</div>

            {/* Duplicate for smooth loop */}
            <div className="px-6 py-2">साताऱ्यात मुसळधार पाऊस, अनेक गावांचा संपर्क तुटला, जनजीवन विस्कळीत</div>
            <div className="px-6 py-2">|</div>
            <div className="px-6 py-2">मुख्यमंत्री यांचा लवकरच सातारा दौरा, विकासकामांचा घेणार आढावा</div>
            <div className="px-6 py-2">|</div>
            <div className="px-6 py-2">कराडमध्ये नवीन उद्योग प्रकल्पाची घोषणा, हजारो तरुणांना मिळणार रोजगार</div>
            <div className="px-6 py-2">|</div>
            <div className="px-6 py-2">महाबळेश्वर पर्यटनाला वेग, विकेंडला पर्यटकांची मोठी गर्दी</div>
            <div className="px-6 py-2">|</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;