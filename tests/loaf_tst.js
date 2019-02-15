module.exports = {


    'Perfect loaf test' : function (browser) {
        const recipes= '#menu-primary-2 > li:nth-child(3)',
              beginnerBaking = 'h2#beginner-baking-recipes',
              imageVerification = '.post-media > figure:nth-child(1)',
              sourdoughBread = '.pf-content > ul:nth-child(8) > li:nth-child(3)',
              item3AtTopBar = '#menu-primary-2 > li:nth-child(3)',
              url = '.pf-content > ul:nth-child(8) > li:nth-child(3) > a:nth-child(1)'

        /* This test case navigates to the blog page of "The Perfect Loaf".
        It verifies that the top menu bar is visible and it's 3rd element is "RECIPES".
        It navigates to t¡he Recipes subpage and searches for a header called "Beginner Baking Recipes"
        It checks for the list element "Beginner’s Sourdough Bread", brings it on screen and clicks on it
        In the subpage it verifies that the size of the first image does not exceed its natural dimension
        */
        browser.url('https://www.theperfectloaf.com/')

        // Wait until the body is visible
        browser
            .waitForElementVisible('body')
            .verify.title('Home | The Perfect Loaf')
            .isVisible('#menu-primary-2', function(result) {
            if (result.value == false) {
                browser.maximizeWindow()
                       .isVisible('#menu-primary-2') //If was false the first time, with max window, it checks again
            }
        })

        // Wait for 2 seconds
        browser.pause(2000)

        // Verify that top menu bar item #3 is visible on screen
        browser
            .verify.visible(item3AtTopBar)
            .verify.containsText(recipes, 'RECIPES')
            .verify.attributeContains('#menu-primary-2 > li:nth-child(3) > a:nth-child(1)', 'href', 'https://www.theperfectloaf.com/recipes/')
            .click(item3AtTopBar)

        // Wait for 2 seconds
        browser.pause(2000)

        // Checking there is a header with text "Beginner Baking Recipes:"
        browser
            .verify.containsText(beginnerBaking, 'Beginner Baking Recipes:')
            .verify.containsText(sourdoughBread, 'Beginner’s Sourdough Bread')
            .verify.attributeContains(url, 'href', 'http://www.theperfectloaf.com/beginners-sourdough-bread/')
            .moveToElement(sourdoughBread, 0, 0)
            .click(url)
            .verify.elementPresent('.post-media > figure:nth-child(1)')
            .verify.attributeContains('.post-media > figure:nth-child(1) > a:nth-child(1)', 'href', 'https://g89tz9aafd62c4p7-zippykid.netdna-ssl.com/wp-content/uploads/2016/03/theperfectloaf-beginners-sourdough-bread-7.jpg')
            .moveToElement('.post-media > figure:nth-child(1)', 0, 0)

        // Wait for 2 seconds
        browser.pause(2000)

        // Verify current size of image does not exceed its intrinsic size 1160x774 pixels
        browser.getElementSize(imageVerification, function(img_size) {
                this.verify.ok(img_size.value.width <= 1160)
                this.verify.ok(img_size.value.height <= 774)
                });

        browser.end();
    }
};