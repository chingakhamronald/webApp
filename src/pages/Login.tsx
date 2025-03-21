import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "@/components/CustomFormField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router";
import { LoginFormSchema } from "@/schema/FormSchema";
import { useAuthStore } from "@/stores/auth";

const Login = () => {
  const navigate = useNavigate();
  const { profileData, addUserLogin } = useAuthStore((state) => state);

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    console.log({ "PROFILE....": profileData, "DATA>>>": data });

    if (
      data.email === profileData?.email &&
      data.password === profileData?.password
    ) {
      addUserLogin(data);
      navigate("/dashboard");
    } else {
      form.setError("email", {
        type: "manual",
        message: "Invalid email or password",
      });
      form.setError("password", {
        type: "manual",
        message: "Invalid email or password",
      });
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Card className="w-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Please Login your account at WebApp</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* Email */}
              <CustomFormField
                formControl={form.control}
                label="Email *"
                name="email"
              />

              {/* Password */}
              <CustomFormField
                formControl={form.control}
                label="Password *"
                name="password"
                type="password"
              />

              <Button type="submit" className="w-full mt-2">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-sm text-muted-foreground  mt-2  [&_a]:text-blue-500">
        If you don't have an account? <a href="/">Signup</a>
      </div>
    </div>
  );
};

export default Login;
