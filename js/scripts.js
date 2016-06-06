$(document).ready(function(){

  $("#submit").click(function(){
    var sentenceInput = $("#sentence").val();
    var sentenceSplit = sentenceInput.split([" "]);
    var threeOrMore = [];

    var threeOrMore = sentenceSplit.map(function(word) {
      if (word.length >= 3) {
        // var addWord = word;
        threeOrMore.push(word);
         };

      alert(threeOrMore);
      var reverseSentence = threeOrMore.reverse();
      // alert(threeOrMore.reverse());
      stringOutput = reverseSentence.toString()

      // return threeOrMore;
    });

;

  });

});
