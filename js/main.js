// $.getJSON("python/test.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });

// var testJSON = JSON.parse(answerData);
// console.log(testJSON);

$.get('../python/answerData.json').done(data =>{
	console.log(data);
})

// var correct = [];
// var incorrect = [];
// length.
// var partialQ1 = [];
// if (Question_id==1 and (0<Student_score_on_question<1) {partialQ1.append(Answer_text)} else {};

// //

// var partial = [partialQ1,partialQ2,partialQ3,partialQ4];


// var optionSet = [];
// var countQ1 = 0;
// // Give a harder set
// // Judge if partialQ1 > 0;
// if (length.partialQ1()) {} else {}
// // 

// jquery-csv
	// $.ajax({
	//   type: "GET",  
	//   url: "Answers_data_prj3.csv",
	//   dataType: "text",       
	//   success: function(response)  
	//   {
	// 	data = $.csv.toObjects(response);
	// 	console.log(data);
	// 	generateHtmlTable(data);
	//   }   
	// });
var question1 = {
    problemStatement:'Microwaves are electric waves that could NOT penetrate?',
    optionA:'A. Food',
    optionB:'B. Ceramics',
    optionC:'C. Glass',
    optionD:'D. Metal',
    correctAnswer:'D. Metal'
  }

  var question2 = {
    problemStatement:'How does the microwave heat the food?',
    optionA:'A. Activating the water molecules in the food',
    optionB:'B. Heat the air inside the microwave oven.',
    optionC:'C. Heat the container of the food and then conduct the heat to the food',
    optionD:'D. Activating all the molecules in the food',
    correctAnswer:'A. Activating the water molecules in the food'
  }


  var question3 = {
    problemStatement:'In what order does the microwave heat the food?',
    optionA:'A. Heat the inside first then the outside',
    optionB:'B. Heat the outside first then the inside',
    optionC:'C. Heat all parts at the same time',
    optionD:'D. Heat in a random order',
    correctAnswer:'C. Heat all parts at the same time'
  }
 var questions = [question1,question2,question3]


let countQ = 0;
// read current correctOptions from the correctResponses[countQ] array ***
let correctOptions = ['bababa','dadadda','jujujuju'];
let optionChose = [];
let questionCorrect = [];
// function clickOption(){
	// Define current Choice
	$('.option').click(function (){
		// if the clicked option is previously checked, remove it
		if (optionChose.include($(this).text())) {
			$(this).removeClass('checked');
			// remove the chose option from the optionChose array
			let index = array.indexOf($(this).text());
			if (index > -1) {
			  array.splice(index, 1);
			}
		} 
		// if the clicked option is not previously checked, check it
		else {
			optionChose.push($(this).text());
			$(this).addClass('checked')
		}
		console.log(optionChose);
	})
// }

// Check if the chosen options are correct
function checkCorrect(){
	let answerCorrect = [];

	$('.btn_submit').click(function (){
		// default setting is true
		questionCorrect[countQ] = true;
		// check if the option chosed are correct
		$.each(optionChose, function( i, v ) {
			if (correctOptions.include(v)) {
				answeredCorrect[i] = true;
			} 
			else {
				answeredCorrect[i] = false;
				questionCorrect[countQ] = false;
			}
		})
		// check if all correct options are chosed
		$.each(correctOptions, function( i, v ) {
			if (!optionChose.include(v)) {
				questionCorrect[countQ] = false;
			} 
		})
		countQ += 1;
	})
}
	// try write check all that apply questions
	// read countQ from JSON ***
	optionsChoseArray = [];
    optionsChoseArray[countQ] = optionChose;
    // console.log('final'+ optionChose);
    // console.log('optionChose='+ optionChose);
    // console.log('countQ='+countQ);
    if (countQ <= 7 && optionChose == questions[countQ].correctAnswer){
      score = score + 1;
      questionCorrect[countQ] = true;
      // console.log('score='+ score);
    }
    else{
      // console.log("!===")
      questionCorrect[countQ] = false;
    }

    if(countQ <= 7){
      countQ = countQ + 1;
      // console.log('countQ='+countQ);
      // console.log('score='+ score);

    }