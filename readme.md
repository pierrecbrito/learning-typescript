# TypeScript Course

This repository contains the code developed during the TypeScript course.

## Project Structure

The project is organized into two main folders:

-   `fundamentos`: Contains basic TypeScript examples, such as variable declarations, data types, and string manipulation.
-   `introdução`: Contains introductory examples, including the implementation of a simple sum function and examples of class usage.

### `fundamentos`

-   [index.html](fundamentos/index.html): HTML page that loads the JavaScript script compiled from TypeScript.
-   [index.ts](fundamentos/index.ts): TypeScript code with examples of numbers and strings.
-   [index.js](fundamentos/index.js): JavaScript version compiled from the TypeScript code.

### `introdução`

-   [index.html](introdução/index.html): Basic HTML page.
-   [index.ts](introdução/index.ts): Main TypeScript file for the introduction.
-   [index.js](introdução/index.js): Compiled JavaScript file.
-   [soma.ts](introdução/soma.ts): Simple function to add two numbers.
-   [soma.js](introdução/soma.js): JavaScript version of the sum function.
-   [usuario.ts](introdução/usuario.ts): (Non-existent file, possible future implementation of a user class)
-   [usuario.js](introdução/usuario.js): (Non-existent file, possible future implementation of a user class)

## How to Run

1.  Make sure you have Node.js and npm installed.
2.  Clone this repository.
3.  Navigate to the project folder.
4.  To run the examples, open the HTML files in your browser.

## Notes

-   The `.ts` files are the original TypeScript files.
-   The `.js` files are generated from the `.ts` files after compilation.

```bash
tsc <filename.ts>