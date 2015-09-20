$(function() {
   
    describe('RSS Feeds', function() {
     		 
// Tests allFeeds to determine if it is defined and ensure its not empty
		 
		it('are defined', function() {
				expect(allFeeds).toBeDefined();
				expect(allFeeds.length).not.toBe(0);
        });
		 
//Tests for a defined URL and that the URL is not empty		 
        it('URLs are defined', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			});
		}); 
//Tests for a defined and unempty Name	
		it('names are defined', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			});
		});
    });	 
//Menu Test Suite
//Verifies that menu is hidden by default
	describe('The menu', function() {
		it('menu hidden by default', function() {
				expect($('body').attr("class")).toBe("menu-hidden");
			});
		});
//Menu triggered when ICON is clicked
		it('menu changes visibility', function() {
			$(".menu-icon-link").trigger("click");
				expect($('body').attr("class")).not.toBe("menu-hidden");
//Menu hidden when ICON is clicked		
			$(".menu-icon-link").trigger("click");
				expect($('body').attr("class")).toBe("menu-hidden");
		});	 
//Initial Entries Test Suite, ensures LoadFeed function is called and completes its work		 
	describe('Initial Entries', function() {
	
//Run LoadFeed function and test that feed entry has at least 1 feed	
			beforeEach(function(done) {
				loadFeed(0, function(){
					done();
			});
		});
		it('has at least one entry', function() {
				expect($('.feed').children().has('.entry').length).toBeGreaterThan(0);
			});
		});
//New feed test suit, ensures a new feed is loaded by loadFeed function
	describe('New Feed Selection', function() {
		var htmlbeforeFeed;
			
			beforeEach(function (done) {
				loadFeed(0, function() {
				htmlbeforeFeed = $('.feed').html();
				loadFeed(1, done);
			})
		});
//compare change in content before and after loadFeed run		
		it('will change content', function(){
				expect(htmlbeforeFeed).not.toBe($('.feed').html());
			}); 
		}); 
}());