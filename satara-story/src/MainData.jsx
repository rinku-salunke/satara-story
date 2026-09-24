// MainData.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaClock,
  FaPen,
  FaBolt,
  FaSun,
  FaMoon,
  FaOm,
  FaMapMarkerAlt,
  FaSeedling,
  FaRupeeSign,
  FaCloudSun,
  FaCogs,
  FaAward,
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
  FaCameraRetro,
  FaPlayCircle,
  FaPlay,
  FaImages,
  FaPenFancy,
  FaRoute,
  FaMapMarkedAlt,
  FaUtensils,
  FaStar,
  FaInfoCircle,
  FaPhoneAlt,
  FaPhone,
  FaHospital,
  FaClinicMedical,
  FaLocationArrow,
  FaHandHoldingWater,
  FaCheckCircle,
  FaBurn,
  FaLightbulb,
  FaHeadset,
  FaTrashAlt,
  FaTint,
  FaBriefcase,
  FaBus,
  FaBusAlt,
  FaTrain,
  FaExternalLinkAlt,
} from "react-icons/fa";

function MainData() {
  // --- State for the agriculture API content ---
  const [agriContent, setAgriContent] = useState(null);
  const [agriLoading, setAgriLoading] = useState(false);

  // --- State for tourism tabs ---
  const [tourismTab, setTourismTab] = useState('nature');

  // --- State for nearby PHC finder ---
  const [nearbyPHC, setNearbyPHC] = useState(null);

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

  // Photo gallery data
  const photoGallery = [
    { id: 1, src: "https://placehold.co/400x300/333/fff?text=Satara+Fort", alt: "Satara Fort" },
    { id: 2, src: "https://placehold.co/400x300/333/fff?text=Festival", alt: "Festival" },
    { id: 3, src: "https://placehold.co/400x300/333/fff?text=Sports+Event", alt: "Sports Event" },
    { id: 4, src: "https://placehold.co/400x300/333/fff?text=Nature", alt: "Nature" },
  ];

  // Tourism places data
  const tourismPlaces = {
    nature: [
      { id: 1, name: "कास पठार (Kaas Plateau)", desc: "युनेस्को जागतिक वारसा स्थळ, फुलांचे पठार.", rating: 4.5, location: "Satara", img: "https://placehold.co/100x100/4CAF50/fff?text=Kaas", border: "border-green-500" },
      { id: 2, name: "ठोसेघर धबधबा (Thoseghar Waterfalls)", desc: "निसर्गरम्य धबधबा, पावसाळ्यातील प्रमुख आकर्षण.", rating: 4.6, location: "Thoseghar", img: "https://placehold.co/100x100/2196F3/fff?text=Thoseghar", border: "border-green-500" },
    ],
    forts: [
      { id: 1, name: "अजिंक्यतारा किल्ला (Ajinkyatara Fort)", desc: "१६ व्या शतकातील किल्ला, साताऱ्याचे उत्तम दृश्य.", rating: 4.5, location: "Satara City", img: "https://placehold.co/100x100/607D8B/fff?text=Ajinkyatara", border: "border-gray-600" },
    ],
    devotional: [
      { id: 1, name: "सज्जनगड (Sajjangad Fort)", desc: "श्री समर्थ रामदास स्वामी यांची समाधी.", rating: 4.6, location: "Sonavadi", img: "https://placehold.co/100x100/FF9800/fff?text=Sajjangad", border: "border-orange-400" },
      { id: 2, name: "श्री उत्तर चिदंबरम नटराज मंदिर", desc: "प्रसिद्ध शिव मंदिर, सुंदर वास्तुकला.", rating: 4.6, location: "Godoli East", img: "https://placehold.co/100x100/FF5722/fff?text=Nataraj", border: "border-orange-400" },
    ],
    museums: [
      { id: 1, name: "श्री छत्रपती शिवाजी महाराज संग्रहालय", desc: "ऐतिहासिक वास्तू आणि कलाकृतींचा संग्रह.", rating: 4.4, location: "Sadar Bazar", img: "https://placehold.co/100x100/3F51B5/fff?text=Museum", border: "border-blue-500" },
    ],
  };

  // Hotels data
  const hotels = [
    { id: 1, name: "The Fern Residency", rating: 4.4, location: "Pune-Banglore Highway, Satara", desc: "उत्तम रेस्टॉरंट, बार आणि राहण्याची सोय असलेले 3-स्टार प्रीमियम हॉटेल.", img: "https://placehold.co/150x150/1E3A8A/ffffff?text=Fern", ratingColor: "bg-green-100 text-green-800" },
    { id: 2, name: "Manas Resto Lounge", rating: 4.7, location: "Varye, Satara (Highway)", desc: "प्रसिद्ध फॅमिली लाउंज, उत्कृष्ट जेवणासाठी ओळखले जाणारे ठिकाण.", img: "https://placehold.co/150x150/D32F2F/ffffff?text=Manas", ratingColor: "bg-green-100 text-green-800" },
    { id: 3, name: "Shri Vitthal Mangalam", rating: 4.4, location: "Satara City Center", desc: "उत्तम शाकाहारी जेवण आणि राहण्याची सोय असलेले लोकप्रिय ठिकाण.", img: "https://placehold.co/150x150/4CAF50/ffffff?text=Vitthal", ratingColor: "bg-yellow-100 text-yellow-800" },
  ];

  // Emergency numbers data
  const emergencyNumbers = [
    { id: 1, name: "पोलीस नियंत्रण कक्ष", location: "सातारा शहर", phone: "100" },
    { id: 2, name: "रुग्णवाहिका", location: "संपूर्ण जिल्हा", phone: "108" },
    { id: 3, name: "अग्निशमन दल", location: "सातारा नगरपरिषद", phone: "101" },
    { id: 4, name: "जिल्हा रुग्णालय (सिव्हिल)", location: "सदर बाजार, सातारा", phone: "02162232304" },
  ];

  // Private hospitals data
  const privateHospitals = [
    { id: 1, name: "Shwas Multispeciality Hospital", location: "कल्याणी नगर, सदर बाजार, सातारा", phone: "+918446328200", status: "24x7 Open", statusColor: "bg-green-100 text-green-800" },
    { id: 2, name: "सातारा निदान केंद्र व रुग्णालय", location: "देवी कॉलनी, सदर बाजार, सातारा", phone: "+919921998000", status: "24x7 Open", statusColor: "bg-green-100 text-green-800" },
    { id: 3, name: "मीनाक्षी मल्टीस्पेशालिटी हॉस्पिटल", location: "आदित्य नगरी, वनवासवाडी, खेड", phone: "+917498808149", status: "Day Care", statusColor: "bg-blue-100 text-blue-800" },
  ];

  // PHC centres data
  const phcCentres = [
    { id: 1, name: "नागरी आरोग्य केंद्र (UPHC)", location: "सदर बाजार, सातारा शहर" },
    { id: 2, name: "प्राथमिक आरोग्य केंद्र (PHC)", location: "नागठाणे, ता. सातारा (ग्रामीण)" },
    { id: 3, name: "आरोग्य उपकेंद्र (Sub-center)", location: "कोंडवे, ता. सातारा" },
  ];

  // Civic services data
  const civicServices = [
    { id: 1, name: "सातारा ब्लड बँक", location: "पोवई नाका, सातारा", phone: "02162234000", icon: "burn", iconColor: "text-red-500" },
    { id: 2, name: "महावितरण (वीज)", location: "24x7 टोल-फ्री तक्रार निवारण", phone: "1912", icon: "bulb", iconColor: "text-yellow-500" },
    { id: 3, name: "सातारा नगरपरिषद", location: "पाणी / कचरा तक्रार", phone: "02162234000", icon: "trash", iconColor: "text-green-500" },
  ];

  // Jobs data
  const jobs = [
    { id: 1, title: "सातारा जिल्हा मध्यवर्ती बँकेत भरती", location: "सातारा शहर", meta: "अंतिम तारीख: ३० सप्टेंबर | पदे: लिपिक (५०)", isNew: true },
    { id: 2, title: "खाजगी कंपन्यांत वॉक-इन इंटरव्ह्यू", location: "खंडाळा, MIDC", meta: "आयटीआय (ITI), डिप्लोमा उमेदवारांसाठी संधी.", isNew: false },
  ];

  // Transport data
  const transport = [
    { id: 1, name: "मध्यवर्ती बस स्थानक", location: "शिवाजी सर्कल जवळ, सातारा", desc: "सातारा-पुणे शिवनेरी दर अर्ध्या तासाने उपलब्ध.", phone: "02162232538", type: "bus" },
    { id: 2, name: "सातारा रेल्वे स्थानक", location: "माहुली रोड, सातारा", desc: "महादेव एक्सप्रेस, कोयना एक्सप्रेस वेळेवर धावत आहेत.", link: "https://enquiry.indianrail.gov.in/", type: "train" },
  ];

  // Tourism tab configuration
  const tourismTabs = [
    { key: 'nature', label: 'निसर्ग' },
    { key: 'forts', label: 'किल्ले' },
    { key: 'devotional', label: 'धार्मिक' },
    { key: 'museums', label: 'संग्रहालये' },
  ];

  // Handler: Market prices
  const fetchMarketPrices = async () => {
    setAgriLoading(true);
    setAgriContent(<p className="text-sm text-gray-700">बाजारभाव लोड होत आहेत...</p>);
    try {
      await new Promise(r => setTimeout(r, 600));
      setAgriContent(
        <div className="text-sm text-gray-700 space-y-1">
          <p className="font-bold text-green-700 mb-2">आजचे बाजारभाव (सातारा):</p>
          <p>टोमॅटो: <span className="font-semibold">₹ 1,800 / क्विंटल</span></p>
          <p>कांदा: <span className="font-semibold">₹ 2,400 / क्विंटल</span></p>
          <p>ज्वारी: <span className="font-semibold">₹ 2,100 / क्विंटल</span></p>
        </div>
      );
    } catch {
      setAgriContent(<p className="text-sm text-red-600">माहिती लोड करता आली नाही.</p>);
    } finally {
      setAgriLoading(false);
    }
  };

  // Handler: Weather forecast
  const fetchWeatherForecast = async () => {
    setAgriLoading(true);
    setAgriContent(<p className="text-sm text-gray-700">हवामान अंदाज लोड होत आहे...</p>);
    try {
      await new Promise(r => setTimeout(r, 600));
      setAgriContent(
        <div className="text-sm text-gray-700 space-y-1">
          <p className="font-bold text-blue-700 mb-2">सातारा — हवामान अंदाज</p>
          <p>आज: <span className="font-semibold">२८°C</span>, अंशतः ढगाळ</p>
          <p>उद्या: <span className="font-semibold">२६°C</span>, पावसाची शक्यता</p>
          <p>पुढील ३ दिवस: हलक्या पावसाची शक्यता</p>
        </div>
      );
    } catch {
      setAgriContent(<p className="text-sm text-red-600">माहिती लोड करता आली नाही.</p>);
    } finally {
      setAgriLoading(false);
    }
  };

  // Handler: Government schemes
  const fetchGovSchemes = async () => {
    setAgriLoading(true);
    setAgriContent(<p className="text-sm text-gray-700">सरकारी योजना लोड होत आहेत...</p>);
    try {
      await new Promise(r => setTimeout(r, 600));
      setAgriContent(
        <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
          <li>पीएम-किसान सन्मान निधी</li>
          <li>महात्मा ज्योतिबा फुले शेतकरी अपघात विमा योजना</li>
          <li>नमो शेतकरी महासन्मान निधी</li>
          <li>ड्रीप सिंचन अनुदान योजना</li>
        </ul>
      );
    } catch {
      setAgriContent(<p className="text-sm text-red-600">माहिती लोड करता आली नाही.</p>);
    } finally {
      setAgriLoading(false);
    }
  };

  // Handler: Find nearby PHC
  const findNearbyPHC = () => {
    setNearbyPHC(<p className="text-sm text-gray-700">तुमच्या जवळचे केंद्र शोधत आहे...</p>);
    setTimeout(() => {
      setNearbyPHC(
        <div className="text-sm text-gray-700">
          <p className="font-bold text-indigo-700 mb-1">जवळचे केंद्र सापडले:</p>
          <p>प्राथमिक आरोग्य केंद्र, नागठाणे — अंदाजे ३.२ किमी</p>
        </div>
      );
    }, 700);
  };

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
        <div className="flex items-center justify-between border-b-2 border-satara-red pb-2 mb-5">
          <h2 className="text-2xl font-bold text-satara-dark flex items-center gap-2">
            <FaMapMarkerAlt className="text-satara-red" /> सातारा जिल्हा विशेष
          </h2>
          <Link to="/satara" className="text-sm text-satara-red hover:underline font-semibold">
            सर्व पाहा →
          </Link>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* ============ CATEGORY GRID: Politics / Maharashtra / World ============ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div>
          <div className="flex items-center justify-between border-b-2 border-satara-red pb-2 mb-4">
            <h2 className="text-xl font-bold text-satara-dark flex items-center gap-2">
              <FaMapMarkerAlt className="text-satara-red" /> राजकारण
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <img
              src="https://placehold.co/400x250/D32F2F/fff?text=Politics"
              alt="Politics"
              className="w-full h-40 object-cover rounded mb-3"
            />
            <Link to="/news/politics-1">
              <h3 className="font-bold text-lg mb-2 hover:text-satara-red transition">
                आगामी निवडणुकांसाठी सत्ताधारी आणि विरोधकांचे दौरे सुरू
              </h3>
            </Link>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              नेत्यांच्या आरोप-प्रत्यारोपांनी राजकीय वातावरण तापले. सभांचा धडाका सुरू.
            </p>
            <ul className="space-y-3 border-t pt-3">
              <li>
                <Link to="/news/politics-2" className="text-sm hover:text-satara-red font-medium flex items-center gap-1">
                  <FaBolt className="text-xs text-satara-red" /> पक्षप्रवेशासाठी नेत्यांची रस्सीखेच
                </Link>
              </li>
              <li>
                <Link to="/news/politics-3" className="text-sm hover:text-satara-red font-medium flex items-center gap-1">
                  <FaBolt className="text-xs text-satara-red" /> जागावाटपावरून महायुतीत पेच?
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between border-b-2 border-satara-red pb-2 mb-4">
            <h2 className="text-xl font-bold text-satara-dark flex items-center gap-2">
              <FaMapMarkerAlt className="text-satara-red" /> महाराष्ट्र
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <img
              src="https://placehold.co/400x250/1E3A8A/fff?text=Maharashtra"
              alt="Maharashtra"
              className="w-full h-40 object-cover rounded mb-3"
            />
            <Link to="/news/mh-1">
              <h3 className="font-bold text-lg mb-2 hover:text-satara-red transition">
                मराठा आरक्षण: मनोज जरांगे पाटील यांचा पुन्हा इशारा
              </h3>
            </Link>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              सरकारने दिलेल्या मुदतीत निर्णय न घेतल्यास पुन्हा मोठे आंदोलन छेडणार.
            </p>
            <ul className="space-y-3 border-t pt-3">
              <li>
                <Link to="/news/mh-2" className="text-sm hover:text-satara-red font-medium flex items-center gap-1">
                  <FaBolt className="text-xs text-satara-red" /> मुंबई-पुणे एक्स्प्रेस वे वर भीषण अपघात
                </Link>
              </li>
              <li>
                <Link to="/news/mh-3" className="text-sm hover:text-satara-red font-medium flex items-center gap-1">
                  <FaBolt className="text-xs text-satara-red" /> विदर्भात अतिवृष्टीचा इशारा
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between border-b-2 border-satara-red pb-2 mb-4">
            <h2 className="text-xl font-bold text-satara-dark flex items-center gap-2">
              <FaMapMarkerAlt className="text-satara-red" /> देश व जग
            </h2>
          </div>
          <ul className="space-y-4">
            <li className="flex gap-3 group">
              <img src="https://placehold.co/100x100/4CAF50/fff?text=India" alt="India" className="w-20 h-20 object-cover rounded" />
              <div>
                <span className="text-xs text-gray-500">नवी दिल्ली</span>
                <Link to="/news/india-1">
                  <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-satara-red transition">
                    संसदेचे पावसाळी अधिवेशन: विरोधकांचा विविध मुद्द्यांवरून गदारोळ
                  </h4>
                </Link>
              </div>
            </li>
            <li className="flex gap-3 group">
              <img src="https://placehold.co/100x100/FF9800/fff?text=Space" alt="Space" className="w-20 h-20 object-cover rounded" />
              <div>
                <span className="text-xs text-gray-500">विज्ञान</span>
                <Link to="/news/science-1">
                  <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-satara-red transition">
                    इस्रोची गगनयान मोहीम: अंतराळवीरांचे प्रशिक्षण अंतिम टप्प्यात
                  </h4>
                </Link>
              </div>
            </li>
            <li className="flex gap-3 group">
              <img src="https://placehold.co/100x100/607D8B/fff?text=World" alt="World" className="w-20 h-20 object-cover rounded" />
              <div>
                <span className="text-xs text-gray-500">आंतरराष्ट्रीय</span>
                <Link to="/news/world-1">
                  <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-satara-red transition">
                    अमेरिकेच्या अध्यक्षीय निवडणुका: प्रचाराला वेग, उमेदवारांचे दावे-प्रतिदावे
                  </h4>
                </Link>
              </div>
            </li>
            <li className="flex gap-3 group">
              <div className="w-20 h-20 rounded border border-dashed border-gray-300 flex items-center justify-center text-[10px] text-gray-400 bg-gray-50">
                Ad 300x250
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-400">Sponsored Content</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* ============ AGRICULTURE + BUSINESS SECTION ============ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-green-50 rounded-xl p-5 border border-green-100">
          <div className="flex justify-between items-center mb-4 border-b-2 border-green-500 pb-2">
            <h2 className="text-xl font-bold text-green-800 flex items-center gap-2">
              <FaSeedling /> शेती विशेष
            </h2>
            <Link to="/agriculture" className="text-sm text-green-600 hover:underline">
              अधिक वाचा
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <img
              src="https://placehold.co/300x200/4CAF50/fff?text=Farming"
              alt="Farming"
              className="w-full sm:w-1/2 h-32 object-cover rounded shadow-sm"
            />
            <div>
              <h3 className="font-bold text-lg mb-1 hover:text-green-700 transition">
                <Link to="/news/agri-1">
                  नव्या तंत्रज्ञानाचा वापर; साताऱ्यातील शेतकऱ्याची यशोगाथा
                </Link>
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                कमी पाण्यात जास्त उत्पन्न देणाऱ्या पीक पद्धतीचा अवलंब करत लाखोंची कमाई.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4 text-sm font-medium">
            <button
              onClick={fetchMarketPrices}
              disabled={agriLoading}
              className="bg-white p-2 rounded shadow-sm text-center border border-green-100 hover:bg-green-100 transition focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-60"
            >
              <FaRupeeSign className="text-green-600 mb-1 mx-auto block text-lg" />
              बाजारभाव (Live)
            </button>

            <button
              onClick={fetchWeatherForecast}
              disabled={agriLoading}
              className="bg-white p-2 rounded shadow-sm text-center border border-green-100 hover:bg-green-100 transition focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60"
            >
              <FaCloudSun className="text-blue-500 mb-1 mx-auto block text-lg" />
              हवामान अंदाज
            </button>

            <button
              onClick={() => alert('तंत्रज्ञान लेख लवकरच उपलब्ध होतील.')}
              className="bg-white p-2 rounded shadow-sm text-center border border-green-100 hover:bg-green-100 transition focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <FaCogs className="text-gray-600 mb-1 mx-auto block text-lg" />
              शेती तंत्रज्ञान
            </button>

            <button
              onClick={fetchGovSchemes}
              disabled={agriLoading}
              className="bg-white p-2 rounded shadow-sm text-center border border-green-100 hover:bg-green-100 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-60"
            >
              <FaAward className="text-yellow-500 mb-1 mx-auto block text-lg" />
              सरकारी योजना
            </button>
          </div>

          {agriContent && (
            <div className="mt-4 bg-white p-4 rounded-lg border border-green-200 shadow-inner transition-all duration-300 ease-in-out">
              {agriContent}
            </div>
          )}
        </div>

        <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
          <div className="flex justify-between items-center mb-4 border-b-2 border-satara-blue pb-2">
            <h2 className="text-xl font-bold text-satara-blue flex items-center gap-2">
              <FaChartLine /> व्यवसाय व अर्थविश्व
            </h2>
            <Link to="/business" className="text-sm text-blue-600 hover:underline">
              अधिक वाचा
            </Link>
          </div>

          <ul className="space-y-4">
            <li className="flex justify-between items-center bg-white p-3 rounded shadow-sm border-l-4 border-green-500">
              <div>
                <span className="block font-bold text-gray-800">सेन्सेक्स (Sensex)</span>
                <span className="text-xs text-gray-500 flex items-center">
                  <span className="animate-pulse h-2 w-2 bg-green-500 rounded-full mr-1"></span> Live
                </span>
              </div>
              <div className="text-right">
                <span className="block font-bold text-gray-800 text-lg transition-colors duration-300">
                  74,241.79
                </span>
                <span className="text-sm text-green-600 font-semibold flex items-center justify-end gap-1">
                  <FaArrowUp /> +141.69
                </span>
              </div>
            </li>

            <li className="flex justify-between items-center bg-white p-3 rounded shadow-sm border-l-4 border-red-500">
              <div>
                <span className="block font-bold text-gray-800">सोने (Gold) 24K</span>
                <span className="text-xs text-gray-500">प्रती १० ग्रॅम (सातारा)</span>
              </div>
              <div className="text-right">
                <span className="block font-bold text-gray-800 text-lg">₹ 71,500</span>
                <span className="text-sm text-red-500 font-semibold flex items-center justify-end gap-1">
                  <FaArrowDown /> -200
                </span>
              </div>
            </li>
          </ul>

          <div className="mt-5 pt-4 border-t border-blue-200">
            <Link
              to="/news/business-1"
              className="group block bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <span className="bg-blue-100 text-satara-blue text-xs px-2 py-1 rounded mb-2 inline-block font-bold">
                नवीन अपडेट
              </span>
              <h3 className="font-bold text-gray-800 mb-1 group-hover:text-satara-blue transition">
                स्थानिक उद्योगांना चालना देण्यासाठी नवी योजना जाहीर
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                MSME क्षेत्रासाठी सरकारकडून विशेष पॅकेज, बँकांना कर्ज प्रक्रियेत सुलभता आणण्याचे निर्देश. साताऱ्यातील MIDC ला फायदा.
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* ============ PHOTO + VIDEO GALLERY SECTION ============ */}
      <div className="bg-gray-900 text-white rounded-xl p-6 mb-10 shadow-xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <FaCameraRetro className="text-yellow-400" /> फोटो गॅलरी
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {photoGallery.map((photo) => (
                <div key={photo.id} className="relative group cursor-pointer overflow-hidden rounded">
                  <img src={photo.src} alt={photo.alt} className="w-full h-32 object-cover transition duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition"></div>
                  <FaImages className="absolute bottom-2 right-2 text-white" />
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <FaPlayCircle className="text-satara-red" /> व्हिडिओ गॅलरी
              </h2>
            </div>

            <div className="relative rounded-lg overflow-hidden mb-3 group cursor-pointer">
              <img src="https://placehold.co/600x337/111/fff?text=News+Debate" alt="News Debate" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition">
                <div className="w-12 h-12 bg-satara-red rounded-full flex items-center justify-center shadow-lg">
                  <FaPlay className="text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-t from-black to-transparent">
                <p className="text-sm font-semibold line-clamp-1">
                  खास चर्चा: साताऱ्यातील आगामी निवडणुकांचे चित्र कसे असेल?
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="relative w-1/2 rounded overflow-hidden group cursor-pointer">
                <img src="https://placehold.co/300x168/111/fff?text=Interview" alt="Interview" className="w-full h-20 object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <FaPlay className="text-white/80 text-xl" />
                </div>
              </div>
              <div className="relative w-1/2 rounded overflow-hidden group cursor-pointer">
                <img src="https://placehold.co/300x168/111/fff?text=Ground+Report" alt="Ground Report" className="w-full h-20 object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <FaPlay className="text-white/80 text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ OPINION / EDITORIAL SECTION ============ */}
      <section className="mb-10">
        <div className="flex items-center justify-between border-b-2 border-satara-red pb-2 mb-5">
          <h2 className="text-2xl font-bold text-satara-dark flex items-center gap-2">
            <FaPenFancy className="text-satara-red" /> मत / संपादकीय
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 shadow-sm">
            <span className="text-xs font-bold text-yellow-700 uppercase tracking-widest mb-2 block">
              संपादकीय
            </span>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 font-serif">
              विकासाची नवी दिशा आणि साताऱ्यापुढील आव्हाने
            </h3>
            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              सातारा जिल्ह्याला निसर्गाचे वरदान लाभले आहे, तसेच ऐतिहासिक वारसाही आहे. मात्र, बदलत्या काळानुसार औद्योगिक आणि पायाभूत सुविधांचा विकास तितक्या वेगाने होणे गरजेचे आहे. नुकत्याच झालेल्या घोषणा प्रत्यक्षात उतरल्या तर जिल्ह्याचे चित्र नक्कीच पालटेल, पण यासाठी प्रशासकीय इच्छाशक्ती...
            </p>
            <Link to="/opinion/editorial-1" className="text-satara-red font-semibold hover:underline">
              सविस्तर वाचा →
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 p-3 bg-white rounded shadow-sm border border-gray-100">
              <img src="https://placehold.co/60x60/ccc/fff?text=Author1" alt="Author1" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <Link to="/opinion/blog-1">
                  <h4 className="font-bold text-sm hover:text-satara-red cursor-pointer transition">
                    शेतीतील नवीन प्रयोग काळाची गरज
                  </h4>
                </Link>
                <span className="text-xs text-gray-500 block mt-1">
                  अशोक पाटील (कृषी तज्ज्ञ)
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 bg-white rounded shadow-sm border border-gray-100">
              <img src="https://placehold.co/60x60/ccc/fff?text=Author2" alt="Author2" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <Link to="/opinion/blog-2">
                  <h4 className="font-bold text-sm hover:text-satara-red cursor-pointer transition">
                    तरुणाई आणि सोशल मीडियाचा वाढता प्रभाव
                  </h4>
                </Link>
                <span className="text-xs text-gray-500 block mt-1">
                  डॉ. स्नेहा देशमुख (मानसशास्त्रज्ञ)
                </span>
              </div>
            </div>

            <div className="w-full h-[100px] flex items-center justify-center border border-dashed border-gray-300 text-gray-400 bg-white rounded mt-2 text-sm">
              Ad Space
            </div>
          </div>
        </div>
      </section>

      {/* ============ TOURISM + STAY SECTION ============ */}
      <section className="mb-10 bg-indigo-50 p-6 rounded-xl border border-indigo-100 shadow-sm">
        <div className="flex items-center justify-between border-b-2 border-indigo-600 pb-2 mb-5">
          <h2 className="text-2xl font-bold text-white bg-indigo-600 px-3 py-1 rounded flex items-center gap-2">
            <FaRoute /> सातारा पर्यटन आणि मुक्काम
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-indigo-800 mb-4 border-b border-indigo-200 pb-2 flex items-center gap-2">
              <FaMapMarkedAlt /> भेट देण्यासारखी ठिकाणे
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {tourismTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setTourismTab(tab.key)}
                  className={`px-4 py-1 rounded-full text-sm font-semibold transition shadow-sm ${
                    tourismTab === tab.key
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <ul className="space-y-3">
              {tourismPlaces[tourismTab].map((place) => (
                <li
                  key={place.id}
                  className={`bg-white p-3 rounded shadow-sm flex items-start gap-3 border-l-4 ${place.border} group cursor-pointer hover:bg-gray-50 transition`}
                >
                  <img src={place.img} alt={place.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h4 className="font-bold text-gray-800 group-hover:text-indigo-600 transition">
                      {place.name}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-1">{place.desc}</p>
                    <span className="text-yellow-500 text-xs font-bold flex items-center gap-1">
                      <FaStar /> {place.rating}
                      <span className="text-gray-400 font-normal ml-1">{place.location}</span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-indigo-800 mb-4 border-b border-indigo-200 pb-2 flex items-center gap-2">
              <FaUtensils /> उत्तम जेवण आणि हॉटेल्स
            </h3>
            <div className="space-y-4">
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 group cursor-pointer hover:shadow-md transition"
                >
                  <img src={hotel.img} alt={hotel.name} className="w-full sm:w-24 h-24 object-cover rounded shadow-sm" />
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-lg text-gray-800 group-hover:text-indigo-600 transition">
                        {hotel.name}
                      </h4>
                      <span className={`${hotel.ratingColor} text-xs font-bold px-2 py-1 rounded flex items-center gap-1`}>
                        {hotel.rating} <FaStar className="text-[10px]" />
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                      <FaMapMarkerAlt className="text-gray-400" /> {hotel.location}
                    </p>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                      {hotel.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ USEFUL INFO / CIVIC SERVICES SECTION ============ */}
      <section className="mb-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between border-b-2 border-green-700 pb-2 mb-5">
          <h2 className="text-2xl font-bold text-white bg-green-700 px-3 py-1 rounded flex items-center gap-2">
            <FaInfoCircle /> उपयुक्त माहिती व नागरी सुविधा
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Emergency Numbers */}
          <div className="bg-red-50 p-5 rounded-lg border border-red-100 h-full">
            <h3 className="text-lg font-bold text-red-800 mb-4 border-b border-red-200 pb-2 flex items-center gap-2">
              <FaPhoneAlt /> आपत्कालीन क्रमांक
            </h3>
            <ul className="space-y-3">
              {emergencyNumbers.map((item) => (
                <li key={item.id} className="flex justify-between items-center bg-white p-2 rounded border border-red-50">
                  <div>
                    <span className="font-semibold text-gray-700 block">{item.name}</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <FaMapMarkerAlt /> {item.location}
                    </span>
                  </div>
                  <a
                    href={`tel:${item.phone}`}
                    className="text-red-600 font-bold hover:underline bg-red-100 px-3 py-1 rounded-full text-sm flex-shrink-0 flex items-center gap-1"
                  >
                    <FaPhone /> {item.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Private Hospitals */}
          <div className="bg-teal-50 p-5 rounded-lg border border-teal-100 h-full">
            <h3 className="text-lg font-bold text-teal-800 mb-4 border-b border-teal-200 pb-2 flex items-center gap-2">
              <FaHospital /> महत्त्वाची खाजगी रुग्णालये
            </h3>
            <ul className="space-y-3">
              {privateHospitals.map((h) => (
                <li key={h.id} className="bg-white p-3 rounded shadow-sm border-l-4 border-teal-500 group">
                  <h4 className="font-bold text-gray-800 text-sm group-hover:text-teal-700 transition">
                    {h.name}
                  </h4>
                  <p className="text-[11px] text-gray-600 mt-1 flex items-center gap-1">
                    <FaMapMarkerAlt className="text-teal-500" /> {h.location}
                  </p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className={`text-[10px] ${h.statusColor} px-2 py-0.5 rounded-full flex items-center gap-1`}>
                      <FaCheckCircle /> {h.status}
                    </span>
                    <a
                      href={`tel:${h.phone}`}
                      className="text-xs text-teal-600 font-bold hover:underline flex items-center gap-1"
                    >
                      <FaPhoneAlt /> {h.phone.replace('+91', '')}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* PHC Centres */}
          <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 h-full">
            <div className="flex justify-between items-center mb-4 border-b border-indigo-200 pb-2">
              <h3 className="text-lg font-bold text-indigo-800 flex items-center gap-2">
                <FaClinicMedical /> शासकीय आरोग्य केंद्रे (PHC)
              </h3>
            </div>

            <button
              onClick={findNearbyPHC}
              className="w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold py-2 px-4 rounded mb-4 text-sm transition flex items-center justify-center border border-indigo-200 shadow-sm"
            >
              <FaLocationArrow className="mr-2" /> माझ्या जवळचे केंद्र शोधा
            </button>

            {nearbyPHC && (
              <div className="mb-4 p-3 bg-white rounded border border-indigo-200 text-sm shadow-sm transition-all duration-300">
                {nearbyPHC}
              </div>
            )}

            <ul className="space-y-3">
              {phcCentres.map((p) => (
                <li key={p.id} className="bg-white p-2 rounded shadow-sm border-l-4 border-indigo-500">
                  <span className="font-bold text-gray-800 text-sm block">{p.name}</span>
                  <span className="text-[11px] text-gray-600 flex items-center gap-1">
                    <FaMapMarkerAlt className="text-indigo-400" /> {p.location}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Blood Banks & Civic Services */}
          <div className="bg-orange-50 p-5 rounded-lg border border-orange-100 h-full">
            <h3 className="text-lg font-bold text-orange-800 mb-4 border-b border-orange-200 pb-2 flex items-center gap-2">
              <FaHandHoldingWater /> रक्तपेढ्या व नागरी सेवा
            </h3>
            <ul className="space-y-3">
              {civicServices.map((s) => (
                <li key={s.id} className="flex justify-between items-center bg-white p-2 rounded border border-orange-50 shadow-sm">
                  <div>
                    <span className="font-semibold text-gray-700 text-sm block flex items-center gap-1">
                      {s.icon === 'burn' && <FaBurn className="text-red-500" />}
                      {s.icon === 'bulb' && <FaLightbulb className="text-yellow-500" />}
                      {s.icon === 'trash' && <FaTrashAlt className="text-green-500" />}
                      {s.name}
                    </span>
                    <span className="text-[11px] text-gray-500 flex items-center gap-1">
                      <FaHeadset className="text-gray-400" /> {s.location}
                    </span>
                  </div>
                  <a
                    href={`tel:${s.phone}`}
                    className="text-orange-600 font-bold hover:underline bg-orange-100 px-2 py-1 rounded text-xs flex-shrink-0 flex items-center gap-1"
                  >
                    <FaPhone /> Call
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Jobs */}
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 h-full">
            <h3 className="text-lg font-bold text-blue-800 mb-4 border-b border-blue-200 pb-2 flex items-center gap-2">
              <FaBriefcase /> नोकरी विषयक (Jobs)
            </h3>
            <ul className="space-y-3">
              {jobs.map((j) => (
                <li key={j.id} className="bg-white p-3 rounded shadow-sm border-l-4 border-blue-500 group cursor-pointer hover:bg-gray-50">
                  <div className={`flex ${j.isNew ? 'justify-between' : 'justify-end'} items-start`}>
                    {j.isNew && (
                      <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1 py-0.5 rounded uppercase">
                        नवीन
                      </span>
                    )}
                    <span className="text-[10px] text-gray-500 flex items-center gap-1">
                      <FaMapMarkerAlt /> {j.location}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm mt-1 group-hover:text-blue-700 transition">
                    {j.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{j.meta}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Transport */}
          <div className="bg-green-50 p-5 rounded-lg border border-green-100 h-full">
            <h3 className="text-lg font-bold text-green-800 mb-4 border-b border-green-200 pb-2 flex items-center gap-2">
              <FaBus /> वाहतूक व स्थानके
            </h3>
            <ul className="space-y-3">
              {transport.map((t) => (
                <li key={t.id} className="bg-white p-3 rounded shadow-sm border border-green-100">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-sm text-gray-800 flex items-center gap-2">
                      {t.type === 'bus' && <FaBusAlt className="text-green-600" />}
                      {t.type === 'train' && <FaTrain className="text-green-600" />}
                      {t.name}
                    </h4>
                    {t.phone && (
                      <a
                        href={`tel:${t.phone}`}
                        className="text-[10px] font-bold text-green-700 hover:underline bg-green-50 px-2 py-1 rounded border border-green-200 flex-shrink-0 flex items-center gap-1"
                      >
                        <FaPhone /> Call
                      </a>
                    )}
                    {t.link && (
                      <a
                        href={t.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold text-blue-600 hover:underline flex-shrink-0 flex items-center gap-1"
                      >
                        Live Status <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500 flex items-center gap-1">
                    <FaMapMarkerAlt /> {t.location}
                  </p>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-1">{t.desc}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}

export default MainData;