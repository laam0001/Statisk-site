fetch("https://kea-alt-del.dk/t7/api/products?limit=15")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //loop og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  //fange template
  const template = document.querySelector("#produktTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("p.gender").textContent = product.gender;
  copy.querySelector("p.season").textContent = product.season;
  copy.querySelector("p.price").textContent = product.price;
  copy.querySelector("p.brandname").textContent = product.brandname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldout");
  }
  if (product.discount) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("sale");
  }

  //appende
  document.querySelector(".grid").appendChild(copy);
}

/*
{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}
*/

/*
<template id="produktTemplate">
<article class="produkt">
  <a href="produkt.html">
    <img
      src="https://kea-alt-del.dk/t7/images/webp/640/1525.webp"
      alt="Sort Puma Rygsæk"
  /></a>
  <h3>PUMA RYGSÆK</h3>
</article>
</template>
*/
