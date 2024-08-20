/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Router } from "@remix-run/router";
import Loading from "@/components/shared/Loading"; // Yükleme bileşenini import edin

// Error boundary bileşeni
const RootBoundary = lazy(() => import("@/components/shared/ErrorElement"));

// Layout bileşenleri
const Authlayout = lazy(() => import("@/layout/AuthLayout"));
const RootLayout = lazy(() => import("@/layout/RootLayout"));

// Sayfalar
const HomePage = lazy(() => import("@/pages/root/Home/Home"));
const ContactPage = lazy(() => import("@/pages/root/Contact"));
const CartPage = lazy(() => import("@/pages/root/Cart"));
const AboutPage = lazy(() => import("@/pages/root/About"));
const PageNotFound = lazy(() => import("@/pages/PageNotFound"));
const FavoritePage = lazy(() => import("@/pages/root/FavoritePage"));
const ProductDetailPage = lazy(() => import("@/pages/root/ProductDetailPage"));
const LoginPage = lazy(() => import("@/pages/auth/Login"));
const RegisterPage = lazy(() => import("@/pages/auth/Register"));

const router: Router = createBrowserRouter([
   // Root layout
   {
      path: "/",
      element: (
         <Suspense fallback={<Loading />}>
            <RootLayout />
         </Suspense>
      ),
      errorElement: (
         <Suspense fallback={<Loading />}>
            <RootBoundary />
         </Suspense>
      ),
      children: [
         {
            index: true,
            element: (
               <Suspense fallback={<Loading />}>
                  <HomePage />
               </Suspense>
            ),
         },
         {
            path: "/product/:id",
            element: (
               <Suspense fallback={<Loading />}>
                  <ProductDetailPage />
               </Suspense>
            ),
         },
         {
            path: "/about",
            element: (
               <Suspense fallback={<Loading />}>
                  <AboutPage />
               </Suspense>
            ),
         },
         {
            path: "/contact",
            element: (
               <Suspense fallback={<Loading />}>
                  <ContactPage />
               </Suspense>
            ),
         },
         {
            path: "/cart",
            element: (
               <Suspense fallback={<Loading />}>
                  <CartPage />
               </Suspense>
            ),
         },
         {
            path: "/favorite",
            element: (
               <Suspense fallback={<Loading />}>
                  <FavoritePage />
               </Suspense>
            ),
         },
      ],
   },
   // Auth layout
   {
      element: (
         <Suspense fallback={<Loading />}>
            <Authlayout />
         </Suspense>
      ),
      errorElement: (
         <Suspense fallback={<Loading />}>
            <RootBoundary />
         </Suspense>
      ),
      children: [
         {
            path: "/login",
            element: (
               <Suspense fallback={<Loading />}>
                  <LoginPage />
               </Suspense>
            ),
         },
         {
            path: "/register",
            element: (
               <Suspense fallback={<Loading />}>
                  <RegisterPage />
               </Suspense>
            ),
         },
      ],
   },
   // 404 sayfası
   {
      path: "*",
      element: (
         <Suspense fallback={<Loading />}>
            <PageNotFound />
         </Suspense>
      ),
      errorElement: (
         <Suspense fallback={<Loading />}>
            <RootBoundary />
         </Suspense>
      ),
   },
]);

export default router;
