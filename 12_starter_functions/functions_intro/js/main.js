// Take a look at the below lines of code.
// 1. Can you guess what will be displayed in the console?
// 2. Check the console to confirm.
// 3. Is there code that is repeated, or very similar?
// 4. Now work through the questions in part 2.
// var movie = "Saving Private Ryan";
// var cost = 100;
// if (cost < 1000) {
//   console.log(movie + " director says LET'S RESCUE MATT DAMON!");
// } else {
//   console.log(movie + " director says FORGET MATT DAMON!");
// }
//
// var movie = "Interstellar";
// var cost = 2000;
// if (cost < 1000) {
//   console.log(movie + " director says LET'S RESCUE MATT DAMON!");
// } else {
//   console.log(movie + " director says FORGET MATT DAMON!");
// }
//
// var movie = "The Martian";
// var cost = 700;
// if (cost < 1000) {
//   console.log(movie + " director says LET'S RESCUE MATT DAMON!");
// } else {
//   console.log(movie + " director says FORGET MATT DAMON!");
// }

// Part 2:

// 1. After talking through the above questions, comment out the above code
// And uncomment the code below for part 2.
// 2. What do you think is happening here?
// 3. What is movie? cost?
// 4. What are the lines starting with mattDamon doing?
// 5. When you're done move on to part 3.

function mattDamon (movie, cost) {
  if (cost < 1000) {
    console.log(movie + " director says LET'S RESCUE MATT DAMON!");
  } else {
    console.log(movie + " director says FORGET MATT DAMON!");
  }
}

mattDamon("Saving Private Ryan", 100);
mattDamon("Interstellar", 2000);
mattDamon("The Martian", 700);
mattDamon("Elysium", 200);


// Part 3:

// Try calling (running) the function again, using the three lines above as a model.
// This time the movie is "Elysium" and the cost is 200
