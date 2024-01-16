"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className='text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
                            Hola, yo soy {''}
                        </span>
                        <br/> 
                        <TypeAnimation
                            sequence={[
                                'Israel',
                                2000, 
                                'Desarrollador BackEnd',
                                2000,
                                'Desarrollador PL/SQL',
                                2000,
                                'Ingeniero de Datos',
                                2000
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                        />
                        
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-gray-500 to-purple-500 hover:bg-slate-200 text-white'>Contáctame</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-gray-500 to-purple-500 bg-transparent hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                Descargar CV
                            </span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-7 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/imagenLogo.png"
                            alt='imagen programador'
                            className='absolute transform -translate-x-1/2 -translate-y-1/3 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
