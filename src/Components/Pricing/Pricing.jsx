import React from "react";
import "../Pricing/Pricing.scss";

export const Pricing = () => {
  return (
    <div className="container pricingContainer">
      <div className="section">
        <div className="subSection Content">
          <h2>
            Choose <span id="PlanUnderline">Your Plan</span>
          </h2>
          <p>
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity,
            <br /> Evernote has the right plan for you.
          </p>
        </div>

        <div className="subSection Pricing">
          <div className="PricingCard">
            <h4>Free</h4>
            <h3>$0</h3>
            <p>Capture ideas and find them quickly</p>
            <div className="list">
              <p className="item">Sync unlimited devices</p>
              <p className="item">10 GB monthly uploads</p>
              <p className="item">200 MB max. note size</p>
              <p className="item">
                Customize Home dashboard and access extra widgets
              </p>
              <p className="item">Connect primary Google Calendar account</p>
              <p className="item">
                Add due dates, reminders, and notifications to your tasks
              </p>
            </div>
            <button>Get Started</button>
          </div>
          <div className="PricingCard">
            <h4>Personal</h4>
            <h3>$11.99</h3>
            <p>Keep home and family on track</p>
            <div className="list">
              <p className="item">Sync unlimited devices</p>
              <p className="item">10 GB monthly uploads</p>
              <p className="item">200 MB max. note size</p>
              <p className="item">
                Customize Home dashboard and access extra widgets
              </p>
              <p className="item">Connect primary Google Calendar account</p>
              <p className="item">
                Add due dates, reminders, and notifications to your tasks
              </p>
            </div>
            <button>Get Started</button>
          </div>
          <div className="PricingCard">
            <h4>Organization</h4>
            <h3>$49.99</h3>
            <p>Capture ideas and find them quickly</p>
            <div className="list">
              <p className="item">Sync unlimited devices</p>
              <p className="item">10 GB monthly uploads</p>
              <p className="item">200 MB max. note size</p>
              <p className="item">
                Customize Home dashboard and access extra widgets
              </p>
              <p className="item">Connect primary Google Calendar account</p>
              <p className="item">
                Add due dates, reminders, and notifications to your tasks
              </p>
            </div>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
