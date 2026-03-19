'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const WHATSAPP_URL =
    'https://wa.me/31645821782?text=Hallo%20Shelley%27s%20Tours%2C%20ik%20wil%20graag%20meer%20informatie!';

const rawTrips = [
    {
        destination: 'Oberhausen / Duisburg',
        description: 'Dagtrip Duitsland',
        date: 'Za 28 maart',
        price: 'v.a. €30,50',
        image: '/images/oberhausen/duisburg.png',
        color: 'bg-orange',
        colorHex: '#F5A623',
        details: ['€40,50 per volwassene', '€35,50 kind (4–10 jr)', '€30,50 kind (0–3 jr)']
    },
    {
        destination: 'Euro Disney',
        description: 'Mei Vakantie',
        date: 'Za 25 – Ma 28 april',
        price: 'v.a. €465 pp',
        image: 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600&h=400&fit=crop',
        color: 'bg-navy',
        colorHex: '#1B2E5C',
        details: ['Vanaf €465,00 per persoon', 'ED kaart v.a. €99,00', 'Toeslag op 1 en 2 pers. kamers']
    },
    {
        destination: 'Antwerpen',
        description: 'Shopping Dagtrip',
        date: 'Za 23 mei',
        price: 'v.a. €30,50',
        image: '/images/Antwerpen.png',
        color: 'bg-sky',
        colorHex: '#87CEEB',
        details: ['€40,50 per volwassene', '€35,50 kind (4–10 jr)', '€30,50 kind (0–3 jr)']
    },
    {
        destination: 'Wuppertal / Düsseldorf',
        description: 'Dagtrip Duitsland',
        date: 'Za 30 mei',
        price: 'v.a. €30,50',
        image: '/images/dusseldorf.png',
        color: 'bg-orange',
        colorHex: '#F5A623',
        details: ['€40,50 per volwassene', '€35,50 kind (4–10 jr)', '€30,50 kind (0–3 jr)']
    },
    {
        destination: 'Essen',
        description: 'Dagtrip Duitsland',
        date: 'Za 6 juni',
        price: 'v.a. €30,50',
        image: '/images/Essen.png',
        color: 'bg-navy',
        colorHex: '#1B2E5C',
        details: ['€40,50 per volwassene', '€35,50 kind (4–10 jr)', '€30,50 kind (0–3 jr)']
    },
    {
        destination: 'MoviePark',
        description: 'Pretpark Dagtrip',
        date: 'Za 27 juni',
        price: 'v.a. €35,50',
        image: '/images/moviepark.png',
        color: 'bg-sky',
        colorHex: '#87CEEB',
        details: ['€90,00 (11–100 jr)', '€80,00 kind (4–10 jr)', 'v.a. €35,50 (0–3 jr)']
    },
    {
        destination: 'Pretpark',
        description: 'Dagtrip',
        date: 'Za 11 juli',
        price: 'v.a. €...,50 pp',
        image: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=600&h=400&fit=crop',
        color: 'bg-orange',
        colorHex: '#F5A623',
        details: ['Vanaf €...,50 per persoon']
    },
    {
        destination: 'Euro Disney Parijs',
        description: 'Zomervakantie',
        date: 'Za 19 – Di 22 juli',
        price: 'v.a. €465 pp',
        image: 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600&h=400&fit=crop',
        color: 'bg-navy',
        colorHex: '#1B2E5C',
        details: [
            'Incl. busvervoer / hotel (3 dgn)',
            'Vanaf €465,00 per persoon',
            'ED kaart v.a. €99,00',
            'Toeslag op 1 en 2 pers. kamers'
        ]
    },
    {
        destination: 'Parijs Shopping',
        description: 'Zomervakantie',
        date: 'Juli',
        price: 'v.a. €465 pp',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop',
        color: 'bg-sky',
        colorHex: '#87CEEB',
        details: ['Incl. busvervoer / hotel', 'Vanaf €465,00 per persoon', 'Toeslag op 1 en 2 pers. kamers']
    },
    {
        destination: 'Gelsenkirchen / Bochum',
        description: 'Dagtrip Duitsland',
        date: 'Za 22 augustus',
        price: 'v.a. €30,50',
        image: '/images/bochum.png',
        color: 'bg-orange',
        colorHex: '#F5A623',
        details: ['€40,50 per volwassene', '€35,50 kind (4–10 jr)', '€30,50 kind (0–3 jr)']
    },
    {
        destination: 'Notting Hill Carnaval',
        description: 'Londen Weekend',
        date: 'Za 29 aug – Ma 1 sep',
        price: 'v.a. €599 pp',
        image: '/images/nothing hill.png',
        color: 'bg-navy',
        colorHex: '#1B2E5C',
        details: ['Incl. busvervoer / overtocht / hotel', 'Vanaf €599,00 per persoon', 'Toeslag op 1 en 2 pers. kamers']
    },
    {
        destination: 'Essen',
        description: 'Dagtrip Duitsland',
        date: 'Za 26 september',
        price: 'v.a. €30,50',
        image: '/images/Essen.png',
        color: 'bg-sky',
        colorHex: '#87CEEB',
        details: ['€40,50 per volwassene', '€35,50 kind (4–10 jr)', '€30,50 kind (0–3 jr)']
    },
    {
        destination: 'MoviePark',
        description: 'Pretpark Dagtrip',
        date: 'Za 26 september',
        price: 'v.a. €35,50',
        image: '/images/moviepark.png',
        color: 'bg-orange',
        colorHex: '#F5A623',
        details: ['€90,00 (11–100 jr)', '€80,00 kind (4–10 jr)', 'v.a. €35,50 (0–3 jr)']
    },
    {
        destination: 'Spanje (Noord Holland)',
        description: 'Herfstvakantie',
        date: 'Vr 10 – Za 18 oktober',
        price: 'v.a. €395 pp',
        image: '/images/lloret de mar.png',
        color: 'bg-navy',
        colorHex: '#1B2E5C',
        details: [
            'Hotels 4★ / Appartementen',
            'Vanaf €699,00 per volwassene',
            'Toeslag op 1 en 2 pers. kamers',
            'Vanaf €395,00'
        ]
    },
    {
        destination: 'Spanje (Midden Holland)',
        description: 'Herfstvakantie',
        date: 'Do 16 – Vr 24 oktober',
        price: 'v.a. €395 pp',
        image: '/images/lloret de mar.png',
        color: 'bg-sky',
        colorHex: '#87CEEB',
        details: [
            'Midden en Zuid Holland',
            'Hotels 4★ / Appartementen',
            'Vanaf €699,00 per volwassene',
            'Toeslag op 1 en 2 pers. kamers',
            'Vanaf €395,00'
        ]
    },
    {
        destination: 'Kerstmarkten',
        description: 'Dagtrip',
        date: 'Za 21 november',
        price: 'v.a. €30,50',
        image: '/images/kerstmarkten.png',
        color: 'bg-orange',
        colorHex: '#F5A623',
        details: ['€40,50 per volwassene', '€35,50 kind (4–10 jr)', '€30,50 kind (0–3 jr)']
    },
    {
        destination: 'Kerstmarkten',
        description: 'Dagtrip',
        date: 'Za 12 december',
        price: 'v.a. €30,50',
        image: '/images/kerstmarkten2.png',
        color: 'bg-navy',
        colorHex: '#1B2E5C',
        details: ['€40,50 per volwassene', '€35,50 kind (4–10 jr)', '€30,50 kind (0–3 jr)']
    }
];

