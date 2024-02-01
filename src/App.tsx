import { Footer } from "./common/components/footer/footer.component";
import { Header } from "./common/components/header/header.component";
import { ProductList } from "./modules/product/components/product-list/product-list.component";
import productMenu from "@app/mocks/pizza.json";
import { ProductPage } from "./modules/product/pages/product.page";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./modules/auth/pages/login.page";
import { PrivateRoute } from "./common/components/private-route/private-route.component";
import { ProfilePage } from "./modules/user/pages/profile.page";
import { useEffect } from "react";
import { isLoggedInReactive } from "./modules/auth/store/reactive-vars";
import { CartSidebar } from "./modules/cart/components/cart-sidebar/cart-sidebar.component";
import { CheckoutPage } from "./modules/checkout/pages/checkout.page";
import { ThankYouPage } from "./modules/checkout/pages/thank-you.page";
import { MainPage } from "./modules/main/pages/main.page";
import { PersonnelPage } from "./modules/personnel/pages/pesonnel.page";
import { PriceListPage } from "./modules/price-list/pages/price-list.page";
import { ServiceslPage } from "./modules/services/pages/services.page";

export const App = () => {
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    isLoggedInReactive(Boolean(token));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartSidebar />
      <div className="flex-grow">
        <Routes>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/personnel" element={<PersonnelPage />} />
          <Route path="/price-list" element={<PriceListPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<ServiceslPage />} />
          <Route path="/checkout/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
