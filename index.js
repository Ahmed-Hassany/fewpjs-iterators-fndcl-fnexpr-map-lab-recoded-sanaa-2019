const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let tutorials2 = tutorials.map(tutorial=>{
    let newTutorials = tutorial.split(" ");
  let newString="";
  for(let i=0;i<newTutorials.length;i++)
  {
    newTutorials[i]=newTutorials[i][0].toUpperCase()+newTutorials[i].slice(1)+" ";
    newString+=newTutorials[i];
  }
  return newString.slice(0,newString.length-1);
  }
  )
  
  return tutorials2
}
