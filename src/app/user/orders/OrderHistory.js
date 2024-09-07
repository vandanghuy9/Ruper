import React from "react";
import Link from "next/link";
import { formatDate } from "@utils/menu";
const OrderHistory = (orders) => {
  return (
    <div className="tab-pane fade show active" id="orders" role="tabpanel">
      <div className="my-account-orders">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.orders?.map(({ _id, cart, createdAt, total, status }) => (
                <tr key={_id}>
                  <td>#{_id}</td>
                  <td>{formatDate(createdAt)}</td>
                  <td>{status}</td>
                  <td>
                    ${total} for {cart.length}{" "}
                    {cart.length > 1 ? "items" : "item"}
                  </td>
                  <td>
                    <Link href="#" className="btn-small d-block">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
