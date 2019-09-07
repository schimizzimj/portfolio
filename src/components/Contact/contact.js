import React from "react"

import "./contact.css"
import contactList from "../../data/contacts.json"

const Contact = () => (
  <section id="contact" className="section contact">
    <h1 className="sectionTitle">Contact</h1>
    <div className="contact-container clear">
      {contactList.map(contact => {
        return (
          <div className="block clear" id={contact.number} key={contact.number}>
            <a href={contact.link}>
              <span className="item-content">
                <h2>{contact.name}</h2>
              </span>
            </a>
            <img
              className="footer-icon"
              src={contact.image}
              alt={contact.name}
            />
          </div>
        )
      })}
    </div>
  </section>
)

export default Contact
