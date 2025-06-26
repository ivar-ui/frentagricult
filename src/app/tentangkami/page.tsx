'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative h-[500px] bg-gray-900">
        <img
          src="/tentangkami-hero.jpg"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#043927] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-5xl font-bold text-white leading-tight">
            About <span className="text-green-300">Frent.com</span>
          </h1>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/visi1.jpg"
              alt="Frent Team"
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#043927] mb-4">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Frent.com</strong> is a pioneer of agricultural technology in Indonesia, aiming to address food challenges in the modern era.
              We integrate artificial intelligence, drones, and data management to create more efficient and sustainable farming.
            </p>
            <p className="text-lg text-gray-700">
              Founded in 2025, Frent.com emerged as a solution to the technological gap in Indonesia's agriculture sector. With a spirit of innovation, we strive to empower local farmers towards the future of agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-[#043927] mb-4">Our Vision</h3>
            <p className="text-gray-700 text-lg">
              To become a leader in smart agriculture solutions in Southeast Asia with real impact for farmers and the environment.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#043927] mb-4">Our Mission</h3>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Provide precision technology access to all farmers</li>
              <li>Connect farmers with real-time data and AI-based solutions</li>
              <li>Bridge the technology gap between urban and rural areas</li>
              <li>Grow a sustainable agritech ecosystem</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPANY VALUES */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-[#043927] mb-10">Company Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { title: "Innovative", desc: "We constantly experiment with cutting-edge technology for the future of farming." },
              { title: "Collaborative", desc: "Long-term partnerships with farmers, institutions, and communities." },
              { title: "Resilient", desc: "We adapt and persist through industry challenges." },
              { title: "Green", desc: "Our solutions always consider environmental impact." },
            ].map((val, idx) => (
              <div key={idx} className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
                <h4 className="text-xl font-semibold text-[#043927] mb-2">{val.title}</h4>
                <p className="text-gray-700">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY HISTORY */}
      <section className="bg-[#043927] text-white py-24">
        <div className="container mx-auto text-center mb-12 px-4">
          <h3 className="text-3xl font-bold">Our History</h3>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            spaceBetween={30}
            slidesPerView={1}
            className="rounded-lg"
          >
            {[
              {
                year: "2025",
                title: "The Birth of Frent.com",
                desc: "Frent.com was founded as an agritech startup to address the inefficiencies in traditional agriculture in Indonesia.",
                image: "/sejarah1.jpg",
              },
              {
                year: "2026",
                title: "National Collaborations",
                desc: "Partnered with the Ministry of Agriculture and digital startups to expand the impact of technology to local farmers.",
                image: "/sejarah2.jpg",
              },
              {
                year: "2028",
                title: "Regional Expansion",
                desc: "Expanded services to Southeast Asia and launched the Frent Analytics platform for AI-based land management.",
                image: "/sejarah3.jpg",
              },
            ].map((event, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gray-800 p-8 rounded-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-lg w-full h-72 object-cover shadow"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-green-300">{event.year}</h4>
                    <h5 className="text-2xl font-bold mt-2 mb-4">{event.title}</h5>
                    <p className="text-gray-200 text-lg">{event.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="bg-white py-24 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About Frent.com
              </h2>
              <p className="text-lg text-gray-600">
                Frent.com is an agritech startup committed to improving agricultural efficiency in Indonesia through technology.
              </p>
              <p className="text-lg text-gray-600">
                Established in 2025, we have reached thousands of farmers across provinces and countries.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { value: "1,500+", label: "Farmers Empowered" },
                  { value: "20+", label: "Agritech Projects" },
                  { value: "10 Years", label: "Innovation Experience" },
                  { value: "3 Countries", label: "Service Reach" },
                ].map((stat, idx) => (
                  <div key={idx} className="border-l-4 border-green-600 pl-4">
                    <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/tentang-frent.jpg"
                alt="About Frent.com"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
