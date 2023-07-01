let productNameInput=document.getElementById("productName")
let productPriceInput=document.getElementById("productPrice")
let productCategoryInput=document.getElementById("productCategory")
let productDescriptionInput=document.getElementById("productDescription")
let inputSearch=document.getElementById("inputSearch")
let currentIndex;
let productList;
if (localStorage.getItem("list")==null) {
    productList=[]
} else {
    productList=JSON.parse( localStorage.getItem("list"))
}


function addProduct() {
    let product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        descript:productDescriptionInput.value
    }
    productList.push(product)
    display()
    localStorage.setItem("list",JSON.stringify(productList) )
    console.log(product);
   
}


function display() {
    let temp=""
    for (let i = 0; i < productList.length; i++) {
    temp+=   `  <tr>
    <td>`+i+`</td>
    <td>`+productList[i].name+`</td>
    <td>`+productList[i].price+`</td>
    <td>`+productList[i].category+`</td>
    <td>`+productList[i].descript+`</td>
    <td>
    <button class="btn btn-warning" onclick="updateProduct(`+i+`)"  >
            Update
        </button>
    </td>
    <td>
        <button class="btn btn-danger" onclick="deleteProduct(`+i+`)">
            Delete
        </button>
    </td>
</tr>`
        
    }
    document.getElementById("tableBody").innerHTML=temp
}



function deleteProduct(index) {
    productList.splice(index,1)
    display()
    localStorage.setItem("list",JSON.stringify(productList) )
   console.log(productList);
}
function clearForm(){
    productNameInput.value="";
   productPriceInput.value="";
   productCategoryInput.value="";
   productDescriptionInput.value="";
}

// function search(){
//    let searchValue=inputSearch.value.toLowerCase()
//    let temp=""
//    for (let i = 0; i < productList.length; i++) {
//    if (productList[i].name.toLowerCase().includes(searchValue)==true||productList[i].category.toLowerCase().includes(searchValue)==true) {
//     temp+=   `  <tr>
//     <td>`+i+`</td>
//     <td>`+productList[i].name.replace(searchValue,'<span class="text-warning">'+searchValue+'</span>')+`</td>
//     <td>`+productList[i].price+`</td>
//     <td>`+productList[i].category.replace(searchValue,'<span class="text-warning">'+searchValue+'</span>')+`</td>
//     <td>`+productList[i].descript+`</td>
//     <td>
//     <button class="btn btn-warning" onclick="updateProduct(`+i+`)"  >
//         Update
//     </button>
//     </td>
//     <td>
//         <button class="btn btn-danger" onclick="deleteProduct(`+i+`)">
//             Delete
//         </button>
//     </td>
// </tr>`
//    }
    
//    }
//    document.getElementById("tableBody").innerHTML=temp
// }


// function updateProduct(ind) {
//      currentIndex=ind
//     productNameInput.value=productList[ind].name;
//     productPriceInput.value=productList[ind].price;
//     productCategoryInput.value=productList[ind].category;
//     productDescriptionInput.value=productList[ind].descript;

//     document.getElementById("add").style.display="none"
//     document.getElementById("edit").style.display="inline-block"
// }

// function editproduct() {
//     productList[currentIndex].name=productNameInput.value;
//     productList[currentIndex].price=productPriceInput.value;
//     productList[currentIndex].category=productCategoryInput.value;
//     productList[currentIndex].descript=productDescriptionInput.value;
//     display()
//     document.getElementById("add").style.display="inline-block"
//     document.getElementById("edit").style.display="none"
// }


