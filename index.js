const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const tutorialsInCaps = [];

const titleCased = ()=> {
  tutorials.map(function titleCased(stringElements){

   let myArray = [];
  
      function stringToArray(string){
        myArray = string.split(" ");
      };
      stringToArray(stringElements);
  
  
      const capitalized = myArray.map( function(string) {
        return string.charAt(0).toUpperCase()+string.slice(1);
  })
  
      const modifiedString = capitalized.join(" ");
      tutorialsInCaps.push(modifiedString);
      console.log(modifiedString);

});
  return tutorialsInCaps;
} 