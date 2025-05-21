import Wrapper from "./wrapper";
import "./globals.css";

export const generateMetadata = () => {
  return {
    title: "Farmhouse and Farmland for sale in Bhopal - GDR Group 72",
    description:
      "GDR Group 72 Find the best farmhouse for sale in Bhopal and the best chances of prime farmland",
    keywords:
      "farmhouse in bhopal for sale , farm house for sale in bhopal, farmhouse in bhopal, bhopal farm house ,best farm house in bhopal,farm house near bhopal,farm land in bhopal,farm land for sale in bhopal, commercial property in bhopal,commercial property for sale in bhopal,commercial land for sale in bhopal,commercial property in bhopal for sale,agriculture land for sale in bhopal",
    url: "https://gdrgroup72.com/",
    image: "/logo.jpg",

    // Open Graph Tags
    openGraph: {
      type: "website",
      url: "https://gdrgroup72.com/",
      title: "Farmhouse and Farmland for sale in Bhopal - GDR Group 72",
      description:
        "GDR Group 72 Find the best farmhouse for sale in Bhopal and the best chances of prime farmland",
      image: "/logo.jpg",
    },

    // Twitter Tags
    twitter: {
      card: "summary_large_image",
      title: "Farmhouse and Farmland for sale in Bhopal - GDR Group 72",
      description:
        "GDR Group 72 Find the best farmhouse for sale in Bhopal and the best chances of prime farmland",
      image: "/logo.jpg",
    },
  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="canonical" href="https://gdrgroup72.com/" />

      {/* <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "GDR Group 72",
          url: "https://gdrgroup72.com/",
          logo: "https://gdrgroup72.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgdrgruop.95865275.jpg&w=1920&q=75",
        })}
      </script> */}
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
