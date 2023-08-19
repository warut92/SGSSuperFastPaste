let firstInput10 = 32
let firstInput40 = 29
let score_data
let score_data_40
let score_data_10
let inputCell40
let inputCell10


function colorizeMidTerm() {
  const inputs = document.querySelectorAll("input");
  for (let i = 0; i < 40; i++) {
    inputs[firstInput40 + 4 + (13 * i)].style.border = ""
    inputs[firstInput10 + 4 + (13 * i)].style.border = ""
    inputs[firstInput40 + (13 * i)].style.border = "2px solid red"
    inputs[firstInput10 + (13 * i)].style.border = "2px solid red"
    inputCell40 = firstInput40
    inputCell10 = firstInput10
  }
}

function colorizeFilnalTerm() {
  const inputs = document.querySelectorAll("input");
  for (let i = 0; i < 40; i++) {
    inputs[firstInput40 + (13 * i)].style.border = ""
    inputs[firstInput10 + (13 * i)].style.border = ""
    inputs[firstInput40 + 4 + (13 * i)].style.border = "2px solid red"
    inputs[firstInput10 + 4 + (13 * i)].style.border = "2px solid red"
    inputCell40 = firstInput40 + 4
    inputCell10 = firstInput10 + 4
  }
}

document.addEventListener("paste", (e) => {
  e.preventDefault();
  //copy data from speadsheet and manipulate something
  score_data = (e.clipboardData || window.clipboardData).getData("text");
  score_data = score_data.split("\n")
  score_data = score_data.toString().split("\t")
  score_data = score_data.toString().split(",")

  //creat arr for 40 odd num
  score_data_40 = score_data.filter((value, index) => index % 2 === 0)

  //creat arr for 10 even num
  score_data_10 = score_data.filter((value, index) => index % 2 !== 0)

  const inputs = document.querySelectorAll("input");

   for (let i = 0; i < score_data_40.length; i++) {
     //allInputNode[x].style.backgroundColor = "red"
     inputs[inputCell40 + (13 * i)].value = score_data_40[i]
     inputs[inputCell10 + (13 * i)].value = score_data_10[i]
   }
})

document.addEventListener('paste', function(e) {
  // body...
  console.log('score_data', score_data)
  console.log('SCORE_DATA_40', score_data_40)
  console.log('SCORE_DATA_10 ', score_data_10 )
});

browser.runtime.onMessage.addListener(function(message) {
  if (message.action === "midTerm") {
    colorizeMidTerm()
  } else if (message.action === "finalTerm") {
    colorizeFilnalTerm()
  }
});
