import { ReactComponent as ShoppingCartSolidIcon } from "@app/assets/icons/shopping-cart-solid.svg";
import { ReactComponent as Logotype } from "../../../assets/images/logo.svg";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInReactive } from "@app/modules/auth/store/reactive-vars";
import { UserDropdown } from "@app/modules/auth/comoponents/user-dropdown/user-dropdown.component";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../button/button.component";
import { LinkHeader } from "../link-header/link-header.component";
import { toggleCart } from "@app/modules/cart/store/cart-opened-state";
import { ReactComponent as MenuIcon } from "@app/assets/icons/menuIcons.svg";
import { useState } from "react";

export const Header = () => {
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";
  const isLoggedIn = useReactiveVar(isLoggedInReactive);
  const isLoginPage = location.pathname === "/login";
  const isMainPage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="bg-darkTea p-5 z-10">
      <div className="container mx-auto flex justify-around items-center md:flex-col lg:flex-row  ">
        <div>
          {isMainPage ? (
            <Logotype />
          ) : (
            <Link to="/">
              <Logotype />
            </Link>
          )}
        </div>

        {/* Відображаємо різницю між мобільним та десктопним видами */}
        <div className="hidden md:flex items-center space-x-5 md:gap-10 ">
          <div className="flex space-x-5 lg:gap-15 md:gap-5 ">
            <LinkHeader url="/personnel">Персонал</LinkHeader>
            <LinkHeader url="/price-list">Прайс лист</LinkHeader>
            <LinkHeader url="/services">Послуги</LinkHeader>
            <LinkHeader url="/products">Товари</LinkHeader>
            <LinkHeader url="#contact">Контакти</LinkHeader>
          </div>

          <div className="flex items-center space-x-5 ml-auto gap-2 ">
            {!isCheckoutPage && (
              <button onClick={toggleCart} id="shopping-cart-item">
                <ShoppingCartSolidIcon className="w-6 h-6 fill-white" />
              </button>
            )}

            {isLoggedIn ? (
              <UserDropdown />
            ) : (
              !isLoginPage && (
                <Link to="/login">
                  <Button size="sm">Ввійти</Button>
                </Link>
              )
            )}
          </div>
        </div>

        <div className="md:hidden ml-auto">
          <button onClick={toggleMobileMenu}>
            <MenuIcon className="w-6 h-6 fill-white" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-5">
          <div className="flex flex-col space-y-3">
            <button onClick={toggleMobileMenu}>
              <LinkHeader url="/personnel">Персонал</LinkHeader>
            </button>
            <button onClick={toggleMobileMenu}>
              <LinkHeader url="/price-list">Прайс лист</LinkHeader>
            </button>
            <button onClick={toggleMobileMenu}>
              <LinkHeader url="/services">Послуги</LinkHeader>
            </button>
            <button onClick={toggleMobileMenu}>
              <LinkHeader url="/products">Товари</LinkHeader>
            </button>
            <button onClick={toggleMobileMenu}>
              <LinkHeader url="/checkout">Корзина</LinkHeader>
            </button>
            <button onClick={toggleMobileMenu}>
              <LinkHeader url="#contact">Контакти</LinkHeader>
            </button>
          </div>

          <div className="flex flex-row-reverse items-center space-x-5 mt-4">
            {!isCheckoutPage && (
              <button
                onClick={toggleCart}
                id="shopping-cart-item"
                className="hidden md:block"
              >
                <ShoppingCartSolidIcon className="w-6 h-6 fill-white" />
              </button>
            )}

            {isLoggedIn ? (
              <UserDropdown />
            ) : (
              !isLoginPage && (
                <Link to="/login">
                  <Button size="sm">Ввійти</Button>
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};
