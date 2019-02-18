# e2e-web
In order to run the tests locally on MacOS or Windows first clone the repository locally on your machine:

```$
git clone https://github.com/midimopo/e2e-web.git
cd e2e-web
npm i
npm test
```

There is no need to download any drivers if you are using Chrome on MacOS or Windows.
Otherwise please download the most suitable for you and place it under the folder /drivers.
You might need to change the content nightwatch.json to include the name your webdriver's executable.