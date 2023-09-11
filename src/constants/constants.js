export const BRANDCOLOR = "#1e90ff";
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
