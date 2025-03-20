import { z } from "zod";

export const FormSchema = z
  .object({
    type: z.enum(["all", "mentions", "none"], {
      required_error: "You need to select a notification type.",
    }),

    firstName: z
      .string({
        required_error: "First Name is required",
        invalid_type_error: "First Name must be a string",
      })
      .min(3, { message: "Must be 3 or more characters long" }),

    lastName: z
      .string({
        required_error: "Last Name is required",
        invalid_type_error: "Last Name must be a string",
      })
      .min(2, { message: "Last Name is required" }),

    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      })
      .email({ message: "Please enter a valid email" }),

    address: z
      .string({
        required_error: "Address is required",
        invalid_type_error: "Address must be a string",
      })
      .min(3, { message: "Address is required" }),

    country: z.string({
      required_error: "Country is required",
      invalid_type_error: "Country must be a string",
    }),

    state: z.string({
      required_error: "State is required",
      invalid_type_error: "State must be a string",
    }),

    city: z.string({
      required_error: "City is required",
      invalid_type_error: "City must be a string",
    }),

    pincode: z
      .string()
      .regex(/^\d{4,10}$/, { message: "Invalid pincode format" }),

    countryCode: z
      .string({
        required_error: "Country code is required",
        invalid_type_error: "Country code must be a string",
      })
      .regex(/^\d{1,4}$/, { message: "Invalid country code" }),

    mobile: z
      .string({
        required_error: "Mobile number is required",
        invalid_type_error: "Mobile number must be a string",
      })
      .regex(/^\d{7,15}$/, { message: "Invalid mobile number" }),

    fax: z.string().optional(),
    phone: z.string().optional(),

    password: z
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
      })
      .min(5, { message: "Password should be at least 5 characters" })
      .max(15, { message: "Password should be at most 15 characters" }),

    confirmPassword: z
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
      })
      .min(5, { message: "Password should be at least 5 characters" })
      .max(15, { message: "Password should be at most 15 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
