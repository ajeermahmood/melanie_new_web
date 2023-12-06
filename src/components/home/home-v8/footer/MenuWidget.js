import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Popular Search",
      links: [
        { label: "Apartment for Sale", href: "/premium-sales?t=2" },
        { label: "Villa for Sale", href: "/premium-sales?t=1" },
        { label: "Apartment for Rent", href: "/premium-rentals?t=2" },
        { label: "Villa for Rent", href: "/premium-rentals?t=1" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "investor Deals", href: "/see-all" },
        { label: "SO/UPTOWN DUBAI", href: "/property/32&prj=1" },
      ],
    },
    {
      title: "Discover",
      links: [
        { label: "Dubai Marina", href: "/premium-sales?s=marina" },
        { label: "Downtown Dubai", href: "/premium-sales?s=downtown" },
        { label: "Palm Jumeirah", href: "/premium-sales?s=palm jumeirah" },
      ],
    },
  ];

  return (
    <>
      {menuSections.map((section, index) => (
        <div className="col-auto" key={index}>
          <div className="link-style1 mb-3">
            <h6 className="text-white mb5">{section.title}</h6>
            <ul className="ps-0">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a className="lh-lg" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;
