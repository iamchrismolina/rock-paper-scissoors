# rock-paper-scissoors

This is a rock-paper-scissors game which is played on the console. Here you will play with a computer for 5 rounds straight. The winner will be the one with the highest score or it could be a tie if both player gets no score or the same score.

![Markdown Logo](https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/newscms/2016_11/1016196/rock-paper-scissors-today-tease-160317.jpg)

## How It's Made:

**Tech used**: JS

JavaScript is used for interactivity on the website, and it's no different here.

I created a randomizer (Math.random()) that calls a function that generates a number between 0-2 and returns the value which serves as computers' choice that is applied to an "array[choice]" that contains the choices for the computer.

Then players' choice calls a function and then is asked through a prompt that only accepts a string which is then converted into a lowercase (.toLowerCase()). The converted to lowercase string is necessary, so that any variation of input(RoCK-paPer-SciSSoRs) coming from the use will fit the choices in the array, which are only in lowercase. The converted input is then checked if it matches any options from the array that contains the choices then returns a choice value if there's a match.

Then it calls a playRound() function to decide the winner through if-else conditional statements that returns either the "win", "lose", or a "draw". The returned value is then used to increment the score of whoever wins. No score increment if it's a draw. Then after 5 rounds the game ends and the final winner is decided.

## Optimizations:

HTML & CSS can be added to create an interface for a better user experience rather than playing the game on the console. And, instead of prompt we could use a form/input directly on the html as prompt is kind of clunky. Then css for aligning and designing the page as to how you see fits.

## Lessons Learned:

Instead of using a switch case for the computers' choice, it would've been much better for readability to use an array that contains the choices for the computer.
As for the the players' input, it's much better to have a dedicated function, so it's much cleaner as both the computer & player now has their own dedicated function. I did mess up on some syntaxes and some logical errors here and there, but overall I was closer.

## Example Projects:

**Odin-Recipes**: https://github.com/iamchrismolina/odin-recipes
**Landing-Page**: https://github.com/iamchrismolina/landing-page
