export const BRANDCOLOR = "#1e90ff";
export const BRANDNAME = "ShopAfrique";
export const EMAILREGEX = /.+@.+\..+/;
export const FORMRULES = {
  required: (value) => !!value || "This field is required",
  email: (v) => EMAILREGEX.test(v) || "Email should be valid",
  password: (v) => v.length >= 8 || "Password should be more than 8 characters",
};
