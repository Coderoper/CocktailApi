import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
 $('#cocktailName').click(function() {
   let drink = $('#name').val();
   $('#name').val("");

   let request = new XMLHttpRequest();

   let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;

   request.onreadystatechange = function() {
     if (this.readyState === 4 && this.status === 200) {
       let response = JSON.parse(this.responseText);
       getElements(response);
     }
   }

   request.open("GET", url, true);
   request.send();

   let getElements = function(response) {
     console.log(drink);

     $('.drinkName').text(`The liquor in ${drink} is ${response.drinks[1].strDrink}`);
    //  $('.glass').text(`Use this glass ${drink} is ${response.drinks[2].strGlass`);
   }
 });
});
