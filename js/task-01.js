const liItem = document.querySelectorAll('.item');
const liItemQuantity=()=> {
   console.log(`Number of categories: ${liItem.length}`);
}
liItemQuantity();


const quantityCategories = array=> {
    array.forEach(item => {
        const title = item.firstElementChild.textContent;
        const quantityElement = item.querySelector('ul').children.length;
        console.log(`Category: ${title}
Elements ${quantityElement}`);
    })
   
}
quantityCategories(liItem);