const DEFAULT_PICKUP_LOCATION = 'Holendrecht Station';
const DEFAULT_PICKUP_TIME = '08:00';
const PICKUP_TIME_OVERRIDES: Record<string, string> = {
    'Euro Disney': '07:00',
    'Euro Disney Parijs': '07:00',
    'Spanje (Noord Holland)': '19:30',
    'Lloret de Mar': '19:30'
};

export const trips = rawTrips.map((trip) => ({
    ...trip,
    pickupLocation: DEFAULT_PICKUP_LOCATION,
    pickupTime: PICKUP_TIME_OVERRIDES[trip.destination] ?? DEFAULT_PICKUP_TIME
}));

// Duplicate trips for infinite illusion
const extendedTrips = [...trips, ...trips, ...trips];

const TripCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(trips.length);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [visibleCount, setVisibleCount] = useState(3);
    const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);

    const toggleFlip = (index: number) => {
        setFlippedCards((prev) => {
            const next = new Set(prev);
            if (next.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }

            return next;
        });
    };
    const trackRef = useRef<HTMLDivElement>(null);

    const gap = visibleCount === 1 ? 0 : 24;

    useEffect(() => {
        const update = () => setVisibleCount(window.innerWidth < 768 ? 1 : 3);
        update();
        window.addEventListener('resize', update);

        return () => window.removeEventListener('resize', update);
    }, []);

    const handleTransitionEnd = useCallback(() => {
        if (currentIndex >= trips.length * 2) {
            setIsTransitioning(false);
            setCurrentIndex(currentIndex - trips.length);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsTransitioning(true));
            });
        }
        if (currentIndex < 0) {
            setIsTransitioning(false);
            setCurrentIndex(currentIndex + trips.length);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsTransitioning(true));
            });
        }
    }, [currentIndex]);

    const prev = () => setCurrentIndex((i) => i - 1);
    const next = () => setCurrentIndex((i) => i + 1);

    // Map currentIndex back to original trips for pagination dots
    const realIndex = ((currentIndex % trips.length) + trips.length) % trips.length;

    const cardWidthPercent = visibleCount === 1 ? 100 : 33.333;
    const gapOffset = visibleCount === 1 ? 0 : gap / 3;

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        setTouchEndX(null);
        setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        setTouchEndX(event.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStartX || touchEndX === null) return;
        const distance = touchStartX - touchEndX;
        const minSwipeDistance = 50;

        if (Math.abs(distance) > minSwipeDistance) {
            if (distance > 0) {
                next();
            } else {
                prev();
            }
        }

        setTouchStartX(null);
        setTouchEndX(null);
    };

    return (
        <div>
            {/* Carousel */}
            <div
                className='relative overflow-hidden'
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}>
                <div
                    ref={trackRef}
                    className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                    style={{
                        gap: `${gap}px`,
                        transform: `translateX(calc(-${currentIndex} * (${cardWidthPercent}% + ${gapOffset}px)))`
                    }}
                    onTransitionEnd={handleTransitionEnd}>
                    {extendedTrips.map((trip, i) => {
                        const isFlipped = flippedCards.has(i);

                        return (
                            <div
                                key={`${trip.destination}-${i}`}
                                className='shrink-0 cursor-pointer flex-col items-center'
                                style={{ width: visibleCount === 1 ? '100%' : `calc(33.333% - ${(gap * 2) / 3}px)` }}
                                onClick={() => toggleFlip(i)}>
                                <div className='relative mx-auto w-full max-w-sm pb-12 md:w-[85%] md:max-w-none md:pb-14'>
                                    {/* Colored card behind */}
                                    <div
                                        className={`absolute inset-0 top-14 ${trip.color} rounded-full md:top-20`}
                                        style={{ borderBottomRightRadius: 0 }}
                                    />
                                    {/* Oval image / flipped state */}
                                    <div className='relative aspect-[3/4] overflow-hidden rounded-full'>
                                        <img
                                            src={trip.image}
                                            alt={trip.destination}
                                            className={`size-full object-cover transition-opacity duration-500 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
                                            loading='lazy'
                                        />
                                        {/* Click indicator pill */}
                                        <div
                                            className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
                                            <div className='flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-[10px] font-medium text-white/90 shadow-md backdrop-blur-sm md:text-xs'>
                                                <svg
                                                    className='size-3'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    stroke='currentColor'
                                                    strokeWidth={2}>
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                                                    />
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                                                    />
                                                </svg>
                                                <span>Klik voor details</span>
                                            </div>
                                        </div>
                                        {/* Color overlay when flipped */}
                                        <div
                                            className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-500 ${isFlipped ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
                                            style={{ backgroundColor: trip.colorHex }}>
                                            <p className='mb-1 text-xs font-semibold text-white/80 md:text-sm'>
                                                {trip.date}
                                            </p>
                                            <h4 className='mt-2 mb-3 text-center text-sm font-bold text-white md:text-lg'>
                                                {trip.destination}
                                            </h4>
                                            <ul className='space-y-1 text-center'>
                                                {trip.details.map((detail, j) => (
                                                    <li
                                                        key={j}
                                                        className='text-[10px] leading-tight text-white/90 md:text-xs'>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className='mt-3 rounded-full bg-white/15 px-4 py-1 text-[10px] font-semibold text-white/90 md:text-xs'>
                                                Opstap: {trip.pickupLocation} · {trip.pickupTime}
                                            </div>
                                            <a
                                                href={WHATSAPP_URL}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                onClick={(e) => e.stopPropagation()}
                                                className='mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-sm transition-all hover:bg-white/30 md:text-xs'>
                                                Boek via WhatsApp
                                            </a>
                                        </div>
                                        {/* Price pill - only when not flipped */}
                                        <div
                                            className={`absolute top-5 left-1/2 z-10 -translate-x-1/2 transition-opacity duration-300 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
                                            <span
                                                className='inline-block rounded-full px-3 py-0.5 text-[10px] font-bold text-white shadow-md md:px-4 md:py-1 md:text-xs'
                                                style={{ backgroundColor: trip.colorHex }}>
                                                {trip.price}
                                            </span>
                                        </div>
                                    </div>
                                    {/* Destination text in card */}
                                    <div className='relative z-10 mt-1 text-center'>
                                        <p className='text-[9px] font-semibold tracking-widest text-white/70 uppercase md:text-[10px]'>
                                            {trip.description}
                                        </p>
                                        <h3 className='text-sm font-bold text-white md:text-base'>
                                            {trip.destination}
                                        </h3>
                                        <p className='text-[9px] font-medium text-white/60 md:text-[10px]'>
                                            {trip.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Arrows + Pagination */}
            <div className='mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6'>
                <button
                    onClick={prev}
                    className='border-navy/20 text-navy hover:border-orange hover:bg-orange flex size-12 items-center justify-center rounded-full border-2 transition-all duration-200 hover:text-white'>
                    <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
                    </svg>
                </button>

                <div className='text-navy text-xs font-semibold md:hidden'>
                    {realIndex + 1} / {trips.length}
                </div>

                <div className='hidden items-center gap-2 md:flex'>
                    {trips.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(trips.length + i)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                realIndex === i ? 'bg-orange w-8' : 'bg-navy/20 hover:bg-navy/40 w-2.5'
                            }`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    className='border-navy/20 text-navy hover:border-orange hover:bg-orange flex size-12 items-center justify-center rounded-full border-2 transition-all duration-200 hover:text-white'>
                    <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TripCarousel;
