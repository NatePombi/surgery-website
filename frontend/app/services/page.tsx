import Link from "next/link";

const consultationServices = [
  "Men’s health clinic",
  "Pap smear: detect early signs of cervical cancer",
  "IUD insertion and removal",
  "Implanon insertion and removal",
  "Wellness clinic (BP, glucose and U-dipstick check)",
  "General medical checkup and medical report",
  "STDs treatment",
  "Wound care and DM foot care",
  "Home Affairs medical documents",
];

const permitServices = [
  "HIV/AIDS testing and management",
  "Pregnancy tests",
  "Tongue restriction (ankyloglossia), commonly called tongue-tie",
];

const otherServices = [
  "Free male medical circumcision (listed for ages 10–90 years)",
  "Minor surgical procedures (I&D, lumpectomy, cystectomy, lipectomy and ingrown nail removal)",
  "Primary health care and chronic medication",
  "Immigration and visa forms completion",
  "Medical and radiological reports",
];

const medicalAidServices = [
  "Full medical examination",
  "Women’s health clinic",
  "Sexual health",
  "Family planning",
  "Antenatal clinic",
  "Cholesterol check",
  "Specialist referral",
  "Appointment",
  "Mental health",
  "Pelvic organ prolapse (POP)",
  "Ear syringing",
  "Fertility care and referrals",
  "ECG and blood tests",
  "Free male medical circumcision (listed for ages 10–90 years)",
  "Yellow drip (Vitamin B12, B complex and thiamine) — R350",
  "Medical certificate (fitness report)",
  "Nebulisation",
];

function ServiceList({ items }: { items: string[] }) {
  return (
    <ul className="service-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <main className="home-page services-page">
      <section className="services-hero">
        <p className="eyebrow">LZ Precious Vision Health Care INC</p>
        <h1>Services and care</h1>
        <p>
          Explore the services offered at the surgery, including consultation
          fees and services covered by medical aid.
        </p>
        <Link className="button button-primary" href="/availability">
          Book an appointment
        </Link>
      </section>

      <section className="service-group">
        <div className="service-group-heading">
          <div>
            <p className="eyebrow">Consultation</p>
            <h2>Doctors consultation</h2>
          </div>
          <p className="service-price">R500</p>
        </div>
        <ServiceList items={consultationServices} />
      </section>

      <section className="service-group">
        <div className="service-group-heading">
          <div>
            <p className="eyebrow">Permits</p>
            <h2>Professional Driver’s Permit (PDP)</h2>
          </div>
          <p className="service-price">R250</p>
        </div>
        <ServiceList items={permitServices} />
      </section>

      <section className="service-group">
        <div className="service-group-heading">
          <div>
            <p className="eyebrow">More care</p>
            <h2>Other services</h2>
          </div>
        </div>
        <ServiceList items={otherServices} />
      </section>

      <section className="medical-aid-section">
        <p className="eyebrow">Medical aid</p>
        <h2>Services covered by medical aid</h2>
        <ServiceList items={medicalAidServices} />
      </section>

      <section className="services-booking">
        <div>
          <p className="eyebrow">Ready to visit?</p>
          <h2>Check appointment availability</h2>
        </div>
        <Link className="button button-primary" href="/availability">
          View available times
        </Link>
      </section>
    </main>
  );
}