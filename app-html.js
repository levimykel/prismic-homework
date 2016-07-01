
/**
 * Module dependencies.
 */
var prismic = require('prismic-nodejs');
var app = require('./config');
var configuration = require('./prismic-configuration');
var PORT = app.get('port');
var renderer = require("./renderer.js");



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

    // Connect to the content on Prismic.io 
    api(request, response).then(function(api) {       
        // Return the content of document type "hero-row"
        return api.form('everything').ref(api.master()).query(
                prismic.Predicates.at('document.type', "hero-row")
        ).submit();
    }).then(function(prismicdoc) {

        console.log(prismicdoc);
//        console.log(prismicdoc.results[1].data['image.image'].value.main.url);
        
        // Sort the content into the veriables to replace the shortcode in the HTML
        var prismicContent = {
                heroRow1Image: prismicdoc.results[0].data['hero-row.image'].value.main.url,
                heroRow1AltText: prismicdoc.results[0].data['hero-row.altText'].value[0].text,
                heroRow1HeroText: prismicdoc.results[0].data['hero-row.heroText'].value[0].text
//                heroRow2Image: prismicdoc.results[1].data.hero-row.image.value.main.url
            };
        
        console.log(prismicContent);
        
        // Write the sections of the webpage in html
        response.writeHead(200, {'Content-Type': 'text/html'});
        renderer.view("header", {}, response);
        renderer.view("content", prismicContent, response);
        renderer.view("footer", {}, response);   
        
        // End the response
        response.end();
        
    }).catch(function(error) {
        // Deliver an error if any are received
        handleError(error, request, response);
    });
});



