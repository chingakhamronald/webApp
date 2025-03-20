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
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { LoginFormSchema } from "@/schema/FormSchema";

const Login = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    toast("You submitted the following names:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    if (data) {
      navigate("/dashboard");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
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
      <div className="text-balance text-center text-sm text-muted-foreground  mt-2 [&_a]:inherite  [&_a]:hover:text-primary">
        If you don't have an account? <a href="/signup">Signup</a>
      </div>
    </div>
  );
};

export default Login;
