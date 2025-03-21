import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Eform } from "@/types/type";
import { memo, useCallback, useState } from "react";
import { CustomFormField } from "@/components/CustomFormField";
import { FormSchema } from "@/schema/FormSchema";
import {
  cityOptions,
  countryCodeOptions,
  countryOptions,
  stateOptions,
} from "@/data";
import { useNavigate } from "react-router";
import { useAuthStore } from "@/stores/auth";

export function SignUpForm() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const { addProfileData } = useAuthStore((state) => state);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: Eform.enterprise,
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      countryCode: "",
      mobile: "",
      fax: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following names:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    if (data) {
      addProfileData(data);
      navigate("/login");
    }
  }

  const capitalize = useCallback(
    (str: string) => str.charAt(0).toUpperCase() + str.slice(1),
    []
  );

  return (
    <div className="w-full h-full my-5">
      <div className="flex flex-col items-center justify-center">
        <Card className="w-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <CardDescription>
              Please Signup your account at WebApp
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="py-2">
                      <FormLabel>
                        {capitalize(Eform.enterprise)}/
                        {capitalize(Eform.government)}/
                        {capitalize(Eform.indivisual)} *
                      </FormLabel>
                      <FormControl>
                        <RadioButton field={field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between gap-2 ">
                  {/* First Name */}
                  <CustomFormField
                    formControl={form.control}
                    label="First Name *"
                    name="firstName"
                  />

                  {/* Last Name */}
                  <CustomFormField
                    formControl={form.control}
                    label="Last Name *"
                    name="lastName"
                  />
                </div>

                {/* Email */}
                <CustomFormField
                  formControl={form.control}
                  label="Email *"
                  name="email"
                />

                {/* Address */}
                <CustomFormField
                  formControl={form.control}
                  label=" Address *"
                  name="address"
                />

                <div className="flex items-center justify-between gap-2 ">
                  {/* Country */}
                  <CustomFormField
                    type="select"
                    formControl={form.control}
                    label="Country *"
                    name="country"
                    options={countryOptions}
                    onChange={(value: any) => {
                      setSelectedCountry(value);
                      setSelectedState(null);
                      form.setValue("state", ""), form.setValue("city", "");
                    }}
                  />

                  {/* State */}
                  <CustomFormField
                    type="select"
                    formControl={form.control}
                    label="State *"
                    name="state"
                    options={
                      selectedCountry ? stateOptions[selectedCountry] ?? [] : []
                    }
                    disable={!selectedCountry}
                    onChange={(value: any) => {
                      setSelectedState(value);
                      form.setValue("city", "");
                    }}
                  />
                </div>

                <div className="flex items-center justify-between gap-2 ">
                  {/* City */}
                  <CustomFormField
                    formControl={form.control}
                    label="City *"
                    name="city"
                    type="select"
                    disable={!selectedState}
                    options={
                      selectedState ? cityOptions[selectedState] ?? [] : []
                    }
                  />

                  {/* Pincode */}
                  <CustomFormField
                    formControl={form.control}
                    label="Pincode *"
                    name="pincode"
                  />
                </div>

                <div className="flex items-center justify-between gap-2 ">
                  {/* country code */}
                  <CustomFormField
                    formControl={form.control}
                    label="ISD Code *"
                    name="countryCode"
                    type="select"
                    options={countryCodeOptions}
                  />

                  {/* Mobile */}
                  <CustomFormField
                    formControl={form.control}
                    label="Mobile *"
                    name="mobile"
                    type="number"
                  />
                </div>

                <div className="flex items-center justify-between gap-2 ">
                  {/* Fax */}
                  <CustomFormField
                    formControl={form.control}
                    label="Fax"
                    name="fax"
                  />

                  {/* Phone */}
                  <CustomFormField
                    formControl={form.control}
                    label="Phone"
                    name="phone"
                  />
                </div>

                {/* Password */}
                <CustomFormField
                  formControl={form.control}
                  label="Password *"
                  name="password"
                  type="password"
                />

                {/* Confirm Password */}
                <CustomFormField
                  formControl={form.control}
                  label="Confirm Password *"
                  name="confirmPassword"
                  type="password"
                />

                <Button type="submit" className="w-full mt-2">
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="text-balance  text-center text-sm text-muted-foreground  my-4 [&_a]:text-blue-500">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}

const RadioButton = memo((field: any) => {
  const data = [
    { id: 1, title: "Indivisual", value: Eform.indivisual },
    { id: 2, title: "Enterprise", value: Eform.enterprise },
    { id: 3, title: "Government", value: Eform.government },
  ];

  return (
    <RadioGroup
      value={field.value}
      onValueChange={field.onChange}
      className="flex flex-row py-0.5 justify-around w-full"
    >
      {data.map((e) => (
        <FormItem key={e.id} className="flex items-center">
          <FormControl>
            <RadioGroupItem value={e.value} />
          </FormControl>
          <FormLabel>{e.title}</FormLabel>
        </FormItem>
      ))}
    </RadioGroup>
  );
});
