import React from "react";

const ContactMeta = () => {
  const contactInfoList = [
    {
      title: "Phone",
      phone: "+(971) 54 320 2849",
      phoneLink: "tel:+971543202849", // Change this to use "tel" URI scheme
    },
    {
      title: "E-mail",
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
