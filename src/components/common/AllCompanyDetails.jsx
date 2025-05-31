"use client"

import { useState } from "react"
import { Building2, Home, Construction, Factory, Globe, Users, Award, Target, Languages } from "lucide-react"

export default function CompanyShowcase({ companyName = "RKS Infrabuild & Home Pvt. Ltd." }) {
  const [language, setLanguage] = useState("english")

  const companyData = {
    "RKS Infrabuild & Home Pvt. Ltd.": {
      english: {
        title: "Welcome to RKS Infrabuild & Home Pvt. Ltd.",
        description:
          "At RKS Infrabuild & Home Pvt. Ltd., we are redefining the real estate landscape with unmatched expertise, reliability, and a commitment to excellence. Whether you're looking to buy, sell, or develop property, we are your trusted partner for seamless real estate solutions.",
        mission:
          "With a rich legacy of successful projects and a customer-first approach, we provide end-to-end services in property sales, purchase, and land development. Our mission is simple: to turn your real estate dreams into reality.",
        tagline:
          "Join hands with us to explore a world of premium residential, commercial, and project development opportunities – delivered with integrity, transparency, and unmatched quality.",
        servicesTitle: "Our Services",
        services: [
          {
            icon: Home,
            title: "Real Estate Sales & Purchase",
            description:
              "We help you find the perfect property or the ideal buyer with expert guidance and support throughout the transaction process.",
          },
          {
            icon: Construction,
            title: "Project Land Development",
            description:
              "Our experienced team specializes in transforming raw land into ready-to-use spaces, tailored to meet market demands and regulatory compliance.",
          },
          {
            icon: Building2,
            title: "Residential & Commercial Solutions",
            description:
              "Whether it's your dream home or a commercial investment, we offer a curated portfolio of properties that align with your aspirations and budget.",
          },
          {
            icon: Users,
            title: "End-to-End Real Estate Consulting",
            description:
              "From site selection to legal paperwork, we handle every detail to ensure your real estate journey is smooth and stress-free.",
          },
        ],
      },
      hindi: {
        title: "RKS Infrabuild & Home Pvt. Ltd. में आपका स्वागत है",
        description:
          "RKS Infrabuild & Home Pvt. Ltd. रियल एस्टेट की दुनिया में विश्वास, गुणवत्ता और उत्कृष्टता के साथ एक नया मुकाम स्थापित कर रहा है। चाहे आप प्रॉपर्टी खरीदना चाह रहे हों, बेचना चाह रहे हों, या जमीन का विकास कराना चाहते हों – हम आपके हर कदम पर भरोसेमंद साथी हैं।",
        mission:
          "हमारी समृद्ध विरासत और ग्राहकों को सर्वोपरि रखने के दृष्टिकोण के साथ, हम रियल एस्टेट खरीद, बिक्री और प्रोजेक्ट भूमि विकास की संपूर्ण सेवाएँ प्रदान करते हैं। हमारा उद्देश्य सरल है – आपके सपनों को हकीकत में बदलना।",
        tagline:
          "आइए हमारे साथ जुड़कर रिहायशी, व्यावसायिक और प्रोजेक्ट विकास के बेहतरीन अवसरों की खोज करें – ईमानदारी, पारदर्शिता और बेहतरीन गुणवत्ता के साथ।",
        servicesTitle: "हमारी सेवाएँ",
        services: [
          {
            icon: Home,
            title: "रियल एस्टेट खरीद और बिक्री",
            description: "हम आपको आपके सपनों की प्रॉपर्टी या सही खरीदार खोजने में विशेषज्ञ सलाह और संपूर्ण सहायता प्रदान करते हैं।",
          },
          {
            icon: Construction,
            title: "प्रोजेक्ट भूमि विकास",
            description:
              "हमारी अनुभवी टीम कच्ची जमीन को तैयार प्रोजेक्ट साइट में बदलने का काम करती है, बाजार की जरूरतों और सरकारी मानकों के अनुसार।",
          },
          {
            icon: Building2,
            title: "रिहायशी और व्यावसायिक समाधान",
            description:
              "चाहे आपका सपना हो एक सुंदर घर या कोई व्यावसायिक निवेश – हम आपके बजट और आवश्यकताओं के अनुसार बेहतरीन विकल्प पेश करते हैं।",
          },
          {
            icon: Users,
            title: "एंड-टू-एंड रियल एस्टेट कंसल्टिंग",
            description:
              "साइट चयन से लेकर कानूनी दस्तावेज तक, हम आपके हर कदम का ध्यान रखते हैं ताकि आपका रियल एस्टेट सफर आसान और तनावमुक्त रहे।",
          },
        ],
      },
    },
    "New RK Construction": {
      english: {
        title: "Welcome to New RK Construction",
        description:
          "New RK Construction is a leading construction company that undertakes all types of projects, both government and private. With a commitment to quality, trust, and timely delivery, we turn every project into a success story.",
        mission:
          "From building construction, roads, bridges, commercial complexes, to any other construction work – New RK Construction is ready to turn challenges into opportunities.",
        tagline:
          "We believe in building strong partnerships with our clients and ensuring a transparent process, so that every project exceeds expectations.",
        servicesTitle: "Our Services",
        services: [
          {
            icon: Award,
            title: "Government Construction Projects",
            description:
              "We specialize in completing a variety of government projects such as roads, buildings, bridges, and other infrastructure works efficiently and reliably.",
          },
          {
            icon: Building2,
            title: "Private Construction Projects",
            description:
              "For private companies and individuals, we deliver residential, commercial, and industrial buildings that meet modern design standards and superior quality.",
          },
          {
            icon: Target,
            title: "Turnkey Construction Solutions",
            description:
              "We handle your project from start to finish – design, construction, quality control, and on-time delivery – so you don't have to worry about a thing.",
          },
          {
            icon: Users,
            title: "Budget-Friendly Construction Services",
            description:
              "We offer affordable and durable construction solutions tailored to our clients' budgets and needs.",
          },
        ],
      },
      hindi: {
        title: "New RK Construction में आपका स्वागत है",
        description:
          "New RK Construction एक अग्रणी निर्माण कंपनी है जो सरकारी और निजी दोनों क्षेत्रों में हर प्रकार के निर्माण कार्यों का उत्तरदायित्व लेती है। हम गुणवत्ता, भरोसे और समयबद्धता के साथ हर प्रोजेक्ट को पूरा करते हैं।",
        mission:
          "चाहे बात हो इमारत निर्माण, सड़क निर्माण, पुल, कमर्शियल कॉम्प्लेक्स या किसी भी अन्य प्रकार के निर्माण की – New RK Construction हर चुनौती को अवसर में बदलने के लिए तैयार है।",
        tagline:
          "हम अपने ग्राहकों के साथ मजबूत साझेदारी और पारदर्शी प्रक्रिया पर विश्वास करते हैं, ताकि हर प्रोजेक्ट उनकी उम्मीदों से बेहतर बन सके।",
        servicesTitle: "हमारी सेवाएँ",
        services: [
          {
            icon: Award,
            title: "सरकारी निर्माण परियोजनाएँ",
            description:
              "हम सरकारी विभागों के लिए विभिन्न प्रकार के निर्माण प्रोजेक्ट जैसे सड़कें, भवन, पुल और अन्य इन्फ्रास्ट्रक्चर परियोजनाएँ सफलतापूर्वक पूरा करते हैं।",
          },
          {
            icon: Building2,
            title: "निजी निर्माण परियोजनाएँ",
            description:
              "निजी कंपनियों और व्यक्तियों के लिए हम आवासीय, व्यावसायिक और औद्योगिक भवनों का निर्माण करते हैं, जो आधुनिक डिज़ाइन और बेहतरीन गुणवत्ता के साथ तैयार होते हैं।",
          },
          {
            icon: Target,
            title: "पूर्ण निर्माण समाधान",
            description:
              "हम आपके प्रोजेक्ट की पूरी जिम्मेदारी लेते हैं – डिज़ाइन, निर्माण, क्वालिटी कंट्रोल और समय पर डिलीवरी तक, ताकि आपको किसी भी परेशानी का सामना न करना पड़े।",
          },
          {
            icon: Users,
            title: "बजट के अनुसार निर्माण सेवाएँ",
            description: "हम अपने ग्राहकों की बजट और आवश्यकताओं के अनुसार किफायती और टिकाऊ निर्माण समाधान प्रदान करते हैं।",
          },
        ],
      },
    },
    "Nirvdit All Making Products": {
      english: {
        title: "Welcome to Nirvdit All Making Products",
        description:
          "At Nirvdit All Making Products, we are dedicated to producing high-quality products that nourish homes, businesses, and farms. From nutritious cattle feed to everyday home food essentials and grocery items, we manufacture with precision, care, and a commitment to quality.",
        mission:
          "Our mission is to deliver top-quality products that meet market demands and exceed customer expectations. With a focus on innovation, hygiene, and affordability, we ensure that every product is crafted to perfection and reaches consumers with freshness and trust.",
        tagline: "Quality products for homes, farms, and businesses - crafted with care and delivered with trust.",
        servicesTitle: "Our Services & Products",
        services: [
          {
            icon: Factory,
            title: "Cattle Feed Manufacturing",
            description:
              "We produce balanced and nutrient-rich cattle feed designed to promote livestock health, improve productivity, and ensure overall farm efficiency.",
          },
          {
            icon: Home,
            title: "Home Food Production",
            description:
              "Our home food segment includes a variety of items such as flour, pulses, spices, and packaged food products made with the highest quality standards and hygiene practices.",
          },
          {
            icon: Building2,
            title: "Grocery Items Manufacturing",
            description:
              "From daily essentials to specialized grocery items, we manufacture and distribute a wide range of products that meet household and commercial needs.",
          },
          {
            icon: Globe,
            title: "Wholesale and Retail Distribution",
            description:
              "We supply our products both in bulk for businesses and through retail channels, ensuring easy accessibility and affordability for all customers.",
          },
        ],
      },
      hindi: {
        title: "Nirvdit All Making Products में आपका स्वागत है",
        description:
          "Nirvdit All Making Products गुणवत्ता से भरपूर उत्पाद बनाने के लिए समर्पित है, जो आपके घर, व्यवसाय और खेती में पोषण और संतोष लाते हैं। पोषक तत्वों से भरपूर पशु आहार से लेकर रोजमर्रा के घरेलू खाद्य पदार्थ और किराना सामान तक – हम हर प्रोडक्ट को बेहतरीन गुणवत्ता और विश्वसनीयता के साथ बनाते हैं।",
        mission:
          "हमारा लक्ष्य है कि हम ग्राहकों की उम्मीदों से बढ़कर बेहतरीन गुणवत्ता वाले उत्पाद उपलब्ध कराएँ। हम नवाचार, स्वच्छता और उचित कीमत पर विशेष ध्यान देते हैं ताकि हर प्रोडक्ट ताजगी और विश्वास के साथ ग्राहकों तक पहुँचे।",
        tagline: "घर, खेत और व्यवसाय के लिए गुणवत्तापूर्ण उत्पाद - देखभाल के साथ बनाए गए और विश्वास के साथ पहुंचाए गए।",
        servicesTitle: "हमारी सेवाएँ और उत्पाद",
        services: [
          {
            icon: Factory,
            title: "पशु आहार निर्माण",
            description:
              "हम संतुलित और पोषक तत्वों से भरपूर पशु आहार का उत्पादन करते हैं, जिससे पशुओं का स्वास्थ्य बेहतर होता है और फार्म की उत्पादकता बढ़ती है।",
          },
          {
            icon: Home,
            title: "घरेलू खाद्य उत्पादन",
            description:
              "हमारा घरेलू खाद्य खंड आटा, दालें, मसाले और अन्य पैकेज्ड खाद्य उत्पादों का उत्पादन करता है, जो उच्च गुणवत्ता और स्वच्छता मानकों के अनुसार बनाए जाते हैं।",
          },
          {
            icon: Building2,
            title: "किराना सामग्री निर्माण",
            description:
              "रोजमर्रा की जरूरतों से लेकर विशेष किराना उत्पादों तक, हम एक विस्तृत रेंज तैयार करते हैं जो घरेलू और व्यावसायिक जरूरतों को पूरा करती है।",
          },
          {
            icon: Globe,
            title: "थोक और खुदरा वितरण",
            description:
              "हम अपने उत्पादों को थोक व्यापारियों और खुदरा चैनलों के माध्यम से उपलब्ध कराते हैं, जिससे हर ग्राहक तक आसानी और उचित मूल्य पर उत्पाद पहुँचें।",
          },
        ],
      },
    },
    Aamars: {
      english: {
        title: "Aamars – A Trusted Name in Quality",
        description:
          "At Aamars, we are dedicated to excellence in the manufacturing and marketing of cattle feed, home food essentials, and grocery products. We understand the unique needs of homes, farms, and businesses, and we deliver top-quality products that meet and exceed expectations.",
        mission:
          "Each product from Aamars is a promise of quality, nutrition, and freshness, ensuring that our customers can rely on us time and time again. Aamars is more than just a brand – it's a commitment to providing every family and business with products that enrich lives.",
        tagline:
          'Every product we create at Aamars is backed by our core principle: "No compromise on quality." We are committed to bringing happiness and well-being to every home and business.',
        servicesTitle: "Our Products & Services",
        services: [
          {
            icon: Factory,
            title: "Cattle Feed Manufacturing",
            description:
              "Aamars produces high-quality cattle feed designed to support livestock health, enhance productivity, and contribute to overall farm success. Our feeds are scientifically formulated with balanced nutrition.",
          },
          {
            icon: Home,
            title: "Home Food Manufacturing",
            description:
              "Aamars' home food range – including flour, pulses, rice, spices, and packaged food items – combines purity, hygiene, and exceptional taste. Every pack brings a home-like taste and trust to our customers.",
          },
          {
            icon: Building2,
            title: "Grocery Products Manufacturing",
            description:
              "From daily essentials to specialty grocery items, Aamars offers a wide selection of products that meet the needs of both households and businesses.",
          },
          {
            icon: Globe,
            title: "Wholesale & Retail Distribution",
            description:
              "Our products are available through a strong network of wholesalers and retailers, ensuring easy access and competitive prices for all customers.",
          },
        ],
      },
      hindi: {
        title: "Aamars – भरोसे का नाम गुणवत्ता में",
        description:
          "Aamars, अपने क्षेत्र में अग्रणी, पशु आहार, घरेलू खाद्य और किराना उत्पादों के निर्माण और विपणन में समर्पित है। हम आपके घर, खेत और व्यापार की ज़रूरतों को पूरी तरह से समझते हैं और उन्हें पूरा करने के लिए बेहतरीन उत्पाद तैयार करते हैं।",
        mission:
          "हर प्रोडक्ट में हम गुणवत्ता, पोषण और ताजगी का वादा करते हैं ताकि हमारे ग्राहक हर बार हम पर भरोसा कर सकें। Aamars न सिर्फ एक ब्रांड है बल्कि एक विश्वास है जो ग्राहकों और उनके परिवारों को गुणवत्तापूर्ण जीवन देने के लिए काम करता है।",
        tagline:
          'Aamars का हर उत्पाद हमारे "गुणवत्ता में समझौता नहीं" के सिद्धांत पर आधारित है। हम हर घर और व्यवसाय में खुशहाली लाने के लिए प्रतिबद्ध हैं।',
        servicesTitle: "हमारी सेवाएँ और उत्पाद",
        services: [
          {
            icon: Factory,
            title: "पशु आहार निर्माण",
            description:
              "Aamars उच्च गुणवत्ता वाले पशु आहार का निर्माण करता है, जो पशुओं के स्वास्थ्य, उत्पादन और संपूर्ण फार्म की सफलता में अहम भूमिका निभाता है। हमारे फ़ीड्स संतुलित पोषण और वैज्ञानिक दृष्टिकोण से तैयार किए जाते हैं।",
          },
          {
            icon: Home,
            title: "घरेलू खाद्य उत्पादन",
            description:
              "Aamars के घरेलू खाद्य उत्पाद – जैसे आटा, दालें, चावल, मसाले और पैकेज्ड फूड – शुद्धता, स्वच्छता और बेहतरीन स्वाद का अद्वितीय संयोजन हैं। हर पैक में हम ग्राहकों को घर जैसा स्वाद और भरोसा देते हैं।",
          },
          {
            icon: Building2,
            title: "किराना सामग्री निर्माण",
            description:
              "रोजमर्रा की जरूरतों के लिए Aamars एक वृहद श्रेणी के किराना उत्पाद तैयार करता है जो हर घर की जरूरत को पूरा करते हैं – चाहे वो घरेलू हो या व्यावसायिक।",
          },
          {
            icon: Globe,
            title: "थोक और खुदरा आपूर्ति",
            description:
              "हम अपने उत्पादों को बाजार में थोक विक्रेताओं और खुदरा दुकानों के माध्यम से आसानी से उपलब्ध कराते हैं ताकि हर ग्राहक तक सर्वोत्तम गुणवत्ता और उचित मूल्य पर उत्पाद पहुँचें।",
          },
        ],
      },
    },
  }

  const currentData = companyData[companyName]?.[language]

  const toggleLanguage = () => {
    setLanguage(language === "english" ? "hindi" : "english")
  }

  if (!currentData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Company Not Found</h1>
          <p className="text-gray-600">Please check the company name and try again.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header with Language Switcher */}
      <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{companyName}</h1>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-md"
            aria-label={language === "english" ? "Switch to Hindi" : "Switch to English"}
          >
            <Languages className="w-5 h-5" />
            <span className="font-medium">{language === "english" ? "हिंदी" : "English"}</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {currentData.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg sm:text-xl text-center max-w-4xl mx-auto">{currentData.description}</p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-500">
              <p className="text-lg font-medium text-gray-800">{currentData.mission}</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
              <p className="text-lg font-medium text-gray-800 italic">{currentData.tagline}</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{currentData.servicesTitle}</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentData.services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>

    
    </div>
  )
}
