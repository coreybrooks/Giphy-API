# Giphy-API
## Overview
Giphy-API is a front-end application that utilizes JavaScript, jQuery and AJAX to query GIPHY API  to search for GIFs.  GIPHY API is a website with a large library of GIFs that can be queried through a REST-like interface accessible through any HTTP enabled programming language.  

## Functionality
GIPHY API is queried for specific topics through AJAX calls.  The results are returned in JSON format. Then JavaScript is utilized to display up to 10 GIFs related to the search topic.  The rating is displayed for each GIF.  There are 10 buttons that are dynamically created with search topics, and there is a search field to search for any topic.  

The page initially displays the static version of the returned GIFs.  Once a static GIF image is clicked, the GIF image becomes animated.  When the image is clicked again, the animated GIF is paused.

This code was uploaded to Heroku and can be viewed here: [coreys-giphy-app](https://coreys-giphy-app.herokuapp.com/)


