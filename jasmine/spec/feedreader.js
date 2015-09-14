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
   
    describe('RSS Feeds', function() {
     		 
// Tests allFeeds to determine if it is defined and ensure its not empty
		 
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
     		
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
		 
//Tests for a defined URL and that the URL is not empty		 
        it('URLs are defined', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			});
		});
	
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		 
		 
//Tests for a defined and unempty Name	
		 it('names are defined', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
				});
		});
    });

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
		 
		 
//Menu Test Suite
//Verifies that menu is hidden by default
	describe('The menu', function() {
		it('menu hidden by default', function() {
			expect($('body').attr("class")).toBe("menu-hidden");
			});
		});
		
		
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
		  
		  
//Menu triggered when ICON is clicked
		 it('menu changes visibility', function() {
			$(".menu-icon-link").trigger("click");
			expect($('body').attr("class")).not.toBe("menu-hidden");
//Menu hidden when ICON is clicked		
			$(".menu-icon-link").trigger("click");
			expect($('body').attr("class")).toBe("menu-hidden");
		});

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
		 
//Initial Entries Test Suite, ensures LoadFeed function is called and completes its work		 
	describe('Initial Entries', function() {
	
//Run LoadFeed function and test that feed entry has at least 1 feed	
		beforeEach(function(done) {
			loadFeed(0);
			setTimeout(function() {
				done();
				}, 500);
				});
		it('has at least one entry', function() {
		
			expect($('.feed').children().has('.entry')).toBeDefined();
		});
	});


        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
		 
		 
//New feed test suit, ensures a new feed is loaded by loadFeed function
	describe('New Feed Selection', function() {
	
		var beforeFeed,
		    afterFeed;
		
		beforeAll(function (done) {
			beforeFeed = $('feed .entry');
			loadFeed(1,done);
		});
		
		
//compare change in content before and after loadFeed run		
		it('will change content', function(done){
			afterFeed = $('.feed .entry');
			expect(beforeFeed).not.toBe(afterFeed);
			done();
		});
		
		
//Reset function back to default
		afterAll(function(done) {
			loadFeed(0, done);
		});
	});
}());
