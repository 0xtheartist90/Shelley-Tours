// Branded HTML email template for booking confirmations

export function getBookingEmailHtml({
    name,
    email,
    phone,
    travellers,
    trip,
    message
}: {
    name: string;
    email: string;
    phone: string;
    travellers: string;
    trip: string;
    message: string;
}) {
    return `
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nieuwe Boeking - Shelleys Tours NL</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
        <tr>
            <td style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header with brand colors -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #1B2E5C 0%, #2d4a7c 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                                Shelleys Tours NL
                            </h1>
                            <div style="width: 60px; height: 4px; background-color: #F5A623; margin: 16px auto 0; border-radius: 2px;"></div>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <h2 style="margin: 0 0 24px 0; color: #1B2E5C; font-size: 24px; font-weight: 700;">
                                🎉 Nieuwe Boekingsaanvraag
                            </h2>
                            
                            <p style="margin: 0 0 24px 0; color: #4a5568; font-size: 16px; line-height: 1.6;">
                                Je hebt een nieuwe boekingsaanvraag ontvangen via de website.
                            </p>
                            
                            <!-- Booking Details Card -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8f9fa; border-radius: 12px; overflow: hidden; margin-bottom: 24px;">
                                <tr>
                                    <td style="padding: 24px;">
                                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                            <tr>
                                                <td style="padding: 8px 0; color: #1B2E5C; font-size: 14px; font-weight: 600; width: 140px;">
                                                    Naam:
                                                </td>
                                                <td style="padding: 8px 0; color: #2d3748; font-size: 14px;">
                                                    ${name}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; color: #1B2E5C; font-size: 14px; font-weight: 600;">
                                                    E-mail:
                                                </td>
                                                <td style="padding: 8px 0; color: #2d3748; font-size: 14px;">
                                                    <a href="mailto:${email}" style="color: #F5A623; text-decoration: none;">${email}</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; color: #1B2E5C; font-size: 14px; font-weight: 600;">
                                                    Telefoon:
                                                </td>
                                                <td style="padding: 8px 0; color: #2d3748; font-size: 14px;">
                                                    ${phone || 'Niet opgegeven'}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; color: #1B2E5C; font-size: 14px; font-weight: 600;">
                                                    Aantal personen:
                                                </td>
                                                <td style="padding: 8px 0; color: #2d3748; font-size: 14px;">
                                                    ${travellers}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; color: #1B2E5C; font-size: 14px; font-weight: 600;">
                                                    Bestemming:
                                                </td>
                                                <td style="padding: 8px 0; color: #2d3748; font-size: 14px; font-weight: 700;">
                                                    ${trip}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            ${message ? `
                            <!-- Message Section -->
                            <div style="margin-bottom: 24px;">
                                <h3 style="margin: 0 0 12px 0; color: #1B2E5C; font-size: 16px; font-weight: 600;">
                                    Bericht van klant:
                                </h3>
                                <div style="background-color: #fff5e6; border-left: 4px solid #F5A623; padding: 16px; border-radius: 8px;">
                                    <p style="margin: 0; color: #2d3748; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
${message}
                                    </p>
                                </div>
                            </div>
                            ` : ''}
                            
                            <p style="margin: 0; color: #718096; font-size: 14px; line-height: 1.6;">
                                Neem zo snel mogelijk contact op met de klant om de boeking te bevestigen.
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8f9fa; padding: 24px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 8px 0; color: #718096; font-size: 12px;">
                                Dit bericht is verzonden via het boekingsformulier op
                            </p>
                            <p style="margin: 0; color: #1B2E5C; font-size: 12px; font-weight: 600;">
                                Shelleys Tours NL
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `.trim();
}
