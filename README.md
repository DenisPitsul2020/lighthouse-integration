# lighthouse-integration

This module contains with 3 part. It is a native JS solution, so that it was written as a cypress task in [plugins/index.js](cypress/plugins/index.js) which run commands like node js commands:
1) [lighthouseReport](https://github.com/DenisPitsul2020/lighthouse-integration/blob/d6e490b72dc9923d70d2ccedb91f40808b652f7c/cypress/plugins/index.js#L46) - the task that generate lighthouse report and save it to content root;
2) [zipFile](https://github.com/DenisPitsul2020/lighthouse-integration/blob/d6e490b72dc9923d70d2ccedb91f40808b652f7c/cypress/plugins/index.js#L70) - the task which take file and archeive it to zip format;
3) [sendEmail](https://github.com/DenisPitsul2020/lighthouse-integration/blob/d6e490b72dc9923d70d2ccedb91f40808b652f7c/cypress/plugins/index.js#L82) - the task that send email from sender to receiver with subject, text, and attach the file to mail.

All needed data presents in [testdata.json](cypress/fixtures/testdata.json)

To run this project, install it locally using npm and run:

```
npm install
npm run end-to-end.
```

[Lighthouse suite](cypress/integration/lighthouse.spec.js) is end-to-end test that run all 3 steps successively.
