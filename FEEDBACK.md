# Project 1 - Peer Code Review Checklist

### Developer: Eric Tovar
### Reviewer: Daniel Scott
---

## Minimum Requirements

### Features
- [X] Game has at least the minimum set of features required to play.
- [X] All minimum features are working.
- [X] As applicable, does the game handle "winning", "losing" and "ties"?

### Code Style & Best Practices
- [X] No "dead" code (code that is commented out code or is never executed) exists.
- [X] There are separate CSS & JS files put in appropriate sub-folders.

#### JavaScript
- [X] Function names accurately express their purpose (usually verbs).
- [X] Variable names are clear and expressive (usually nouns).
- [X] Identifiers used for variables and functions (except constructors) use camel-casing.
- [X] Constructor functions use upper-camel-casing.
- [X] JavaScript code blocks, nested functions, etc., are consistently indented using 2 or 4 spaces per level of indentation.
- [X] Vertical white spacing is consistent.
- [ ] Use of single vs. double quotes for strings is consistent (lean toward single quotes).
    _There were a few small instances of both single and double quotes_
- [X] No leftover logging to the console.

#### HTML Markup
- [ ] The HTML is properly indented according to its nesting level.
    _There were a few instances of excessive whitespace_
- [X] Lower-case is used for all tag names, attributes, classes & ids.
- [X] Kebob-casing is used for names of classes, ids, and custom attributes (if any).
- [X] No spaces exist between HTML attributes, the equal sign and the value.
- [X] HTML attributes use double quotes.
- [X] Inline styling is not used.

#### CSS
- [ ] The CSS is properly indented.
    _There were a few areas in your main.css file that needed some adjustments regarding indentation_
- [X] Vertical white space is consistent.
- [X] There is an opening curly brace after the selector(s) and a closing brace on the last line by itself.
- [X] CSS properties contain a space after, but not before, the : character.

### Documentation & Deployment
- [X] Game is deployed online (GH Pages).
- [X] Repo contains a _readme.md_
- [ ] _readme_ has a _Description_ section for the game.
    _A description of the game was provided, but a titled section wasn't listed_ 
- [ ] _readme_ has a _Technologies Used_ section.
    _A list of technologies for the game was provided, but a titled section wasn't listed_ 
- [ ] _readme_ has a _Getting Started_ section which includes a link to the deployed game.
    _readme file doesn't have a "getting started" section or a link to the deployed game_
- [X] _readme_ has an _Next Steps_ section to explain unsolved problems and future plans.


## Other Conventions & Best Practices

### Files
- [X] File names are lowercased and use either snake or kebob-casing.

### JavaScript
- [X] Functions rarely contain more than 10 lines and do so for good reason.
- [X] Code is DRY by ensuring there are not sections of similar code.  Repetitive code is put into more general purpose functions defined with parameters as necessary to differentiate their behavior.
- [X] The main script file is commented into major sections for:
	- Application-wide Variables & cached DOM Element Variables
	- Constants (all upper-case identifier is used by convention)
	- Event Listeners
	- Functions
- [X] Application-wide scoped variables are declared at the top of the main script file.
- [X] An _initialize_ or similar function is used to "reset" the variables of the game to their starting state.  Variables are not also being initialized when defined.

### HTML
- [ ] HTML passes [w3c validation](https://validator.w3.org/)
_There was a slight issue discovered with your buttons containing a div tag as their child element. Buttons should only have text content between their opening and closing tags_

### CSS
- [ ] CSS is kept DRY by breaking out common CSS properties into separate classes.
_There were a few small instances where the same CSS rules was repeated for multiple selectors_


### Final Remarks
Eric, congratulations on completing your first project in the SEI program! I'm also happy to inform you that your project met MVP! I hope you were able to see the learning benefits from building this project! You took a very creative approach to getting your game to cycle through the different images and also adding the "auto spin" feature! Also, excellent work in removing all commented-out code and console.logs. In regard to areas of improvement, the biggest opportunities I found for you are mostly in the indentation and white space management departments. There were a few indentation and whitespace issues, which aren't that big of a deal, but adding a little attention here will definitely set you apart from other candidates when you're looking for a job. Also, I would have loved for you to add a little more detail to your README file. Adding detail to this file is very important because it serves as a guide for anyone who's interested in the work you've done. It's hard to be proud of our first projects, but it's best to start practicing now so it doen't become a hurdle in the future. In closing, excellent work with your first project, Eric!
