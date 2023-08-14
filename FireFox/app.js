document.body.style.border = "5px solid yellow";

console.log("พร้อมกรอกคะแนน")

document.addEventListener("paste", (event) => {
  event.preventDefault();
  //copy data from speadsheet and manipulate something
  let score_data = (event.clipboardData || window.clipboardData).getData("text");
  score_data = score_data.split("\n")
  score_data = score_data.toString().split("\t")
  score_data = score_data.toString().split(",")
  console.log('score_data', score_data)

  //creat arr for 40 odd num
  const score_data_40 = score_data.filter((value, index) => index % 2 === 0)
  console.log('SCORE_DATA_40', score_data_40)

  //creat arr for 10 even num
  const score_data_10 = score_data.filter((value, index) => index % 2 !== 0)
  console.log('SCORE_DATA_10 ', score_data_10 )

  // find all other text inputs
  let allInputNode = document.querySelectorAll('input');

    for (let i = 0; i < score_data_40.length; i++) {
      let round = 13
      let x = 29
      let y = 32
      //allInputNode[x].style.backgroundColor = "red"
      allInputNode[x + (round * i)].value = score_data_40[i]
      allInputNode[y + (round * i)].value = score_data_10[i]
    }
});
