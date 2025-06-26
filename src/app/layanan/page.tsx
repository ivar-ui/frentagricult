export default function ServicesPage() {
    return (
      <div className="bg-white py-24" id="services-section">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Services</h1>
            <p className="mt-6 text-xl text-gray-600">
              Smart agricultural technology to support Indonesian farmers toward a sustainable future.
            </p>
          </div>
  
          <div className="mt-20 grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16">
  
            {/* Card 1: Drone Rental */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="rounded-full bg-custom p-3 text-white">
                  <i className="fas fa-drone text-2xl"></i>
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-900">Agricultural Drone Rental</h3>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Drone services for land monitoring, fertilizing, and precision spraying. Suitable for various types of farming.
              </p>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>Accurate remote sensing</li>
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>High operational efficiency</li>
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>Affordable pricing</li>
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>Direct technical support</li>
              </ul>
              <button className="mt-8 bg-custom text-white rounded-lg px-6 py-3 hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </div>
  
            {/* Card 2: Frent Analytics */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="rounded-full bg-custom p-3 text-white">
                  <i className="fas fa-brain text-2xl"></i>
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-900">Frent Analytics (AI & Data)</h3>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                AI-powered platform for soil analysis, crop yield prediction, and intelligent farm resource management.
              </p>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>Yield prediction</li>
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>Moisture & fertility analysis</li>
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>IoT-based monitoring</li>
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>AI-based recommendations</li>
              </ul>
              <button className="mt-8 bg-custom text-white rounded-lg px-6 py-3 hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </div>
  
            {/* Card 3: Training & Education */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="rounded-full bg-custom p-3 text-white">
                  <i className="fas fa-chalkboard-teacher text-2xl"></i>
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-900">Farmer Training & Education</h3>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Education programs to introduce smart farming technologies and improve digital literacy among local farmers.
              </p>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>Regular workshops & seminars</li>
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>On-site village mentoring</li>
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>Beginner-friendly materials</li>
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>Farmer community support</li>
              </ul>
              <button className="mt-8 bg-custom text-white rounded-lg px-6 py-3 hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </div>
  
            {/* Card 4: Digital Land Management */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="rounded-full bg-custom p-3 text-white">
                  <i className="fas fa-map-marked-alt text-2xl"></i>
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-900">Digital Land Management</h3>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Web and mobile-based system for recording farming activities, land mapping, and harvest tracking.
              </p>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>Precision GIS mapping</li>
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>Land activity history</li>
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>Drone & sensor integration</li>
                <li className="flex items-center"><i className="fas fa-check text-custom mr-3"></i>Digital harvest reports</li>
              </ul>
              <button className="mt-8 bg-custom text-white rounded-lg px-6 py-3 hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  