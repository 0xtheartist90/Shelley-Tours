import Image from 'next/image';

import TripCarousel from '@/app/components/TripCarousel';

const WHATSAPP_URL =
    'https://wa.me/31645821782?text=Hallo%20Shelley%27s%20Tours%2C%20ik%20wil%20graag%20meer%20informatie!';

const WhatsAppButton = ({
    children,
    className = ''
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <a
        href={WHATSAPP_URL}
        target='_blank'
        rel='noopener noreferrer'
        className={`inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:bg-whatsapp-hover hover:shadow-xl hover:scale-105 ${className}`}>
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
        className='inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-whatsapp-hover hover:scale-105'>
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
    return (
        <>
            {/* Navigation */}
            <nav className='fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-md'>
                <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3'>
                    <a href='#hero' className='flex items-center'>
                        <Image
                            src='/images/logo.png'
                            alt="Shelley's Tours logo"
                            width={160}
                            height={48}
                            className='h-10 w-auto'
                        />
                    </a>
                    <div className='hidden items-center gap-6 md:flex'>
                        <a
                            href='#wat'
                            className='text-sm text-white/80 transition-colors hover:text-white'>
                            Wat is Shelley&apos;s Tours
                        </a>
                        <a
                            href='#reizen'
                            className='text-sm text-white/80 transition-colors hover:text-white'>
                            Reizen
                        </a>
                        <a
                            href='#waarom'
                            className='text-sm text-white/80 transition-colors hover:text-white'>
                            Waarom wij
                        </a>
                        <a
                            href='#hoe'
                            className='text-sm text-white/80 transition-colors hover:text-white'>
                            Hoe werkt het
                        </a>
                        <a
                            href='#contact'
                            className='text-sm text-white/80 transition-colors hover:text-white'>
                            Contact
                        </a>
                    </div>
                    <WhatsAppButtonSmall>WhatsApp</WhatsAppButtonSmall>
                </div>
            </nav>

            <main>
                {/* 1. Hero Section */}
                <section id='hero' className='relative flex min-h-screen items-center overflow-hidden bg-navy pt-20'>
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className='absolute inset-0 size-full object-cover'
                    >
                        <source src='/shelleyshero.mp4' type='video/mp4' />
                    </video>
                    <div className='absolute inset-0 bg-navy/60' />
                    <div className='relative z-10 mx-auto max-w-6xl px-4 py-20 text-center'>
                        <Image
                            src='/images/logo.png'
                            alt="Shelley's Tours"
                            width={220}
                            height={200}
                            className='mx-auto mb-8 h-24 w-auto'
                            priority
                        />
                        <h1 className='mb-6 text-4xl leading-tight font-extrabold text-white md:text-6xl lg:text-7xl'>
                            Betaalbaar op reis met
                            <span className='block text-orange'>
                                Shelley&apos;s Tours
                            </span>
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

                {/* 2. Wat is Shelley's Tours? */}
                <section id='wat' className='relative z-10 overflow-visible bg-white pt-4 pb-0 md:pt-6'>
                    <div className='mx-auto grid max-w-7xl items-end px-4 md:grid-cols-[1.2fr_1fr] md:gap-8'>
                        <div className='relative -ml-4 flex items-end justify-center md:-ml-8 md:justify-start'>
                            <Image
                                src='/images/whatisshelleytours.png'
                                alt="Wat is Shelley's Tours"
                                width={800}
                                height={800}
                                style={{ marginBottom: '-60px' }}
                                className='relative z-20 w-full max-w-md drop-shadow-2xl md:max-w-none'
                            />
                        </div>
                        <div className='relative z-10 py-12 md:py-20'>
                            <div className='mb-5 h-1.5 w-16 rounded-full bg-orange' />
                            <h2 className='mb-6 text-5xl leading-[1.05] font-extrabold tracking-tight text-navy md:text-6xl lg:text-7xl'>
                                Wat is
                                <span className='block text-orange'>
                                    Shelley&apos;s Tours?
                                </span>
                            </h2>
                            <p className='mb-5 max-w-md text-lg leading-relaxed text-navy/70'>
                                Shelley&apos;s Tours organiseert betaalbare reizen voor mensen die
                                financieel minder ruimte hebben. Van dagtrips tot meerdaagse reizen:
                                gezellig, duidelijk en zonder verborgen kosten.
                            </p>
                            <p className='mb-8 text-xl font-bold text-navy'>
                                Reizen moet voor iedereen mogelijk zijn.
                            </p>
                            <WhatsAppButton>WhatsApp voor meer info</WhatsAppButton>
                        </div>
                    </div>
                </section>

                {/* 3. Populaire Reizen */}
                <section id='reizen' className='relative z-0 overflow-hidden bg-secondary py-16 md:py-24'>
                    {/* Palm trees background - right side */}
                    <Image
                        src='/images/palmtrees.png'
                        alt=''
                        width={600}
                        height={900}
                        className='pointer-events-none absolute -right-10 top-0 z-0 h-full w-auto opacity-10 md:-right-5 lg:right-0'
                        style={{ objectFit: 'contain', objectPosition: 'right' }}
                        aria-hidden='true'
                    />
                    <div className='relative z-10 mx-auto max-w-6xl px-4'>
                        <div className='mb-12 text-center'>
                            <p className='mb-3 text-sm font-semibold tracking-widest text-orange uppercase'>
                                ✈ Bestemmingen
                            </p>
                            <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-navy md:text-5xl lg:text-6xl'>
                                Populaire Reizen
                            </h2>
                            <div className='mx-auto mb-4 h-1.5 w-16 rounded-full bg-orange' />
                            <p className='text-lg text-navy/60'>
                                Ontdek onze bestemmingen – voor elk budget
                            </p>
                        </div>
                        <TripCarousel />
                    </div>
                </section>

                {/* 4. Waarom Shelley's Tours? */}
                <section id='waarom' className='relative overflow-visible bg-white pt-8 pb-16 md:pt-12 md:pb-20'>
                    <div className='mx-auto max-w-7xl px-4'>
                        <div className='grid items-center gap-10 md:grid-cols-[1fr_auto]'>
                            <div>
                                <div className='mb-8'>
                                    <div className='mb-4 h-1.5 w-16 rounded-full bg-orange' />
                                    <h2 className='mb-2 text-4xl font-extrabold tracking-tight text-navy md:text-5xl lg:text-6xl'>
                                        Waarom Shelley&apos;s Tours?
                                    </h2>
                                </div>
                                <div className='grid grid-cols-2 gap-3 md:grid-cols-3'>
                                    {reasons.map((reason) => (
                                        <div
                                            key={reason.text}
                                            className='flex items-center gap-3 rounded-xl border border-orange/20 bg-orange/5 p-4 transition-all duration-200 hover:border-orange/40 hover:bg-orange/10 hover:shadow-md'>
                                            <span className='text-2xl'>{reason.icon}</span>
                                            <span className='text-sm font-medium text-navy'>
                                                {reason.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='relative -mt-32 hidden md:-mt-40 md:block lg:-mt-48'>
                                <Image
                                    src='/images/Shelley2.png'
                                    alt="Shelley's Tours"
                                    width={400}
                                    height={500}
                                    className='relative z-20 w-72 drop-shadow-2xl lg:w-96'
                                    style={{ marginBottom: '-180px' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Hoe werkt het? */}
                <section id='hoe' className='relative z-0 bg-navy py-12 md:py-16'>
                    <div className='mx-auto max-w-4xl px-4'>
                        <div className='mb-14 text-center'>
                            <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl'>
                                Hoe werkt het?
                            </h2>
                            <div className='mx-auto mb-4 h-1 w-20 rounded-full bg-orange' />
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
                                className='pointer-events-none absolute top-[14px] -right-3 z-0 hidden w-10 rotate-45 md:block'
                                aria-hidden='true'
                            />
                            {steps.map((step) => (
                                <div key={step.number} className='relative z-10 text-center'>
                                    <div className='mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-orange text-2xl font-bold text-white shadow-lg'>
                                        {step.number}
                                    </div>
                                    <h3 className='mb-2 text-xl font-bold text-white'>
                                        {step.title}
                                    </h3>
                                    <p className='text-white/60'>{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Contact / CTA Afsluiter */}
                <section id='contact' className='relative z-10 overflow-visible bg-gradient-to-br from-secondary to-white pt-8 pb-0 md:pt-10 md:pb-0'>
                    <div className='mx-auto max-w-7xl px-4'>
                        <div className='grid items-end gap-10 md:grid-cols-[auto_1fr]'>
                            {/* Left: heartpalm image - bleeds into section above */}
                            <div className='relative mx-auto self-end md:mx-0' style={{ marginTop: '-80px' }}>
                                <Image
                                    src='/images/heartpalm.png'
                                    alt='Palm trees'
                                    width={700}
                                    height={875}
                                    className='w-96 drop-shadow-2xl md:w-[28rem] lg:w-[32rem]'
                                />
                                {/* Orange line for mobile */}
                                <div className='absolute bottom-0 left-0 h-1.5 w-16 rounded-full bg-orange md:hidden' />
                            </div>
                            {/* Right: content */}
                            <div className='pb-8 md:pb-12'>
                                <div className='mb-4 hidden h-1.5 w-16 rounded-full bg-orange md:block' />
                                <h2 className='mb-6 text-4xl font-extrabold tracking-tight text-navy md:mt-4 md:text-5xl lg:text-6xl'>
                                    Heb je vragen of wil je mee op reis?
                                </h2>
                                <p className='mb-10 max-w-xl text-lg text-navy/70'>
                                    Stuur ons gerust een WhatsApp-bericht voor meer informatie over reizen,
                                    prijzen of beschikbaarheid.
                                </p>
                                <WhatsAppButton className='text-xl'>
                                    Bericht verzenden via WhatsApp
                                </WhatsAppButton>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className='bg-navy py-8'>
                <div className='mx-auto max-w-6xl px-4 text-center'>
                    <Image
                        src='/images/logo.png'
                        alt="Shelley's Tours"
                        width={160}
                        height={60}
                        className='mx-auto mb-4 h-12 w-auto'
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
                        &copy; {new Date().getFullYear()} Shelley&apos;s Tours. Alle rechten
                        voorbehouden.
                    </p>
                </div>
            </footer>

            {/* Sticky WhatsApp Button (Mobile) */}
            <div className='fixed right-4 bottom-4 z-50 md:hidden'>
                <a
                    href={WHATSAPP_URL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex size-16 items-center justify-center rounded-full bg-whatsapp shadow-2xl transition-all duration-200 hover:bg-whatsapp-hover hover:scale-110'
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
