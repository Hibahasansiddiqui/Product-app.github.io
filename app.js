let products = [{
  productName: 'Nike - Air Jordans',
  image: `<img src="Air-Jordan-11-Retro-GS-Bred-2019-300x300.jpeg" alt="Air Jordans - Nike" width="173" height="120" class = "imageClass">`,
  //isLiked: true,
  tag: "footwear",
  price: "PKR/= 8,900"
},
{
  productName: "PUMA M-07",
  image:`<img src="M-07-RS-Computer.jpg" alt="nike-shoes-black" width="173" height="120" class = "imageClass">`,
  //isLiked: true,
  tag: "footwear",
  price: "PKR/= 8,300"
},
{
  productName: "Makeup Kit by Mac",
  image:`<img src="mac-makeup-set-for-women.jpg" alt="Mac Makeup" width="173" height="120" class = "imageClass">`,
  //isLiked: true,
  tag: "makeup",
  price: "PKR/= 3,000"
},
{
  productName: "Smart TV - 32'",
  image:`<img src="rca-rca-rs32h2-eu-android-smart-led-tv.png" width="173" height="120" class = "imageClass">`,
  //isLiked: false,
  tag: "electronics",
  price: "PKR/= 38,000"
},
];

filterSelection("all")


function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

let classLength = document.getElementsByClassName("productName").length;
for (let i=0; i<products.length; i++){
  for (let j=0; j<=classLength; j++){
      document.getElementsByClassName("productName")[j].innerHTML = products[i+j].productName;
      document.getElementsByClassName("price")[j].innerHTML = products[i+j].price;
      document.getElementsByClassName("imageDiv")[j].innerHTML = products[i+j].image;
  }
}


// i wasn't sure how to incorporate "isLiked button"