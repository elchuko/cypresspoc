const cypress = require('cypress');
const { argv } = require('node:process');
const yargs = require('yargs');
const cypressConfig = require('./cypress');

const argv = yargs
  .options({
    browser: {
      alias: 'b',
      describe: 'Select browser to run tests against',
      default: 'electron',
      choices: ['chrome', 'electron', 'firefox'],
    },
    spec: {
      alias: 's',
      describe: 'Select spec tests to run',
      default: 'cypress/integration/*/**',
    },
    headed: {
      alias: 'headed',
      describe: 'Choose for headed run',
    },
    headless: {
      alias: 'headless',
      describe: 'Choose for headless run',
    },
    env: {
      alias: 'env',
      describe: 'Add env variables',
    },
    default: {
      alias: 'default',
      describe: 'Use accessibility reporter',
      boolean: true
    }
  })
  .help().argv;

runTests();

async function runTests(){
    try{
        const results = await runCypress();
        return process.exit(results.totalFailed); 
    } catch(error){
        return process.exit(1);
    }
}

async function runCypress(){
    return await cypress.run({
        browser: argv.browser,
        spec: argv.spec,
        headed: argv.headed,
        headless: argv.headless,
        env: argv.env,
        reporter: argv.default ? 'cypress/reporters/a11y' : null
    });
}