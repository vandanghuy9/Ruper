"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@context/UserContext";
import { useRouter } from "next/navigation";
const Dashboard = () => {
  const { getUserName, isUserLogin, logout } = useAuth();
  const userName = getUserName();
  const isLogin = isUserLogin();
  const router = useRouter();
  useEffect(() => {
    if (!isLogin) {
      router.push("/");
    }
  }, [isLogin, router]);
  return (
    <div className="tab-pane fade show active" id="dashboard" role="tabpanel">
      <div className="my-account-dashboard">
        <p>
          Hello <strong> {userName} </strong> (not <strong> {userName} </strong>?
          <Link href="#" onClick={logout}>
            Log out
          </Link>
          )
        </p>
        <p>
          From your account dashboard you can view your
          <Link href="/user/orders"> recent orders</Link>, manage your
          <Link href="/user/addresses"> shipping and billing addresses</Link>, and
          <Link href="/user/account"> edit your password and account details</Link>.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
