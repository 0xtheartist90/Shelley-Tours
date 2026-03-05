// API route for sending booking confirmation emails via Resend
import { NextRequest, NextResponse } from 'next/server';

import { getBookingEmailHtml } from '@/app/emails/booking-template';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, travellers, trip, message } = body;

        // Validate required fields
        if (!name || !email || !travellers || !trip) {
            return NextResponse.json(
                { error: 'Naam, e-mail, aantal personen en bestemming zijn verplicht.' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'noreply@shelleystours.nl',
            to: 'theartist@0xlaboratory.xyz',
            subject: `Nieuwe Boeking: ${trip}`,
            html: getBookingEmailHtml({
                name,
                email,
                phone: phone || '',
                travellers,
                trip,
                message: message || ''
            })
        });

        if (error) {
            console.error('Resend error:', error);

            return NextResponse.json(
                { error: 'Er is iets misgegaan bij het versturen van de e-mail.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, messageId: data?.id }, { status: 200 });
    } catch (error) {
        console.error('API error:', error);

        return NextResponse.json({ error: 'Er is een onverwachte fout opgetreden.' }, { status: 500 });
    }
}
