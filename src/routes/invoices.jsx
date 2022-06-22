import React from "react";
import { Link, Outlet } from "react-router-dom";

import { getInvoices } from "../data";

const Invoices = () => {
  const invoices = getInvoices();

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => {
          return (
            <Link to={`/invoices/${invoice.number}`} key={invoice.number}>
              {invoice.name}
            </Link>
          );
        })}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
