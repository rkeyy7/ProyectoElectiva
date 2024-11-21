import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12 flex-grow">

          {/* Hero Section */}
          <div className="mt-44 mb-52">
            <span className="mb-7 font-bold text-green-600 text-7xl block">ECO
              <span className="text-black">SWAP</span>
            </span>
            <span className="font-bold text-black text-2xl block">
              Exchange What You Have,
            </span>
            <span className="font-bold text-black text-2xl block">
              Get What You Need
            </span>
          </div>

          {/* Cards Section */}
          <div className="flex flex-wrap justify-center gap-36 mt-auto">
            <div className="flex flex-col items-center bg-white border border-green-500 rounded-lg shadow-md md:flex-row md:max-w-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/img/logo_negro.png"
                alt="Ecoswap logo"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">About Us</h5>
                <Link href="/aboutUs">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition">
                    Go
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center bg-white border border-green-500 rounded-lg shadow-md md:flex-row md:max-w-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/img/equipo.jpg"
                alt="Ecoswap team"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Our Team</h5>
                <Link href="/ourTeam">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition">
                    Go
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center bg-white border border-green-500 rounded-lg shadow-md md:flex-row md:max-w-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/img/servicio.png"
                alt="Ecoswap services"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Services</h5>
                <Link href="/servicesProducts">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition">
                    Go
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
