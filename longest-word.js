function findLongestWordLength(str) {
  
//turn all letters to lowercase  
var lowerStr = str.toLowerCase();
//split sentence into string array.
var splitStr = lowerStr.split(" ");
//sort the array in alphabetical order
var sortedAlphabetically = splitStr.sort(); 

//get the length of each word
var lengthNumberArray = [];
  
for (var i = 0;i <= sortedAlphabetically.length - 1;i++){
  var currentWord = sortedAlphabetically[i];
  currentWord = currentWord.length; 
  lengthNumberArray.push(currentWord);
}
  
 //sort the array numerically and return longest word length.
  var longestWord = lengthNumberArray.sort(function(a,b){ return b-a });
return longestWord[0];

}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
