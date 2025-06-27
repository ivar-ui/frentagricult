'use client';

import './globals.css';
import Image from 'next/image';

export default function Page() {
  function handleApplyClick() {
    alert('Lamaran belum tersedia');
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[600px] bg-gray-900">
        <Image
          src="/konten1 (2).jpg"
          alt="Hero Background"
          fill
          className="absolute inset-0 object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl leading-tight">
              Agricultural Transformation: <br />
              Moving Towards Indonesia’s Future
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              From AI-powered drones to smart irrigation systems, Indonesia is embracing a digital revolution in farming.
            </p>
            <div className="mt-10 flex gap-x-4 flex-wrap">
              <button className="bg-custom text-white rounded px-8 py-3 hover:bg-opacity-90 transition">
                Mulai Sekarang
              </button>
              <a
                href="/tentangkami"
                className="text-white border-2 border-white rounded px-8 py-3 hover:bg-white hover:text-gray-900 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              We provide high-quality, reliable, and tech-driven services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/layanan1.jpg",
                title: "Drone Rental Services",
                desc: "Rent a drone for photography, farming, inspection, and more. Affordable & high-quality!",
              },
              {
                image: "/layanan2.jpg",
                title: "Precision Agriculture",
                desc: "Use cutting-edge technology to monitor crops and boost productivity through smart analytics.",
              },
              {
                image: "/layanan3.jpg",
                title: "Land Survey & Mapping",
                desc: "Get accurate topographic data and digital maps for your farming or construction project.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={256}
                  className="object-cover w-full h-64"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Why Choose Our Trusted Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'fas fa-bolt',
                title: 'High-Quality Equipment and Tools',
                desc: 'Modern and well-maintained tools for the best results.',
                image: '/feature1.jpg',
              },
              {
                icon: 'fas fa-shield-alt',
                title: 'Professional & Experienced Team',
                desc: 'Skilled experts ensuring top-notch service.',
                image: '/feature2.jpg',
              },
              {
                icon: 'fas fa-headset',
                title: 'Customer Satisfaction Guaranteed',
                desc: 'Dedicated support and excellent service.',
                image: '/feature3.jpg',
              },
              {
                icon: 'fas fa-chart-line',
                title: 'Safety & Reliability Service',
                desc: 'Strict quality standards for secure and dependable operations.',
                image: '/feature4.jpg',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={160}
                  className="w-full h-40 object-cover rounded-md mb-5"
                />
                <div className="inline-flex items-center justify-center w-12 h-12 bg-custom text-white rounded-full shadow mb-4">
                  <i className={`${feature.icon} text-xl`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-4 text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S NEW SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Apa yang Baru?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Update terbaru dari Frent.com untuk pertanian masa depan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/baru0.jpg",
                title: "Peluncuran Sensor pH Tanah 2025",
                desc: "Sensor generasi terbaru kami hadir dengan akurasi tinggi dan integrasi AI.",
              },
              {
                image: "/baru2.png",
                title: "Platform Web Dashboard v2",
                desc: "Kini petani bisa memonitor seluruh aktivitas lahan dari satu layar.",
              },
              {
                image: "/baru3.jpg",
                title: "Kemitraan Baru dengan Koperasi Tani",
                desc: "Kami menjalin kerja sama strategis untuk distribusi teknologi lebih luas.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON SECTION */}
      <section className="bg-custom text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">Segera Hadir</h2>
          <p className="mb-12 text-lg max-w-2xl mx-auto">
            Kami sedang mempersiapkan teknologi baru untuk membuat pertanian makin cerdas, cepat, dan terukur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: "fas fa-robot",
                title: "Drone Otomatis Tanpa Operator",
                desc: "Mampu menyemprot dan memetakan lahan secara otomatis dengan rute AI.",
              },
              {
                icon: "fas fa-globe",
                title: "Marketplace Petani Digital",
                desc: "Tempat petani jual hasil panen langsung ke konsumen dan restoran.",
              },
              {
                icon: "fas fa-graduation-cap",
                title: "Akademi Frent",
                desc: "Kursus online & offline untuk literasi digital petani desa.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white text-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-custom text-white flex items-center justify-center shadow">
                    <i className={`${item.icon} text-xl`}></i>
                  </div>
                  <h4 className="ml-4 text-lg font-bold">{item.title}</h4>
                </div>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS SECTION */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Bergabunglah dengan Tim Kami</h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-12">
            Frent mencari talenta terbaik untuk membangun masa depan pertanian Indonesia. Yuk, jadi bagian dari revolusi!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Frontend Developer (React/Next.js)",
                desc: "Membangun UI dashboard petani berbasis data real-time dan desain responsif.",
                location: "Remote / Yogyakarta",
              },
              {
                title: "Ahli Agronomi Digital",
                desc: "Menjembatani kebutuhan petani dengan sistem berbasis AI & sensor lahan.",
                location: "On-site / Jawa Tengah",
              },
              {
                title: "Customer Success & Training",
                desc: "Mendampingi petani dan koperasi dalam mengoperasikan perangkat Frent.",
                location: "Remote / Regional Support",
              },
            ].map((job, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h4 className="text-xl font-semibold text-gray-800">{job.title}</h4>
                <p className="text-gray-600 mt-2">{job.desc}</p>
                <p className="mt-4 text-sm text-custom font-medium">{job.location}</p>
                <button
                  onClick={handleApplyClick}
                  className="mt-4 inline-block bg-custom text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
                >
                  Lamar Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
