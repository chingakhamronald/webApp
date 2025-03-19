import { z } from "zod";

export const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
  firstName: z.string().min(2, { message: "First Name is required" }),
  lastName: z.string().min(2, { message: "Last Name is required" }),
  email: z.string().min(2, { message: "Please enter a valid email" }),
  address: z.string().min(2, { message: "Address is required" }),
  country: z.string().min(2, { message: "Country is required" }),
  state: z.string().min(2, { message: "State is required" }),
  city: z.string().min(2, { message: "City is required" }),
  pincode: z.number().min(2, { message: "Pincode is required" }),
  countryCode: z.number(),
  mobile: z.number().min(2, { message: "County code is required" }),
  fax: z.string(),
  phone: z.number(),
  password: z
    .string()
    .min(5, { message: "Password should be minium 5" })
    .max(15, { message: "Password should be maxium 15" }),
  confirmPassword: z
    .string()
    .min(5, { message: "Password should be minium 5" })
    .max(15, { message: "Password should be maxium 15" }),
});
