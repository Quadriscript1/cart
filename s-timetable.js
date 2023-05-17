let schoolTimetable = [
  {
    Days: "Monday",
    timeTable: [
      { time: "9AM", subject: "Mathematics", subjectTeacher: "Mr harry" },
      { time: "11AM", subject: "English", subjectTeacher: "Mr jandor" },
      { time: "2PM", subject: "Yoruba", subjectTeacher: "Mr lee" },
    ],
  },
  {
    Days: "Tuesday",
    timeTable: [
      { time: "9AM", subject: "Chemistry", subjectTeacher: "Ms joe" },
      { time: "11AM", subject: "physics", subjectTeacher: "Mr john" },
      { time: "2PM", subject: "Biology", subjectTeacher: "Ms may" },
    ],
  },
  {
    Days: "Wednessday",
    timeTable: [
      { time: "9AM", subject: "FurtherMath", subjectTeacher: "Mrs mary" },
      { time: "11AM", subject: "Economics", subjectTeacher: "Ms lisa" },
      { time: "2PM", subject: "Literature", subjectTeacher: "Mr mandeep" },
    ],
  },
  {
    Days: "Thursday",
    timeTable: [
      { time: "9AM", subject: "Chemistry", subjectTeacher: "Mr suraj" },
      { time: "11AM", subject: "Agric", subjectTeacher: "Mr ganiy" },
      { time: "2PM", subject: "ChemistryPractical", subjectTeacher: "Ms lais" },
    ],
  },
  {
    Days: "Friday",
    timeTable: [
      { time: "9AM", subject: "Sport", subjectTeacher: "Mr isaac" },
      { time: "11AM", subject: "Quiz/Debate", subjectTeacher: "Mr ilyas" },
      { time: "2PM", subject: "closingDay", subjectTeacher: "Ms sharky" },
    ],
  },
];
let selectDay = document.getElementById("selectDay");
let selectPeriod = document.getElementById("selectPeriod");
let table = document.getElementById("table");

for (let i = 0; i < schoolTimetable.length; i++) {
  selectDay.innerHTML += `<option value ="${schoolTimetable[i].Days}">${schoolTimetable[i].Days}</option>`;
}
for (let i = 0; i < schoolTimetable[0].timeTable.length; i++) {
  selectPeriod.innerHTML += `<option value ="${schoolTimetable[0].timeTable[i].time}">${schoolTimetable[0].timeTable[i].time}</option>`;
}

function mylist() {
  duplicate = false;
  if (selectDay.value == "" || selectPeriod == "") {
    return alert("please click the select button");
  } else {
    let storage = {
      Days: selectDay.value,
      time: selectPeriod.value,
    };

    schoolTimetable.forEach((list) => {
      if (list.Days == storage.Days) {
        list.timeTable.forEach((list2) => {
          if (list2.time == storage.time) {
            storage.subject = list2.subject;
            storage.subjectTeacher = list2.subjectTeacher;
          }
        });
      }
    });
    let holder = [];
    if (localStorage.getItem("items") === null) {
      holder.push(storage);
    } else {
      holder = JSON.parse(localStorage.getItem("items"));
      holder.forEach((items) => {
        if (storage.Days == items.Days && storage.time == items.time) {
          duplicate = true;
        }
      });
      if (duplicate) {
        alert("duplicate here");
      } else {
        holder.push(storage);
      }
    }
    localStorage.setItem("items", JSON.stringify(holder));
  }

  get();
}

function get() {
  let data = JSON.parse(localStorage.getItem("items"));
  table.innerHTML = "";
  data.forEach((element) => {
    table.innerHTML += `
                <td>${element.Days}</td>
                <td>${element.time}</td>
                <td>${element.subject}</td>
                <td>${element.subjectTeacher}</td>
                `;
  });
  //console.log(data);
}
get();
