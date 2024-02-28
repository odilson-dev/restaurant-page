export const loadContactPage = function () {
  const contentElement = document.querySelector("#content");

  const h2Element1 = document.createElement("h2");
  h2Element1.textContent = "Contact Information";
  contentElement.appendChild(h2Element1);

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");
  contactInfo.innerHTML = `<p><strong>Address:</strong> 123 Main Street, Cityville, Country</p>
<p><strong>Phone:</strong> +123 456 7890</p>
<p><strong>Email:</strong> info@chezmichel.com</p>`;
  contentElement.appendChild(contactInfo);

  const h2Element2 = document.createElement("h2");
  h2Element2.textContent = "Opening Hours";
  contentElement.appendChild(h2Element2);

  const paragraph1 = document.createElement("p");
  paragraph1.textContent =
    "We are open every day of the week for lunch and dinner.";
  contentElement.appendChild(paragraph1);

  const ulElement = document.createElement("ul");
  ulElement.innerHTML = `<li><strong>Monday - Friday:</strong> 11:00 AM - 10:00 PM</li>
<li><strong>Saturday - Sunday:</strong> 10:00 AM - 11:00 PM</li>`;
  contentElement.appendChild(ulElement);

  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "Please note that our hours may vary on holidays and special occasions.";
  contentElement.appendChild(paragraph2);

  const h2Element3 = document.createElement("h2");
  h2Element3.textContent = "Reservation";
  contentElement.appendChild(h2Element3);

  const paragraph3 = document.createElement("p");
  paragraph3.textContent =
    " To make a reservation, please call us during our opening hours or use our online reservation system.";
  contentElement.appendChild(paragraph3);

  const paragraph4 = document.createElement("p");
  paragraph4.textContent = "We look forward to welcoming you at Chez Michel!";
  contentElement.appendChild(paragraph4);
};
