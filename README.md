# _Currency Converter_
#### _Convert any amount of European or US currency to the equivalent in any other!, 07/03/2020_
#### By _**Kyle Hubbard**_
## Description
_Using the advantage of a conversion rate API, this program is able to convert any amount of one currency into another_

## Specifications

**Behavior** _The program should display the conversion rate for any choice of currency_
* Input: US Dollar to UK Pound
* Output: 0.80 Pounds
* Complete: True

**Behavior** _The program should also take an amount of currency from the user and convert it into the expected conversion amount via the correct exchange rate_
* Input: 10 US Dollars to UK Pounds
* Output: 8 Pounds
* Complete: True

**Behavior** _If the API call returns an error a message should be displayed to the console describing the error_
* Input: !200 OK
* Output: Error code 404
* Complete: True

## Setup/Installation Requirements

#### Requirements
* _GitBash or a preferred computer terminal_
* _node.js (visit: https://nodejs.org/en/ for instructions on downloading)
* _Web browser_
* _Optional: code editor - suggested VSCode-_

#### Install
* _Navigate to my github repository at: https://github.com/currency-converter_
* _Click the green clone or download button and copy the ".git" link_
* _On your homescreen open up your preferred terminal - GitBash recommended - and clone the file to your desktop. If your using GitBash the command is $ git clone {.git link}_
* _Navigate your terminal into the root directory of the project and run the command $ npm install_
* _Next you'll need to create a .env file at the root level of the directory_
* _Once completed, navigate to https://www.exchangerate-api.com/ and sign up for a free account to recieve an API Key_
* _After the API key has been recieved add it to your .env file as: API_KEY = {copy and paste your API Key here}_
* _After installation is finished, execute the command $ npm run build_
* _Finally, use the command $ npm run start to view the program_

## Known Bugs
_No known bugs_

## Support and contact details
_Kyle Hubbard:_
kyle.james.hubbard@gmail.com

## Technologies Used
* HTML
* Bootstrap version 4.5.0
* Javascript
* JQuery version 3.5.1
* Webpack v.4.39.3
* ExchangeRate-API
* CSS
* Git
* node.js/npm

### License
MIT - Liscense
Copyright (c) 2020 