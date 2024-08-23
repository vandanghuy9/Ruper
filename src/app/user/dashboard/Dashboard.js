import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="tab-pane fade show active" id="dashboard" role="tabpanel">
      <div className="my-account-dashboard">
        <p>
          Hello <strong>Rosie</strong> (not <strong>Rosie</strong>?
          <Link href="/">Log out</Link>)
        </p>
        <p>
          From your account dashboard you can view your
          <Link href="#"> recent orders</Link>, manage your
          <Link href="#"> shipping and billing addresses</Link>, and
          <Link href="#"> edit your password and account details</Link>.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
