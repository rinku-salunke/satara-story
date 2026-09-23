// MainData.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaClock,
  FaPen,
  FaBolt,
  FaSun,
  FaMoon,
  FaOm,
  FaMapMarkerAlt,
} from "react-icons/fa";

function MainData() {
  // Taluka list
  const talukas = [
    "सातारा", "कराड", "पाटण", "वाई", "महाबळेश्वर",
    "जावळी", "फलटण", "माण", "खटाव", "कोरेगाव",
  ];

  // Sidebar Taluka news
  const talukaSidebarNews = [
    {
      id: 1,
      taluka: "फलटण",
      title: "नीरा उजवा कालव्याच्या दुरुस्तीचे काम गतीमान, शेतकऱ्यांना दिलासा",
      image: "https://placehold.co/120x90/555/fff?text=Phaltan",
    },
    {
      id: 2,
      taluka: "खटाव",
      title: "येरळा नदीपात्रात वाळूमाफियांचा सुळसुळाट, महसूल विभागाची कारवाई",
      image: "https://placehold.co/120x90/555/fff?text=Khatav",
    },
    {
      id: 3,
      taluka: "महाबळेश्वर",
      title: "स्ट्रॉबेरी हंगामाला सुरुवात, बाजारात आवक वाढली",
      image: "https://placehold.co/120x90/555/fff?text=Mahabaleshwar",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-6">

      {/* ============ TOP GRID: Featured + Panchang ============ */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">

        {/* LEFT: Featured Hero (2/3) */}
        <div className="lg:w-2/3 relative group rounded-lg overflow-hidden shadow-lg bg-white">
          <Link to="/news/featured">
            <div className="relative h-64 md:h-96 w-full">
              <img
                src="https://placehold.co/800x500/1E3A8A/FFFFFF?text=Satara+Development"
                alt="Main News"
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-satara-red text-white text-xs font-bold px-2 py-1 rounded uppercase mb-2 inline-block">
                  विशेष वृत्तांत
                </span>
                <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight mb-2 hover:text-gray-200 transition">
                  सातारा जिल्ह्यात विकासकामांना गती; नव्या प्रकल्पांची घोषणा, पालकमंत्र्यांची माहिती
                </h1>
                <div className="text-gray-300 text-sm flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <FaClock /> २ तासांपूर्वी
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <FaPen /> सातारा प्रतिनिधी
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* RIGHT: Panchang + Top News (1/3) */}
        <div className="lg:w-1/3 flex flex-col gap-4">

          {/* Panchang Card */}
          <div className="bg-orange-50 rounded-lg shadow-sm border border-orange-200 p-4">
            <div className="flex justify-between items-center mb-2 border-b border-orange-200 pb-2">
              <h3 className="text-lg font-bold text-orange-800 flex items-center gap-2">
                <FaOm className="text-orange-600" /> आजचे पंचांग
              </h3>
              <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">
                २२ सप्टेंबर
              </span>
            </div>
            <div className="text-sm space-y-1.5 text-gray-700">
              <p>
                <span className="font-bold text-orange-700">तिथी:</span> आश्विन शुद्ध प्रतिपदा (घटस्थापना)
              </p>
              <p>
                <span className="font-bold text-orange-700">नक्षत्र:</span> हस्त
                <span className="mx-2">|</span>
                <span className="font-bold text-orange-700">योग:</span> शुक्ल
              </p>
              <p className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <FaSun className="text-yellow-500" /> ०६:२५ AM
                </span>
                <span className="flex items-center gap-1">
                  <FaMoon className="text-gray-500" /> ०६:३० PM
                </span>
              </p>
              <div className="mt-2 bg-green-100 text-green-800 p-2 rounded text-center border border-green-200 flex items-center justify-center gap-1">
                <FaClock />
                <span className="font-semibold">शुभ मुहूर्त:</span> सकाळी ११:४५ ते १२:३०
              </div>
            </div>
          </div>

          {/* Important News Card */}
          <div className="bg-white rounded-lg shadow p-4 border-t-4 border-satara-blue flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-satara-dark mb-4 pb-2 border-b flex items-center gap-2">
              <FaBolt className="text-yellow-500" /> महत्त्वाच्या बातम्या
            </h3>

            <ul className="space-y-4 flex-grow">
              <li className="border-b border-gray-100 pb-3 last:border-0 hover:bg-gray-50 transition p-2 rounded">
                <Link to="/news/1" className="flex gap-3 items-start">
                  <img
                    src="https://placehold.co/100x100/cccccc/666666?text=News1"
                    alt="thumb"
                    className="w-20 h-20 object-cover rounded flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 line-clamp-2 hover:text-satara-red transition">
                      मुख्यमंत्री यांचा सातारा दौरा; विविध विकासकामांचे करणार उद्घाटन
                    </h4>
                    <span className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <FaClock /> ३ तासांपूर्वी
                    </span>
                  </div>
                </Link>
              </li>
              <li className="border-b border-gray-100 pb-3 last:border-0 hover:bg-gray-50 transition p-2 rounded">
                <Link to="/news/2" className="flex gap-3 items-start">
                  <img
                    src="https://placehold.co/100x100/cccccc/666666?text=News2"
                    alt="thumb"
                    className="w-20 h-20 object-cover rounded flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 line-clamp-2 hover:text-satara-red transition">
                      कराडमध्ये नवीन उद्योग प्रकल्प, तरुणांसाठी रोजगाराची मोठी संधी
                    </h4>
                    <span className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <FaClock /> ५ तासांपूर्वी
                    </span>
                  </div>
                </Link>
              </li>
              <li className="border-b border-gray-100 pb-3 last:border-0 hover:bg-gray-50 transition p-2 rounded">
                <Link to="/news/3" className="flex gap-3 items-start">
                  <img
                    src="https://placehold.co/100x100/cccccc/666666?text=News3"
                    alt="thumb"
                    className="w-20 h-20 object-cover rounded flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 line-clamp-2 hover:text-satara-red transition">
                      महाबळेश्वर पर्यटनाला वेग; वीकेंडमुळे हाऊसफुल्ल, वाहतूक कोंडी
                    </h4>
                    <span className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <FaClock /> ७ तासांपूर्वी
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ============ LATEST NEWS SECTION (4 Cards) ============ */}
      <section className="mb-10">
        <div className="flex items-center justify-between border-b-2 border-satara-red pb-2 mb-5">
          <h2 className="text-2xl font-bold text-satara-dark flex items-center gap-2">
            <FaClock className="text-satara-red" /> ताज्या बातम्या
          </h2>
          <Link to="/news" className="text-sm text-satara-red hover:underline font-semibold">
            सर्व पाहा →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition">
            <Link to="/news/4">
              <img src="https://placehold.co/400x250/eeeeee/333333?text=Latest1" alt="News" className="w-full h-40 object-cover" />
              <div className="p-4">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">राजकारण</span>
                <h3 className="font-bold text-gray-800 mt-1 mb-2 line-clamp-2 hover:text-satara-red transition">
                  विधानसभा निवडणुकीच्या पार्श्वभूमीवर राजकीय घडामोडींना वेग
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                  सातारा जिल्ह्यातील राजकीय वातावरण तापले असून, सर्वच पक्षांनी मोर्चेबांधणीला सुरुवात केली आहे.
                </p>
                <span className="text-xs text-gray-400">आज, १०:३० AM</span>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition">
            <Link to="/news/5">
              <img src="https://placehold.co/400x250/eeeeee/333333?text=Latest2" alt="News" className="w-full h-40 object-cover" />
              <div className="p-4">
                <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">शेती</span>
                <h3 className="font-bold text-gray-800 mt-1 mb-2 line-clamp-2 hover:text-satara-red transition">
                  पाटण तालुक्यात मुसळधार पाऊस, खरीप पिकांना जीवदान
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                  गेल्या दोन दिवसांपासून सुरू असलेल्या पावसामुळे बळीराजा सुखावला असून, धरणांच्या पाणी पातळीत वाढ.
                </p>
                <span className="text-xs text-gray-400">आज, ०९:१५ AM</span>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition">
            <Link to="/news/6">
              <img src="https://placehold.co/400x250/eeeeee/333333?text=Latest3" alt="News" className="w-full h-40 object-cover" />
              <div className="p-4">
                <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">शिक्षण</span>
                <h3 className="font-bold text-gray-800 mt-1 mb-2 line-clamp-2 hover:text-satara-red transition">
                  दहावी-बारावीच्या पुरवणी परीक्षांचा निकाल जाहीर
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                  महाराष्ट्र राज्य माध्यमिक आणि उच्च माध्यमिक शिक्षण मंडळाने आज ऑनलाईन निकाल जाहीर केला.
                </p>
                <span className="text-xs text-gray-400">काल, ०५:४० PM</span>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition">
            <Link to="/news/7">
              <img src="https://placehold.co/400x250/eeeeee/333333?text=Latest4" alt="News" className="w-full h-40 object-cover" />
              <div className="p-4">
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">क्रीडा</span>
                <h3 className="font-bold text-gray-800 mt-1 mb-2 line-clamp-2 hover:text-satara-red transition">
                  सातारा जिल्हास्तरीय कबड्डी स्पर्धेत कराड संघाचे वर्चस्व
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                  अंतिम सामन्यात अटीतटीच्या लढतीत कराडच्या संघाने सातारा शहर संघाचा पराभव करत विजेतेपद पटकावले.
                </p>
                <span className="text-xs text-gray-400">काल, ०२:२० PM</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ AD BANNER ============ */}
      <div className="w-full flex justify-center mb-10">
        <div className="w-full max-w-4xl h-[90px] md:h-[120px] flex items-center justify-center border border-dashed border-gray-300 text-gray-400 bg-gray-50 rounded">
          Advertisement (Responsive AdSense)
        </div>
      </div>

      {/* ============ SATARA DISTRICT SPECIAL SECTION ============ */}
      <section className="mb-10 bg-gray-50 p-6 rounded-xl border border-gray-200">

        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-satara-red pb-2 mb-5">
          <h2 className="text-2xl font-bold text-satara-dark flex items-center gap-2">
            <FaMapMarkerAlt className="text-satara-red" /> सातारा जिल्हा विशेष
          </h2>
          <Link to="/satara" className="text-sm text-satara-red hover:underline font-semibold">
            सर्व पाहा →
          </Link>
        </div>

        {/* Taluka Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {talukas.map((taluka, i) => (
            <Link
              key={i}
              to={`/taluka/${taluka}`}
              className="bg-white border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm hover:bg-satara-red hover:text-white transition"
            >
              {taluka}
            </Link>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Large Featured Taluka News */}
          <div className="md:col-span-2 relative rounded-lg overflow-hidden h-64 md:h-80 group">
            <Link to="/taluka/wai/news">
              <img
                src="https://placehold.co/600x400/333333/ffffff?text=Wai+Ghat"
                alt="Wai"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 p-5">
                <span className="bg-satara-blue text-white text-xs px-2 py-1 rounded mb-2 inline-block">
                  वाई
                </span>
                <h3 className="text-white text-xl md:text-2xl font-bold line-clamp-2">
                  वाईमध्ये पसरणी घाटात दरड कोसळली, वाहतूक एकेरी सुरू; प्रशासनाकडून खबरदारी
                </h3>
              </div>
            </Link>
          </div>

          {/* Sidebar Taluka News */}
          <div className="flex flex-col gap-4">
            {talukaSidebarNews.map((news, i) => (
              <React.Fragment key={news.id}>
                <Link to={`/taluka/${news.taluka}/${news.id}`} className="flex gap-3 items-center group">
                  <img
                    src={news.image}
                    alt={news.taluka}
                    className="w-24 h-20 object-cover rounded flex-shrink-0"
                  />
                  <div>
                    <span className="text-xs font-semibold text-satara-red">
                      {news.taluka}
                    </span>
                    <h4 className="font-semibold text-gray-800 text-sm line-clamp-2 group-hover:text-satara-red transition">
                      {news.title}
                    </h4>
                  </div>
                </Link>
                {i < talukaSidebarNews.length - 1 && (
                  <hr className="border-gray-200" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default MainData;