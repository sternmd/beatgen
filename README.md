# [Beatitudes](https://beatitudes.herokuapp.com/)

![beatitudes](http://s32.postimg.org/64fbhu2dg/beatitudes_copy.jpg)

## OUTLINE
About:
Beatitudes is a simple Node app that generates quotes and displays books by classic Beat Generation writers.

Technologies used: Node/Express.js, HTML5/CSS3, JavaScript, jQuery, Bootstrap Less

___

## WIREFRAMES

![beatitudes](http://s32.postimg.org/63v74g22s/beatitudes_wireframe.jpg)

___

## PSEUDOCODE, SIDENOTES, APPROACHES

* With Google Sheets concatenation, create a large array for each author and over 300 total quotes.

```js
var quoteLibrary = [

  { quote: "“...the only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved...”",
  name: "Jack Kerouac" },

  { quote: "“One day I will find the right words, and they will be simple.”",
  name: "Jack Kerouac" },

  { quote: "“Live, travel, adventure, bless, and don't be sorry.”",
  name: "Jack Kerouac" },

  ...

];

```
* Render initial quote.

```js
function renderInitialQuote() {

  var quote = $('#quoteBox p').text();
  var author = $('#authorBox').text();
  ```

* Get a new random number for quote generation.

```js
  var sourceLength = quoteLibrary.length;
  var randomNumber = Math.floor(Math.random()*sourceLength);
```

* Set a new quote by looping through library.

```js
  for(var i = 0; i <= sourceLength; i++){

    var newQuote      = quoteLibrary[randomNumber].quote;
    var newAuthor     = quoteLibrary[randomNumber].name;
    var timeAnimation = 500;
    var quoteBox      = $('#quoteBox');
```
* Fade out animation with callback.

```js
    quoteBox.fadeOut(timeAnimation, function(){
      quoteBox.html('');
      quoteBox.append('<p class="quote">'+newQuote+'</p>'+'<p id="authorBox" class="author">'+'-								'+newAuthor+'</p>');

      //fadein animation.
      quoteBox.fadeIn(timeAnimation);
    });
  };
```
* For specific author pages, define a variable in order to display on that said author's quotes.

```js
if (author) {
  quoteLibrary = quoteLibrary.filter(function(quote) {
    return quote.name === author;
  });
}
```

* Render author SVGs by random on homepage.

```js
var authors = ['kerouac','ginsberg','burroughs','snyder'];
for(var i = 0; i <= authors.length; i++){
  var random = Math.floor(Math.random() * authors.length);
  var n = authors[random];
  $('.content').attr("id",n);
}
```

* Setup dev environment with Express generate, Bootstrap Less, Gulp, Google Fonts.

* Use Masonry.js to build books gallery.

![sternmd_portfolio](http://s32.postimg.org/m972bcr2c/Screen_Shot_2016_05_05_at_12_44_09_PM.jpg)

* On book image hover, display descriptions and Read More link.

* Set proper media queries for mobile.

* Self-rendering animation, using SVG strokepaths:

```js
var burroughs = {
    "burroughs": {
        "strokepath": [
            {
                "path": "M533.047,343.884l-7.439,24.449   c0,0,22.856-12.755,31.895-9.568l-28.173,13.288v3.723L566,386.939l-40.924-7.443l9.565,10.103l4.253,0.533   c0,0,80.268,85.049,79.729,128.102c0,0,19.138-22.855,10.098-56.875l28.179-8.504c0,0-5.846-32.961-14.347-49.435l-40.401,15.947   l-30.829-64.851l32.428-14.354c0,0-8.506-15.947-17.545-20.731c0,0-9.569,11.692-23.385,16.477   C548.994,340.693,533.047,343.884,533.047,343.884z",
                "duration": 800
            }, ...
            ],
            "dimensions": {
                "width": 782,
                "height": 869
            }
          }
};

 $(document).ready(function(){
 $('#burroughs').painter(
 {
    "svgData": burroughs,
    "strokeWidth": 2,
    "strokeColor": "#E74C3C"
}).painter('paint');
 });
```
