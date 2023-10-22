import Swal from "sweetalert2";
import { productRender, removeCartBtnHandler } from "../app/product";
import { app, calculateTotalAmount, cartItems, cartUi, closeCart } from "./selector";
import { products } from "./variable";

export const searchBtnHandler = () => {
    
};

export const cartBtnHandler = () => {
   cartUi.classList.toggle("translate-x-full");
   cartUi.classList.add("duration-300")
    
};

export const categoryListsHandler = (event) => {
   if(event.target.classList.contains("category-badge")){
      const currentCategoryBtn = event.target;
      const currentCategory = currentCategoryBtn.innerText.toLowerCase();
      const lastCategoryBtn = app.querySelector(".active.category-badge");
      lastCategoryBtn.classList.toggle("active");
      currentCategoryBtn.classList.add("active");
      productRender(products.filter(product =>product.category === currentCategory || currentCategory === "all"));
   };   
};

export const orderNowHandler = (event) => {
   Swal.fire({
      title: 'Are you ready to order?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      // confirmButtonColor: "rgb(64,64,64)",
      // cancelButtonColor: 'rgb(245,245,245)',
      cancelButtonText:"Cancel",
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if(result.isConfirmed){
         const customer_id = Math.floor(Math.random() * 10000);
         const total = parseFloat(calculateTotalAmount.innerText);
         const time = Date.now();
         const order_items = [];
         app.querySelectorAll(".cart-item").forEach(el => {
            const productId =parseInt(el.getAttribute("product-id"));
            const quantity = parseInt(el.querySelector(".cart-q").innerText);
            order_items.push({
               product_id : productId,
               quantity : quantity,
            })
            el.remove();
            removeCartBtnHandler(productId);
           
      });
      const order = {customer_id,time,order_items,total};

      console.log(order);
   }
 });
};

export const searchHandler=(text) => {
   productRender(products.filter(product =>product.title.toLocaleLowerCase().search(text.toLocaleLowerCase()) >= 0))
}

