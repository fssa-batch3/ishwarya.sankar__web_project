const footer = document.createElement("footer");
const container = document.createElement("div");
container.classList.add("container-1");
footer.appendChild(container);

const row = document.createElement("div");
row.classList.add("row");
container.appendChild(row);

const company = document.createElement("div");
company.classList.add("col");
company.setAttribute("id", "company");
row.appendChild(company);

const logo = document.createElement("img");
logo.setAttribute("src", "");
logo.setAttribute("alt", "");
logo.classList.add("logo");
company.appendChild(logo);

const companyText = document.createElement("p");
companyText.textContent =
  "MediFee aims to be the one-stop online destination for India that gives people access to all information regarding prices of treatments and tests to enable people in making informed decisions about healthcare.";
company.appendChild(companyText);

const social = document.createElement("div");
social.classList.add("social");
company.appendChild(social);

const socialLinks = [
  { href: "#", iconClass: "fab fa-facebook" },
  { href: "#", iconClass: "fab fa-instagram" },
  { href: "#", iconClass: "fab fa-youtube" },
  { href: "#", iconClass: "fab fa-twitter" },
  { href: "#", iconClass: "fab fa-linkedin" },
];

socialLinks.forEach((link) => {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  const icon = document.createElement("i");
  // icon.classList.add(link.iconClass);
  a.appendChild(icon);
  social.appendChild(a);
});

const services = document.createElement("div");
services.classList.add("col");
services.setAttribute("id", "services");
row.appendChild(services);

const servicesTitle = document.createElement("h3");
servicesTitle.textContent = "Top Services";
services.appendChild(servicesTitle);

const servicesLinks = [
  { href: "#", text: "neurology" },
  { href: "#", text: "pulmonary" },
  { href: "#", text: "Paedtrician" },
  { href: "#", text: "Gynocology" },
];

const servicesLinksContainer = document.createElement("div");
servicesLinksContainer.classList.add("links");
services.appendChild(servicesLinksContainer);

servicesLinks.forEach((link) => {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  servicesLinksContainer.appendChild(a);
});

const usefulLinks = document.createElement("div");
usefulLinks.classList.add("col");
usefulLinks.setAttribute("id", "useful-links");
row.appendChild(usefulLinks);

const usefulLinksTitle = document.createElement("h3");
usefulLinksTitle.textContent = "Links";
usefulLinks.appendChild(usefulLinksTitle);

const usefulLinksContainer = document.createElement("div");
usefulLinksContainer.classList.add("links");
usefulLinks.appendChild(usefulLinksContainer);

const usefulLinksList = [
  { href: "#", text: "About" },
  { href: "#", text: "Services" },
  { href: "#", text: "Our Policy" },
  { href: "#", text: "Help" },
];

usefulLinksList.forEach((link) => {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  usefulLinksContainer.appendChild(a);
});

const contact = document.createElement("div");
contact.classList.add("col");
contact.setAttribute("id", "contact");
row.appendChild(contact);

const contactTitle = document.createElement("h3");
contactTitle.textContent = ""
