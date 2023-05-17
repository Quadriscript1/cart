const foodDo = [
  { name: "Jollof-rice",location: "eko", price: 135 ,qty :1,total:0},
  { name: "Efo riro", location: "isale-eko", price: 125,qty :1,total:0},
  { name: "Ogbono",location: "abule-showo", price: 155,qty :1,total:0},
  { name: "Moi-moi",location: "eko", price: 145,qty :1,total:0},
  { name: "Chicken & chips",location: "abuja", price: 230 ,qty :1,total:0  },
  { name: "Snail",location: "egba", price: 120 ,qty :1,total:0 },
  { name: "fried-rice",location: "abia", price: 155 ,qty :1,total:0},
  { name: "Pizza", location: "niger", price: 110 ,qty :1,total:0},
  { name: "Ogi & akara",location: "kogi", price: 105 ,qty :1,total:0},
  { name: "Fura",location: "kano", price: 350 ,qty :1,total:0},
  { name: "Chicken wings",location: "osun", price: 200 ,qty :1,total:0  },
  { name: "Snail",location: "ogun", price: 100 ,qty :1,total:0 },
];
let foodTable = document.getElementById("food-table");
let myFood = document.getElementById("food");
let foodOption2 = document.getElementById("opt1");
let modalSelect = document.getElementById('modalSelect')
let locationOption =document.getElementById('SelectLocation');
let priceOption = document.getElementById("SelectPrice")
let locationOption1 =document.getElementById('location1');
let priceOption1 = document.getElementById("price1")
let newName = document.getElementById('new-name');
// let modal_data = document.getElementById("myModal");
let UpdateModal = '';
let deleteButton = document.getElementById('deleteButton')
for (let i = 0; i < foodDo.length; i++) {
  myFood.innerHTML += `<option value ="${foodDo[i].name}">${foodDo[i].name}</option>`;
  foodOption2.innerHTML += `<option value ="${foodDo[i].name}">${foodDo[i].name}</option>`;

}


function getPrice(event){
  let price=''
  let location=''
  for (let i = 0; i < foodDo.length; i++) {
      if(foodDo[i].name === event.target.value){
         price = foodDo[i].price
         location = foodDo[i].location
      }
      
  }
  locationOption.value = location
  priceOption.value = price
}
let usersData = JSON.parse(localStorage.getItem('authUser'));
newName.innerHTML = usersData.name;

function Add() {
  let duplicate = false;
  if (myFood.value == "") {
    alert("you need to write something");
  } else {
    let storage = {
      id : Math.floor(Math.random()*10000),
      food: myFood.value,

      
    };
    foodDo.forEach((list) => {
      if (list.name == storage.food) {
       storage.location = list.location;
       storage.price = list.price;
       storage.qty = list.qty
       storage.total = list.total
      }
    });
    let holder = [];
    if (localStorage.getItem("fooditems") === null) {
      holder.push(storage);
    } else {
      holder = JSON.parse(localStorage.getItem("fooditems"));
      holder.forEach((items) => {
        if (storage.food == items.food && storage.location == items.location) {
          duplicate = true;
        }
      });
      if (duplicate) {
        alert("duplicate here");
      } else {
        holder.push(storage);
      }
    }
    localStorage.setItem("fooditems", JSON.stringify(holder));

    
  }
   myTableFood()
}
function myTableFood() {
   let foodDoo = JSON.parse(localStorage.getItem("fooditems"));
   let total = document.getElementById("total");
   let totalvalue = 0
    foodTable.innerHTML = "";
     for (let index = 0; index < foodDoo.length; index++) {
       foodTable.innerHTML += `<tr>
       
                             <td>${[index + 1]}</td>
                              <td>${foodDoo[index].food}</td>
                              <td>${foodDoo[index].price}</td>
                              <td>${foodDoo[index].location}</td>
                              <td><button onclick="decrement(${foodDoo[index].id})">-</button><span id = "count">${foodDoo[index].qty}</span><button onclick="increment(${foodDoo[index].id})">+</button></td>
                              <td><button class = btn-warning onclick="toModal(${foodDoo[index].id}) "data-toggle="modal" data-target="#exampleModal">edit</button>
                              <button class = btn-danger onclick="deleteItem(${index})" id = "deleteButton">delete</button></td>
                             </tr>
                             


                             `;
                             totalvalue += parseInt(foodDoo[index].price) * parseInt(foodDoo[index].qty)
     }
     
     total.value = totalvalue
 }
 myTableFood()


function deleteItem(ind){
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            let cartData = JSON.parse(localStorage.getItem('fooditems'));
            if(cartData){
                cartData.splice(ind,1);
                localStorage.setItem('fooditems', JSON.stringify(cartData))
            }
            myTableFood()

            swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          myTableFood()
          swal("Your imaginary file is safe!");
        }
      });
}
// function deleteData(index) {
//   let foodDoo = JSON.parse(localStorage.getItem("fooditems"));
//   foodDoo.splice(index, 1); 
//   localStorage.setItem("fooditems", JSON.stringify(foodDoo)); 
//   myTableFood();  
// }

function getPrice2(event){
  let price2=''
  let location2=''
  for (let i = 0; i < foodDo.length; i++) {
      if(foodDo[i].name === event.target.value){
         price2 = foodDo[i].price
         location2 = foodDo[i].location
      }
      
  }
  locationOption1.value = location2
  priceOption1.value = price2
}
function toModal(dataModal){
  UpdateModal = dataModal
  let cartData = JSON.parse(localStorage.getItem('fooditems'));

  let obj = {}
  for (let index = 0; index < cartData.length; index++) {
      if(dataModal==cartData[index].id){
          obj = cartData[index]
      }
  }
  foodOption2.value = obj.food;
  locationOption1.value = obj.location;
  priceOption1.value = obj.price

  localStorage.setItem('updateKitchen', JSON.stringify(cartData))

}
function update(){
  let cartData = JSON.parse(localStorage.getItem('fooditems'))

  if(foodOption2.value ==""){
      return alert('please select an item')
  }
  else{
      for (let index = 0; index < cartData.length; index++) {
          if(cartData[index].id == UpdateModal){
              cartData[index].food = foodOption2.value
              cartData[index].price = priceOption1.value
              cartData[index].location = locationOption1.value
          }
          
      }
      
  }
  myTableFood()


  localStorage.setItem('fooditems', JSON.stringify(cartData))
  myTableFood()
}
function increment(id){
let foodDoo = JSON.parse(localStorage.getItem("fooditems"));
foodDoo.forEach((list)=>{
  if (list.id == id) {
    list.qty++ ;
    list.total = list.price * list.qty
   
  }
})
localStorage.setItem('fooditems', JSON.stringify(foodDoo))
myTableFood()
}
  function decrement(id){
    let foodDoo = JSON.parse(localStorage.getItem("fooditems"));
    foodDoo.forEach((list)=>{
      if (list.id == id && list.qty>1 ) {
        list.qty-- ;
        list.total = (list.price * list.qty)-list.price
       
      }
    })
  
     localStorage.setItem('fooditems', JSON.stringify(foodDoo))
     myTableFood()
}

  