import React, { useState } from "react";
import { FAQData } from "./Data";
import FAQ2 from "./FAQ2";
import "./faq.css";
export default function FAQ() {
  const [faqs, setFaq] = useState(FAQData);

  return (
    <main className="container">
      <section className="faq">
        <h1>FAQ</h1>
        {faqs.map((faq) => (
          <FAQ2 key={faq.id} {...faq} />
        ))}
      </section>
    </main>
  );
}
