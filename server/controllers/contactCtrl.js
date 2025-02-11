const contactModel = require("../models/contactModel")
const mailSender = require("../utils/mailSenderr")
const resumeSender = require("../utils/resumeSender")
const { contactUsEmail } = require("../template/contactFormRes")
const { enquiryEmail } = require("../template/enquiry")
const { getQuoteEmail } = require("../template/getQoutes")
const fs = require('fs');
const createContactCtrl = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body

        if (!name || !email || !phone || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            })
        }

        const emailRes = await mailSender(
            "rkshomes30@gmail.com",
            "New contact form details",
            contactUsEmail(name, email, phone, subject, message)
        )

        const contact = await contactModel.create({ name, email, phone, subject, message });
        return res.status(201).json({
            success: true,
            message: "Contact form submited successfully!"
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in create contact api!"
        })
    }
}


const createEnquiryCtrl = async (req, res) => {
    try {
        // console.log("hello")
        console.log(req.body)
        const { name, companyName, product, quantity, email, contactNumber, country, state, address, city, phoneCode } = req.body;
        if (!name || !companyName || !product || !quantity || !email || !contactNumber || !country || !state || !city || !address || !phoneCode) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            })
        }

        const emailRes = await mailSender(
            "rkshomes30@gmail.com",
            "New Enquiry",
            enquiryEmail(name, companyName, product, quantity, email, contactNumber, country, state, city, address, phoneCode)
        )
        console.log(emailRes)
        res.status(200).send({
            message: "Email send successfully.Our team will contact you soon!",
            emailRes,
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in create enquiry api!"
        })
    }
}









const getQuotes = async (req, res) => {
    console.log(req.body)
    try {
        const { name, email, mobile, service, location, message } = req.body;

        const emailRes = await mailSender(
            "rkshomes30@gmail.com",
            "Your Data send successfully",
            getQuoteEmail(name, email, mobile, service, location, message)
        );

        console.log("Email Res ", emailRes);
        return res.json({
            success: true,
            message: "Email send successfully",
        });
    } catch (error) {
        console.log("Error", error);
        console.log("Error message :", error.message);
        return res.json({
            success: false,
            message: "Something went wrong...",
        });
    }
};


const submitApplication = async (req, res) => {
    const { name, email, contact, message, applicationFor } = req.body;
    const resume = req.files?.resume; // Assuming you're using express-fileupload

    console.log('File Details:', {
        name: resume?.name,
        size: resume?.size,
        mimetype: resume?.mimetype,
        tempFilePath: resume?.tempFilePath, // Temporary path if using temp files
    });

    if (!resume) {
        return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    try {
        const filePath = resume.tempFilePath;
        const fileData = await fs.promises.readFile(filePath);

        const attachments = [{
            filename: resume.name,
            content: fileData.toString('base64'),
            encoding: 'base64',
        }];

        const title = `Career Application from ${name}`;
        const body = `
        <h2>Application Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Application For:</strong> ${applicationFor}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;

        console.log('Attachments:', attachments);

        // Example call to resumeSender function
        await resumeSender(email, title, body, attachments);

        res.status(200).json({ success: true, message: 'Application submitted successfully' });
    } catch (error) {
        console.error('Error handling application:', error);
        res.status(500).json({ success: false, message: 'Failed to submit application' });
    }
};
module.exports = { createContactCtrl, createEnquiryCtrl, getQuotes, submitApplication }