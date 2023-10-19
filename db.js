const xuluHtml = (data)=>{
    return `
    <div class="sanphamthuong">
        <a href=""><img src="${data.image}"></a>
        <h1>${data.name}</h1>
        <p>${data.price}<sup>Đ</sup></p>  
        <button class="addcart" onclick="addToCart(${data.id})" data-name="ELYSIA SET ÁO KIỂU KÈM CHÂN VÁY" data-price="50">Thêm Vào giỏ hàng</button>
    </div>
`
}
fetch("db.json")
.then((data)=>(data.json()))
.then((data)=>{
    let htmlData = ''
    data.forEach(element => {
        htmlData += xuluHtml(element)
    });
    document.getElementById('renderProduct').innerHTML = htmlData

})
.catch((err)=>{
    console.log(err);
});

let localProduct = JSON.parse(localStorage.getItem('addProduct')) || [];
// const hienthigiohang = (localProduct)=>{
//     const html=""
//     localProduct.forEach((e)=>{
        
//     })
//     document.getElementById('cart-items').innerHTML
// }
const addToCart = (id)=>{
    localProduct.push(id)
    localStorage.setItem('addProduct', JSON.stringify(localProduct));
    console.log(localProduct);
}
