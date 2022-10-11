/*function ageindays(){
   var birthyear= prompt('whats your year of birth');
   var aggeindays= (2020-birthyear)*365;
   var h1= document.createElement('h1');
   var textanswer= document.createTextNode('you are' + aggeindays + 'days');
   h1.setAttribute('id','ageindays');
   h1.appendChild(textanswer);
   document.getElementById('flex-box-outcome').appendChild('h1');
}
**/


//pop,push,shift ,unshift;pop:removes the last element while shift removes the first:push add element to the end of the array 
//while unshift add eleements at the beginning of the array
/*var elements= [['mercury','venus' ,'earth'],[1,2,3],['mars','jupiter','saturn'],[4,5,6]];
var newelements = elements.shift();
elements.unshift('meat');
console.log(elements);*/




function studentsgrade(marks){
   var answer="";
       switch(marks){
         case 100:
            answer=" A";
            break;

         case 90:
            answer="B+";
            break;

         case 80:
            answer="B";
            break;

         case 70:
            answer="C+";
            break;

         case 60:
            answer="C";
            break;

         case 55:
            answer="D+";
            break;

         case 50:
            answer="D";
            break;

         case 45:
            answer="E";
            break;

         case 0:
            answer="F";
            break;

            default:
               answer="none";
               break;
       }
    
       return answer;
       
}

console.log(studentsgrade(0));


function isless(a,b){
   return a < b;
}
console.log(isless(20,30));

function gender(girlorboy){
   var show="";
  
   switch(girlorboy){
      case "Ama":
         show = "Female";
         break;

      case "Kofi":
         show ="Male";
         break;

         default:
            show="Trans"
            break;
   }

   return show;
}

console.log(gender("Ama"));

function arithemetics(A,B,C){
   var say;
   switch(A,B,C){
          case A<B || B<C:
            say = "C is the biggest among all";
            break;

        /** case C>B && C<A:
            say = "A is the biggest";
            break;

            default:
               say = "any of the alphabets can be the  biggest";
               break;*/

   }

   return say;
}

console.log(arithemetics(5,6,7));

//counting cards...objects
//when you see a low card , the count goes up and a high card the count goes down
var count= 0; 
function cardscounting(cards){
   switch (cards){
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
         count++;
         break;

         case 10:
         case 'J':
         case 'Q':
         case 'K':
         case 'A':
         count--;
         break;
   }
   var holdbet="hold";
   if (count > 0){
      holdbet =" bet ";
   }
   return count + "" + holdbet;
}
console.log(cardscounting(5));

//objects are similar to array just that
 //instead of using indexes in arrays you'll use properties

 var universities={
   legon: "Accra",
   Tech: "Kumasi",
   Uenr: "Sunyani",
   UCC: "Cape Coast",
   UMAT: "Takwa",
 }

var publicuni=  universities.legon;
var catholicUni= universities.UCC;
console.log(publicuni);
console.log(catholicUni);
//you can access object with bracket notations when there is space in between your properties

var leagues ={
   "laliga mega": "first trophy ever",
   "Bondes liga": "super trophy",
   "FA cup": "super mega trophy",
   "Champions league": "BOssu Trophy",
}
console.log(leagues["laliga mega"]);
console.log(leagues["Bondes liga"]);
//updating object properties

leagues["Bondes liga"]="I have a super trophy";
universities.legon=" were in Accra";
console.log(universities.legon);
console.log(leagues["Bondes liga"]);

// adding new properties to object using dot notation or bracket notation, delete property from obeject using the delete property
delete leagues["laliga mega"];
console.log(leagues["laliga mega"]);

//record collection
var ourarr =[9,10,11,12];
var ourtotal= 0;
for (var i=0; i<ourarr.length; i++){
   ourtotal+=ourarr[i];
}
console.log(ourtotal);

// accessing nested object properties
var collection={
   musicrecord1:
   {
   artiste: "Joe Boy",
   song:["Jealous","peru","Playboy"],
   release: ["30th January 2020","25th August 2021","15th April 2022"],
   genre: "Afrobeat",
   },
  
   musicrecord2:{
   artiste: "Jackie",
   song:["Forever","Sor me mu","Something"],
   release: ["20th Febuary 2020","15th October 2021","15th July 2022"],
   genre: "Afrobeat",
   },

   musicrecord3:{
   artiste: "Kelvyn Boy",
   song:["Mea","Mata","Down Flat"],
   release: ["12th January 2020","15th August 2021","10th March 2022"],
   genre: "Afrobeat",
   },

   musicrecord4:{
   artiste: "Macostic",
   song:["Addiction","THats my girl","Satellite"],
   release: ["10th January 2020","5th August 2021","6th July 2022"],
   genre: "Afrobeat",
   }
}
var joeyboynewsong=["champion","fight for love","all of me"];
collection.musicrecord1.song.push(joeyboynewsong[1]);

//console.log(collection.musicrecord1.artiste);
console.log(collection.musicrecord1.song);
//console.log(collection.musicrecord1.release);
//console.log(collection.musicrecord1.genre);

//accessing nested arrays
//var newArray= []
//create an array of even numbers using for loop
var evennum= [];
for (var i = 0; i < 20 ; i += 2 ){
   evennum.push(i);
}
console.log(evennum);

var oddnum= [];
for (var j = 1; j < 10 ; j += 2 ){
   oddnum.push(j);
}
console.log(oddnum);

 var randomnum= [2,3,4,5,6];
var totalnum= 0;
for(var q=0; q<randomnum.length; q++){
   totalnum+=randomnum[q];
}
console.log(totalnum);
//nesting for loops statements

function room(bill){
   var communicate; 
      var amount= 2*bill;
      //var X= [1,2,3,4,5,6,7,8,9];
      //where X is number of appliances
   switch(bill){
      case 5:
      //if the person uses less than or equal to two appliances , show his bill
      communicate= "you go pay " + ""  +  amount + " Ghana cedis";
      break;

   /**  case 2>X<=5:
      communicate= "you go pay" + "amount" + "Ghana cedis";
      break;

      case 5>X<=9:
      communicate= "you go pay" + "amount" + "Ghana cedis";
      break;
   */
      befault:
      communicate= "there is something wrong with this code";
      break;
      
   }
   return communicate;
}
console.log(room(5));

var k= 15;
var ourarr=[];
do {
   ourarr.push(k);
   k++;
}while ( k < 5 )
console.log(k,ourarr);


for (var j = 1; j < 20 ; j += 2 ){
   console.log(+ j);

}
//console.log(Array.isArray());