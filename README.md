This repository represents an angular app used for solving basic tasks.
​
> ## Getting Started
​
Prerequisites
​
-   A text editor like Visual Studio Code (+ necessary extensions)
-   node js
-   Angular CLI
-   Typescript compiler
​
> ## Installation
​
1. Install node js
2. Install the typescript compiler
3. Install Angular CLI
4. Clone this repository to your local machine using git clone (or download the zip file and extract it).
​
```shell
git clone https://github.com/valentinasoima24/tasks-angular.git
```
​
5. Run "ng serve" or "ng s" in the terminal in the root folder of the project and open the link shown in the command line with a browser like Chrome (Example: localhost:4200)
​
> ## Usage
​
The application contains a single page with suggestive content regarding each task solved.
​
These were the tasks:
​
-   Create a new repo with the name angular tasks. Add an angular project in which a button with the name HELLO is displayed on localhost:4200.
-   Display on the label of the button (its name) how many times it was clicked.
-   To the right of the button, add an input-text with placeholder Name, with the property disabled. After clicking on the Enable button, the input becomes enable. When you write in the input-text, the text "Greetings, (the name in the input-text)!" should be displayed in real time below.
-   We have defined a list of names = ["Valentina", "Elisai", "Sami", "Darian"]. To display these names in an ordered list (ol) by pressing the Show button. After pressing the button becomes Hide with the property to hide the list.
-   My name should be displayed in red and bold.
-   Create a new component called ListComponent, then inside it create a TaskComponent component, which displays a text on the screen and a Delete button next to it (which currently does nothing), with danger style (red).
-   Declare a list of tasks (string[]) in ListComponent and for each task send its text to the TaskComponent component. TaskComponent displays the text of a single task received from @Input(). Hint: Parent-Child component interaction.
-   To implement the functionality of the Delete button. Hint: Child Parent component interaction. EventEmmitter
​
    > ## Tools used
​
*   Visual Studio Code - code editor redefined and optimized for building and debugging modern web and cloud applications.
    <br clear = "all"><img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" width = "10%" height = "10%">
*   Angular - platform for building mobile and desktop web applications
    <br clear = "all"><img src = "https://static-00.iconduck.com/assets.00/file-type-angular-icon-1907x2048-tobdkjt1.png" width = "10%" height = "10%">
​
*   Node js - JavaScript runtime built on Chrome's V8 JavaScript engine
    <br clear = "all"><img src = "https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png" width = "15%" height = "15%">
​
*   Typescript - strongly typed programming language that builds on JavaScript
    <br clear = "all"><img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" width = "11%" height = "11%">
​
*   HTML - the standard markup language for Web pages
    <br clear = "all"><img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" width = "15%" height = "15%">
​
*   CSS - the standard markup language for Web pages
    <br clear = "all"><img src = "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" width = "17%" height = "17%">
​
*   Prettier - an opinionated code formatter
    <br clear = "all"><img src = "https://brandslogos.com/wp-content/uploads/images/large/prettier-logo.png" width = "12%" height = "12%">
​
<details>
​
<summary>Demo</summary>
​
![Demo](res/demo.png)
​
</details>
