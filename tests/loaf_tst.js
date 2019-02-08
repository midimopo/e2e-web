module.exports = {
    'Perfect loaf test' : function (browser) {
        /* This test case navigates to the blog page of "The Perfect Loaf".
        It verifies that the top menu bar is visible and it's 3rd element is "RECIPES".
        It navigates to the Recipes subpage and searches for a header called "Beginner Baking Recipes"
        It checks for the list element "Beginner’s Sourdough Bread", brings it on screen and clicks on it
        In the subpage it verifies that the size of the first image does not exceed its natural dimension
        */

        browser.url('https://www.theperfectloaf.com/')

        // Wait until the body is visible
        browser.waitForElementVisible('body')

        // Verify title name
        browser.verify.title('Home | The Perfect Loaf')

        // Check if top menu bar is visible on the page. If it is not then maximise the window
        browser.isVisible('#menu-primary-2', function(result) {
            if (result.value == false) {
                browser.maximizeWindow()
            }
        })

        // Verify that top menu bar item #3 is visible on screen
        browser.verify.visible('#menu-primary-2 > li:nth-child(3)')

        // Verify that menu bar item #3 reads as "RECIPES"
        browser.verify.containsText('#menu-primary-2 > li:nth-child(3)', 'RECIPES')

        // Verify the link that "RECIPES" refers to is correct
        browser.verify.attributeContains('#menu-primary-2 > li:nth-child(3) > a:nth-child(1)', 'href', 'https://www.theperfectloaf.com/recipes/')

        // Navigate to the RECIPES link
        browser.click('#menu-primary-2 > li:nth-child(3)')

        // Wait for 2 seconds
        browser.pause(2000)

        // Checking there is a header with text "Beginner Baking Recipes:"
        browser.verify.containsText('h2#beginner-baking-recipes', 'Beginner Baking Recipes:')

        // Verify that 3rd list item below header reads as "Beginner’s Sourdough Bread"
        browser.verify.containsText('.pf-content > ul:nth-child(8) > li:nth-child(3)', 'Beginner’s Sourdough Bread')

         // Verify the link that "Beginner’s Sourdough Bread" refers to is the expected
        browser.verify.attributeContains('.pf-content > ul:nth-child(8) > li:nth-child(3) > a:nth-child(1)', 'href', 'http://www.theperfectloaf.com/beginners-sourdough-bread/')

        // Bring the 'Beginner’s Sourdough Bread' item on screen and click on the link
        browser.moveToElement('.pf-content > ul:nth-child(8) > li:nth-child(3)', 0, 0)
        browser.click('.pf-content > ul:nth-child(8) > li:nth-child(3) > a:nth-child(1)')

        // Verify a figure element is present
        browser.verify.elementPresent('.post-media > figure:nth-child(1)')

        // Verify first figure of the page links to the expected image
        browser.verify.attributeContains('.post-media > figure:nth-child(1) > a:nth-child(1)', 'href', 'https://g89tz9aafd62c4p7-zippykid.netdna-ssl.com/wp-content/uploads/2016/03/theperfectloaf-beginners-sourdough-bread-7.jpg')

        browser.moveToElement('.post-media > figure:nth-child(1)', 0, 0)

        // Wait for 2 seconds
        browser.pause(2000)

        // Verify current size of image does not exceed its intrinsic size 1160x774 pixels
        browser.getElementSize('.post-media > figure:nth-child(1)', function(img_size) {
                this.verify.ok(img_size.value.width <= 1160)
                this.verify.ok(img_size.value.height <= 774)
                });

        browser.end();
    }
};