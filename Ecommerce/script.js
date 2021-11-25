//////////////////////////////////////////////////////////////////////////////////////////////////

/*Ecommerce Page Logic*/

let arrItem = [];
let arrImage = [];
//localStorage.clear();

async function getapi() {
  const response = await fetch("https://api.github.com/users");
  var data = await response.json();
  //console.log(data);
  let test = document.getElementById("test");
  if (test) {
    for (i = 0; i < data.length; i++) {
      test.insertAdjacentHTML(
        "afterbegin",
        `
    <div class="card">
    <img class="card-img-top" src="${data[i].avatar_url}" alt="Card image cap">
    <h5 class="login">${data[i].login}</h5><span>
    <button class='add' type='submit'>Add to Cart</button>
    </div>`
      );

      let name = document.querySelector(".login").innerHTML;
      let image_url = document
        .querySelector(".card-img-top")
        .getAttribute("src");

      addToCard(name, image_url);
    }
  }
}
//}
//function addToCart(item){
//    arr.push(item);
//}
//console.log(arr);
getapi();

const addToCard = function (name, image_url) {
  document.querySelector(".add").addEventListener("click", () => {
    arrItem.push(name);
    arrImage.push(image_url);
    localStorage.setItem("item", arrItem);
    localStorage.setItem("image_url", arrImage);
  });
};

setInterval(()=>{

  if(localStorage.length===0){
    arrItem=[];
    arrImage=[];
  }

},100);

if (document.querySelector(".cart_itemcount")) {
  setInterval(function () {
    if (
      localStorage.getItem("item") &&
      localStorage.getItem("item").split(",").length > 0
    )
      document.querySelector(".cart_itemcount").innerHTML = localStorage
        .getItem("item")
        .split(",").length;
    else document.querySelector(".cart_itemcount").innerHTML = "0";
  }, 1000);
}

//shopping cart html page

function showCartItem(localItem, localImage) {
  let testShoppingCart = document.querySelector("#test_ShoppingCart");
  if (testShoppingCart && localItem[0] != "") {
    for (let i = 0; i < localItem.length; i++) {
      testShoppingCart.insertAdjacentHTML(
        "afterbegin",
        
    `<div class="card">
    <img class="card-img-top" src="${localImage[i]}" alt="Card image cap">
    <h5 class="login">${localItem[i]}</h5><span>
    <button class='remove' type='submit'>Remove Item</button>
    </div>`
      );
    }

    remove();
  } else {
    testShoppingCart.insertAdjacentHTML(
      "afterbegin",
      `<div class="card"> No Item</div>`
    );
    localStorage.clear();
  }
}


var localItem = localStorage.getItem("item").split(",");
var localImage = localStorage.getItem("image_url").split(",");


const remove = () => {
  let removeBtn = document.querySelectorAll('.remove');
  removeBtn.forEach((e, i) => {
    e.addEventListener("click", () => {

      let parent=e.parentElement.parentElement.children[1];
      let index=localItem.indexOf(parent.innerHTML);
      localItem.splice(index,1);
     // console.log(localItem); 


      //x.preventDefault();
      // let parentNode = e.parentElement;
      
      // let loginName = parentNode.parentElement.children[1];
      // //let loginName=document.querySelector(.`${login}`);
      // const index = localItem.indexOf(loginName);
      // console.log(index);
      // //console.log("delete"+ index);
      // localItem.splice(index, 1);
      localImage.splice(index, 1);
      //showCartItem(localItem,localImage);
      localStorage.setItem("item", localItem);
      localStorage.setItem("image_url", localImage);
      location.reload();
    });
  });
};

showCartItem(localItem, localImage);

setInterval(() => {
   if (localStorage.getItem('item').split(",").length > localItem.length)
   //showCartItem(localItem, localImage);}
    location.reload();
}, 100);


// document.querySelectorAll('button')
// .forEach((e)=>{

//   e.addEventListener('mouseover', ()=>{
  
//   let parent=e.parentElement.parentElement.children[1];
//   let index=localItem.indexOf(parent.innerHTML);
//   localItem.splice(index,1);
//   console.log(localItem);  
  
//   });
  
  
//   });
// Remove item logic to be build




