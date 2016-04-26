$(document).ready(function(){
  var quoteLibrary=[
    {
    quote: "“There was nowhere to go but everywhere, so just keep on rolling under the stars.”",
    name:"Jack Kerouac"
    },
    {
      quote:"“Live, travel, adventure, bless, and don't be sorry.”",
      name:"Jack Kerouac"
    },
    {
      quote:"“One day I will find the right words, and they will be simple.”",
      name:"Jack Kerouac"
    },
    {
      quote:"“Follow your inner moonlight; don't hide the madness.”",
      name:"Allen Ginsberg"
    },
    {
      quote:"“Everybody's serious but me.”",
      name:"Allen Ginsberg"
    },
    {
      quote:"“A paranoid is someone who knows a little of what's going on.”",
      name:"William S. Burroughs"
    },
    {
      quote:"“Nobody owns life, but anyone who can pick up a frying pan owns death.”",
      name:"Willam S. Burroughs"
    },
    {
      quote:"“Nature is not a place to visit. It is home.”",
      name:"Gary Snyder"
    },
    {
      quote:"“O, ah! The awareness of emptiness brings forth a heart of compassion!”",
      name:"Gary Snyder"
    }

];

  if (author) {
    quoteLibrary = quoteLibrary.filter(function(quote) {
      return quote.name === author;
    });
  }


  $('#quoteButton').click(function(e){
    //define the containers of the info we target
    var quote = $('#quoteBox p').text();
    var author = $('#authorBox').text();

    //prevent browser's default action
    e.preventDefault();

    //getting a new random number for quote generation
    var sourceLength = quoteLibrary.length;
    var randomNumber= Math.floor(Math.random()*sourceLength);

    //set a new quote by looping through library
    for(i=0;i<=sourceLength;i+=1){
      console.log(randomNumber);
    var newQuote = quoteLibrary[randomNumber].quote;
    var newAuthor = quoteLibrary[randomNumber].name;

    //console.log(newQuote,newAuthor);
    var timeAnimation = 500;
    var quoteBox = $('#quoteBox');

    //fade out animation with callback
    quoteBox.fadeOut(timeAnimation, function(){
      quoteBox.html('');
      quoteBox.append('<p class="quote">'+newQuote+'</p>'+'<p id="authorBox" class="author">'+'-								'+newAuthor+'</p>');

      //fadein animation.
      quoteBox.fadeIn(timeAnimation);
    });

    break;
  };//end for loop
});//end quoteButton function

});//end document ready
