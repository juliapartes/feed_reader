#Feed Reader

##How to run
To run the application user should download zip with all files, next open the index file with browser.

##Overview
Project provided with feedreader.js file in the \feed_reader\jasmine\spec folder.
feedreader.js file contains jasmine tests, which are:    
*ensure that URL property of every object in allFeeds is define and is not empty;
*ensure that name property of object in allFeeds is define and is not empty;
*ensures the menu element is hidden by default;
*ensures the menu changes visibility when the menu icon is clicked;
*ensures when the loadFeed function is called and completes its work, 
there is at least a single .entry element within the .feed container;
*ensures when a new feed is loaded by the loadFeed function that the content actually changes.
