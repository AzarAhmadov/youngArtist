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
      await new Promise((res) =>
         setTimeout(() => {
            res(console.log(values));
         }, 1000),
      );
   };
   return (
      <AnimatedLayout>
         <div className="flex flex-col justify-center max-w-sm mx-auto min-h-dvh">
            <Card className="p-5">
               <CardHeader className="mb-3">
                  <CardTitle className="text-2xl">Qeydiyyat səhifəsi</CardTitle>
               </CardHeader>
               <CardContent>
                  <Form {...form}>
                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField
                           control={form.control}
                           name="username"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>İstifadəçi adı</FormLabel>
                                 <FormControl>
                                    <Input placeholder="İstifadəçi adı" {...field} />
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
                                 <FormLabel>E-poçt</FormLabel>
                                 <FormControl>
                                    <Input placeholder="E-poçt" type="email" {...field} />
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
                           {form.formState.isSubmitting ? "Qeydiyyat..." : "Qeydiyyat"}
                        </Button>
                     </form>
                  </Form>
                  <div className="mt-3 text-sm text-center">
                     Hesabınız varmı?{" "}
                     <Link to="/login" className="underline">
                        Daxil olun
                     </Link>
                  </div>
               </CardContent>
            </Card>
         </div>
      </AnimatedLayout>
   );
};
export default Register;
