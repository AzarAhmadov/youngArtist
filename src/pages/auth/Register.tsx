import AnimatedLayout from "@/components/shared/AnimatedLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema, RegisterSchemaType } from "@/schema/zod-schema";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
   const form = useForm<RegisterSchemaType>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
         username: "",
         email: "",
         password: "",
      },
   });

   const onSubmit = async (values: RegisterSchemaType) => {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      await new Promise((res) =>
         setTimeout(() => {
            res(console.log(values));
         }, 1000),
      );
   };
   return (
      <AnimatedLayout>
         <div className="mx-auto flex min-h-dvh max-w-sm flex-col justify-center">
            <Card>
               <CardHeader>
                  <CardTitle className="text-2xl">Register page</CardTitle>
               </CardHeader>
               <CardContent>
                  <Form {...form}>
                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField
                           control={form.control}
                           name="username"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Username</FormLabel>
                                 <FormControl>
                                    <Input placeholder="Username" {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                        <FormField
                           control={form.control}
                           name="email"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Email</FormLabel>
                                 <FormControl>
                                    <Input placeholder="Email" type="email" {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                        <FormField
                           control={form.control}
                           name="password"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Password</FormLabel>
                                 <FormControl>
                                    <Input placeholder="Password" type="password" {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                           {form.formState.isSubmitting && <Loader2 className="mr-2 animate-spin" />}
                           {form.formState.isSubmitting ? "Register..." : "Register"}
                        </Button>
                     </form>
                  </Form>
                  <div className="mt-3 text-center text-sm">
                     Don&apos;t have an account?{" "}
                     <Link to="/login" className="underline">
                        Sign in
                     </Link>
                  </div>
               </CardContent>
            </Card>
         </div>
      </AnimatedLayout>
   );
};
export default Register;
