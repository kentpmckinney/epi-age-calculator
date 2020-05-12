<!-- Category: Epicodus;HTML/CSS/JS -->
# Solar System Age Calculator

Calculates ages on different planets in the solar system

https://github.com/kentpmckinney/epi-age-calculator

## Previewing this Project

This project is hosted at: https://kentpmckinney.github.io/epi-age-calculator

## Working with the Source Code

The following instructions explain how to set up a development environment for this project on MacOS. Steps will differ depending on the operating system.

### Prerequisites

The following software must be installed and properly configured on the target machine. 

```
An updated web browser (Internet Explorer is not compatible)
```
```
Node.js
```
```
Git (optional but recommended)
```

### Setting up a Development Environment

1. Download a copy of the source code from: https://github.com/kentpmckinney/epi-age-calculator
   or clone using the repository link: https://github.com/kentpmckinney/epi-age-calculator.git
2. Navigate to the folder location of the source files in Finder or in the Terminal
3. Run the command `npm install` to download a local cache of the npm packages used by this application
4. Build the application with the command `npm run build`
5. Start the application with the command `npm run start`

## Running Automated Tests

how to run the automated tests

```
example
```

## Deployment



## Technologies Used

* JavaScript
* HTML
* CSS
* Webpack
* Babel

## Authors

Kent McKinney - [GitHub](https://github.com/kentpmckinney) - [LinkedIn](https://www.linkedin.com/in/kentpmckinney/)

### Copyright &copy; 2020 Kent P. McKinney

## Acknowledgments


### Specifications:

| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **Class constructor accept a person's age in Earth years and creates an valid object** | age = new Age(10) | age.earthYears == 10 ✓ |
| **Class constructor calls a function to return age in Mercury years (age/.24 Earth years)** | 42 | 175 ✓ |
| **Class constructor calls a function to return age in Venus years (age/.62 Earth years)** | 42 | 67.74 ✓ |
| **Class constructor calls a function to return age in Mars years (age/1.88 Earth years)** | 42 | 22.34 ✓ |
| **Class constructor calls a function to return age in Jupiter years (age/11.86 Earth years)** | 42 | 3.54 ✓ |
| **Class contains a function to set a property for average life expectancy** | 80 | 80 ✓ |
| **Class contains a function to calculate life expectancy** | set 80 | get 80 ✓ |
| **Class contains a function to return how many Earth years a person is expected to live** | age: 20; expectancy: 80 | left: 60 ✓ |
| **Class contains a function to return how many Mercury years a person is expected to live** | age: 20; expectancy: 80 | left: 250 ✓ |
| **Class contains a function to return how many Venus years a person is expected to live** | age: 20; expectancy: 80 | left: 96.77 ✓ |
| **Class contains a function to return how many Mars years a person is expected to live** | age: 20; expectancy: 80 | left: 31.91 ✓ |
| **Class contains a function to return how many Jupiter years a person is expected to live** | age: 20; expectancy: 80 | left: 5.06 ✓ |
| **If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy** | age: 100; expectancy: 80 | over: 20 ✓ |
| **(Optional) Add a UI** | ✓ | ✓ |
| **(Optional) Make the application look nice and give it a solar theme** | ✓ | ✓ |
