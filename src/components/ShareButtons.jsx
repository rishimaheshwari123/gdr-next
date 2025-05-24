import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ShareButtons = () => {
  const url = "https://gdrgroup72.com";
  const title = "Check out this amazing website!";

  return (
    <div>
      {/* <p className="font-bold my-2">Share Now</p>
      <div className="flex space-x-2 mb-4">
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div> */}

      <p className="font-bold my-2">Follow Us</p>
      <div className="flex space-x-3 text-xl text-blue-600">
        <a
          href="https://www.facebook.com/RKSHOME.CO.IN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/rks.homes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
          <a
    href="https://x.com/homesrks"
    target="_blank"
    rel="noopener noreferrer"
    title="Twitter (X)"
  >
    <FaTwitter />
  </a>
        <a
          href="https://www.linkedin.com/company/rks-homes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/919893730005"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default ShareButtons;
