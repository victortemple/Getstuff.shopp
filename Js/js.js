
const data = [
    {
        id:1,
        name:'Dress1',
        img: "./img/dress1.jpeg",
        price: 44,
        cat: 'Dress',
    },
    {
        id:2,
        name:'Dress2',
        img: "./img/dress2.jpeg",
        price: 63,
        cat: 'Dress',
    },
    {
        id:3,
        name:'Dress3',
        img: "./img/dress3.jpeg",
        price: 44,
        cat: 'Dress',
    },
    {
        id:4,
        name:'Dress4',
        img: "./img/dress4.jpeg",
        price: 56,
        cat: 'Dress',
    },
    {
        id:5,
        name:'Dress5',
        img: "./img/dress5.jpeg",
        price: 107,
        cat: 'Dress',
    },
    {
        id:6,
        name:'Sport1',
        img: "./img/sport1.jpeg",
        price: 78,
        cat: 'Sport',
    },
    {
        id:7,
        name:'Sport2',
        img: "./img/spaort2.jpeg",
        price: 99,
        cat: 'Sport',
    },
    {
        id:8,
        name:'Sport3',
        img: "./img/sport3.jpeg",
        price: 87,
        cat: 'Sport',
    },
    {
        id:9,
        name:'Sport4',
        img: "./img/sport4.jpeg",
        price: 55,
        cat: 'Sport',
    },
    {
        id:10,
        name:'Sport5',
        img: "./img/sport5.jpeg",
        price: 154,
        cat: 'Sport',
    },
    {
        id:11,
        name:'Sport6',
        img: "./img/sport6.jpeg",
        price: 200,
        cat: 'Sport',
    },
    {
        id:12,
        name:'Luxury1',
        img: "./img/luxury1.jpeg",
        price: 108,
        cat: 'Luxury',
    },
    {
        id:13,
        name:'Luxury2',
        img: "./img/luxury2.jpeg",
        price: 168,
        cat: 'Luxury',
    },
    {
        id:14,
        name:'Luxury3',
        img: "./img/luxury3.jpeg",
        price: 99,
        cat: 'Luxury',
    },
    {
        id:15,
        name:'Luxury4',
        img: "./img/luxury4.jpeg",
        price: 189,
        cat: 'Luxury',
    },
    {
        id:16,
        name:'Luxury5',
        img: "./img/luxury5.jpeg",
        price: 200,
        cat: 'Luxury',
    },
    {
        id:17,
        name:'Luxury6',
        img: "./img/luxury6.jpeg",
        price: 200,
        cat: 'Luxury',
    },
    {
        id:18,
        name:'Luxury7',
        img: "./img/luxury7.jpeg",
        price: 88,
        cat: 'Luxury',
    },
    {
        id:19,
        name:'Casual1',
        img: "./img/caual1.jpeg",
        price: 44,
        cat: 'Casual',
    },
    {
        id:20,
        name:'Casual2',
        img: "./img/casual2.jpeg",
        price: 55,
        cat: 'Casual',
    },
    {
        id:21,
        name:'Casual3',
        img: "./img/casual3.jpeg",
        price: 89,
        cat: 'Casual',
    },
    {
        id:22,
        name:'Casual4',
        img: "./img/casual4.jpeg",
        price: 78,
        cat: 'Casual',
    }
]

const productsContainer = document.querySelector('.products');
const categoriesContainer = document.querySelector('.cats');
const searchInput = document.querySelector('.search');
const priceRange = document.querySelector('.priceRange');
const priceValue = document.querySelector('.priceValue');

const displayProducts = (filteredProducts) =>{
    productsContainer.innerHTML = filteredProducts.map(
        (product) =>
        `
        <div class="product">
        <div class="productImg">
            <img src=${product.img} alt="">
        </div>
        <span class="name">${product.name}</span>
        <span class="priceTxt">$${product.price}</span>
        </div>

        `
    ).join("");
}

displayProducts(data);

searchInput.addEventListener('keyup', (e) =>{
    const value = e.target.value.toLowerCase();
    if(value){
        displayProducts(data.filter(item=> item.name.toLowerCase().indexOf(value) !== -1))
    }
    else{
        displayProducts(data)
    }

    console.log(value);
}) 

const setCategories = () =>{
    const allcats = data.map(item=>item.cat)
    const categories = ['All',
    ...allcats.filter((item,i)=>{
        return allcats.indexOf(item)===i
    })];
//    console.log(categories)
categoriesContainer.innerHTML = categories.map(cat=>
    `
        <span class="cat" >${cat}</span>
    `
).join("");

categoriesContainer.style.cursor = "pointer";

categoriesContainer.addEventListener('click', (e) =>{
    const selectCats = e.target.textContent;
    selectCats === "All" ? displayProducts(data) 
    : displayProducts(data.filter(item=>
    item.cat === selectCats))
});
};

const setPrices = () =>{
    const priceList = data.map(item=> item.price);
    const minprice = Math.min(...priceList)
    const maxprice = Math.max(...priceList)
    priceRange.min = minprice
    priceRange.max = maxprice
    priceRange.value = maxprice
    priceValue.textContent = '$' + maxprice;
    priceRange.addEventListener('input', (e) =>{
        priceValue.textContent = '$' + e.target.value;
        displayProducts(data.filter(item=>item.price <= e.target.value))
    })
} 

setCategories();
setPrices();