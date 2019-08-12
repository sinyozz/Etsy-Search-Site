function makeitem(item) {
   return `
   <div class="flex-cell">
     <div class="flex-item">
      <div class="flex-item-img">
        <img src="${item.img}" class="item-img"/>
        <img src="heart.png" class="item-like"/>
      </div>
      <div class="flex-item-txt">
       <p class="title">${item.title}</p>
       <p class="seller">${item.seller}</p>
       <p class="price">$${item.price}</p>
      </div>   
    </div>
  </div>
    `
}

let htmlstr = '';
items.results.forEach(item => {
  htmlstr += makeitem({
    img: item.Images[0].url_570xN,
    title: item.title,
    seller: item.Shop.shop_name,
    price: item.price
  })
  
})
document.querySelector("#images").innerHTML = htmlstr
 