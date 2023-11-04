import React from "react";

const ContactMeta = () => {
  const contactInfoList = [
    {
      title: "Total Free Customer Care",
      phone: "+(0) 123 050 945 02",
      phoneLink: "tel:+012305094502", // Change this to use "tel" URI scheme
    },
    {
      title: "Need Live Support?",
      mail: "tristan.blanza@indusre.ae",
      mailLink: "mailto:tristan.blanza@indusre.ae",
    },
  ];

  return (
    <div className="row mb20">
      {contactInfoList.map((contact, index) => (
        <div className="col-auto" key={index}>
          <div className="contact-info">
            <p className="info-title">{contact.title}</p>
            {contact.phone && (
              <h6 className="info-phone">
                <a className="fw300" href={contact.phoneLink}>{contact.phone}</a>
              </h6>
            )}
            {contact.mail && (
              <h6 className="info-mail">
                <a className="fw300" href={contact.mailLink}>{contact.mail}</a>
              </h6>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
