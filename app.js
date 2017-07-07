var car = 0;
var home = 0;
var food = 0;
var health = 0;
var sports = 0;
var clothes = 0;
var transport = 0;
var communication = 0;
var category = "";
var income = 0;
var balance = 0;
var expense = 0;

displayBalance();

//function to display entery box
function add(id){

    document.getElementById("body").className="hidden";
    document.getElementById("addAmount").className="show";

    var date = new Date();
    document.getElementById("date").innerHTML = todayDate();

    if (id !== "MinusIncome") {
    document.getElementById("button").innerHTML = "Add " + id;
}
    else{
    document.getElementById("button").innerHTML = "Minus Income";
    }


    category = id;


    //  if (category === "Home Expense"){
            
    //         if(home !== 0){
    //             document.getElementById("amountShowField").value = home;
    //         }  
            
    //     }
    //     if (category === "Car Expense"){

    //         if(car !== 0){
    //             document.getElementById("amountShowField").value = car;
    //         } 
            
    //     }
    //     if (category === "Food Expense"){
            
    //         if(food !== 0){
    //             document.getElementById("amountShowField").value = food;
    //         } 
            
    //     }
    //     if (category === "Health Expense"){
            
    //         if(health !== 0){
    //             document.getElementById("amountShowField").value = health;
    //         } 
            
    //     }
    //     if (category === "Transport Expense"){
            
    //         if(transport !== 0){
    //             document.getElementById("amountShowField").value = transport;
    //         } 
            
    //     }
    //     if (category === "Clothes Expense"){
            
    //         if(clothes !== 0){
    //             document.getElementById("amountShowField").value = clothes;
    //         } 
            
    //     }
    //     if (category === "Communication Expense"){
            
    //         if(communication !== 0){
    //             document.getElementById("amountShowField").value = communication;
    //         } 
            
    //     }
    //     if (category === "Sports Expense"){
            
    //         if(sports !== 0){
                
    //             document.getElementById("amountShowField").value = sports;
    //         } 
            
    //     }

    //     if (category === "Income"){

    //         if (income !== 0){

    //             document.getElementById("amountShowField").value = income;

    //         }

    //     }



}

//function to display number on text field
function addNumber(id) {

    document.getElementById("amountShowField").value += id;


}


//function to refresh text field
function refreshField(){

    document.getElementById("amountShowField").value = "";

}


//function to return back to the main page
function back(){

    document.getElementById("body").className="show";
    document.getElementById("addAmount").className="hidden";
    refreshField();
    calculateExpense();
    displayBalance();
    
}

//function to get today's date
function todayDate() {

    var date = new Date();

    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"

    ]

    var date = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear(); 

    return date;
}   

function getData() {

   var field =  document.getElementById("amountShowField").value;



    if (field !== ""){

        if (category === "Home Expense"){
            home += parseInt(field);
            
        }
        if (category === "Car Expense"){
            car += parseInt(field);
            
        }
        if (category === "Food Expense"){
            food += parseInt(field);
            
        }
        if (category === "Health Expense"){
            health += parseInt(field);
            
        }
        if (category === "Transport Expense"){
            transport += parseInt(field);
            
            
        }
        if (category === "Clothes Expense"){
            clothes += parseInt(field);
            
        }
        if (category === "Communication Expense"){
            communication += parseInt(field);
            
        }
        if (category === "Sports Expense"){
            sports += parseInt(field);
            
        }
        if (category === "Income"){
            income += parseInt(field);           

        }
        if (category === "MinusIncome"){

            if (income !== 0) {
                income = income - parseInt(field);
                balance = balance - parseInt(field);

            }

        }

        back();

    }

    else
        if (field === "") {

        if (category === "Home Expense"){
            home = 0;
            
        }
        if (category === "Car Expense"){
            car = 0;
            
        }
        if (category === "Food Expense"){
            food = 0;
            
        }
        if (category === "Health Expense"){
            health = 0;
            
        }
        if (category === "Transport Expense"){
            transport = 0;
            
        }
        if (category === "Clothes Expense"){
            clothes = 0;
            
        }
        if (category === "Communication Expense"){
            communication = 0;
            
        }
        if (category === "Sports Expense"){
            sports = 0;
            
        }
        if (category === "Income"){
            income = 0;

        }

        back();
    }
        

}

function displayBalance() {

    document.getElementById("showBalance").innerHTML = "Balance: " + balance + " Rs.";
    document.getElementById("incomeShow").innerHTML = "PKR: " + income + " Rs.";
    document.getElementById("expenseShow").innerHTML = "PKR: " + expense + " Rs.";


}



function calculateExpense() {


    
        balance += income;
        expense = car + home + food + transport + communication + clothes + health + sports;
        balance = income - car - home - food - transport - communication - clothes - health - sports;

   

}



