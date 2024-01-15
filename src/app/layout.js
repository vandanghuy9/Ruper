import "../styles/app.css";
import "../styles/responsive.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../layout/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CartContext from "../context/CartContext";
export const metadata = {
  title: "Ruper store",
  description: "Welcome to Next.js",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
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
        <CartContext>
          <Layout>{children}</Layout>
        </CartContext>
      </body>
    </html>
  );
};

export default RootLayout;
