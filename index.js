// Input from User
var name="aNas KhaN"
// getting first word and making it upper case
var firstWord= name.slice(0,1)
firstWord=firstWord.toUpperCase()

// getting restword and making it lower case
var remainWord = name.slice(1,name.length)
remainWord=remainWord.toLowerCase()

// Output
console.log("Hello,"+firstWord+remainWord);
