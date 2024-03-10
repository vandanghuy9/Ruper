import { RiArrowGoBackLine } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiWallet } from "react-icons/tfi";
import { MdSupportAgent } from "react-icons/md";
import { FaTwitter, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";
const slides = [
  {
    image: "/slider/1.jpg",
    title: "Chair Collection",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/2.jpg",
    title: "Interior lighting",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/3.jpg",
    title: "Home office",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
];

const firstBanner = [
  {
    imageSrc: "/banner/product-cat-1.jpg",
    link: "/shop",
    buttonText: "Furniture",
    imgWidth: 571,
    imgHeight: 622,
  },
  {
    imageSrc: "/banner/product-cat-2.jpg",
    link: "/shop",
    buttonText: "Lighting",
    imgWidth: 406,
    imgHeight: 304,
  },
  {
    imageSrc: "/banner/product-cat-3.jpg",
    link: "/shop",
    buttonText: "Modern",
    imgWidth: 406,
    imgHeight: 304,
  },
  {
    imageSrc: "/banner/product-cat-4.jpg",
    link: "/shop",
    buttonText: "Accessories",
    imgWidth: 406,
    imgHeight: 304,
  },
];

const products = [
  {
    id: 1,
    imageUrl: ["/product/1.jpg", "/product/1-2.jpg"],
    productClass: "hot",
    name: "Zunkel Schwarz",
    price: 100.0,
  },
  {
    id: 2,
    imageUrl: ["/product/2.jpg", "/product/2-2.jpg"],
    productClass: "hot",
    name: "Namaste Vase",
    price: 200.0,
  },
  {
    id: 3,
    imageUrl: ["/product/3.jpg", "/product/3-2.jpg"],
    productClass: "hot",
    name: "Chair Oak Matt Lacquered",
    price: 150.0,
  },
  {
    id: 4,
    imageUrl: ["/product/4.jpg", "/product/4-2.jpg"],
    productClass: "onsale",
    name: "Pillar Dining Table Round",
    price: 100.0,
  },
  {
    id: 5,
    imageUrl: ["/product/5.jpg", "/product/5-2.jpg"],
    // productClass: "onsale",
    name: "Amp Pendant Light Large",
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
    href: "/",
    icon: <FaTwitter />,
  },
  {
    href: "/",
    icon: <FaInstagram />,
  },
  {
    href: "/",
    icon: <FaDribbble />,
  },
  {
    href: "/",
    icon: <FaBehance />,
  },
];
const brand = [
  { src: "/brand/1.jpg", title: "Blast" },
  { src: "/brand/2.jpg", title: "Minimal" },
  { src: "/brand/3.jpg", title: "Money" },
  { src: "/brand/4.jpg", title: "Beat Sound" },
  { src: "/brand/5.jpg", title: "Red box" },
];
const menu = [
  { category: "Bed & Bath", count: 0, key: "BED_BATH" },
  { category: "Furniture", count: 0, key: "FURNITURE" },
  { category: "Home Décor", count: 0, key: "HOME_DECOR" },
  { category: "Lighting", count: 0, key: "LIGHTING" },
  { category: "Office", count: 0, key: "OFFICE" },
  { category: "Outdoor", count: 0, key: "OUTDOOR" },
];
const size = ["L", "M", "S"];
const countryOption = [
  { value: "", content: "Select a country / region…" },
  { value: "AF", content: "Afghanistan" },
  { value: "AX", content: "Åland Islands" },
  { value: "AL", content: "Albania" },
  { value: "DZ", content: "Algeria" },
  { value: "AS", content: "American Samoa" },
  { value: "AD", content: "Andorra" },
];
const stateOption = [
  { value: "", content: "Select a state / county…" },
  { value: "VN", content: "Vinnytsia Oblast" },
  { value: "VL", content: "Volyn Oblast" },
  { value: "DP", content: "Dnipropetrovsk Oblast" },
  { value: "DT", content: "Donetsk Oblast" },
  { value: "ZT", content: "Zhytomyr Oblast" },
];
const shippingOption = [
  {
    label: "Free shipping",
    value: "free_shipping",
  },
  {
    label: "Flat rate",
    value: "flat_rate",
  },
];

const paymentOption = [
  {
    label: "Direct bank transfer",
    value: "bacs",
    description:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
  },
  {
    label: "Check payments",
    value: "cheque",
    description:
      "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.",
  },
  {
    label: "Cash on delivery",
    value: "cod",
    description: "Pay with cash upon delivery.",
  },
  {
    label: "PayPal",
    value: "paypal",
    description:
      "Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.",
  },
];

export {
  slides,
  firstBanner,
  products,
  secondBanner,
  featureCardData,
  footer,
  socialLinks,
  brand,
  menu,
  size,
  countryOption,
  stateOption,
  shippingOption,
  paymentOption,
};
