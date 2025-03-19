import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const data = await req.formData();

        // Verkrijg de gegevens uit het formulier
        const name = data.get('name');
        const email = data.get('email');
        const postalCode = data.get('postalCode');
        const houseNumber = data.get('houseNumber');
        const houseNumberAddition = data.get('houseNumberAddition') || '';
        const phone = data.get('phone');
        const message = data.get('message');
        const files = data.getAll('files');
        const recaptchaToken = data.get('recaptchaToken');

        // reCAPTCHA validatie
        const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: recaptchaToken,
            }),
        });
        const recaptchaResult = await recaptchaResponse.json();

        if (!recaptchaResult.success) {
            throw new Error('reCAPTCHA validatie mislukt. Probeer het opnieuw.');
        }

        // Server-side validatie
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const postalCodeRegex = /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!name || name.trim().length === 0) {
            throw new Error('Naam is verplicht.');
        }
        if (!email || !emailRegex.test(email)) {
            throw new Error('Ongeldig e-mailadres.');
        }
        if (!postalCode || !postalCodeRegex.test(postalCode)) {
            throw new Error('Ongeldige postcode. Gebruik bijv. 1234 AB.');
        }
        if (!houseNumber || isNaN(houseNumber)) {
            throw new Error('Huisnummer moet een getal zijn.');
        }
        if (houseNumberAddition && !/^[A-Za-z0-9\s]+$/.test(houseNumberAddition)) {
            throw new Error('Huisnummer toevoeging bevat ongeldige tekens.');
        }
        if (!phone || !phoneRegex.test(phone)) {
            throw new Error('Telefoonnummer moet exact 10 cijfers bevatten.');
        }
        if (!message || message.length > 500) {
            throw new Error('Bericht mag niet leeg zijn en moet minder dan 500 tekens bevatten.');
        }

        // Verwerk bestanden als buffers
        const attachments = await Promise.all(
            files.map(async (file) => {
                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                return {
                    filename: file.name,
                    content: buffer,
                };
            })
        );

        // Nodemailer configuratie voor Vimexx SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER, // Verstuur vanaf je eigen werkmailadres
            to: process.env.EMAIL_TO,
            subject: `Nieuw contactformulier van ${name}`,
            text: `Naam: ${name}\nEmail: ${email}\nTelefoon: ${phone}\nPostcode: ${postalCode}\nHuisnummer: ${houseNumber} ${houseNumberAddition}\n\nBericht:\n${message}`,
            attachments: attachments,
        };

        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }
}