// import nodemailer from 'nodemailer';

export const contactEmail = (params) => {
    return `<!DOCTYPE html>
<html>
<head>
    <title>Welcome Email</title>
    <style>
        /* General reset styles */
        body,
        table,
        td,
        a {
            text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        table,
        td {
            border-collapse: collapse !important;
        }

        body {
            margin: 0;
            padding: 0;
            width: 100% !important;
            line-height: 100% !important;
        }
    </style>
</head>
<body style="background-color: #f7fafc; margin: 0; padding: 24px; font-family: Arial, sans-serif;">
    <table align="center" width="100%" cellpadding="0" cellspacing="0"
        style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <tr>
            <td style="padding: 24px;">
                <h1 style="margin: 0; font-size: 24px; font-weight: bold; color: #2d3748;">Welcome, Admin</h1>
                <p style="margin: 16px 0; font-size: 16px; color: #718096; line-height: 1.5;">
                    We have received a new contact submission concerning a work inquiry. Below are the details for your
                    review:
                </p>
                <ul style="font-size: 16px; color: #718096; line-height: 1.5;">
                    <li><strong>Name:</strong> ${params['firstName']} ${params['lastName']}</li>
                    <li><strong>Email:</strong> ${params['email']}</li>
                    <li><strong>Phone:</strong> ${params['phone']}</li>
                    <li><strong>Service:</strong> ${params['service']}</li>
                    <li><strong>Message:</strong><br>${params['message']}</li>
                </ul>
                <p style="margin: 16px 0; font-size: 16px; color: #718096; line-height: 1.5;">Thank you for your attention to this matter. Please let me know if you require any further information.</p>
                <p style="margin: 24px 0 0 0; font-size: 14px; color: #a0aec0; line-height: 1.5;">Best Regards,</p>
                <p style="margin: 0; font-size: 14px; color: #a0aec0; line-height: 1.5;">Hitesh Solanki</p>
            </td>
        </tr>
    </table>
</body>
</html>`;
};
