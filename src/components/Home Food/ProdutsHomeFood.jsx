import React from "react";
import ProductCard from "./ProductCard";

// Dummy data for products
const dryFruits = [
  {
    name: "Sugar Cane Vinegar",
    category: "Sirka",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQpKpWcpxp5eJBNISi6Y0QsIYVBVo874ikrDfSg3Xh6qTdnG6MDmtUSicPh9gLI84ZgQYG5UN9NrkP_nH-IU1wiaa0jSvYzAsDpue_5GfU&usqp=CAE",
  },
  {
    name: "All Types Vinegar",
    category: "Sirka",
    image:
      "https://assets.bonappetit.com/photos/5cc1f251f8ab2775109895c7/master/pass/Basically-Vinegar-Group-Update.jpg",
  },

  {
    name: "All Types Achhar",
    category: "Achhar",
    image:
      "https://foodalltime.com/wp-content/uploads/2022/01/10-Best-Achar-and-Pickle-Recipes-of-India-2.png",
  },

  {
    name: "Minralas Water",
    category: "Minrals",
    image:
      "https://www.netsolwater.com/netsol-water/assets/img/product-images/Is-mineral-water-different-from-packaged-drinking-water.jpg",
  },
  {
    name: "Ice Cube ",
    category: "Minrals",
    image:
      "https://www.eurokidsindia.com/blog/wp-content/uploads/2024/05/ice-cube-activities.jpg",
  },

  {
    name: "Elaichi (Cardamom)",
    category: "Spice",
    image:
      "https://m.media-amazon.com/images/I/51FjiZFpziL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Black Cumin (Kalonji)",
    category: "Spice",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQxZvn-jUG7K8FKOhB8ikJzv9ErTaYYtVAW8iw8_J9jRT6VCtnA1s7Dpm5XvQwAGtSK_e4Tbtv7vbz1qFfaUNS1osMWgV6elvuEmuhhccg",
  },
  {
    name: "Asafetida (Hing)",
    category: "Spice",
    image:
      "https://cdn.britannica.com/99/205799-050-46B0471A/Bowl-asafoetida-resin-spice-Iran-India.jpg",
  },
  {
    name: "Nutmug (Jaiphal)",
    category: "Spice",
    image:
      "https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/coorg-organic-nutmegjaiphalmyristica-fragransjaifal-seed-100-gm-coorg-spices-organic-spices.20220909005824.webp",
  },
  {
    name: "Black Pepper (Kaali Mirch)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9eF3OZ_JJDT1-iMMWqwG4es7IqFK9daVzgw&s",
  },
  {
    name: "Dried Mango Powder (Amchoor)",
    category: "Spice",
    image: "https://m.media-amazon.com/images/I/61vnBhUQOxL.jpg",
  },
  {
    name: "Red Chilli (Laal Mirch)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGk3w21R-CWB-Abs0w96lC1O9Zzw97JqSG6g&s",
  },
  {
    name: "Ginger (Adrak)",
    category: "Spice",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/9/ZB/EZ/CD/22640664/ginger-adrak-500x500.jpg",
  },
  {
    name: "Turmeric (Haldi)",
    category: "Spice",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/1/DB/XP/IT/51027948/turmeric-powder-.jpg",
  },
  {
    name: "Garlic (Lehsun)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHYOkm0kKXZuL0LWSyVIZA8qbzKJiXd9F1Q&s",
  },
  {
    name: "Bay Leaf (Tej Patta)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjFYN1uqr9-9o09pzM7WT7Np19t6FtY4Klg&s",
  },
  {
    name: "Basil Seeds (Sabja)",
    category: "Spice",
    image:
      "https://organicmandya.com/cdn/shop/files/BasilSeeds_SabjaSeeds.jpg?v=1719566856&width=1500",
  },
  {
    name: "Coriander Seeds (Sabut Dhaniya)",
    category: "Spice",
    image:
      "https://m.media-amazon.com/images/I/51qbY3B3VCL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Holy Basil (Tulsi)",
    category: "Spice",
    image:
      "https://m.media-amazon.com/images/I/41RaSI4KdcL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Carom Seeds (Ajwain)",
    category: "Spice",
    image:
      "https://m.media-amazon.com/images/I/51Sm64oJ1JL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Mace (Javitri)",
    category: "Spice",
    image:
      "https://m.media-amazon.com/images/I/51YwrRs-YwS._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Cumin (Jeera)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkamO-5CzyF0yPETijKUS33-8WnUJUp-NsA&s",
  },
  {
    name: "Brown Mustard (Rai)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcjsKSmAIHM6rz_8rkiEKMrIx9admF7e26HQ&s",
  },
  {
    name: "Cloves (Laung)",
    category: "Spice",
    image: "https://m.media-amazon.com/images/I/51+VxjPrqrL.jpg",
  },
  {
    name: "Mustard Seeds (Sarson Dana)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjhGwdxozN7ON20G-o0eIGkBA1SoA_XMkhQ&s",
  },
  {
    name: "Garam Masala",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ73LhUZ4VNeFvWpExIt56NCqECEfTWWTyag&s",
  },
  {
    name: "Fennel Seeds (Saunf)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpiUVPVJa7a4aXx9DcPDZd4nVj8Bvrhvk1Q&s",
  },
  {
    name: "Fenugreek Leaves (Kasturi Methi)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnPzzeRT0CqWaIudHx4ESBrmQOvTAkjcc3A&s",
  },
  {
    name: "Star Anise (Chakri Phool)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20MbBz7Nfyqk7gl8YDiv8xBbn9SC0yH87nA&s",
  },
  {
    name: "Cinnamon (Daalchini)",
    category: "Spice",
    image: "https://m.media-amazon.com/images/I/41OL3VnEJ9L.jpg",
  },
  {
    name: "Poppy Seeds (Khus Khus)",
    category: "Spice",
    image:
      "https://5.imimg.com/data5/ZK/AZ/EX/SELLER-34643547/poppy-seeds-khus-khus-500x500.jpg",
  },
  {
    name: "Saffron (Kesar)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdFrxjHKRTtHHflcijftzOegXfS5fITTLzg&s",
  },
  {
    name: "Curry Leaves (Kari Patta)",
    category: "Spice",
    image:
      "https://cdn.prod.website-files.com/65056ba428fdd5501ff0ef16/6622d419f8be9c555a570649_AdobeStock_109487326-_1_.webp",
  },
  {
    name: "Black Cardamom (Badi Elaichi)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_0S0KnJVPAp3bUpwbOnDPv4rAH5KMGCKOQ&s",
  },
  {
    name: "Coriander Powder (Dhaniya Powder)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73LQLQxGUt7m7EZQzhGJwQFnGgOb9Jk7iLw&s",
  },
  {
    name: "Fenugreek Seeds (Methi Dana)",
    category: "Spice",
    image: "https://m.media-amazon.com/images/I/61SH1Uz6EDL.jpg",
  },
  {
    name: "Cassia Bark (Jangalee Dalchini Chaal)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMLkeXjUiEWrcui6fUBuLcFntKNlfaACo-w&s",
  },
  {
    name: "Tamarind (Imli)",
    category: "Spice",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/5/418771168/QK/GX/IC/217485739/tamarind-imli.jpeg",
  },
  {
    name: "Sesame Seeds (Til)",
    category: "Spice",
    image:
      "https://5.imimg.com/data5/AX/SN/UF/SELLER-61630555/sesame-seeds-til-.jpeg",
  },
  {
    name: "Pomegranate Seeds (Anaar Dana)",
    category: "Spice",
    image:
      "https://m.media-amazon.com/images/I/81L1t+NfHRL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Mint (Pudhina)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6rngBak4e9vY-AaQTwGDAEV89Sa5BsHGLA&s",
  },
  {
    name: "Ginger Powder (Adrak Powder)",
    category: "Spice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXNpBE0svCl8XitjJlMyyzsgtlxnID29zOA&s",
  },
  {
    name: "Gooseberry Grass Powder (Amla Powder)",
    category: "Spice",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2020/8/IZ/GT/KK/1467003/amla-powder.jpg",
  },
  {
    name: "Green Gram (Mng Dal)",
    category: "Pulses",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719472481/INEXT/kzuhyjo9bnjtnldju6fd.jpg",
  },
  {
    name: "Split Green Gram (Mung Dal)",
    category: "Pulses",
    image:
      "https://t4.ftcdn.net/jpg/01/83/47/67/360_F_183476704_WElLlOssc5NeZFYRNlI7BtebbjSMJFrf.jpg",
  },
  {
    name: "Yellow Lentils (Toor Dal)",
    category: "Pulses",
    image:
      "https://cdn.ecommercedns.uk/files/8/252318/9/27680479/yellow-lentils.jpg",
  },
  {
    name: "Garbanzo Beans (Kabuli Chana)",
    category: "Pulses",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719472808/INEXT/yi8jyhqi2nf0eepv4qic.jpg",
  },
  {
    name: "Black Chickpeas",
    category: "Pulses",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719472890/INEXT/ow54ty9t22fcvvvjvkf6.jpg",
  },
  {
    name: "Basnati Rice",
    category: "Rice",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579620/INEXT/rlgavk9bh7uksfdchlgf.webp",
  },
  {
    name: "Sona Masoori Rice",
    category: "Rice",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579720/INEXT/mavgxgw4ij1icwuj90zw.jpg",
  },
  {
    name: "Brown Rice",
    category: "Rice",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579826/INEXT/fvgiua4tf0v9ithwjpf3.webp",
  },
  {
    name: "Samba Rice",
    category: "Rice",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579873/INEXT/k4i7ztavywxma0sgcs5k.png",
  },
  {
    name: "Kalanamak Rice ",
    category: "Rice",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1722078896/INEXT/ti265rly7dfp84hzwxcx.jpg",
  },
];

function ProdutsHomeFood() {
  return (
    <div className="w-11/12 mx-auto mt-[60px]">
      <div>
        {/* Heading */}
        <div className="flex flex-col w-full items-center">
          <h3 className="text-4xl font-fjalla text-[#33536B]">
            Spices & Food Items
          </h3>
          <div className="flex items-center w-[75px]">
            <div className="h-0.5 bg-[#e2571a]"></div>
            <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
            <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
            <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
            <div
              className="h-[4px] rounded-full w-[10px] flex-grow"
              style={{ backgroundColor: "#e2571a" }}
            ></div>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 place-content-center w-full place-items-center mt-12">
          {dryFruits.map((product, index) => (
            <ProductCard
              index={index}
              key={index}
              imageUrl={product.image}
              title={product.name}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProdutsHomeFood;
