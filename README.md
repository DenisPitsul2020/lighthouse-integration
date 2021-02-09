# lighthouse-integration

This module contains with 3 part. It is a native JS solution, so that it was written as a cypress task in [plugins/index.js](cypress/plugins/index.js) which run commands like node js commands:
1) [lighthouseReport](https://github.com/DenisPitsul2020/lighthouse-integration/blob/1285ac9752d244b075420c382360562f3ede71ec/cypress/plugins/index.js#L46) - the task that generate lighthouse report and save it to content root;
2) [zipFolder](https://github.com/DenisPitsul2020/lighthouse-integration/blob/1285ac9752d244b075420c382360562f3ede71ec/cypress/plugins/index.js#L71) - the task which take folder and archeive it to zip format;
3) [sendEmail](https://github.com/DenisPitsul2020/lighthouse-integration/blob/1285ac9752d244b075420c382360562f3ede71ec/cypress/plugins/index.js#L83) - the task that send email from sender to receiver with subject, text, and attach the file to mail.

All needed data presents in [testdata.json](cypress/fixtures/testdata.json)

To run this project, install it locally using npm and run suite:

```
npm install
npm run end-to-end.
```

[Lighthouse suite](cypress/integration/lighthouse.spec.js) is end-to-end test that run all 3 steps successively.
