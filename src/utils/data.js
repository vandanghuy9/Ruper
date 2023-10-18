import { RiArrowGoBackLine } from "react-icons/ri";
import {CiDeliveryTruck} from "react-icons/ci";
import {TfiWallet} from "react-icons/tfi";
import {MdSupportAgent} from "react-icons/md";
import {FaTwitter, FaInstagram,FaDribbble, FaBehance } from 'react-icons/fa';
const slides = [
  {
    image: "/slider/1.jpg",
    title: "Chair Collection",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop-grid-left.html",
    },
  },
  {
    image: "/slider/2.jpg",
    title: "Interior lighting",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop-grid-left.html",
    },
  },
  {
    image: "/slider/3.jpg",
    title: "Home office",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop-grid-left.html",
    },
  },
];

const firstBanner = [
  {
    imageSrc: "/banner/product-cat-1.jpg",
    link: "/shop-grid-left.html",
    buttonText: "Furniture",
    imgWidth: 571,
    imgHeight: 622,
  },
  {
    imageSrc: "/banner/product-cat-2.jpg",
    link: "/shop-grid-left.html",
    buttonText: "Lighting",
    imgWidth: 406,
    imgHeight: 304,
  },
  {
    imageSrc: "/banner/product-cat-3.jpg",
    link: "/shop-grid-left.html",
    buttonText: "Modern",
    imgWidth: 406,
    imgHeight: 304,
  },
  {
    imageSrc: "/banner/product-cat-4.jpg",
    link: "/shop-grid-left.html",
    buttonText: "Accessories",
    imgWidth: 406,
    imgHeight: 304,
  },
];

const products = [
  {
    id: 1,
    imageSrcs: ["/product/1.jpg", "/product/1-2.jpg"],
    class: "hot",
    productTitle: "Zunkel Schwarz",
    price: 100.0,
  },
  {
    id: 2,
    imageSrcs: ["/product/2.jpg", "/product/2-2.jpg"],
    class: "hot",
    productTitle: "Namaste Vase",
    price: 200.0,
  },
  {
    id: 3,
    imageSrcs: ["/product/3.jpg", "/product/3-2.jpg"],
    class: "hot",
    productTitle: "Chair Oak Matt Lacquered",
    price: 150.0,
  },
  {
    id: 4,
    imageSrcs: ["/product/4.jpg", "/product/4-2.jpg"],
    class: "onsale",
    productTitle: "Pillar Dining Table Round",
    price: 100.0,
  },
  {
    id: 5,
    imageSrcs: ["/product/5.jpg", "/product/5-2.jpg"],
    class: "onsale",
    productTitle: "Amp Pendant Light Large",
    price: 140.0,
  },
];

const secondBanner = [
  {
    imageSrc: "/banner/banner-1.jpg",
    link: "/shop-grid-left.html",
    bannerTitle: "Let the adventure begin.",
    desc: "Sed lectus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus",
    buttonText: "SHOP NOW",
    imgWidth: 825,
    imgHeight: 475,
  },
  {
    imageSrc: "/banner/banner-2.jpg",
    link: "/shop-grid-left.html",
    bannerTitle: "UP TO 20% OFF",
    desc: "Don't miss savings on bedroom, living",
    buttonText: "",
    imgWidth: 571,
    imgHeight: 475,
  },
];

const featureCardData = [
  {
    icon: <CiDeliveryTruck />,
    title: "Free Shipping",
    desc: "You will love at great low prices",
  },
  {
    icon: <TfiWallet />,
    title: "Flexible Payment",
    desc: "Pay with Multiple Credit Cards",
  },
  {
    icon: <RiArrowGoBackLine />,
    title: "14 Day Returns",
    desc: "Within 30 days for an exchange.",
  },  
  {
    icon: <MdSupportAgent />,
    title: "Online Support",
    desc: "24 hours a day, 7 days a week",
  },
];

const footer = [
  {
    title: "Contact Us",
    content: [
      {
        href: "/",
        desc: "616.774.0561",
      },
      {
        href: "/",
        desc: "866.453.4748",
      },
      {
        href: "/",
        desc: "HR Fax: 810.222.5439",
      },
      {
        href: "/",
        desc: "sales@ruperfurniture.com",
      },
    ],
  },
  {
    title: "Services",
    content: [
      {
        href: "/",
        desc: "Sale",
      },
      {
        href: "/",
        desc: "Quick Ship",
      },
      {
        href: "/",
        desc: "New Designs",
      },
      {
        href: "/",
        desc: "Accidental Fabric Protection",
      },
      {
        href: "/",
        desc: "Furniture Care",
      },
      {
        href: "/",
        desc: "Gift Cards",
      },
    ],
  },
];

const socialLinks = [
  {
    href:'/',
    icon: <FaTwitter/>,
  },
  {
    href:'/',
    icon: <FaInstagram/>,
  },
  {
    href:'/',
    icon: <FaDribbble/>,
  },
  {
    href:'/',
    icon: <FaBehance/>,
  }, 
]
export { slides, firstBanner, products, secondBanner, featureCardData, footer, socialLinks};
