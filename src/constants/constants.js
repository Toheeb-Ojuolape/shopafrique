export const API_URL = process.env.VUE_APP_API_URL
export const BRANDCOLOR = "#1e90ff";
export const SECONDARYBLUE = "#f0f5fd"
export const BRANDNAME = "ShopAfrique";
export const EMAILREGEX = /.+@.+\..+/;
export const FORMRULES = {
  required: (value) => !!value || "This field is required",
  email: (v) => EMAILREGEX.test(v) || "Email should be valid",
  password: (v) => v.length >= 8 || "Password should be more than 8 characters",
};

export const SIGNUPPAYLOAD = {
  firstName: "",
  lastName: "",
  email: "",
  country: "Nigeria",
  businessType: "vendor",
  businessName: "myshop",
  password: "",
};

export const LOGINPAYLOAD = {
  email: "",
  password: "",
};

export const EMAILPAYLOAD = {
  email: "",
};

export const PASSWORDPAYLOAD = {
  password: "",
  confirmpassword:""
};

export const BUSINESSTYPES = [
  {
    title: "Retail/Affiliate Marketing",
    slug: "affiliate-marketing",
  },
  {
    title: "Online Content Creator",
    slug: "content-creator",
  },
  {
    title: "Dropshipping",
    slug: "dropshipping",
  },
  {
    title: "Freelance Service/Consulting",
    slug: "freelance-services",
  },

  {
    title: "Art / Handmade Crafts",
    slug: "online-art-crafts",
  },
];
