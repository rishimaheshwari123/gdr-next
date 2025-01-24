import React, { useEffect } from "react";
import Navbar from "./Navbar";
import SubNavbar from "../common/SubNavbar";
import Footer from "../common/Footer";
import image from "../../assests/home/v.jpg";

import {
  FaUserTie,
  FaHandsHelping,
  FaLeaf,
  FaGavel,
  FaCertificate,
  FaBullseye,
  FaChartLine,
} from "react-icons/fa";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import Devision from "../common/Devision";
import CompanyDetails from "../CompanyDetails";
import { Helmet } from "react-helmet";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>About - SRS Home Food </title>
        <meta
          name="description"
          content="GDR Group 72: A dynamic conglomerate specializing in Agriculture, Dairy, Farm Land, and Commercial Property with a mission to drive growth in rural communities through innovation and sustainability"
        />
      </Helmet>
      <SubNavbar />
      <Navbar />
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: "fixed", // Optional: Adjust attachment as needed
        }}
      >
        <div className="bg-gray-100 p-6 space-y-8 bg-opacity-80">
          <section className="space-y-4">
            <h6 className="text-2xl font-bold flex items-center">
              <MdOutlineSupervisorAccount className="text-blue-500 mr-2" /> OUR
              TEAM
            </h6>
            <p>
              Both the employees and business partners have made a major
              contribution to SRS Home Food strong foundation. We are proud to
              have such team players incorporating years of expertise in
              providing customers with a range of import and export solutions.
              Our leaders' approach is always intended to provide visibility,
              reliability, and consistency of product and unwavering commitment
              towards customer satisfaction. Advent our customers with
              distinguished qualities and fulfill their product-related
              requirements with full fidelity is the prime priority of our team.
              In addition, our logistics program makes it easy to maintain
              up-to-date communication with clients and take a customer-centric
              approach, and ensure express delivery before the committed time
              frame.
            </p>
          </section>

          <section className="space-y-4">
            <h6 className="text-2xl font-bold flex items-center">
              <FaHandsHelping className="text-green-500 mr-2" /> RESPONSIBLE:
              ENSURES PRODUCT SUPERIORITY, SAFETY & COST
            </h6>
            <p>
              Our honesty and transparency in business are always committed to
              serving our consumers with quality and timely shipment in a very
              convenient manner. Owing to our right pricing policy,
              distinguished qualities, and exemplary customer support, we are
              able to maintain an indelible position in the markets.
              Individually tailored products ensure stringent quality controls
              with the shortest possible delivery time to reach your home port.
              Our logistics professionals—the energetic crew behind our
              client-centric approach and organized results—are the most
              important resources that we incorporate in our services committed
              to you.
            </p>
            <p>
              Further, the integrated supply chain management enables our
              customers to respond to quick fluctuations in the marketplace and
              minimize their investment risks and associated operational costs.
            </p>
          </section>

          <section className="space-y-4">
            <h6 className="text-2xl font-bold flex items-center">
              <FaLeaf className="text-teal-500 mr-2" /> VALUES & BELIEFS
            </h6>
            <p>
              In order to ensure customers feel valued, we discover resolutions
              very precisely, pleasing customers’ needs—both existing and
              underlying. Furthermore, we give high importance to a product and
              provide them comprehensive product knowledge with the intention of
              assisting the best value for their money and enhancing customer
              satisfaction.
            </p>
            <p>
              The core of our values and beliefs—respect for our clientele,
              workforces, and the environment—enables us to stand behind our
              products and ensures excellent customer service. Finest and
              cost-effective products to our traders are our primary goal. It’s
              our belief that in-depth knowledge of products and the marketplace
              are essential pillars to accomplish this goal. Our values are a
              Win-Win for our customer—as knowledge is our base, integrity is
              our route, and satisfaction is our focus.
            </p>
          </section>

          <section className="space-y-4">
            <h6 className="text-2xl font-bold flex items-center">
              <FaGavel className="text-red-500 mr-2" /> BUSINESS ETHICS
            </h6>
            <p>
              SRS Home Food' business ethics completely incorporate
              import-export laws & guidelines and operate in a fair, legal, and
              quality-assured manner. At SRS Home Food, the groundwork of
              integrity is based on the standards of business conduct which are
              envisioned to meet commitment, principles, and endeavor to trade
              fairly and honestly.
            </p>
            <p>
              Our commitment to business reliability doesn’t compete with these
              factors—product quality, safety, and on-time delivery. In
              addition, it includes strong policies and an enthusiastic squad
              liable for answering certain import-export queries, updates on
              various deliverables, and suggestions on a constantly evolving
              landscape.
            </p>
            <p>
              Being a part of business ethics, our principle certifies that The
              Bharat Exporter conforms to all export, import, and trade
              compliance laws in all of its global business activities.
            </p>
          </section>

          <section className="space-y-4">
            <h6 className="text-2xl font-bold flex items-center">
              <FaBullseye className="text-purple-500 mr-2" /> Vision
            </h6>
            <p>
              From the commencement of the company, we have always stuck to our
              principle: “-The Quality We Trust-”. Our Vision is to provide the
              utmost quality products at the most competitive price with an aim
              to create a healthy nation and a healthy world. To accomplish our
              objectives, we strive to continuously improve the quality of our
              products to make them the best quality products in the world.
            </p>
          </section>

          <section className="space-y-4">
            <h6 className="text-2xl font-bold flex items-center">
              <FaChartLine className="text-yellow-500 mr-2" /> Mission
            </h6>
            <p>
              We want to deliver value to the customer, be profitable, and
              establish leadership in core markets. The Group strives for
              diversification and expansion of the product portfolio. We want to
              command top-of-mind recall with the consumer by ensuring effective
              brand promotion strategies. We also focus on increasing the
              Group’s Global Footprint by venturing into new markets and, at the
              same time, forming fruitful alliances with entities operating
              within the same plane.
            </p>
          </section>
        </div>
        <br />
        <CompanyDetails />
        <br />
        <Devision />
      </div>

      <Footer />
    </>
  );
};

export default AboutUsPage;
