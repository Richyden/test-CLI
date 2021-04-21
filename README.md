# Holidates

## What is it ?

Holidates is a little packages thta allows you to get the Holidays'names and dates of any country at any given year !

## How to install ?

In your terminal, type this little command in your terminal :

`npm install @richyden/holidates`

## How to use ?

### Syntax

You simply need to write the command like this :

`holidates $country $date`

### Exemple

If you write this :

`holidates Belgium 2017`

You'll get the holidays'names and dates of Belgium in 2017 !

    ✔ New Year's Day - 2017-01-01
    ✔ Easter Sunday - 2017-04-16
    ✔ Easter Monday - 2017-04-17
    ✔ Labour Day - 2017-05-01
    ✔ Ascension Day - 2017-05-25
    ✔ Whit Monday - 2017-06-05
    ✔ Belgian National Day - 2017-07-21
    ✔ Assumption Day - 2017-08-15
    ✔ All Saints' Day - 2017-11-01
    ✔ Armistice Day - 2017-11-11
    ✔ Christmas Day - 2017-12-25

If you not precise the year, you'll gate the holiday of the current year !

## Ressouces

* [Nager.date](https://date.nager.at/) : Returns the public holidays from a given year and country.
* [Country-list](https://www.npmjs.com/package/country-list): To convert the country name onto a country code.
* [Axios](https://www.npmjs.com/package/axios) : To perform HTTP requests.
* [Chalk](https://www.npmjs.com/package/chalk) : To add some colors in the terminal.
* [ora](https://www.npmjs.com/package/ora) : To add some awesome loading in the terminal