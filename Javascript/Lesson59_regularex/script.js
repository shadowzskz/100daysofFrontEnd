var myRe = /hello/;
var myStr = "Does this has a hello world within it";

if (myRe.test(myStr)) {
    alert('yes');
}
/**
 *  Ways to add Regex *
 *  var myRe = /^hello/; //hello should appear in the begining 
 *  var myRe = /hello$/; //hello at the end
 *  var myRe = /hel+0/;    //Hel...0 pattern ie helo, helooooo, hellllllo
 *  var myRe = /hel?0/; //zero or more times
 *  var myRe = /hello|goodbye/; eiter or
 *  var myRe = /he..p/; //any character
 *  var myRe = /\wello/; //alphanumeric or _
 *  var myRe = /\bhello/; \b word doundy ater a new line
 *  var myRe = /[crndl]hello/; //[...] range of characters
 *  
 * **/