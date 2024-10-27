import { RiArrowGoBackLine } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiWallet } from "react-icons/tfi";
import { MdSupportAgent } from "react-icons/md";
import { FaTwitter, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";
const sampleProductId = "66018b56cd25b4bf5fc20170";
const blogTags = [
  {
    _id: "accessories",
  },
  {
    _id: "home decor",
  },
  {
    _id: "living room",
  },
  {
    _id: "bedroom",
  },
  {
    _id: "small space",
  },
  {
    _id: "desk",
  },
  {
    _id: "dining",
  },
  {
    _id: "minimal",
  },
  {
    _id: "office",
  },
  {
    _id: "simple",
  },
  {
    _id: "modern",
  },
  {
    _id: "outdoor",
  },
  {
    _id: "kitchen",
  },
  {
    _id: "organization",
  },
  {
    _id: "relaxation",
  },
  {
    _id: "furniture",
  },
  {
    _id: "lifestyle",
  },
];
const homeCategoryMenu = {
  id: "/",
  text: "Home",
  path: "/",
  child: [
    {
      id: "HOME/FURNITURE_1",
      text: "Furniture 1",
      child: [
        {
          id: "HOME/FURNITURE_1/CATEGORY",
          text: "Home Categories",
          path: "/",
        },
        {
          id: "HOME/FURNITURE_1/CLEAN",
          text: "Home Clean",
          path: "/?type=CLEAN",
        },
        {
          id: "HOME/FURNITURE_1/COLLECTION",
          text: "Home Collection",
          path: "/?type=COLLECTION",
        },
        {
          id: "HOME/FURNITURE_1/GRID",
          text: "Home Grid",
          path: "/?type=GRID",
        },
        {
          id: "HOME/FURNITURE_1/MINIMAL",
          text: "Home Minimal",
          path: "/?type=MINIMAL",
        },
        {
          id: "HOME/FURNITURE_1/MODERN",
          text: "Home Modern",
          path: "/?type=MODERN",
        },
        {
          id: "HOME/FURNITURE_1/STYLISH",
          text: "Home Stylish",
          path: "/?type=STYLISH",
        },
        {
          id: "HOME/FURNITURE_1/UNIQUE",
          text: "Home Unique",
          path: "/?type=UNIQUE",
        },
      ],
    },
    {
      id: "HOME/FURNITURE_2",
      text: "Furniture 2",
      child: [
        {
          id: "HOME/FURNITURE_2/SPLIT",
          text: "Home Split",
          path: "/?type=SPLIT",
        },
        {
          id: "HOME/FURNITURE_2/GOTHIC",
          text: "Home Gothic",
          path: "/?type=GOTHIC",
        },
        {
          id: "HOME/FURNITURE_2/LUXURY",
          text: "Home Luxury",
          path: "/?type=LUXURY",
        },
        {
          id: "HOME/FURNITURE_2/SCANDINAVIAN",
          text: "Home Scandinavian",
          path: "/?type=SCANDINAVIAN",
        },
        {
          id: "HOME/FURNITURE_2/MID_CENTURY",
          text: "Home Mid-Century",
          path: "/?type=MID_CENTURY",
        },
        {
          id: "HOME/FURNITURE_2/RETRO",
          text: "Home Retro",
          path: "/?type=RETRO",
        },
        {
          id: "HOME/FURNITURE_2/CODE_BLOCK",
          text: "Home Color Block",
          path: "/?type=COLOR_BLOCK",
        },
      ],
    },
  ],
};

const shopCategoryMenu = {
  id: "SHOP",
  text: "Shop",
  path: "/shop",
  isPublic: true,
  child: [
    {
      id: "SHOP/PRODUCT",
      text: "Shop - Products",
      path: "/shop",
      isPublic: true,
      child: [
        {
          id: "SHOP/PRODUCT/GRID_LEFT",
          text: "Shop Grid - Left Sidebar",
          isPublic: true,
          path: "/shop?layout=grid&sidebar=left",
        },
        {
          id: "SHOP/PRODUCT/LIST_LEFT",
          text: "Shop List - Left Sidebar",
          path: "/shop?layout=list&sidebar=left",
          isPublic: true,
        },
        {
          id: "SHOP/PRODUCT/GRID_RIGHT",
          text: "Shop Grid - Right Sidebar",
          path: "/shop?layout=grid&sidebar=right",
          isPublic: true,
        },
        {
          id: "SHOP/PRODUCT/LIST_RIGHT",
          text: "Shop List - Right Sidebar",
          path: "/shop?layout=list&sidebar=right",
          isPublic: true,
        },
        {
          id: "SHOP/PRODUCT/GRID_NONE",
          text: "Shop Grid - No Sidebar",
          path: "/shop?layout=grid&sidebar=none",
          isPublic: true,
        },
      ],
    },
    {
      id: "SHOP/DETAILS",
      text: "Shop Details",
      path: `/product`,
      isPublic: true,
    },
    {
      id: "SHOP/CART",
      text: "Shop - Cart",
      path: `/cart`,
      isPublic: true,
    },
    {
      id: "SHOP/CHECKOUT",
      text: "Shop - Checkout",
      path: `/checkout`,
      isPublic: false,
    },
    {
      id: "SHOP/WISHLIST",
      text: "Shop - Wishlist",
      path: `/wishlist`,
      isPublic: false,
    },
  ],
};

const blogCategoryMenu = {
  id: "BLOG",
  text: "Blog",
  path: "/blog",
  isPublic: true,
  child: [
    {
      id: "BLOG/CATEGORY",
      text: "Blog Category",
      path: "/blog",
      isPublic: true,
      child: [
        {
          id: "BLOG/GRID_LEFT",
          text: "Blog Grid - Left Sidebar",
          path: "/blog?layout=grid&sidebar=left",
          isPublic: true,
        },
        {
          id: "BLOG/GRID_RIGHT",
          text: "Blog Grid - Right Sidebar",
          path: "/blog?layout=grid&sidebar=right",
          isPublic: true,
        },
        {
          id: "BLOG/LIST_LEFT",
          text: "Blog List - Left Sidebar",
          path: "/blog?layout=list&sidebar=left",
          isPublic: true,
        },
        {
          id: "BLOG/LIST_RIGHT",
          text: "Blog List - Right Sidebar",
          path: "/blog?layout=list&sidebar=right",
          isPublic: true,
        },
        {
          id: "BLOG/GRID_NONE",
          text: "Blog Grid - No Sidebar",
          path: "/blog?layout=grid&sidebar=none",
          isPublic: true,
        },
      ],
    },
    {
      id: "BLOG/DETAIL",
      text: "Blog Details",
      path: "",
      isPublic: true,
      child: [
        {
          id: "BLOG_DETAILS/LEFT",
          text: "Blog Details - Left Sidebar",
          path: "/blog?sidebar=left",
          isPublic: true,
        },
        {
          id: "BLOG_DETAILS/RIGHT",
          text: "Blog Details - Right Sidebar",
          path: "/blog?sidebar=right",
          isPublic: true,
        },
        {
          id: "BLOG_DETAILS/NONE",
          text: "Blog Details - No Sidebar",
          path: "/blog?sidebar=none",
          isPublic: true,
        },
      ],
    },
  ],
};
const pageMenu = {
  id: "PAGE",
  text: "Pages",
  path: "/",
  isPublic: true,
  child: [
    {
      id: "PAGE/LOGIN",
      text: "Login / Register",
      path: "/login",
      isPublic: true,
    },
    {
      id: "PAGE/FORGOT_PASSWORD",
      text: "Forgot Password",
      path: `/forgot-password`,
      isPublic: true,
    },
    {
      id: "PAGE/MY_ACCOUNT",
      text: "My Account",
      path: `/user/dashboard`,
      isPublic: false,
    },
    {
      id: "PAGE/ABOUT_US",
      text: "About Us",
      path: `/about-us`,
      isPublic: true,
    },
    {
      id: "PAGE/CONTACT",
      text: "Contact",
      path: `/contact`,
      isPublic: true,
    },
    {
      id: "PAGE/FAQ",
      text: "FAQ",
      path: `/faq`,
      isPublic: true,
    },
    {
      id: "PAGE/404",
      text: "Page 404",
      path: `/page-404`,
      isPublic: true,
    },
  ],
};

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
const cleanPageslides = [
  {
    image: "/slider/4.jpg",
    title: "Outdoor Chair",
    subtitle: "SALE UP TO 30% OFF",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/5.jpg",
    title: "Accessories",
    subtitle: "SALE UP TO 30% OFF",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/6.jpg",
    title: "Kitchen Sale",
    subtitle: "SALE UP TO 30% OFF",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
];
const collectionSlides = [
  {
    image: "/slider/8.jpg",
    title: "Spring",
    subtitle: "Collection 2022",
    description: "Soft seats that welcome you home",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/7.jpg",
    title: "For the",
    subtitle: "Comfort-Seekers",
    description: "Soft seats that welcome you home",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/9.jpg",
    title: "The",
    subtitle: "Great Outdoors",
    description: "Soft seats that welcome you home",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
];

const firstBanner = [
  {
    imageSrc: "/banner/product-cat-1.jpg",
    link: "/shop?category=FURNITURE",
    buttonText: "Furniture",
    imgWidth: 571,
    imgHeight: 622,
  },
  {
    imageSrc: "/banner/product-cat-2.jpg",
    link: "/shop?category=LIGHTING",
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
    imgWidth: 812,
    imgHeight: 608,
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
    link: "/shop",
    bannerTitle: "Let the adventure begin.",
    desc: "Sed lectus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus",
    buttonText: "SHOP NOW",
    imgWidth: 825,
    imgHeight: 475,
  },
  {
    imageSrc: "/banner/banner-2.jpg",
    link: "/shop",
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
  { category: "Bed & Bath", image: "/product/cat-1.jpg", count: 0, key: "BED_BATH" },
  { category: "Furniture", image: "/product/cat-2.jpg", count: 0, key: "FURNITURE" },
  { category: "Home Décor", image: "/product/cat-3.jpg", count: 0, key: "HOME_DECOR" },
  { category: "Lighting", image: "/product/cat-4.jpg", count: 0, key: "LIGHTING" },
  { category: "Office", image: "/product/cat-5.jpg", count: 0, key: "OFFICE" },
  { category: "Outdoor", image: "/product/cat-6.jpg", count: 0, key: "OUTDOOR" },
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
const shippingOptions = [
  {
    label: "Free shipping",
    value: "free_shipping",
    fee: 0,
  },
  {
    label: "Flat rate",
    value: "flat_rate",
    fee: 20,
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
    label: "Card",
    value: "card",
    description: "Pay via card; you can pay with your VISA card, or MASTER card",
  },
];

const testimonial = [
  {
    id: 0,
    title: "Amazing piece of history",
    content: `” Wonderful communication and your company even sent a generous amount of samples to me, making my decision to spend money on an internet item easy. Thank you. Product quality is perfect. “`,
    img: "/testimonial/1.jpg",
    name: "Robert Smith",
  },
  {
    id: 1,
    title: "Fabulous Grounds",
    content: `” Wonderful communication and your company even sent a generous amount of samples to me, making my decision to spend money on an internet item easy. Thank you. Product quality is perfect. “`,
    img: "/testimonial/2.jpg",
    name: "Saitama One",
  },
  {
    id: 2,
    title: "I love Almo",
    content: `” Wonderful communication and your company even sent a generous amount of samples to me, making my decision to spend money on an internet item easy. Thank you. Product quality is perfect. “`,
    img: "/testimonial/3.jpg",
    name: "Sara Colinton",
  },
  {
    id: 3,
    title: "Stunning design",
    content: `” Wonderful communication and your company even sent a generous amount of samples to me, making my decision to spend money on an internet item easy. Thank you. Product quality is perfect. “`,
    img: "/testimonial/4.jpg",
    name: "Shetty Jamie",
  },
];
const cleanPageFirstBanner = [
  {
    image: "/banner/banner-3.jpg",
    link: "/shop?category=FURNITURE",
    title: "new arivals.",
    img: {
      width: 568,
      height: 607,
    },
  },
  {
    image: "/banner/banner-4.jpg",
    link: "/shop?category=LIGHTING",
    title: "trending.",
    img: {
      width: 568,
      height: 607,
    },
  },
  {
    image: "/banner/banner-5.jpg",
    link: "/shop",
    title: "staffpick.",
    img: {
      width: 568,
      height: 607,
    },
  },
];
const collectionPageFirstBanner = [
  {
    image: "/banner/banner-6.jpg",
    link: "/shop?category=FURNITURE",
    title: "Outdoor With a Touch of Class.",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 496,
      height: 577,
    },
  },
  {
    image: "/banner/banner-7.jpg",
    link: "/shop?category=LIGHTING",
    title: "A Beautiful, Restful Bedroom",
    description: "Make you bedroom your inner sanctuary.",
    img: {
      width: 496,
      height: 577,
    },
  },
  {
    image: "/banner/banner-8.jpg",
    link: "/shop",
    title: "Beautiful Boho Dining",
    description: "Make your meal times experience an event by styling with a boho look.",
    img: {
      width: 496,
      height: 577,
    },
  },
];
const productStyleBanner = [
  {
    image: "/product/cat-7.jpg",
    link: "/shop?category=FURNITURE",
    title: "Mid Century Modern",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 303,
      height: 366,
    },
  },
  {
    image: "/product/cat-8.jpg",
    link: "/shop?category=LIGHTING",
    title: "French Provincial",
    description: "Make you bedroom your inner sanctuary.",
    img: {
      width: 303,
      height: 366,
    },
  },
  {
    image: "/product/cat-9.jpg",
    link: "/shop",
    title: "Classic Traditional",
    description: "Make your meal times experience an event by styling with a boho look.",
    img: {
      width: 303,
      height: 366,
    },
  },
  {
    image: "/product/cat-10.jpg",
    link: "/shop",
    title: "Scandinavian",
    description: "Make your meal times experience an event by styling with a boho look.",
    img: {
      width: 303,
      height: 366,
    },
  },
];
const minimalPageSlides = [
  {
    image: "/slider/13.jpg",
    title: "Designed for Life",
    subtitle: "Made for you.",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/14.jpg",
    title: "Lighting",
    subtitle: "Inspiration",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/15.jpg",
    title: "Chair",
    subtitle: "Collection",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
];
const minimalFirstBanner = [
  {
    imageSrc: "/banner/banner-6.jpg",
    link: "/shop",
    title: "For your personal",
    subtitle: "collection",
    description: "Save up to $500 on outdoor packages",
    imgWidth: 496,
    imgHeight: 577,
  },
  {
    imageSrc: "/banner/banner-7.jpg",
    link: "/shop",
    title: "Always by your side",
    description: "Make you bedroom your inner sanctuary.",
    imgWidth: 496,
    imgHeight: 577,
  },
];
const modernPageSlides = [
  {
    image: "/slider/16.jpg",
    title: "Outline Studio Sofa",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/17.jpg",
    title: "Black Friday",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/18.jpg",
    title: "Spring Collection",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
];

const modernFirstBanner = [
  {
    imageSrc: "/banner/banner-11.jpg",
    link: "/shop?category=FURNITURE",
    buttonText: "Furniture",
    imgWidth: 571,
    imgHeight: 622,
  },
  {
    imageSrc: "/banner/banner-12.jpg",
    link: "/shop?category=LIGHTING",
    buttonText: "Lighting",
    imgWidth: 406,
    imgHeight: 304,
  },
  {
    imageSrc: "/banner/banner-13.jpg",
    link: "/shop",
    buttonText: "Modern",
    imgWidth: 406,
    imgHeight: 304,
  },
  {
    imageSrc: "/banner/banner-14.jpg",
    link: "/shop",
    buttonText: "Accessories",
    imgWidth: 812,
    imgHeight: 608,
  },
];

const modernSecondBanner = [
  {
    image: "/banner/banner-15.jpg",
    title: "Sink into Luxe",
    link: "/shop",
    description: "Statement-making, while keeping a low profile.",
  },
  {
    image: "/banner/banner-16.jpg",
    title: "Sitting Pretty",
    link: "/shop",
    description: "There’s always room for one more guest.",
  },
  {
    image: "/banner/banner-17.jpg",
    title: "Modern Curves",
    link: "/shop",
    description: "A curvaceous approach that covers all the bases.",
  },
];
const stylishSlides = [
  {
    image: "/slider/19.jpg",
    title: "Light Collection",
    subtitle: "Collection 2022",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/20.jpg",
    title: "Chair Collection",
    subtitle: "Comfort-Seekers",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/21.jpg",
    title: "Spring Sale",
    subtitle: "Great Outdoors",
    description: "Soft seats that welcome you home",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
];

const stylishProductStyleBanner = [
  {
    image: "/product/cat-11.jpg",
    link: "/shop",
    title: "Chair",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 407,
      height: 553,
    },
  },
  {
    image: "/product/cat-12.jpg",
    link: "/shop",
    title: "Lighting",
    description: "Make you bedroom your inner sanctuary.",
    img: {
      width: 407,
      height: 249,
    },
  },
  {
    image: "/product/cat-13.jpg",
    link: "/shop",
    title: "Storage",
    description: "Make your meal times experience an event by styling with a boho look.",
    img: {
      width: 407,
      height: 249,
    },
  },
  {
    image: "/product/cat-14.jpg",
    link: "/shop",
    title: "Chair",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 407,
      height: 553,
    },
  },
];
const stylishBannerSlides = [
  {
    imageSrc: "/banner/banner-18.jpg",
    link: "/shop",
    title: "From bottle to chair",
    subtitle: "collection",
    description:
      "In our design and production processes, we are always looking at where environmental thinking and economic",
    imgWidth: 1080,
    imgHeight: 584,
  },
  {
    imageSrc: "/banner/banner-19.jpg",
    link: "/shop",
    title: "Fall collection from hightower",
    description:
      "In our design and production processes, we are always looking at where environmental thinking and economic",
    imgWidth: 1080,
    imgHeight: 584,
  },
  {
    imageSrc: "/banner/banner-20.jpg",
    link: "/shop",
    title: "Armchair with armrests",
    description:
      "In our design and production processes, we are always looking at where environmental thinking and economic",
    imgWidth: 1080,
    imgHeight: 584,
  },
];
const stylishInstaSlides = [
  {
    id: 0,
    imageSrc: "/banner/instagram-6.jpg",
    href: "https://www.instagram.com/vandanghuy9/",
  },
  {
    id: 1,
    imageSrc: "/banner/instagram-7.jpg",
    href: "https://www.instagram.com/vandanghuy9/",
  },
  {
    id: 2,
    imageSrc: "/banner/instagram-8.jpg",
    href: "https://www.instagram.com/vandanghuy9/",
  },
  {
    id: 3,
    imageSrc: "/banner/instagram-9.jpg",
    href: "https://www.instagram.com/vandanghuy9/",
  },
  {
    id: 4,
    imageSrc: "/banner/instagram-10.jpg",
    href: "https://www.instagram.com/vandanghuy9/",
  },
];
const uniquePageSlides = [
  {
    image: "/slider/22.jpg",
    title: "Outline Studio Sofa",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/23.jpg",
    title: "Black Friday",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/24.jpg",
    title: "Spring Collection",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
];
const splitPageSlides = [
  {
    image: "/slider/25.jpg",
    title: "It's Our",
    subtitle: "Anniversary!",
    description: "Soft seats that welcome you home",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/26.jpg",
    title: "Made",
    subtitle: "for laze-ins",
    description: "Soft seats that welcome you home",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/27.jpg",
    title: "For the",
    subtitle: "Comfort-Seekers",
    description: "Soft seats that welcome you home",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
];
const gothicPageSlides = [
  {
    image: "/slider/28.jpg",
    title: "Easy Living",
    subtitle: "20%OFF.END MONDAY",
    description: "Hot stuff, new stuff, fun stuff, soon to be your stuff?",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/29.jpg",
    title: "Home Furniture",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/30.jpg",
    title: "Spring Collection",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
];
const gothicPageFirstBanner = [
  {
    image: "/banner/product-cat-5.jpg",
    link: "/shop?category=FURNITURE",
    title: "Sofa.",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 496,
      height: 577,
    },
  },
  {
    image: "/banner/product-cat-6.jpg",
    link: "/shop?category=LIGHTING",
    title: "Chair.",
    description: "Make you bedroom your inner sanctuary.",
    img: {
      width: 496,
      height: 577,
    },
  },
  {
    image: "/banner/product-cat-7.jpg",
    link: "/shop",
    title: "Lounge.",
    description: "Make your meal times experience an event by styling with a boho look.",
    img: {
      width: 496,
      height: 577,
    },
  },
];

const gothicProductCategoryBanner = [
  {
    image: "/product/cat-15.jpg",
    link: "/shop",
    title: "Boucle",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 331,
      height: 421,
    },
  },
  {
    image: "/product/cat-16.jpg",
    link: "/shop",
    title: "Rattan",
    description: "Make you bedroom your inner sanctuary.",
    img: {
      width: 331,
      height: 421,
    },
  },
  {
    image: "/product/cat-17.jpg",
    link: "/shop",
    title: "Cue The Curves",
    description: "Make your meal times experience an event by styling with a boho look.",
    img: {
      width: 331,
      height: 421,
    },
  },
  {
    image: "/product/cat-18.jpg",
    link: "/shop",
    title: "Small space solutions",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 331,
      height: 421,
    },
  },
];
const luxuryProductCategoryBanner = [
  {
    image: "/product/cat-19.jpg",
    link: "/shop",
    title: "Chair",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 330,
      height: 330,
    },
  },
  {
    image: "/product/cat-20.jpg",
    link: "/shop",
    title: "Lighting",
    description: "Make you bedroom your inner sanctuary.",
    img: {
      width: 330,
      height: 330,
    },
  },
  {
    image: "/product/cat-21.jpg",
    link: "/shop",
    title: "Storage",
    description: "Make your meal times experience an event by styling with a boho look.",
    img: {
      width: 330,
      height: 330,
    },
  },
  {
    image: "/product/cat-22.jpg",
    link: "/shop",
    title: "Chair",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 330,
      height: 330,
    },
  },
];
const luxurySlides = [
  {
    image: "/product/cat-23.jpg",
    title: "Accessories",
    subtitle: "Collection 2022",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/product/cat-24.jpg",
    title: "Industrial",
    subtitle: "Comfort-Seekers",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/product/cat-25.jpg",
    title: "Modern",
    subtitle: "Great Outdoors",
    description: "Soft seats that welcome you home",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/product/cat-26.jpg",
    title: "Scandinavian",
    subtitle: "Great Outdoors",
    description: "Soft seats that welcome you home",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
];
const luxurySecondBanner = [
  {
    imageSrc: "/banner/banner-23.jpg",
    link: "/shop",
    title: "For your personal",
    subtitle: "collection",
    description: "Save up to $500 on outdoor packages",
    imgWidth: 691,
    imgHeight: 400,
  },
  {
    imageSrc: "/banner/banner-24.jpg",
    link: "/shop",
    title: "Furniture for",
    subtitle: "the whole family",
    description: "Make you bedroom your inner sanctuary.",
    imgWidth: 691,
    imgHeight: 400,
  },
];
const scandinavianPageSlides = [
  {
    image: "/slider/31.jpg",
    title: "Easy Living",
    subtitle: "20%OFF.END MONDAY",
    description: "Hot stuff, new stuff, fun stuff, soon to be your stuff?",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/32.jpg",
    title: "Home Furniture",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/33.jpg",
    title: "Spring Collection",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
];
const scandinavianProductCategoryBanner = [
  {
    image: "/product/cat-27.jpg",
    link: "/shop",
    title: "Furniture",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 469,
      height: 475,
    },
  },
  {
    image: "/product/cat-28.jpg",
    link: "/shop",
    title: "Lighting",
    description: "Make you bedroom your inner sanctuary.",
    img: {
      width: 469,
      height: 475,
    },
  },
  {
    image: "/product/cat-29.jpg",
    link: "/shop",
    title: "Modern",
    description: "Make your meal times experience an event by styling with a boho look.",
    img: {
      width: 469,
      height: 475,
    },
  },
  {
    image: "/product/cat-30.jpg",
    link: "/shop",
    title: "Bed & Bath",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 469,
      height: 475,
    },
  },
];
const scandinavianPageSecondBanner = [
  {
    image: "/banner/banner-25.jpg",
    link: "/shop?category=HOME_DECOR",
    title: "Furniture",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 961,
      height: 590,
    },
  },
  {
    image: "/banner/banner-26.jpg",
    link: "/shop?category=HOME_DECOR",
    title: "Decor",
    description: "Make you bedroom your inner sanctuary.",
    img: {
      width: 961,
      height: 590,
    },
  },
  {
    image: "/banner/banner-27.jpg",
    link: "/shop?category=LIGHTING",
    title: "Lighting",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 961,
      height: 590,
    },
  },
  {
    image: "/banner/banner-28.jpg",
    link: "/shop?category=BED_BATH",
    title: "Kitchen & Bath",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 961,
      height: 590,
    },
  },
];
const midCenturySlides = [
  {
    image: "/slider/34.jpg",
    title: "Spring",
    subtitle: "Collection 2022",
    description: "Soft seats that welcome you home",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/35.jpg",
    title: "For the",
    subtitle: "Comfort-Seekers",
    description: "Soft seats that welcome you home",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
  {
    image: "/slider/36.jpg",
    title: "The",
    subtitle: "Great Outdoors",
    description: "Soft seats that welcome you home",
    button: {
      text: "SHOP NOW",
      url: "/shop",
    },
  },
];
const retroFirstBanner = [
  {
    imageSrc: "/banner/banner-29.jpg",
    link: "/shop?category=FURNITURE",
    buttonText: "Furniture Sale",
    imgWidth: 960,
    imgHeight: 790,
  },
  {
    imageSrc: "/banner/banner-30.jpg",
    link: "/shop?category=HOME_DECOR",
    buttonText: "Decoration",
    imgWidth: 960,
    imgHeight: 790,
  },
];
const retroProductStyleBanner = [
  {
    image: "/product/cat-31.jpg",
    link: "/shop",
    title: "Chair",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 407,
      height: 553,
    },
  },
  {
    image: "/product/cat-32.jpg",
    link: "/shop",
    title: "Storage",
    description: "Make you bedroom your inner sanctuary.",
    img: {
      width: 407,
      height: 249,
    },
  },
  {
    image: "/product/cat-33.jpg",
    link: "/shop",
    title: "Lighting",
    description: "Make your meal times experience an event by styling with a boho look.",
    img: {
      width: 407,
      height: 249,
    },
  },
  {
    image: "/product/cat-34.jpg",
    link: "/shop",
    title: "Home Office",
    description: "Style any outdoor area with some careful study and sound decisions.",
    img: {
      width: 407,
      height: 553,
    },
  },
];
const colorBlockPageSlides = [
  {
    image: "/slider/37.jpg",
    title: "Spring Collection",
    subtitle: "20%OFF.END MONDAY",
    description: "Hot stuff, new stuff, fun stuff, soon to be your stuff?",
    button: {
      text: "Shop Collection",
      url: "/shop",
    },
  },
  {
    image: "/slider/38.jpg",
    title: "Summer Sale",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "Shop Collection",
      url: "/shop",
    },
  },
  {
    image: "/slider/39.jpg",
    title: "New Arrivals",
    subtitle: "20%OFF.END MONDAY",
    description: "Save up to $500 on outdoor packages",
    button: {
      text: "Shop Collection",
      url: "/shop",
    },
  },
];
const colorBlockCategoryBanner = [
  {
    image: "/banner/banner-31.jpg",
    title: "Sink into Luxe",
    link: "/shop",
    description: "Statement-making, while keeping a low profile.",
  },
  {
    image: "/banner/banner-32.jpg",
    title: "Sitting Pretty",
    link: "/shop",
    description: "There’s always room for one more guest.",
  },
  {
    image: "/banner/banner-33.jpg",
    title: "Modern Curves",
    link: "/shop",
    description: "A curvaceous approach that covers all the bases.",
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
  shippingOptions,
  paymentOption,
  sampleProductId,
  homeCategoryMenu,
  shopCategoryMenu,
  blogCategoryMenu,
  pageMenu,
  blogTags,
  testimonial,
  cleanPageslides,
  cleanPageFirstBanner,
  collectionSlides,
  collectionPageFirstBanner,
  productStyleBanner,
  minimalPageSlides,
  minimalFirstBanner,
  modernPageSlides,
  modernFirstBanner,
  modernSecondBanner,
  stylishSlides,
  stylishProductStyleBanner,
  stylishBannerSlides,
  stylishInstaSlides,
  uniquePageSlides,
  splitPageSlides,
  gothicPageSlides,
  gothicPageFirstBanner,
  gothicProductCategoryBanner,
  luxuryProductCategoryBanner,
  luxurySlides,
  luxurySecondBanner,
  scandinavianPageSlides,
  scandinavianProductCategoryBanner,
  scandinavianPageSecondBanner,
  midCenturySlides,
  retroFirstBanner,
  retroProductStyleBanner,
  colorBlockPageSlides,
  colorBlockCategoryBanner,
};
