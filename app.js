
/**
 * Module dependencies.
 */
var prismic = require('prismic-nodejs');
var app = require('./config');
var configuration = require('./prismic-configuration');
var PORT = app.get('port');
//var renderer = require("./renderer.js");



// Returns a Promise
function api(request, response) {
  // So we can use this information in the views
  response.locals.ctx = {
    endpoint: configuration.apiEndpoint,
    linkResolver: configuration.linkResolver
  };
  return prismic.api(configuration.apiEndpoint, {
    accessToken: configuration.accessToken,
    request: request
  });
}


// Disolay the error message 
function handleError(error, request, response) {
  if (error.status == 404) {
    response.status(404).send("404 not found");
  } else {
    response.status(500).send("Error 500: " + error.message);
  }
}


// Create the HTTP server 
app.listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
});


// Homepage for the website
app.route('/').get(function(request, response){
    
    api(request, response).then(function(api) {       
        // Return the content of document type "hero-row"
        return api.form('everything').ref(api.master()).query(
                prismic.Predicates.any('document.type', ["page","product","form"])
        ).submit();
    }).then(function(prismicdoc) {
        
        // Render the homepage
        response.render('index', {
            pageContent: prismicdoc.results
        });
        
    }).catch(function(error) {
        // Deliver an error if any are received
        handleError(error, request, response);
    });
});


