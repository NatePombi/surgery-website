"use client";

import { useState } from "react";

const sampleDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const sampleTimes = [
  "9:00 a.m.",
  "10:00 a.m.",
  "11:00 a.m.",
  "12:00 p.m.",
  "1:00 p.m.",
  "2:00 p.m.",
  "3:00 p.m.",
  "4:00 p.m.",
];

const sampleDoctors = ["Ben", "Carlos", "Dorsin"];

export default function AvailabilityPage() {
  const [selectedDay, setSelectedDay] = useState(sampleDays[0]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="home-page availability-page">
      <section className="availability-hero">
        <p className="eyebrow">Appointments</p>
        <h1>Check availability</h1>
        <p>
          Choose an open day and time from the surgery’s weekly schedule.
          Reception assigns the doctor when you arrive.
        </p>
      </section>

      <p className="demo-notice">
        Demo schedule only — these times are examples, not actual clinic
        availability. Bookings on this page are not saved or sent.
      </p>

      <section className="availability-schedule">
        <div className="section-heading">
          <p className="eyebrow">Sample week</p>
          <h2>Select a day</h2>
        </div>

        <div className="day-picker" role="group" aria-label="Choose a day">
          {sampleDays.map((day) => (
            <button
              className={`day-option ${selectedDay === day ? "is-selected" : ""}`}
              type="button"
              key={day}
              aria-pressed={selectedDay === day}
              onClick={() => {
                setSelectedDay(day);
                setSelectedTime(null);
                setSubmitted(false);
              }}
            >
              {day}
            </button>
          ))}
        </div>

        <p className="doctors-available">
          Doctors shown as available: {sampleDoctors.join(", ")}
        </p>

        <div className="section-heading time-heading">
          <h2>Choose a time</h2>
          <p>Sample hourly starts are shown from 9:00 a.m. to 4:00 p.m.</p>
        </div>

        <div className="time-picker" role="group" aria-label="Choose a time">
          {sampleTimes.map((time) => (
            <button
              className={`time-option ${
                selectedTime === time ? "is-selected" : ""
              }`}
              type="button"
              key={time}
              aria-pressed={selectedTime === time}
              onClick={() => {
                setSelectedTime(time);
                setSubmitted(false);
              }}
            >
              {time}
            </button>
          ))}
        </div>
      </section>

      {selectedTime && (
        <section className="booking-form-section">
          <p className="eyebrow">Your details</p>
          <h2>
            Sample booking: {selectedDay} at {selectedTime}
          </h2>
          <p>
            Enter fictional details for this preview. This form does not save or
            send your information.
          </p>

          <form
            className="booking-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label>
              First name
              <input name="firstName" autoComplete="given-name" required />
            </label>

            <label>
              Surname
              <input name="surname" autoComplete="family-name" required />
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

            <p className="form-note">
              Please don’t enter symptoms or other medical details.
            </p>

            <button className="button button-primary" type="submit">
              Preview booking
            </button>
          </form>

          {submitted && (
            <p className="demo-notice" role="status">
              Preview only: this booking was not saved and no email was sent.
            </p>
          )}
        </section>
      )}
    </main>
  );
}