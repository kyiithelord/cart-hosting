import { categoryLists } from "../core/selector";
import { products } from "../core/variable";
import { productRender } from "./product";


export const categoryRender = (list) => {
    list.forEach(el => categoryLists.append(createCategoryUi(el)))
    
};

export const createCategoryUi = (categoryName) => {
    const btn = document.createElement("button");
    btn.classList.add("category-badge","whitespace-nowrap")
    btn.innerText = categoryName;
    return btn
     
};

