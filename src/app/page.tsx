'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import TripCarousel, { trips as tripOptionsData } from '@/app/components/TripCarousel';

const WHATSAPP_URL =
    'https://wa.me/31645821782?text=Hallo%20Shelley%27s%20Tours%2C%20ik%20wil%20graag%20meer%20informatie!';

const WhatsAppButton = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <a
        href={WHATSAPP_URL}
        target='_blank'
        rel='noopener noreferrer'
        className={`bg-whatsapp hover:bg-whatsapp-hover inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl ${className}`}>
        <svg viewBox='0 0 24 24' fill='currentColor' className='size-6'>
            <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
        </svg>
        {children}
    </a>
);

const WhatsAppButtonSmall = ({ children }: { children: React.ReactNode }) => (
    <a
        href={WHATSAPP_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='bg-whatsapp hover:bg-whatsapp-hover inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105'>
        <svg viewBox='0 0 24 24' fill='currentColor' className='size-4'>
            <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
        </svg>
        {children}
    </a>
);

const reasons = [
    { icon: '💰', text: 'Betaalbare reizen voor elk budget' },
    { icon: '👨‍👩‍👧‍👦', text: 'Voor jongeren én ouders' },
    { icon: '🎉', text: 'Gezellige groepsreizen' },
    { icon: '✅', text: 'Transparante prijzen' },
    { icon: '💬', text: 'Persoonlijk contact via WhatsApp' },
    { icon: '🇳🇱', text: 'Vertrek vanuit Nederland' }
];

const steps = [
    { number: '1', title: 'Bekijk de reizen', description: 'Scroll door onze bestemmingen' },
    {
        number: '2',
        title: 'Stuur een WhatsApp-bericht',
        description: 'Stel je vraag direct via WhatsApp'
    },
    {
        number: '3',
        title: 'Ontvang persoonlijke info',
        description: 'Wij helpen je met alles wat je nodig hebt'
    }
];

const Page = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [bookingForm, setBookingForm] = useState({
        name: '',
        email: '',
        phone: '',
        travellers: '1',
        trip: tripOptionsData[0]?.destination ?? '',
        message: ''
    });

    const tripOptions = Array.from(new Set(tripOptionsData.map((trip) => trip.destination)));

    const handleNavClick = (section: string) => {
        setActiveSection(section);
    };

    const handleBookingChange = (field: string, value: string) => {
        setBookingForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleBookingSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const subject = encodeURIComponent(`Boeking ${bookingForm.trip}`);
        const bodyLines = [
            `Naam: ${bookingForm.name}`,
            `E-mail: ${bookingForm.email}`,
            `Telefoon: ${bookingForm.phone || 'nvt'}`,
            `Aantal personen: ${bookingForm.travellers}`,
            `Trip: ${bookingForm.trip}`,
            '',
            bookingForm.message || 'Geen extra opmerkingen.'
        ];
        const body = encodeURIComponent(bodyLines.join('\n'));
        window.location.href = `mailto:shelleystours@hotmail.com?subject=${subject}&body=${body}`;
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'wat', 'reizen', 'waarom', 'hoe', 'booking', 'contact'];
            const scrollPosition = window.scrollY + 140;
            const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;

            if (nearBottom) {
                setActiveSection('contact');

                return;
            }

            let currentSection = sections[0];

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const style = window.getComputedStyle(element);
                    const scrollMarginTop = parseFloat(style.scrollMarginTop || '0');
                    const offsetTop = element.offsetTop - scrollMarginTop;

                    if (scrollPosition >= offsetTop) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Navigation */}
            <nav className='bg-navy/95 fixed top-0 right-0 left-0 z-50 border-b border-white/10 backdrop-blur-md'>
                <div className='mx-auto flex max-w-6xl items-center justify-center px-4 py-3 md:justify-between'>
                    <a href='#hero' className='flex items-center justify-center md:justify-start'>
                        <Image
                            src='/images/logotopnav.png'
                            alt="Shelley's Tours logo"
                            width={160}
                            height={48}
                            className='h-10 w-auto'
                        />
                    </a>
                    <div className='hidden items-center gap-6 md:flex'>
                        <a
                            href='#wat'
                            onClick={() => handleNavClick('wat')}
                            className={`text-sm transition-colors hover:text-white ${
                                activeSection === 'wat' ? 'text-orange' : 'text-white/80'
                            }`}>
                            Wat is Shelleys Tours NL
                        </a>
                        <a
                            href='#reizen'
                            onClick={() => handleNavClick('reizen')}
                            className={`text-sm transition-colors hover:text-white ${
                                activeSection === 'reizen' ? 'text-orange' : 'text-white/80'
                            }`}>
                            Reizen
                        </a>
                        <a
                            href='#waarom'
                            onClick={() => handleNavClick('waarom')}
                            className={`text-sm transition-colors hover:text-white ${
                                activeSection === 'waarom' ? 'text-orange' : 'text-white/80'
                            }`}>
                            Waarom wij
                        </a>
                        <a
                            href='#hoe'
                            onClick={() => handleNavClick('hoe')}
                            className={`text-sm transition-colors hover:text-white ${
                                activeSection === 'hoe' ? 'text-orange' : 'text-white/80'
                            }`}>
                            Hoe werkt het
                        </a>
                        <a
                            href='#booking'
                            onClick={() => handleNavClick('booking')}
                            className={`text-sm transition-colors hover:text-white ${
                                activeSection === 'booking' ? 'text-orange' : 'text-white/80'
                            }`}>
                            Boeken
                        </a>
                        <a
                            href='#contact'
                            onClick={() => handleNavClick('contact')}
                            className={`text-sm transition-colors hover:text-white ${
                                activeSection === 'contact' ? 'text-orange' : 'text-white/80'
                            }`}>
                            Contact
                        </a>
                    </div>
                    <div className='hidden md:block'>
                        <WhatsAppButtonSmall>WhatsApp</WhatsAppButtonSmall>
                    </div>
                </div>
            </nav>

            <main>
                {/* 1. Hero Section */}
                <section id='hero' className='bg-navy relative flex min-h-screen items-center overflow-hidden pt-20'>
                    <video autoPlay muted loop playsInline className='absolute inset-0 size-full object-cover'>
                        <source src='/shelleyshero.mp4' type='video/mp4' />
                    </video>
                    <div className='bg-navy/25 absolute inset-0' />
                    <div className='relative z-10 mx-auto max-w-6xl px-4 py-20 text-center'>
                        <Image
                            src='/images/logo white .png'
                            alt='Shelleys Tours NL'
                            width={660}
                            height={600}
                            className='mx-auto mb-8 h-72 w-auto'
                            priority
                        />
                        <h1 className='mb-6 text-4xl leading-tight font-extrabold text-white md:text-6xl lg:text-7xl'>
                            Betaalbaar op reis met
                            <span className='text-orange block'>Shelleys Tours NL</span>
                        </h1>
                        <p className='mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl'>
                            Reizen voor jongeren en ouders met een beperkt budget.
                            <br className='hidden md:block' />
                            Iedereen verdient een mooie reis.
                        </p>
                        <WhatsAppButton>Stuur een WhatsApp-bericht</WhatsAppButton>
                        <div className='mt-12 animate-bounce'>
                            <svg
                                className='mx-auto size-8 text-white/50'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M19 14l-7 7m0 0l-7-7m7 7V3'
                                />
                            </svg>
                        </div>
                    </div>
                </section>

                {/* 2. Wat is Shelleys Tours NL? */}
                <section id='wat' className='relative z-10 overflow-visible bg-white pt-4 pb-0 md:pt-6'>
                    <div className='mx-auto grid max-w-7xl items-end px-4 md:grid-cols-[1.2fr_1fr] md:gap-8'>
                        <div className='relative -ml-4 flex items-end justify-center md:-ml-8 md:justify-start'>
                            <Image
                                src='/images/whatisshelleytours.png'
                                alt='Wat is Shelleys Tours NL'
                                width={800}
                                height={800}
                                style={{ marginBottom: '-60px' }}
                                className='relative z-20 w-full max-w-md drop-shadow-2xl md:max-w-none'
                            />
                        </div>
                        <div className='relative z-10 py-12 md:py-20'>
                            <div className='bg-orange mb-5 h-1.5 w-16 rounded-full' />
                            <h2 className='text-navy mb-6 text-5xl leading-[1.05] font-extrabold tracking-tight md:text-6xl lg:text-7xl'>
                                Wat is
                                <span className='text-orange block'>Shelleys Tours NL?</span>
                            </h2>
                            <p className='text-navy/70 mb-5 max-w-md text-lg leading-relaxed'>
                                Shelleys Tours NL organiseert betaalbare reizen voor mensen die financieel minder ruimte
                                hebben. Van dagtrips tot meerdaagse reizen: gezellig, duidelijk en zonder verborgen
                                kosten.
                            </p>
                            <p className='text-navy mb-8 text-xl font-bold'>Reizen moet voor iedereen mogelijk zijn.</p>
                            <WhatsAppButton>WhatsApp voor meer info</WhatsAppButton>
                        </div>
                    </div>
                </section>

                {/* 3. Populaire Reizen */}
                <section id='reizen' className='bg-secondary relative z-0 overflow-hidden py-16 md:py-24'>
                    {/* Palm trees background - right side */}
                    <Image
                        src='/images/palmtrees.png'
                        alt=''
                        width={600}
                        height={900}
                        className='pointer-events-none absolute top-0 -right-10 z-0 h-full w-auto opacity-10 md:-right-5 lg:right-0'
                        style={{ objectFit: 'contain', objectPosition: 'right' }}
                        aria-hidden='true'
                    />
                    <div className='relative z-10 mx-auto max-w-6xl px-4'>
                        <div className='mb-12 text-center'>
                            <p className='text-orange mb-3 text-sm font-semibold tracking-widest uppercase'>
                                ✈ Bestemmingen
                            </p>
                            <h2 className='text-navy mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl'>
                                Populaire Reizen
                            </h2>
                            <div className='bg-orange mx-auto mb-4 h-1.5 w-16 rounded-full' />
                            <p className='text-navy/60 text-lg'>Ontdek onze bestemmingen – voor elk budget</p>
                        </div>
                        <TripCarousel />
                    </div>
                </section>

                {/* 4. Waarom Shelleys Tours NL? */}
                <section
                    id='waarom'
                    className='relative scroll-mt-28 overflow-visible bg-white pt-8 pb-16 md:scroll-mt-40 md:pt-12 md:pb-20'>
                    <div className='mx-auto max-w-7xl px-4'>
                        <div className='grid items-center gap-10 md:grid-cols-[1fr_auto]'>
                            <div>
                                <div className='mb-8 ml-4 md:ml-8'>
                                    <div className='bg-orange mb-4 h-1.5 w-16 rounded-full' />
                                    <h2 className='text-navy mb-2 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl'>
                                        Waarom Shelleys Tours NL?
                                    </h2>
                                </div>
                                <div className='ml-4 grid grid-cols-2 gap-3 md:ml-8 md:grid-cols-3'>
                                    {reasons.map((reason) => (
                                        <div
                                            key={reason.text}
                                            className='border-orange/20 bg-orange/5 hover:border-orange/40 hover:bg-orange/10 flex items-center gap-3 rounded-xl border p-4 transition-all duration-200 hover:shadow-md'>
                                            <span className='text-2xl'>{reason.icon}</span>
                                            <span className='text-navy text-sm font-medium'>{reason.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='relative -mt-24 hidden md:-mt-32 md:block lg:-mt-40'>
                                <Image
                                    src='/images/Shelley2.png'
                                    alt="Shelley's Tours"
                                    width={400}
                                    height={500}
                                    className='relative z-20 w-78 drop-shadow-2xl lg:w-[25rem]'
                                    style={{ marginBottom: '-200px', left: '-96px' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Hoe werkt het? */}
                <section id='hoe' className='bg-navy relative z-0 py-12 md:py-16'>
                    <div className='mx-auto max-w-4xl px-4'>
                        <div className='mb-14 text-center'>
                            <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl'>
                                Hoe werkt het?
                            </h2>
                            <div className='bg-orange mx-auto mb-4 h-1 w-20 rounded-full' />
                            <p className='text-white/60'>3 simpele stappen</p>
                        </div>
                        <div className='relative mb-12 grid gap-8 md:grid-cols-3'>
                            {/* Curvy dotted airplane trail going through the number circles */}
                            <svg
                                className='pointer-events-none absolute top-8 left-0 z-0 hidden w-full md:block'
                                height='20'
                                viewBox='0 0 900 20'
                                fill='none'>
                                <path
                                    d='M0 10 C75 -5, 150 25, 225 10 S375 -5, 450 10 S600 25, 675 10 S825 -5, 900 10'
                                    stroke='white'
                                    strokeWidth='2'
                                    strokeDasharray='8 6'
                                    strokeOpacity='0.35'
                                    fill='none'
                                />
                            </svg>
                            <Image
                                src='/images/plane.png'
                                alt=''
                                width={36}
                                height={36}
                                className='pointer-events-none absolute top-[22px] -right-8 z-0 hidden w-10 rotate-0 md:block'
                                aria-hidden='true'
                            />
                            {steps.map((step) => (
                                <div key={step.number} className='relative z-10 text-center'>
                                    <div className='bg-orange mx-auto mb-5 flex size-16 items-center justify-center rounded-full text-2xl font-bold text-white shadow-lg'>
                                        {step.number}
                                    </div>
                                    <h3 className='mb-2 text-xl font-bold text-white'>{step.title}</h3>
                                    <p className='text-white/60'>{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Boekingsformulier */}
                <section
                    id='booking'
                    className='from-orange/10 to-secondary/30 relative z-10 overflow-hidden bg-gradient-to-br via-white py-16 md:py-20'>
                    <Image
                        src='/images/palmtrees.png'
                        alt=''
                        width={600}
                        height={900}
                        className='pointer-events-none absolute top-0 right-0 z-0 hidden h-full w-auto opacity-10 md:block'
                        style={{ objectFit: 'contain', objectPosition: 'right' }}
                        aria-hidden='true'
                    />
                    <div className='relative z-10 mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2'>
                        <div>
                            <div className='bg-orange mb-4 h-1.5 w-16 rounded-full' />
                            <p className='text-orange mb-3 text-sm font-semibold tracking-widest uppercase'>
                                Direct boeken
                            </p>
                            <h2 className='text-navy mb-4 text-4xl font-extrabold md:text-5xl'>Boek jouw plek</h2>
                            <p className='text-navy/70 mb-6 text-lg'>
                                Vul je gegevens in en kies je reis. Wij sturen je zo snel mogelijk alle info via e-mail.
                                Liever direct contact? Gebruik het WhatsApp-nummer onderaan deze pagina.
                            </p>
                            <ul className='text-navy/80 space-y-3'>
                                <li className='flex items-start gap-3'>
                                    <span className='text-orange'>✔</span>
                                    Holendrecht Station als opstap voor alle reizen
                                </li>
                                <li className='flex items-start gap-3'>
                                    <span className='text-orange'>✔</span>
                                    Bevestiging en betaalinstructies volgen per mail
                                </li>
                                <li className='flex items-start gap-3'>
                                    <span className='text-orange'>✔</span>
                                    Vragen? Zet ze in het opmerkingenveld
                                </li>
                            </ul>
                        </div>
                        <form
                            onSubmit={handleBookingSubmit}
                            className='rounded-3xl bg-white/80 p-6 shadow-2xl backdrop-blur-sm md:p-8'>
                            <div className='mb-5'>
                                <label className='text-navy mb-2 block text-sm font-semibold'>Naam *</label>
                                <input
                                    type='text'
                                    required
                                    value={bookingForm.name}
                                    onChange={(e) => handleBookingChange('name', e.target.value)}
                                    className='border-navy/10 text-navy focus:border-orange w-full rounded-2xl border px-4 py-3 text-sm shadow-sm focus:outline-none'
                                    placeholder='Voor- en achternaam'
                                />
                            </div>
                            <div className='mb-5'>
                                <label className='text-navy mb-2 block text-sm font-semibold'>E-mail *</label>
                                <input
                                    type='email'
                                    required
                                    value={bookingForm.email}
                                    onChange={(e) => handleBookingChange('email', e.target.value)}
                                    className='border-navy/10 text-navy focus:border-orange w-full rounded-2xl border px-4 py-3 text-sm shadow-sm focus:outline-none'
                                    placeholder='naam@email.com'
                                />
                            </div>
                            <div className='mb-5'>
                                <label className='text-navy mb-2 block text-sm font-semibold'>Telefoon</label>
                                <input
                                    type='tel'
                                    value={bookingForm.phone}
                                    onChange={(e) => handleBookingChange('phone', e.target.value)}
                                    className='border-navy/10 text-navy focus:border-orange w-full rounded-2xl border px-4 py-3 text-sm shadow-sm focus:outline-none'
                                    placeholder='+31 6 12345678'
                                />
                            </div>
                            <div className='mb-5 grid gap-4 md:grid-cols-2'>
                                <div>
                                    <label className='text-navy mb-2 block text-sm font-semibold'>
                                        Aantal personen *
                                    </label>
                                    <input
                                        type='number'
                                        min='1'
                                        required
                                        value={bookingForm.travellers}
                                        onChange={(e) => handleBookingChange('travellers', e.target.value)}
                                        className='border-navy/10 text-navy focus:border-orange w-full rounded-2xl border px-4 py-3 text-sm shadow-sm focus:outline-none'
                                    />
                                </div>
                                <div>
                                    <label className='text-navy mb-2 block text-sm font-semibold'>Bestemming *</label>
                                    <select
                                        required
                                        value={bookingForm.trip}
                                        onChange={(e) => handleBookingChange('trip', e.target.value)}
                                        className='border-navy/10 text-navy focus:border-orange w-full rounded-2xl border bg-white px-4 py-3 text-sm shadow-sm focus:outline-none'>
                                        {tripOptions.map((destination) => (
                                            <option key={destination} value={destination}>
                                                {destination}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='mb-6'>
                                <label className='text-navy mb-2 block text-sm font-semibold'>
                                    Vragen of opmerkingen
                                </label>
                                <textarea
                                    value={bookingForm.message}
                                    onChange={(e) => handleBookingChange('message', e.target.value)}
                                    rows={4}
                                    className='border-navy/10 text-navy focus:border-orange w-full rounded-2xl border px-4 py-3 text-sm shadow-sm focus:outline-none'
                                    placeholder='Laat ons weten voor welke reis je interesse hebt of stel een vraag.'
                                />
                            </div>
                            <button
                                type='submit'
                                className='bg-orange hover:bg-orange/90 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.01]'>
                                Verstuur boekingsverzoek
                            </button>
                        </form>
                    </div>
                </section>

                {/* 6. Contact / CTA Afsluiter */}
                <section
                    id='contact'
                    className='from-secondary relative z-10 overflow-visible bg-gradient-to-br to-white pt-2 pb-0 md:pt-4 md:pb-0'>
                    <div className='mx-auto max-w-7xl px-4'>
                        <div className='grid items-end gap-10 md:grid-cols-[auto_1fr]'>
                            {/* Left: heartpalm image - bleeds into section above */}
                            <div
                                className='relative mx-auto self-end md:mx-0'
                                style={{ marginTop: '-90px', marginBottom: '-60px' }}>
                                <Image
                                    src='/images/heartpalm.png'
                                    alt='Palm trees'
                                    width={700}
                                    height={875}
                                    className='w-96 drop-shadow-2xl md:w-[28rem] lg:w-[32rem]'
                                />
                            </div>
                            {/* Right: content */}
                            <div className='pb-8 md:pb-12'>
                                <div className='bg-orange mb-4 h-1.5 w-16 rounded-full' />
                                <h2 className='text-navy mb-6 text-4xl font-extrabold tracking-tight md:mt-4 md:text-5xl lg:text-6xl'>
                                    Heb je vragen of wil je mee op reis?
                                </h2>
                                <p className='text-navy/70 mb-10 max-w-xl text-lg'>
                                    Stuur ons gerust een WhatsApp-bericht voor meer informatie over reizen, prijzen of
                                    beschikbaarheid.
                                </p>
                                <WhatsAppButton className='text-xl'>Bericht verzenden via WhatsApp</WhatsAppButton>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className='bg-navy py-8'>
                <div className='mx-auto max-w-6xl px-4 text-center'>
                    <Image
                        src='/images/logotopnav.png'
                        alt='Shelleys Tours NL'
                        width={160}
                        height={48}
                        className='mx-auto mb-4 h-10 w-auto'
                    />
                    <div className='mb-4 flex flex-wrap items-center justify-center gap-6 text-white/80'>
                        <a
                            href='tel:+31645821782'
                            className='flex items-center gap-2 text-sm transition-colors hover:text-white'>
                            <span>📞</span>
                            +31 (0)6 458 217 82
                        </a>
                        <a
                            href='mailto:shelleystours@hotmail.com'
                            className='flex items-center gap-2 text-sm transition-colors hover:text-white'>
                            <span>📧</span>
                            shelleystours@hotmail.com
                        </a>
                    </div>
                    <p className='text-sm text-white/50'>
                        &copy; {new Date().getFullYear()} Shelleys Tours NL. Alle rechten voorbehouden. Website gemaakt
                        door{' '}
                        <a
                            href='https://www.amplifybyaura.nl/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-orange text-white underline'>
                            Amplify
                        </a>
                        .
                    </p>
                </div>
            </footer>

            {/* Sticky WhatsApp Button (Mobile) */}
            <div className='fixed right-4 bottom-4 z-50 md:hidden'>
                <a
                    href={WHATSAPP_URL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-whatsapp hover:bg-whatsapp-hover flex size-16 items-center justify-center rounded-full shadow-2xl transition-all duration-200 hover:scale-110'
                    aria-label='Stuur een WhatsApp-bericht'>
                    <svg viewBox='0 0 24 24' fill='white' className='size-8'>
                        <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
                    </svg>
                </a>
            </div>
        </>
    );
};

export default Page;
