var readLineSync=require('readline-sync');
var chalk = require('chalk');
var username=readLineSync.question(chalk.hex('#4acfac')("Hey There!\nPlease enter your name: "));
console.log(chalk.hex('#0f89ca')("Welcome "+username+" , Let's play a quiz about Indian Cricket Team...\nEnter a/ b/ c  to answer.\nFor each correct answer you will get two points and for wrong answer one point will be deducted."));
console.log(chalk.grey("__________________________________________"));
var score=0;


function play(question, answer){
  var userAnser=readLineSync.question(chalk.hex('#1a578f')(question));
   if(userAnser.toUpperCase()==answer.toUpperCase()){
     console.log(chalk.yellowBright("You are right. You get 2 points"));
     score+=2;
   }
   else{
     console.log(chalk.redBright.bold("You are wrong!"));
     score--;
   }
   console.log(chalk.bgBlack("Your score = "+score));
   console.log(chalk.grey("________________"));

}

var questions=[ {
  question:"Who is known as The God of Cricket? \na. Sachin Tendulkar \nb. Mahendra Singh Dhoni \nc. Yuvraj Singh \n",
  answer:"a",
},{
  question:"Who is known as Captain Cool? \na. Virendra Sehwag \nb. Virat Kohli \nc. Mahendra Singh Dhoni \n",
  answer:"c",
},{
  question:"Who was the Player of the Tournament when India won the World Cup in 2011? \na. Gautam Gambhir \nb. Suresh Raina \nc. Yuvraj Singh \n",
  answer:"c",
},{
  question:" Which Indian Cricketer is also known as 'Turbinator'? \na. Suresh Raina \nb. Harbhajan Singh \nc. Yusuf Pathan \n. ",
  answer:"b",
},{
  question:" Who is the Top Wicket Taker in the 2011 Cricket World Cup? \na. Zaheer khan \nb. Sreesanth \nc. Yuvraj Singh \n",
  answer:"a",
},{
  question:"First Indian Cricketer who scored double century? \na. Virat Kohli \nb. Rohit Sharma \nc. Sachin Tendulkar \n" ,
  answer:"c",
}
];


for(var i=0;i<questions.length;i++){
  var currques=questions[i];
  play(currques.question,currques.answer);
}

if(score>4) {
console.log(chalk.hex('#DEADED')("Congratulations you are a true Cricket fan!! ;)"))
}
else  {
  console.log(chalk.yellowBright("Oops! seems like you don't know much about cricket :("))
}
