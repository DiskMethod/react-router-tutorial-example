import React from "react";

import { useParams } from "react-router-dom";

import { getInvoice } from "../data";

const Invoice = () => {
  const params = useParams();
  const invoice = getInvoice(parseInt(params.invoiceId));
  return (
    <main sytle={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
};

export default Invoice;
