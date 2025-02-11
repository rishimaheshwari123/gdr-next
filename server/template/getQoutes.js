exports.getQuoteEmail = (name, email, mobile, service,  location,  message) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Get Quote Request Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
                text-align: left;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <div class="message">Get Quote Request Confirmation</div>
            <div class="body">
                <p>Dear Admin,</p>
                <p>A new quote request has been received with the following details:</p>
                <p><span class="highlight">Name:</span> ${name}</p>
                <p><span class="highlight">Email:</span> ${email}</p>
                <p><span class="highlight">Mobile:</span> ${mobile}</p>
                <p><span class="highlight">City:</span> ${location}</p>
                <p><span class="highlight">Service:</span> ${service}</p>
                <p><span class="highlight">Message:</span> ${message}</p>
                <p>We appreciate your interest and will process the request shortly.</p>
            </div>
        </div>
    </body>
    
    </html>`;
};
