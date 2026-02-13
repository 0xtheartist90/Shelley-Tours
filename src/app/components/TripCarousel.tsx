'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

const WHATSAPP_URL =
    'https://wa.me/31645821782?text=Hallo%20Shelley%27s%20Tours%2C%20ik%20wil%20graag%20meer%20informatie!';

const trips = [
    {
        destination: 'Düsseldorf',
        description: 'Kerstmarkt',
        price: '€29',
        image: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=600&h=400&fit=crop',
        color: 'bg-orange',
        colorHex: '#F5A623'
    },
    {
        destination: 'Parijs',
        description: 'Citytrip',
        price: '€89',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop',
        color: 'bg-navy',
        colorHex: '#1B2E5C'
    },
    {
        destination: 'Lloret de Mar',
        description: 'Zonvakantie',
        price: '€199',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
        color: 'bg-sky',
        colorHex: '#87CEEB'
    },
    {
        destination: 'EuroDisney',
        description: 'Dagtrip',
        price: '€79',
        image: 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600&h=400&fit=crop',
        color: 'bg-orange',
        colorHex: '#F5A623'
    },
    {
        destination: 'Brugge',
        description: 'Dagtrip',
        price: '€25',
        image: 'https://images.unsplash.com/photo-1559113202-c916b8e44373?w=600&h=400&fit=crop',
        color: 'bg-navy',
        colorHex: '#1B2E5C'
    },
    {
        destination: 'Essen / Oberhausen',
        description: 'Dagtrip',
        price: '€19',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop',
        color: 'bg-sky',
        colorHex: '#87CEEB'
    }
];

// Duplicate trips for infinite illusion
const extendedTrips = [...trips, ...trips, ...trips];

const TripCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(trips.length);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [visibleCount, setVisibleCount] = useState(3);
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

    return (
        <div>
            {/* Carousel */}
            <div className='relative overflow-hidden'>
                <div
                    ref={trackRef}
                    className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                    style={{
                        gap: `${gap}px`,
                        transform: `translateX(calc(-${currentIndex} * (${cardWidthPercent}% + ${gapOffset}px)))`
                    }}
                    onTransitionEnd={handleTransitionEnd}>
                    {extendedTrips.map((trip, i) => (
                        <a
                            key={`${trip.destination}-${i}`}
                            href={WHATSAPP_URL}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group shrink-0 flex-col items-center'
                            style={{ width: visibleCount === 1 ? '100%' : `calc(33.333% - ${(gap * 2) / 3}px)` }}>
                            <div className='relative mx-auto w-[70%] pb-12 md:w-[85%] md:pb-14'>
                                {/* Colored card behind */}
                                <div
                                    className={`absolute inset-0 top-14 ${trip.color} rounded-full md:top-20`}
                                    style={{ borderBottomRightRadius: 0 }}
                                />
                                {/* Oval image */}
                                <div className='relative overflow-hidden rounded-full aspect-[3/4]'>
                                    <img
                                        src={trip.image}
                                        alt={trip.destination}
                                        className='size-full object-cover'
                                        loading='lazy'
                                    />
                                    {/* Price pill */}
                                    <div className='absolute top-5 left-1/2 z-10 -translate-x-1/2'>
                                        <span
                                            className='inline-block rounded-full px-3 py-0.5 text-[10px] font-bold text-white shadow-md md:px-4 md:py-1 md:text-xs'
                                            style={{ backgroundColor: trip.colorHex }}>
                                            vanaf {trip.price}
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
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Arrows + Pagination */}
            <div className='mt-8 flex items-center justify-center gap-6'>
                <button
                    onClick={prev}
                    className='flex size-12 items-center justify-center rounded-full border-2 border-navy/20 text-navy transition-all duration-200 hover:border-orange hover:bg-orange hover:text-white'>
                    <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
                    </svg>
                </button>

                <div className='flex items-center gap-2'>
                    {trips.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(trips.length + i)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                realIndex === i
                                    ? 'w-8 bg-orange'
                                    : 'w-2.5 bg-navy/20 hover:bg-navy/40'
                            }`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    className='flex size-12 items-center justify-center rounded-full border-2 border-navy/20 text-navy transition-all duration-200 hover:border-orange hover:bg-orange hover:text-white'>
                    <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TripCarousel;
