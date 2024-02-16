// 型態
// let fullName = "Bro Code"
// let age = 25;
// let isStudent = false

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old` ;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

//運算式
//students = students**2 //二次方
//students = students%3 //取餘數
//取得對話框跳出並輸入
// let username = window.prompt("What's your Name?");
// console.log(username);

//打字並顯示
let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
    console.log(username);
}

