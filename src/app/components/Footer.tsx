import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

export default function Footer() {
    return (
        <footer className="bg-[#333333] text-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] dark:shadow-black">
            <div className="container mx-auto p-9">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col md:w-1/3 mb-8 md:mb-0">
                        <div className="flex items-center">
                            <Image
                                src="/img/logo_negro.png"
                                alt="EcoSwap Logo"
                                width={50}
                                height={40}
                                className="mr-2"
                            />
                            <h5 className="text-lg font-bold">EcoSwap</h5>
                        </div>
                        <p className="mt-4">
                            At EcoSwap, we believe in a world where sustainability and community go hand in hand. Our platform provides an online space for people to easily, securely, and environmentally-friendly exchange items.
                        </p>
                    </div>

                    <div className="flex flex-col md:w-1/4">
                        <h5 className="text-lg font-bold mb-4">Contact</h5>
                        <ul className="space-y-2">
                            <li>
                                <span>📞</span> (304) 369-8299
                            </li>
                            <li>
                                <span>✉️</span> ecoswap@gmail.com
                            </li>
                            <li>
                                <span>📍</span> Cedesarrollo
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
