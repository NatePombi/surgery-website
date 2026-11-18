import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">LZ Precious Vision Health Care INC</p>
          <h1>Healthcare in Salt River</h1>
          <p>
            Explore the surgery’s services, view the doctors’ weekly
            availability, and book an appointment online.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/availability">
              Check availability
            </Link>
            <a className="button button-secondary" href="tel:+27218913810">
              Call the surgery
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <span>Care close to home</span>
          <strong>Salt River</strong>
        </div>
      </section>

      <section className="clinic-info" aria-label="Clinic information">
        <p>
          <strong>Open every day</strong>
          <span>9:00 a.m.–5:00 p.m.</span>
        </p>
        <p>
          <strong>Located in</strong>
          <span>Salt River, Cape Town</span>
        </p>
        <p>
          <strong>Call us</strong>
          <span>021 891 3810</span>
        </p>
      </section>

      <section className="services-preview">
        <div className="section-heading">
          <p className="eyebrow">How we can help</p>
          <h2>Explore our services</h2>
        </div>

        <div className="service-cards">
          <article className="service-card">
            <h3>Women’s health</h3>
            <p>Explore women’s health and family planning services.</p>
          </article>

          <article className="service-card">
            <h3>Men’s health</h3>
            <p>Find out about the surgery’s men’s health services.</p>
          </article>

          <article className="service-card">
            <h3>General care</h3>
            <p>See checkups, wellness services, and other care options.</p>
          </article>
        </div>

        <Link className="text-link" href="/services">
          View all services
        </Link>
      </section>

      <section className="welcome-section">
        <div>
          <p className="eyebrow">Welcome</p>
          <h2>LZ Precious Vision Health Care INC</h2>
          <p>
            The surgery is located in Salt River and offers a range of health
            services. Check the services page for details and the availability
            page to see open appointment times.
          </p>
        </div>
      </section>

      <section className="booking-callout">
        <div>
          <p className="eyebrow">Plan your visit</p>
          <h2>Check this week’s availability</h2>
          <p>Choose from the open days and times in the doctors’ schedule.</p>
        </div>
        <Link className="button button-primary" href="/availability">
          View appointments
        </Link>
      </section>

      <section className="visit-section">
        <div>
          <p className="eyebrow">Find us</p>
          <h2>Visit the surgery</h2>
          <address>
            426 Albert Road,
            <br />
            Salt River, Addison House,
            <br />
            Unit 2, 7925
          </address>
        </div>

        <a
          className="text-link"
          href="https://www.google.com/maps/search/?api=1&query=426+Albert+Road+Salt+River+Addison+House+Unit+2+7925"
          target="_blank"
          rel="noreferrer"
        >
          Get directions
        </a>
      </section>
    </main>
  );
}