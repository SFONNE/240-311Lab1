let date_ob = new Date();
let date = ("0" + date_ob.getDate());
let month = ("0" + (date_ob.getMonth() +1));
let year = date_ob.getFullYear();
var  myd= 5;
var  myb= 10 ;
var  myy= 1998; 
let sum = myb - month;
console.log("To day "+year + "-" + month + "-" + date);
console.log("You birth day  "+myd+"-"+myb+"-"+myy);
console.log( "In  " + sum + "  months it will be your birth month." );


