"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Member = {
    id: number;
    name: string;
    role: string;
    description: string;
    image: string;
};

function Team() {
    const members: Member[] = [
        {
            id: 1,
            name: 'Carlos De la Rosa',
            role: 'Backend Developer',
            description: 'Backend developer with experience in PHP using Laravel and Java with Spring Boot 3. Specialized in relational databases like MySQL and PostgreSQL, focused on building scalable, secure, and efficient applications.',
            image: '/img/carlos1PNG.jfif',
        },
        {
            id: 2,
            name: 'Rubén Castaño',
            role: 'Frontend Developer',
            description: 'Frontend development and design expertise with React, Next.js, JavaScript, HTML, Tailwind, and Bootstrap.',
            image: '/img/rubenPNG.png',
        },
        {
            id: 3,
            name: 'Oscar Castillo',
            role: 'Backend Developer',
            description: 'Knowledge in Java Spring Boot and database management.',
            image: '/img/oscarPNG.png',
        },
        {
            id: 4,
            name: 'Jesús Santana',
            role: 'UX/UI Designer',
            description: 'Creates visual experiences and designs for projects.',
            image: '/img/jesus.jfif',
        },
    ];

    const [selectedMember, setSelectedMember] = useState<Member | null>(null);

    const selectMember = (member: Member) => {
        setSelectedMember(member);
    };

    return (
        <div>
            <main>
                <div className="min-h-screen flex flex-col justify-between bg-white text-center">
                    <div className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
                        <Header />
                    </div>

                    <div className="flex-grow pt-24">
                        <h1 className="text-3xl font-bold text-black mb-6 mt-8">Team Members</h1>
                        <div className="flex flex-wrap justify-center gap-6">
                            {members.map((member) => (
                                <div
                                    key={member.id}
                                    className="w-60 bg-white border border-gray-200 shadow-md rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105 hover:border-green-500"
                                    onClick={() => selectMember(member)}
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-64 object-cover rounded-md mb-4"
                                    />
                                    <h2 className="text-lg font-semibold text-black">{member.name}</h2>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>
                            ))}
                        </div>
                        {selectedMember && (
                            <div className="mt-8 bg-gray-100 rounded-lg p-6 max-w-lg mx-auto shadow-lg border-2 border-transparent transition-transform transform hover:border-green-500 hover:scale-105">
                                <h2 className="text-2xl font-semibold text-black mb-4">
                                    Details of {selectedMember.name}
                                </h2>
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                                />
                                <p className="text-lg text-black">
                                    <strong>Role:</strong> {selectedMember.role}
                                </p>
                                <p className="text-gray-700">
                                    <strong>Description:</strong> {selectedMember.description}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Team;

