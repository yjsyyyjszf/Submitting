/**
 * Created by samuel on 1/19/18.
 */

// console.log('Welcome to submitting!');
const program = require('commander');
const co = require('co');
const prompt = require('co-prompt');
const {init, submit, } = require('./client');


program
    .version('0.0.1')
    .description('Client Side for a decentralized course-project submitting system')

// start node - setup account - migrate contract
// create a directory to keep the (transaction, hash) pair
program
    .command('init <name> <suid> <email> <account_address>')
    .description('Init envrionment')
    .action((name, suid, email, account_address) => {
       init(name, suid, email, account_address);
    });

program
    .command('create <project>')
    .description('Creat an empty project')

program
    .command('readme')
    .description('Check readme doc')

program
    .command('peer')
    .description('check the peer info')

program
    .command('submit <filename>')
    .description('submit file')
    .action(function(){
        console.log("Submitted");
    })
    .parse(process.argv);

program
    .command('upload <filename>')
    .description('upload file to server')

program
    .command('start')
    .description('start app')

program.parse(process.argv)