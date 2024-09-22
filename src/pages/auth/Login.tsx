import AnimatedLayout from "@/components/shared/AnimatedLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "@/schema/zod-schema";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
   const form = useForm<LoginSchemaType>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   const onSubmit = async (values: LoginSchemaType) => {
      await new Promise((res) =>
         setTimeout(() => {
            res(console.log(values));
         }, 1000),
      );
   };
   return (
      <AnimatedLayout>
         <div className="mx-auto flex min-h-dvh max-w-sm flex-col justify-center">
            <Card className="p-5">
               <CardHeader className="mb-3">
                  <CardTitle className="text-2xl">Giriş səhifəsi</CardTitle>
               </CardHeader>
               <CardContent>
                  <Form {...form}>
                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField
                           control={form.control}
                           name="email"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>E-poçt</FormLabel>
                                 <FormControl>
                                    <Input placeholder="E-poçt" {...field} />
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
                                 <FormLabel>Şifrə</FormLabel>
                                 <FormControl>
                                    <Input placeholder="Şifrə" type="password" {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                           {form.formState.isSubmitting && <Loader2 className="mr-2 animate-spin" />}
                           {form.formState.isSubmitting ? "Giriş edilir..." : "Giriş"}
                        </Button>
                     </form>
                  </Form>
                  <div className="mt-3 text-center text-sm">
                     Hesabınız yoxdur?
                     <Link to="/register" className="underline">
                        Qeydiyyatdan keçin
                     </Link>
                  </div>
               </CardContent>
            </Card>
         </div>
      </AnimatedLayout>
   );
};
export default Login;
