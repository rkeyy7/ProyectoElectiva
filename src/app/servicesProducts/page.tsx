"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Service = {
    id: number;
    name: string;
    description: string;
    image: string;
};

function Services() {
    const services: Service[] = [
        {
            id: 1,
            name: 'Exchanges',
            description: 'We are dedicated to non-profit exchanges of second-hand items, giving a second life to objects we no longer use and creating a community that promotes recycling habits.',
            image: '/img/imagenINT.png',
        },
        {
            id: 2,
            name: 'Portfolio',
            description: 'We offer a wide portfolio for you to make exchanges, with a great variety of categories where you can find the item you need.',
            image: '/img/skin-care.png',
        }
    ];

    const [selectedService, setSelectedService] = useState<Service | null>(null);

    const selectService = (service: Service) => {
        setSelectedService(service);
    };

    return (
        <div>
            <main>
                <div className="min-h-screen flex flex-col justify-between bg-white text-center flex-grow pb-12">
                    <div className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
                        <Header />
                    </div>
                    <h1 className="text-3xl font-bold text-black mb-6 mt-24">Services & Products</h1>
                    <div className="flex flex-wrap justify-center gap-6 flex-grow">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="w-72 h-72 bg-white border border-gray-200 shadow-md rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105 hover:border-green-500"
                                onClick={() => selectService(service)}
                            >
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-64 object-cover rounded-md mb-4"
                                />
                                <h2 className="text-lg font-semibold text-black">{service.name}</h2>
                            </div>
                        ))}
                    </div>
                    {selectedService && (
                        <div className="mt-8 mb-14 bg-gray-100 rounded-lg p-6 max-w-lg mx-auto shadow-lg border-2 border-transparent transition-transform transform hover:border-green-500 hover:scale-105">
                            <h2 className="text-2xl font-semibold text-black mb-4">
                                Details of {selectedService.name}
                            </h2>
                            <img
                                src={selectedService.image}
                                alt={selectedService.name}
                                className="w-40 h-40 object-cover rounded-3xl mx-auto mb-4"
                            />
                            <p className="text-lg text-black">
                                {selectedService.description}
                            </p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Services;
