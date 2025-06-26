import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Situs Saya',
  description: 'Contoh navbar sederhana dengan Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-papapapapap..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="bg-white dark:bg-sacramento">
        {/* NAVBAR */}
        <nav className="bg-sacramento text-white">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="frent.png"
                className="h-10"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Frent.com
              </span>
            </Link>

            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              {[
                ['Home', '/'],
                ['Services', '/layanan'],
                ['Product', '/produk'],
                ['About', '/tentangkami'],
                ['Contact', '/kontak'],
              ].map(([label, href], idx) => (
                <li key={idx}>
                  <Link href={href} className="hover:underline text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* CONTENT */}
        <main className="min-h-screen">{children}</main>

        {/* FOOTER */}
        <footer className="bg-sacramento text-white">
          <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1">
                <img
                  className="h-20"
                  src="frent.png"
                  alt="frent.com"
                />
                <p className="mt-4 text-base text-white-300">
                  The agricultural industry is evolving with advanced agriculture and technology solutions.
                </p>
                <div className="mt-6 flex space-x-6">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="text-white-300 hover:text-white"
                    >
                      <i className={`fab fa-${icon} text-xl`} />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-2 text-white-300">
                  <li><a href="#" className="hover:text-white">Drone Rental Services</a></li>
                  <li><a href="#" className="hover:text-white">Drone Pilots Services</a></li>
                  <li><a href="#" className="hover:text-white">Tractor Rental Services</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-2 text-white-300">
                  <li><a href="/layanan" className="hover:text-white">Services</a></li>
                  <li><a href="/produk" className="hover:text-white">Product</a></li>
                  <li><a href="/tentangkami" className="hover:text-white">About Us</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">Address</h3>
                <p className="mt-4 text-white-300">
                  Jl. Raya Utama xxxx No. 123<br />
                  Sidoarjo, Indonesia, 12345
                </p>
                <p className="mt-4 text-white font-semibold">Email</p>
                <p className="mt-1 text-white-300">frent@agritech.com</p>
              </div>
            </div>

            <div className="mt-8 border-t border-white-300 pt-8">
              <p className="text-base text-center text-white-400">
                &copy; 2024 Frent.com. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
