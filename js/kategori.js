fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  //FANGER VORES TEMPLATE
  const template = document.querySelector("template").content;

  //CLONER
  const clone = template.cloneNode(true);

  //ÆNDRE INDHOL
  clone.querySelector("a").textContent = cat.category;
  clone.querySelector("a").href = `produktliste.html?category=${cat.category}`;

  //APPENDER
  document.querySelector(".letterGroup ol").appendChild(clone);
}
