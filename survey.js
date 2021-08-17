const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question(' What is your name? Nicknames are also acceptable :) . ', (answer1) => {
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question('What do you listen to while doing that?', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (answer4) => {
        rl.question('What is your favourite thing to eat for that meal?', (answer5) => {
          rl.question('Which sport is your absolute favourite?', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
              
              console.log(`Here is your unique profile according to the intel you provided us! \n
              ${answer1} loves listening to ${answer3} while ${answer2}, can have ${answer5} everyday for ${answer4}, thinks ${answer6} is superior to all other sports, and is a master at ${answer7}`);
              rl.close();
            });
          });
        });
      });
    });
    
  });
 
});

