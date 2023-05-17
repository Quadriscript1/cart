const array = [
  {
    name: "SUNDAY",
    timetable: [
      { time: "Breakfast", food: "rice" },
      { time: "Lunch", food: "garri" },
      { time: "Dinner", food: "eba" },
    ],
  },
  {
    name: "MONDAY",
    timetable: [
      { time: "Breakfast", food: "beans" },
      { time: "Lunch", food: "free-period" },
      { time: "Dinner", food: "semo" },
    ],
  },
  {
    name: "TUESDAY",
    timetable: [
      { time: "Breakfast", food: "rice" },
      { time: "Lunch", food: "indomie" },
      { time: "Dinner", food: "yam" },
    ],
  },
  {
    name: "WEDNESDAY",
    timetable: [
      { time: "Breakfast", food: "spag" },
      { time: "Lunch", food: "garri" },
      { time: "Dinner", food: "potato" },
    ],
  },
  {
    name: "THURSDAY",
    timetable: [
      { time: "Breakfast", food: "rice" },
      { time: "Lunch", food: "water" },
      { time: "Dinner", food: "eba" },
    ],
  },
  {
    name: "FRIDAY",
    timetable: [
      { time: "Breakfast", food: "nothing" },
      { time: "Lunch", food: "chips" },
      { time: "Dinner", food: "soup" },
    ],
  },
  {
    name: "SATURDAY",
    timetable: [
      { time: "Breakfast", food: "owanbe" },
      { time: "Lunch", food: "garri" },
      { time: "Dinner", food: "pie" },
    ],
  },
];

let selectDay = document.getElementById("selectDay");
let selectTime = document.getElementById("selectTime");
// let foods = document.getElementById("food");
// let list = document.getElementById("list");
// console.log(list);
let table = document.getElementById("table");

for (let i = 0; i < array.length; i++) {
  selectDay.innerHTML += `<option value ="${array[i].name}">${array[i].name}</option>`;
}
for (let i = 0; i < array[0].timetable.length; i++) {
  selectTime.innerHTML += `<option value ="${array[i].timetable[i].time}">${array[i].timetable[i].time}</option>`;
}

function myTable() {
  let duplicate = false;
  if (selectDay.value == "" || selectTime.value == "") {
    alert("you need to click something");
  } else {
    let storage = {
      id: Math.floor(Math.random() * 100000),
      name: selectDay.value,
      time: selectTime.value,
    };

    array.forEach((item) => {
      if (item.name == storage.name) {
        item.timetable.forEach((item2) => {
          if (item2.time == storage.time) {
            storage.food = item2.food;
          }
        });
      }
    });
    let holder = [];
    if (localStorage.getItem("itemData") === null) {
      holder.push(storage);
    } else {
      holder = JSON.parse(localStorage.getItem("itemData"));
      holder.forEach((items) => {
        if (storage.name == items.name && storage.time == items.time) {
          duplicate = true;
        }
      });

      if (duplicate == true) {
        alert("duplicate is coming");
      } else {
        holder.push(storage);
      }
    }
    localStorage.setItem("itemData", JSON.stringify(holder));
  }
  fetchData();
}

function fetchData() {
  let data = JSON.parse(localStorage.getItem("itemData"));

  table.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    table.innerHTML += 
  `<td>${data[i].name}</td>
  <td>${data[i].time}</td>
  <td>${data[i].food}</td>`;
  }
}
fetchData();

// function myTable() {
//   let duplicate = false;
//   if (selectDay.value == "" || selectTime.value == "") {
//     alert("you need to click something");
//   } else {
//     let holder = [];
//     if (selectDay.value == "SUNDAY" && (selectTime.value == "Breakfast" || selectTime.value == "Lunch" || selectTime.value == "Dinner" )) {
//       let food = [];
//       array.forEach((item) => {
//         item.timetable.forEach((element) => {
//           food.push({ food: element.food });
//         });
//       });
//   console.log(food);
//  let storage = {
//           days: selectDay.value,
//           time: selectTime.value,
//           food:food,
//         };
//         console.log(storage);
//         holder.push(storage)
// console.log(element.food);
//   if (localStorage.getItem("item") == null) {

//   }})}
// }
//    array.forEach((item) => {
//     // console.log(item).timetable.food;
//     item.timetable.forEach((element) => {
//       // console.log(element.food);
//       if (localStorage.getItem("item") == null) {
//         // let storage = {
//         //     days: selectDay.value,
//         //     time: selectTime.value,
//         //     food:element.food,
//         //   };
//       //   let d = selectDay.value;

//       //   } else if (condition) {

//       //   } else if(){

//       //   }
// //           switch (d) {
// //             case d == "SATURDAY":
// //                 text = "Breakfast";
// //               break;
// //             default:
// //               text = "Looking forward to the Weekend";
// //           }
// // console.log(text);
//       //   holder.push(storage);
//       //   localStorage.setItem("itemData", JSON.stringify(holder));
//       } else {
//       //   holder = JSON.parse(localStorage.getItem("item"));
//       //   let storage = {
//       //     days: selectDay.value,
//       //     time: selectTime.value,
//       //     food: element.food,
//       //   };
//       //   holder.push(storage);
//       //   localStorage.setItem("itemData", JSON.stringify(holder));
//         //   holder.forEach((itemData) => {
//         //     if (storage.name == itemData.name && storage.time == itemData.time) {
//         //       duplicate = true;
//         //     }
//         //     if (duplicate) {
//         //       alert("ok");
//         //     } else {
//         //       holder.push(storage);
//         //     }
//         //   });
//       }
//     });
//   });

// return console.log(storage);
// array.forEach(list => {
//     if(list.name == storage.name){
//         list.timetable.forEach(list2 =>{
//             if(list2.time == storage.time){
//                 storage.name = list2.name
//                 storage.food = list2.food
//             }
//         })
//     }
// })
// let holder = [];
// if(localStorage.getItem('item') === null){
//     holder.push(storage)
// } else{
//     holder = JSON.parse(localStorage.getItem('item'))
//     holder.forEach(itemData =>{
//         if (storage.name == itemData.name && storage.time == itemData.time) {
//             duplicate = true

//         }
//         if(duplicate){
//             alert('ok')
//         } else {
//             holder.push(storage)

//         }
//     }
//     )
// }
// localStorage.setItem( 'itemData', JSON.stringify(holder))
// }
// itemall();
// }

// function itemall() {
//   let data = JSON.parse(localStorage.getItem("itemData"));
// console.log(data);÷
//   return console.log(data);
//   table.innerHTML = "";
//   data.forEach((e) => {
//     table.innerHTML += `<td>${e.days}</td>
//     <td>${e.time}</td>
//     <td>${e.food}</td>`;
//   });
// }
// itemall();
