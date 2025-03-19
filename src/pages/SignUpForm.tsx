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
import { memo, useCallback } from "react";
import { CustomFormField } from "@/components/CustomFormField";
import { FormSchema } from "@/schema/FormSchema";

export function SignUpForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const capitalize = useCallback(
    (str: string) => str.charAt(0).toUpperCase() + str.slice(1),
    []
  );

  return (
    <div className="flex flex-col items-center justify-center my-5">
      <Card className="w-2xl">
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
                      {capitalize(Eform.indivisual)}
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
                  label="First Name"
                  value="firstName"
                />

                {/* Last Name */}
                <CustomFormField
                  formControl={form.control}
                  label="Last Name"
                  value="firstName"
                />
              </div>

              {/* Email */}
              <CustomFormField
                formControl={form.control}
                label="Email"
                value="email"
              />

              {/* Address */}
              <CustomFormField
                formControl={form.control}
                label=" Address"
                value="address"
              />

              <div className="flex items-center justify-between gap-2 ">
                {/* Country */}
                <CustomFormField
                  type="select"
                  formControl={form.control}
                  label="Country"
                  value="country"
                />

                {/* State */}
                <CustomFormField
                  type="select"
                  formControl={form.control}
                  label="State"
                  value="state"
                />
              </div>

              <div className="flex items-center justify-between gap-2 ">
                {/* City */}
                <CustomFormField
                  formControl={form.control}
                  label="City"
                  value="city"
                  type="select"
                />

                {/* Pincode */}
                <CustomFormField
                  formControl={form.control}
                  label="Pincode"
                  value="pincode"
                />
              </div>

              <div className="flex items-center justify-between gap-2 ">
                {/* country code */}
                <CustomFormField
                  formControl={form.control}
                  label="ISD Code"
                  value="countryCode"
                  type="select"
                />

                {/* Mobile */}
                <CustomFormField
                  formControl={form.control}
                  label="Mobile"
                  value="mobile"
                  type="number"
                />
              </div>

              <div className="flex items-center justify-between gap-2 ">
                {/* Fax */}
                <CustomFormField
                  formControl={form.control}
                  label="Fax"
                  value="fax"
                />

                {/* Phone */}
                <CustomFormField
                  formControl={form.control}
                  label="Phone"
                  value="phone"
                />
              </div>

              {/* Confirm Password */}
              <CustomFormField
                formControl={form.control}
                label="Confirm Password"
                value="confirmPassword"
              />

              {/* Password */}
              <CustomFormField
                formControl={form.control}
                label="Password"
                value="password"
              />

              <Button type="submit" className="w-full mt-2">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-sm text-muted-foreground  mt-2 [&_a]:inherite  [&_a]:hover:text-primary">
        Already have an account? <a href="#">Login</a>
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
      onValueChange={field.onChange}
      defaultValue={field.value}
      className="flex flex-row py-0.5 justify-around w-full"
    >
      {data.map((e) => (
        <FormItem key={e.id} className="flex items-center">
          <FormControl>
            <RadioGroupItem value={e.value} />
          </FormControl>
          <FormLabel className="font-normal">{e.title}</FormLabel>
        </FormItem>
      ))}
    </RadioGroup>
  );
});
