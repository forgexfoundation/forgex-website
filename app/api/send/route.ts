// export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: NextRequest) {
    const { firstName, lastName, email, subject, message, category } = await req.json()

    if (!firstName || !lastName || !email || !subject || !message) {
        return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 })
    }

    try {
        await resend.emails.send({
            from: 'ForgeX Foundation <onboarding@resend.dev>',
            to: 'forgexfoundation@gmail.com',
            subject: `${subject}${category ? ` [${category}]` : ''}`,
            html: `
        <p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
        <p><strong>Category:</strong> ${category || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Resend error:', error)
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
    }
}
