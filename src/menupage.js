export const loadMenuPage = function () {
  // Update label
  const label = document.querySelector("#label");
  label.textContent = "Discover the Finest Culinary Creations";
  const contentElement = document.querySelector("#content");

  const h2Element = document.createElement("h2");
  h2Element.textContent = "Our Menu";
  contentElement.appendChild(h2Element);

  const h3Element1 = document.createElement("h3");
  h3Element1.textContent = "Appetizers";
  contentElement.appendChild(h3Element1);

  const ulElement1 = document.createElement("ul");
  ulElement1.innerHTML = ` <li>
French Onion Soup: A savory blend of caramelized onions, beef broth,
and melted gruyère cheese.
</li>
<li>
Escargot à la Bourguignonne: Tender snails cooked with garlic butter
and parsley, served with crusty bread.
</li>`;
  contentElement.appendChild(ulElement1);

  const h3Element2 = document.createElement("h3");
  h3Element2.textContent = "Main Courses";
  contentElement.appendChild(h3Element2);

  const ulElement2 = document.createElement("ul");
  ulElement2.innerHTML = `<li>
Filet Mignon: Grilled to perfection, served with a red wine reduction
sauce and truffle mashed potatoes.
</li>
<li>
Coq au Vin: Classic French dish featuring braised chicken in a rich
red wine sauce, served with roasted vegetables.
</li>`;
  contentElement.appendChild(ulElement2);

  const h3Element3 = document.createElement("h3");
  h3Element3.textContent = "Desserts";
  contentElement.appendChild(h3Element3);

  const ulElement3 = document.createElement("ul");
  ulElement3.innerHTML = `<li>
Tarte Tatin: A delightful upside-down apple tart with caramelized
sugar and flaky pastry.
</li>
<li>
Crêpes Suzette: Thin pancakes flambeed in orange liqueur, served with
a tangy citrus sauce.
</li>`;
  contentElement.appendChild(ulElement3);

  const paragraph1 = document.createElement("p");
  paragraph1.textContent =
    "Our menu is subject to change based on seasonal availability of ingredients. Please inform your server of any dietary restrictions or allergies.";
  contentElement.appendChild(paragraph1);

  const paragraph2 = document.createElement();
  paragraph2.textContent =
    "Join us for an unforgettable dining experience at Chez Michel!";
  contentElement.appendChild(paragraph2);
};
