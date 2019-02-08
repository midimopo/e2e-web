module.exports = {
    'Amazon test' : function (browser) {
    /* The purpose of this test is to search in amazon.co.uk website for "cow milk" and verify that the results contain
    this exact same phrase"
    */
            browser
            .url('https://www.amazon.co.uk/')
            .waitForElementVisible('body')
            .verify.elementPresent('input[type=text]')
            .setValue('input[type=text]', 'cow milk')
            .waitForElementVisible('input[type=submit]')
            .click('input[type=submit]')
            .pause(2000)
            .assert.containsText('#main', 'cow milk')
            .end();
    }
};