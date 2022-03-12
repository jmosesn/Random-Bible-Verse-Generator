const randomBibleVerseGenerator = function() {
  $(document).ready(function() {
    getScripture();
  });

  $("button").click(function() {
    getScripture();
  });

  /* ajax:
  - reads data from a web server - after the pg has loaded
  - updates a web pg w/out reloading the pg
  - sends data to a web server - in the background

  AJAX = Asynchronous JavaScript And XML.

  AJAX is not a programming language.

  AJAX just uses a combination of:

  A browser built-in XMLHttpRequest object (to request data from a web server)
  JavaScript and HTML DOM (to display or use the data)

  AJAX applications might use XML to transport data,
  but it is equally common to transport data
  as plain text or JSON text.

  1. An event occurs in a web page (the page is loaded, a button is clicked)
  2. An XMLHttpRequest object is created by JavaScript
  3. The XMLHttpRequest object sends a request to a web server
  4. The server processes the request
  5. The server sends a response back to the web page
  6. The response is read by JavaScript
  7. Proper action (like page update) is performed by JavaScript

   */

  /* https://api.jquery.com/jquery.ajax/ */
  const getScripture = function() {
    $.ajax({
      url: "https://labs.bible.org/api/?passage=random&type=json&callback=myCallback",
      crossDomain: true,
      dataType: "JSONP",
      success: function(result) {
        $("#text").html(
          result[0].text);

        $(".book-chapter-verse").html(
          result[0].bookname + " " +
          result[0].chapter + ":" +
          result[0].verse);

      }

    });
  }
}();
