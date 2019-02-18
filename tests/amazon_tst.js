module.exports = {
    'Amazon test' : function (browser) {
    /* The purpose of this test is to search in amazon.co.uk website for "cow milk" and verify that the results contain
    this exact same phrase"
    */

    const searchBar = 'input[type=text]',
          submitButton = 'input[type=submit]'
          
        browser
            .url('https://www.amazon.co.uk/')
            .waitForElementVisible('body')
            .verify.elementPresent(searchBar)
            .setValue(searchBar, 'cow milk')
            .waitForElementVisible(submitButton)
            .click(submitButton)
            .pause(2000)
            .assert.containsText('#main', 'cow milk')
            .end();
    }
};