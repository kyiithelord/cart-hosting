import { cartObserver } from "./app/cart";
import { categoryRender } from "./app/category";
import { productRender } from "./app/product";
import { cartBtnHandler, categoryListsHandler, orderNowHandler, searchHandler } from "./core/handler";
import { cartBtn, closeCart, orderNow, searchBtn } from "./core/selector";
import { categories, products } from "./core/variable";

export class Shop{
    preRender(){
        categoryRender(categories);
        productRender(products);

    };

    listener(){
        cartBtn.addEventListener("click",cartBtnHandler);
        closeCart.addEventListener("click",cartBtnHandler);
        categoryLists.addEventListener("click",categoryListsHandler);
        orderNow.addEventListener("click",orderNowHandler);
        searchBtn.addEventListener("click",() => {
            searchHandler("man")
        });

    };
    observer(){
        cartObserver();

    };

    init(){
        console.log("shop is starat");
        this.preRender();
        this.listener();
        this.observer();

    }
}