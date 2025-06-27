'use client';

import Image from 'next/image';

export default function ProductPage() {
  const productList = [
    {
      image: '/layanan1.jpg',
      title: 'DJI Phantom 3 AI Tech',
      desc: 'AI drone for agricultural land mapping and inspection.',
      price: 'Rp 12,999,000',
    },
    {
      image: '/iot0.jpg',
      title: 'Digital Soil Sensor',
      desc: 'Real-time IoT-integrated soil moisture & pH sensor.',
      price: 'Rp 2,499,000',
    },
    {
      image: '/drone2.jpg',
      title: 'DJI Air 3s AgriTech System',
      desc: 'Modern drone for data-driven agricultural monitoring.',
      price: 'Rp 8,999,000',
    },
    {
      image: '/iot5.jpg',
      title: 'Agriculture IoT Node',
      desc: 'Micro device for automatic field data collection.',
      price: 'Rp 4,999,000',
    },
    {
      image: '/iot1.jpg',
      title: 'Smart Weather Station',
      desc: 'Automated weather monitoring integrated with prediction systems.',
      price: 'Rp 6,999,000',
    },
    {
      image: '/iot2.jpg',
      title: 'Automated Irrigation System',
      desc: 'Controls watering based on soil moisture data.',
      price: 'Rp 3,799,000',
    },
    {
      image: '/iot4.jpg',
      title: 'Precision Satellite Mapping',
      desc: 'High-resolution satellite imagery for visual analysis.',
      price: 'Rp 5,999,000',
    },
    {
      image: '/iot3.jpg',
      title: 'IoT Field Camera',
      desc: 'Weatherproof camera with real-time dashboard connectivity.',
      price: 'Rp 4,499,000',
    },
  ];

  const packageList = [
    {
      title: 'Starter Package',
      subtitle: 'For small farmers & digital beginners',
      price: 'Rp 9,999,000',
      items: [
        '1x Monitoring Drone',
        '1x Soil Sensor',
        'AI Platform Access (3 Months)',
        '1x Online Training',
      ],
    },
    {
      title: 'Professional Package',
      subtitle: 'For active farmers & cooperatives',
      price: 'Rp 19,999,000',
      items: [
        '1x Precision Drone',
        '3x IoT Sensors',
        'AI Platform Access (6 Months)',
        'Agronomist Consultation',
      ],
    },
    {
      title: 'Corporate Package',
      subtitle: 'For large-scale & integrated farming',
      price: 'Rp 39,999,000',
      items: [
        '2x Precision Drones',
        '5x IoT Sensors',
        'AI Platform Access (1 Year)',
        'On-site Training',
      ],
    },
  ];

  return (
    <div className="bg-white py-24" id="products-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Product Catalog</h2>
          <p className="mt-4 text-lg text-gray-600">
            Modern solutions for your agricultural and technology needs
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productList.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 flex flex-col justify-between min-h-[420px]"
            >
              <div>
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                <p className="mt-2 text-xl font-bold text-custom">{item.price}</p>
              </div>
              <button className="mt-4 w-full bg-custom text-white rounded-md py-2 hover:bg-opacity-90 transition-colors">
                Order Now
              </button>
            </div>
          ))}
        </div>

        {/* Package Solutions */}
        <div className="mt-24">
          <div className="bg-gray-50 rounded-2xl p-10 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 text-center">Frent Solution Packages</h3>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {packageList.map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow hover:shadow-md transition-shadow flex flex-col justify-between min-h-[400px]"
                >
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{pkg.title}</h4>
                    <p className="text-gray-600 mt-1">{pkg.subtitle}</p>
                    <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                      {pkg.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <i className="fas fa-check text-custom mr-2 text-sm"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mt-6 text-2xl font-bold text-custom">{pkg.price}</p>
                    <button className="mt-4 w-full bg-custom text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                      Choose Package
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
