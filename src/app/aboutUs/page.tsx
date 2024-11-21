import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

function AboutUs() {
    return (
        <div className="bg-white">
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-12 flex-grow">

                    {/* Main Text */}
                    <div className="mt-44 mb-52">
                        <span className="mb-7 font-bold text-green-600 text-7xl block">ECO
                            <span className="text-black">SWAP</span>
                        </span>

                        <span className="font-bold text-black text-2xl block">
                            At EcoSwap, we believe in a world where sustainability and community go hand in hand. Our platform provides an online space
                        </span>
                        <br />
                        <span className="font-bold text-black text-2xl block">
                            for people to exchange items easily, safely, and in an environmentally friendly way.
                        </span>
                    </div>

                    {/* Cards */}
                    <div className="flex flex-wrap justify-center gap-36 mt-auto">
                        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                            <img
                                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                                src="/img/logo_negro.png"
                                alt="Ecoswap logo"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">About Us</h5>
                                <Link href="/">
                                    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition">
                                        Go Back
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

export default AboutUs;
