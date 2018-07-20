/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         /*It tests to make sure that each feed in the allFeeds object
          has a URL define and that the URL is not empty.*/

         it('URL defined and not empty', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            };         
         });

        /*It tests to make sure that each feed in the allFeeds object
        has a name define and that the name is not empty.*/

        it('name defined and not empty', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            };     
         });
    });


    /* This suite is all about The menu */
    describe('The menu', function() {

        /*This test makes sure that the menu element is
        hidden by default. */

        it('menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /*This test makes sure that the menu changes
        visibility when the menu icon is clicked. */

        it('menu changes visibility on click', function() {
            let body = document.querySelector('body');
            let menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });


    /* This suite is all about Initial Entries */
    describe('Initial Entries', function() {
        /*
         * loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         beforeEach(function(done) {
            loadFeed(0, done);
         });

        /*This test makes sure that when the loadFeed
        function is called and completes its work, there is at least
        a single .entry element within the .feed container.*/

         it('at least 1 entry within feed container', function() {
            let entry = document.querySelector('.feed').getElementsByClassName('entry');
            expect(entry.length).not.toBe(0);
         });
    });


    /* This suite is all about new feed loading */
    describe('New Feed Selection', function() {

        /*This test makes sure that when a new feed is loaded
        by the loadFeed function that the content actually changes.*/

         let firstLoad;
         let secondLoad;

         beforeEach(function(done) {

            loadFeed(0, function() {
                firstLoad = document.querySelector('.feed').innerHTML;

                loadFeed(1, function() {
                    secondLoad = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
         });

         it('new feeds every load', function() {
            expect(firstLoad === secondLoad).toBe(false);
         });
    });
}());
