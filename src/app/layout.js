import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.css";
import "../styles/responsive.css";
import Layout from "../layout/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CartContext from "../context/CartContext";
import { Barlow_Semi_Condensed } from "next/font/google";
import CookieProvider from "@context/CookieProvider";
import { CheckoutContext } from "@context/CheckoutContext";
import { CategoryContext } from "@context/CategoryContext";
import ShopProductContext from "@context/ShopProductContext";
import QueryContext from "@context/QueryContext";
export const metadata = {
  title: "Ruper store",
  description: "Welcome to Next.js",
};

const font = Barlow_Semi_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});
const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={font.className}>
      <body className="home">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <QueryContext>
          <CartContext>
            <ShopProductContext>
              <CookieProvider>
                <CategoryContext>
                  <CheckoutContext>
                    <Layout>{children}</Layout>
                  </CheckoutContext>
                </CategoryContext>
              </CookieProvider>
            </ShopProductContext>
          </CartContext>
        </QueryContext>
      </body>
    </html>
  );
};

export default RootLayout;
