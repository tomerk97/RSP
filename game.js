let winnerscreen = document.getElementById("winnerscreen");
let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");
let paper = document.getElementById("paper");
let start = document.getElementById("start");


let addImageOfUser=function(y){
	let image = document.createElement("IMG");
	image.src = `${y}.png`;
	image.setAttribute("class","chosenimage");
	winnerscreen.appendChild(image);
}

let addImageOfComputer=function(y){
	let image = document.createElement("IMG");
	image.src = `${y}.png`;
	image.setAttribute("class","randomimage");
	winnerscreen.appendChild(image);
}


let checkWhoWin = function(comp,user){
		if(comp==="rock"){
			if(user==="paper")
				return "You";
			else if(user==="scissors")
				return "Computer";
		}
		else if(comp==="paper"){
			if(user==="scissors")
				return "You";
			else if(user==="rock")
				return "Computer";
		}
		else if(comp==="scissors"){
			if(user==="rock")
				return "You";
			else if(user==="paper")
				return "Computer";
		}
	return"tie";
}

let pickRand = function(){
	switch (Math.floor(Math.random()*3)){
		case 0:
			return "rock";
		break;
		case 1: 
			return "paper";
		break;
		case 2:
			return "scissors";
		break;
	}
}

let countthree = function(){
	let x = document.createElement("P");
	x.setAttribute("class","line");
	x.innerHTML = "3";
	winnerscreen.appendChild(x); 
	setTimeout(function(){
		winnerscreen.innerHTML="";
		let x = document.createElement("P");
		x.setAttribute("class","line");
		x.innerHTML = "2";
		winnerscreen.appendChild(x); 
		}, 750);
	setTimeout(function(){
		winnerscreen.innerHTML="";
		let x = document.createElement("P");
		x.setAttribute("class","line");
		x.innerHTML = "1";
		winnerscreen.appendChild(x); 
		}, 1500);
}


let startgame = function(){
	
	rock.addEventListener("click", function(){
		let computer = pickRand();
		winnerscreen.innerHTML="";
		let winner = (checkWhoWin(computer,"rock"));
		countthree();
		setTimeout(function(){
		winnerscreen.innerHTML="";
		addImageOfComputer(computer);
		addImageOfUser("rock");
			if(winner ==="tie"){
				let x = document.createElement("P");
				x.setAttribute("class","line");
				x.innerHTML = `It's a Tie !`;
				winnerscreen.appendChild(x);
			}
			else{
				let x = document.createElement("P");
				x.setAttribute("class","line");
				x.innerHTML = `${winner} won!`;
				winnerscreen.appendChild(x);
			}
		start.disabled=false;
		}, 2250);
	})

	scissors.addEventListener("click", function(){
		let computer = pickRand();
		winnerscreen.innerHTML="";
		let winner = (checkWhoWin(computer,"scissors"));
		countthree();
		setTimeout(function(){
		winnerscreen.innerHTML="";
		addImageOfComputer(computer);
		addImageOfUser("scissors");
			if(winner ==="tie"){
				let x = document.createElement("P");
				x.setAttribute("class","line");
				x.innerHTML = `It's a Tie !`;
				winnerscreen.appendChild(x);
			}
			else{
				let x = document.createElement("P");
				x.setAttribute("class","line");
				x.innerHTML = `${winner} won!`;
				winnerscreen.appendChild(x);
			}
		start.disabled=false;
		}, 2250);
	})


	paper.addEventListener("click", function(){
		let computer = pickRand();
		winnerscreen.innerHTML="";
		let winner = (checkWhoWin(computer,"paper"));
		countthree();
		setTimeout(function(){
			winnerscreen.innerHTML="";
			addImageOfComputer(computer);
			addImageOfUser("paper");
			if(winner ==="tie"){
				let x = document.createElement("P");
				x.setAttribute("class","line");
				x.innerHTML = `It's a Tie !`;
				winnerscreen.appendChild(x);
			}
			else{
				let x = document.createElement("P");
				x.setAttribute("class","line");
				x.innerHTML = `${winner} won!`;
				winnerscreen.appendChild(x);
			}
		start.disabled=false;
		}, 2250);
	})
}



start.addEventListener("click",function(){
	start.disabled=true;
	winnerscreen.innerHTML="";
	let x = document.createElement("P");
	x.setAttribute("class","line");
	x.innerHTML = `Let's Play! Choose:`;
	winnerscreen.appendChild(x); 
	startgame();
})


