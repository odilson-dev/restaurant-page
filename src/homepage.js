export const loadHomePage = function () {
  // Update label
  const label = document.querySelector("#label");
  label.textContent = "Find The Best Dining Experience";

  const contentElement = document.querySelector("#content");
  contentElement.textContent = "";

  const h2Element = document.createElement("h2");
  h2Element.textContent = "Welcome to Chez Michel";
  contentElement.appendChild(h2Element);

  const paragraph1 = document.createElement("p");
  paragraph1.textContent =
    "Indulge in the art of fine dining at Chez Michel, where culinary excellence meets exceptional service. Nestled in the heart of the city, our restaurant offers a sophisticated ambiance perfect for intimate dinners, celebrations, and special occasions.";
  contentElement.appendChild(paragraph1);

  const h3Element = document.createElement("h3");
  h3Element.textContent = "Discover Our Signature Dishes";
  contentElement.appendChild(h3Element);

  const ulElement = document.createElement("ul");
  ulElement.innerHTML = `<li>Seared Scallops with Truffle Risotto</li>
<li>Rack of Lamb with Rosemary Infusion</li>
<li>Decadent Chocolate Fondant</li>`;
  contentElement.appendChild(ulElement);

  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "Each dish is meticulously crafted using the freshest ingredients sourced from local producers and artisans. Elevate your dining experience with our extensive selection of wines, carefully curated to complement our menu.";
  contentElement.appendChild(paragraph2);

  const paragraph3 = document.createElement("p");
  paragraph3.textContent =
    "Experience culinary excellence at Chez Michel. Book your table today!";
  contentElement.appendChild(paragraph3);
};
