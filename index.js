#!/usr/bin/env node

// ==== Call Packages ====
const countryList = require('country-list');
const axios = require('axios').default;
const chalk = require('chalk');
const muda = require('ora');
// ==== END - Call Packages ====

// ==== MAIN ====

    //Create table for arguments
    const myArguments = process.argv.slice(2);

    //Initiate "ora" for the loading
    const mudaMuda = muda();

    //Check length of the arguments
    if(myArguments.length != 2 && myArguments.length != 1) {
        mudaMuda.fail(chalk.red("Error !!"));
        return;
    }

    //Get the argument and get its code
    let country = myArguments[0];
    let codeCountry = countryList.getCode(country);

    //Get the current year
    let year = new Date().getFullYear();

    //Check length of argument. If 2 -> get the year's argument
    if(myArguments.length == 2) {
        year = Number(myArguments[1]);
    }

    //Request for our API
    axios.get('https://date.nager.at/api/v2/publicholidays/' + year + '/' + codeCountry).then(function (response) {
        response.data.forEach(holiday => {
            mudaMuda.succeed(chalk.green(holiday.name) + chalk.cyan(' - ') + chalk.magenta(holiday.date));
        })
    }).catch(function (error) {
        mudaMuda.fail(chalk.red("Country or year is not valid."));
    });

// ==== END MAIN ====