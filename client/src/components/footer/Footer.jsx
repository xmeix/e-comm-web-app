import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
const footerSections = [
  {
    title: "About us",
    items: [
      { text: "About BledBay", path: "/about" },
      { text: "Contact us", path: "/contact" },
      { text: "Terms and Conditions", path: "/terms" },
      { text: "Blog", path: "/blog" },
      { text: "Site map", path: "/sitemap" },
    ],
  },
  {
    title: "Customer service",
    items: [
      { text: "FAQ", path: "/faq" },
      { text: "Delivery and shipping", path: "/delivery" },
      { text: "Returns policy", path: "/returns" },
      { text: "Privacy Policy", path: "/privacy" },
      { text: "Payment Methods", path: "/payment" },
    ],
  },
  {
    title: "Contact us",
    items: [
      { text: "Facebook", path: "https://www.facebook.com/bledbay" },
      { text: "Instagram", path: "https://www.instagram.com/bledbay" },
      {
        text: "Email: support-uk@bledbay.com",
        path: "mailto:support-uk@bledbay.com",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="prin-footer">
      <div className="footer">
        {footerSections.map((section, index) => (
          <div key={index} className={`footer-section`}>
            <div className="foot-title">{section.title}</div>
            <ul>
              {section.items.map((item, itemIndex) => (
                <NavLink to={item.path}>
                  <li key={itemIndex}>{item.text}</li>
                </NavLink>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer2">
        <div className="location">
          <PlaceRoundedIcon
            style={{
              fontSize: "1em",
            }}
          />{" "}
          Algeria
        </div>
        <div className="copyrights">
          © 2021 Bledbay All rights reserved | Designed by lamia boualouache
        </div>
      </div>
    </div>
  );
};

export default Footer;
