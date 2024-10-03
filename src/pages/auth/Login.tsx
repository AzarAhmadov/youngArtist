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
import Logo from "../../components/shared/Logo";

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
         <div className="flex flex-col md:flex-row min-h-screen items-center justify-center space-y-8 md:space-y-0 md:gap-x-8">
            <div className="container flex w-full md:w-1/2 justify-center">
            <div className="absolute left-0 top-0 ps-7 pt-4">
                  <Logo variant="header" />
               </div>
               <Card className="w-full max-w-sm p-5">
                  <CardHeader className="mb-8">
                     <CardTitle className="text-2xl">Daxil ol</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="mb-8 space-y-3">
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
                        <Link to="/register" className="ms-3 underline">
                           Qeydiyyatdan keçin
                        </Link>
                     </div>
                  </CardContent>
               </Card>
            </div>
            <div className="h-[50vh] w-full md:h-screen md:w-1/2">
               <img
                  src="https://rozwijamypasje.pl/wp-content/uploads/2020/11/female-person-tie-a-bow-on-a-gift-box-needlework-2048x1367.jpg"
                  alt=""
                  className="h-full w-full object-cover"
               />
            </div>
         </div>
      </AnimatedLayout>
   );
};
export default Login;
