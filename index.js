//Updatine details in realtime

//successful update code for input2
// document.querySelector("#input2").addEventListener("input",function(){
//     document.querySelector(".text1").innerHTML = this.value;
// })

//for loop but failed
//     for (var i=0; i<5; i++) {
//     document.querySelectorAll(".blanks")[i].addEventListener("input",function(){
//         document.querySelectorAll(".cardtext")[i].innerHTML = this.value;
//     })
// }
function updateDetail(id){
    switch (id) {
        case "input1":
        document.querySelectorAll(".cardtext")[0].innerHTML = document.querySelectorAll("input")[0].value;
        break;

        //failed when set by 'this.value'

        case "input2":
        document.querySelectorAll(".cardtext")[1].innerHTML = document.querySelectorAll("input")[1].value;
        break;

        case "input3":
        document.querySelectorAll(".cardtext")[2].innerHTML = document.querySelectorAll("input")[2].value;
        break;

        case "input4":
        document.querySelectorAll(".cardtext")[3].innerHTML = document.querySelectorAll("input")[3].value;
        break;

        case "input5":
        document.querySelectorAll(".cardtext")[4].innerHTML = document.querySelectorAll("input")[4].value;
        break;

        default: console.log(this.value)
    }
}



    for (var i=0; i<5; i++) {
    document.querySelectorAll("input")[i].addEventListener("input",function(){
        updateDetail(this.id);
    })
}


//card number placing
document.querySelector("#input2").addEventListener("change",function(){
    this.value = this.value.substr(0,4) + " " + this.value.substr(4,4) + " " + this.value.substr(8,4) + " " + this.value.substr(12,4);
    updateDetail("input2");
})

//highlighting invalid form
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("invalid", () => {
      // 검증 후 폼 요소에 was-validated 클래스로 표시해 둔다
      document.forms[0].classList.add("was-validated");
      
    })
  })
