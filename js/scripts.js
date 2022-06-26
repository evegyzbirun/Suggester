// User Interface Logic


let form = document.getElementById("ask");


function formSelect(event) {



  event.preventDefault();

  let input1 = document.getElementById("q1");
  let pick1 = input1.options[input1.selectedIndex].value;
  let input2 = document.getElementById("q2");
  let pick2 = input2.options[input2.selectedIndex].value;
  let input3 = document.getElementById("q3");
  let pick3 = input3.options[input3.selectedIndex].value;
  let input4 = document.getElementById("q4");
  let pick4 = input4.options[input4.selectedIndex].value;
  let input5 = document.getElementById("q5");
  let pick5 = input5.options[input5.selectedIndex].value;

  //let outputShow = document.getElementById("output");

  if (pick1 == "answer1"
    && (pick2 === "answer1" || pick2 === "answer2" || pick2 === "answer3") && (pick3 === "answer1" || pick3 === "answer2" || pick3 === "answer3") && (pick4 === "answer1" || pick4 === "answer2" || pick4 === "answer3") && (pick5 === "answer1" || pick5 === "answer2")
  ) {

    document.getElementById("Ruby").style.display = "block";
    document.getElementById("Python").style.display = "none";
    document.getElementById("Swift").style.display = "none";


  } else if (pick1 == "answer2" && (pick2 === "answer1" || pick2 === "answer2" || pick2 === "answer3") && (pick3 === "answer1" || pick3 === "answer2" || pick3 === "answer3") && (pick4 === "answer1" || pick4 === "answer2" || pick4 === "answer3") && (pick5 === "answer1" || pick5 === "answer2")) {

    document.getElementById("Python").style.display = "block";
    document.getElementById("Ruby").style.display = "none";
    document.getElementById("Swift").style.display = "none";

  } else {

    document.getElementById("Swift").style.display = "block";
    document.getElementById("Ruby").style.display = "none";
    document.getElementById("Python").style.display = "none";
  }




}

window.addEventListener("load", function () {
  document.getElementById("ask").addEventListener("submit", formSelect);

  let resetBtn = document.getElementById("reset");
  resetBtn.addEventListener("click", function () {
    document.getElementById("Ruby").style.display = "none";
    document.getElementById("Swift").style.display = "none";
    document.getElementById("Python").style.display = "none";
  });

});















//all 3 to styles none
