// for(var i = 0; i <= 100; i+=5){
// 	console.log(i);
// }
// function saveName(){
// 	var username = document.getElementById("username").value
// 	console.log("Your username is " + username + ".");
// }
// var cars = [
// 	{
// 		make: "ford",
// 		model: "mustang",
// 		year: 1970,
// 		image: "img/mustang.jpg"
// 	},
// 	{
// 		make: "dodge",
// 		model: "charger",
// 		year: 1975,
// 		image: "img/charger.jpg"
// 	},
// 	{
// 		make: "chevy",
// 		model: "blazer",
// 		year: 1969,
// 		image: "img/blazer.jpg"
// 	}
// ]
// function buyCar(){
// 	//save users input as carName
// 	var car = document.getElementById("carName");
// 	//confirm the users input is being saved
// 	console.log("the user has selected " + car + " as the vehicle.");
// 	//loop through cars array one item at a time
// 	for(var i = 0; i < cars.length; i++){
// 		if(car.value === cars[i].model) {
// 			//confirm if statement ran
// 			console.log("if statement ran");
// 			//fill the first <h3> with the model name from our array
// 			document.getElementById('model').textContent = cars[i].model.toUpperCase();
// 			//fill the second <h3> with the year of the car from our array
// 			document.getElementById('year').textContent = cars[i].year;
// 			//fill the image tag with an image of our car using .src!
// 			document.getElementById('image').src = cars[i].image;
// 			//end function
// 			return;
// 		}
// 	}
// }

	
	// var newDiv = document.createElement('div'); 
	// // a div element will be added to the body

	// var newImg = document.createElement('img');
	// //create an img tag

	// newDiv.className = "addedClass"; 
	// //assigns the css properties of 'addedClass' to the div we just added and named 'newDiv'

	// var textHere = document.createTextNode("write our text here");
	//  //create a variable with text to assign to one of our newly added elements

	// newDiv.appendChild(textHere);
	//  //assigns the value of textHere('the text we wrote above') to our newDiv element

	// newImg.setAttribute('src', 'img/NSWO.jpg')

	// var addHere = document.getElementById('addHere');
	//  //assign our 'newDiv' to a variable to attatch it in the code below

	// addHere.appendChild(newDiv);
	// //attaches a our 'newDiv' variable to the body with id of 'addhere'

	// addHere.appendChild(newImg);


function todoList(){
	var item = document.getElementById("todoInput").value
	var text = document.createTextNode(item)
	var newItem = document.createElement("li")
	newItem.appendChild(text)
	document.getElementById("todoList").appendChild(newItem)
}





















