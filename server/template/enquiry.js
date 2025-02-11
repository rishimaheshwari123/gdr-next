const enquiryEmail = (name, companyName, product, quantity, email, contactNumber, country, state, city, address, phoneCode) => {
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>New Product Query</title>
        <style>
            body {
                background-color: #f4f4f4;
                font-family: Arial, sans-serif;
                font-size: 16px;
                color: #333333;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                text-align: left;
            }
            .logo {
                display: block;
                max-width: 200px;
                margin: 0 auto 20px;
            }
            .message {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 20px;
                color: #333333;
                text-align: center;
            }
            .body {
                font-size: 18px;
                margin-bottom: 20px;
                color: #666666;
            }
            .info {
                margin-bottom: 10px;
            }
            .info p {
                margin: 5px 0;
            }
            .highlight {
                font-weight: bold;
                color: #FFA500;
            }
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <a href="https://gdrgroup72.com/">
                <img class="logo" src="https://gdrgroup72.com/static/media/gdrgruop.6fe169ab01a3b9b0d5f7.jpg" alt="SRS Home Food">
            </a>
            <div class="message">New Product Query</div>
            <div class="body">
                <p>Dear <span class="highlight">Sir</span>,</p>
                <div class="info">
                    <p><span class="highlight">Name:</span> ${name}</p>
                    <p><span class="highlight">Company Name:</span> ${companyName}</p>
                    <p><span class="highlight">Product:</span> ${product}</p>
                    <p><span class="highlight">Unit KG:</span> ${quantity}</p>
                    <p><span class="highlight">Email:</span> ${email}</p>
                    <p><span class="highlight">Contact Number:</span> +${phoneCode}${contactNumber}</p>
                    <p><span class="highlight">Country:</span> ${country}</p>
                    <p><span class="highlight">State:</span> ${state}</p>
                    <p><span class="highlight">City:</span> ${city}</p>
                    <p><span class="highlight">Address:</span> ${address}</p>
                </div>
            </div>
        </div>
    </body>
    </html>`;
};

module.exports = { enquiryEmail };
