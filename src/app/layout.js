import "../styles/app.css";
import "../styles/responsive.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../layout/Layout";
// import"bootstrap/dist/js/bootstrap";

export const metadata = {
  title: "Ruper store",
  description: "Welcome to Next.js",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="home">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
