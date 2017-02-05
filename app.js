// Metrics: 
// Total word count of the submitted text
// Unique word count of the submitted text
// Average word length in characters of the submitted text
// Average sentence length in characters of the submitted text.

/// *Total word count of submitted text*/ 

//pseudocode: in the pasted text, count the num of words... 

$(function() {

  $('button').click(function(event) {
  	event.preventDefault();

	$('dl').removeClass('hidden');
	//assigning var wordsarr to the value user submitted 
    var wordsArr = $('textarea').val().trim().split(' ');
    var wordCount = wordsArr.length; 
    
    //input wordCount in the html 
    $('dd.js-wordCount').text(wordCount);

///* unique word count of submitted text *//
	
	var uniqueWordsArr = wordsArr.filter(function(item, index, inputArray) {
		return index == inputArray.indexOf(item);
	})

	var uniqueWordsCount = uniqueWordsArr.length;

	//input unique wordCount in the html 
	$('dd.js-unique-wordCount').text(uniqueWordsCount);


///* Average word length in characters of the submitted text *//

//take all the characters in the string, divide by num of items in the list. 
//watch out for spaces and special characters like punctuation

	var wordsStr = wordsArr.join('').replace(/[^\w\s]/gi, '');
	var avgChar = wordsStr.length/wordsArr.length;

	//input unique wordCount in the html 
	$('dd.js-avgChar').text(avgChar);
	
///* Average sentence length in words of the submitted text *//

//split the words by .
//then, count num of words that make up each sentence. 
//Then, divide by the num of total sentences. 

	var sentenceArr = $('textarea').val().trim().split('.')

	function filterEmpty(value) {
		return value.trim() != ''; 
	}


	var sentenceArrClean = sentenceArr.filter(filterEmpty);


	sentenceArrClean2 = [];
	for (var i = 0; i < sentenceArrClean.length; i++) {
		sentenceArrClean2.push((sentenceArrClean[i].trim().replace(/[^\w\s]/gi, '')));
	}

	// count the total num of words in each sentence 

	var wordCount = 0;

	for (var x = 0; x < sentenceArrClean2.length; x++) {
	  wordCount += sentenceArrClean2[x].split(' ').length
	}

	//calculateing avg sentence length 
	var avgSentenceLength = wordCount/sentenceArrClean2.length;

	$('dd.js-avg-sentence-length').text(avgSentenceLength);	



    });
});

//what's up w/ event.preventDefault?!