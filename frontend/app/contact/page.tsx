"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="home-page contact-page">
      <section className="contact-hero">
        <p className="eyebrow">LZ Precious Vision Health Care INC</p>
        <h1>Contact us</h1>
        <p>
          Get in touch with the surgery for general questions about its
          services or visiting.
        </p>
        <p>
          To request an appointment,{" "}
          <Link href="/availability">check availability and book online</Link>.
        </p>
      </section>

      <div className="contact-columns">
        <section className="contact-details">
          <p className="eyebrow">Visit or call</p>
          <h2>We’re in Salt River</h2>

          <address>
            426 Albert Road,
            <br />
            Salt River, Addison House,
            <br />
            Unit 2, 7925
          </address>

          <div className="contact-phone-list">
            <a href="tel:+27218913810">021 891 3810</a>
            <a href="tel:+27784409957">078 440 9957</a>
          </div>

          <p className="contact-hours">
            <strong>Opening hours</strong>
            <br />
            Every day, 9:00 a.m.–5:00 p.m.
          </p>

          <a
            className="text-link"
            href="https://www.google.com/maps/search/?api=1&query=426+Albert+Road+Salt+River+Addison+House+Unit+2+7925"
            target="_blank"
            rel="noreferrer"
          >
            Get directions
          </a>
        </section>

        <section className="contact-form-section">
          <p className="eyebrow">Send a general question</p>
          <h2>How can we help?</h2>
          <p>
            Please don’t include symptoms or other confidential medical
            information in this form.
          </p>

          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label>
              Name
              <input name="name" autoComplete="name" required />
            </label>

            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>

            <label>
              Phone number <span>(optional)</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
              />
            </label>

            <label>
              Message
              <textarea name="message" rows={5} required />
            </label>

            <button className="button button-primary" type="submit">
              Preview message
            </button>
          </form>

          {submitted && (
            <p className="demo-notice" role="status">
              Preview only: this message was not saved or sent.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}