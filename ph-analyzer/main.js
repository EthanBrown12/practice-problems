

function phAnalyzer(ph) {
if (ph <= 6) {
  console.log("This is acidic");
} else if(ph <=10 ) {
  console.log("This is neutral");
} else if(ph <= 14){
  console.log("This is alkaline");
} else {
  console.log("invalid ph value");
}
return ph;
}
phAnalyzer(7);
phAnalyzer(4)
phAnalyzer(12);
phAnalyzer(25);
