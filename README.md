# Independent Project
## Super Galactic Age Calculator
https://github.com/kentpmckinney/epicodus-age-calculator

##### Author: Kent McKinney - [GitHub](https://github.com/kentpmckinney)
##### Copyright &copy; 2020 Kent McKinney
##### License: GPLv3
### Description:

``This program provides the ability to calculate ages from various locations in the galaxy.``

### Setup Instructions:
    1. Download a copy of the source code from GitHub from https://github.com/kentpmckinney/epicodus-age-calculator
    2. Run the command ``npm install`` to download a local cache of the npm packages used by this application
    3. Navigate to the location of the source and open or run the file index.html in a code editor or web browser

### Changelog:
* 3/2/2020 - Created skeleton project and added templates (0.5 hours)
* 3/2/2020 - Added specs to README.md (0.5 hours)
* 3/3/2020 - Added additional specs to README.md (0.5 hours)
* 3/3/2020 - Added and troubleshot jest tests (1 hours)
* 3/3/2020 - Added tests and code for specs (3 hours)
* 3/4/2020 - Added remaining tests and code for required specs (2 hours)


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
| **Class contains a function to return how many Venus years a person is expected to live** | age: 20; expectancy: 80 | left: 96.77 |
| **Class contains a function to return how many Mars years a person is expected to live** | age: 20; expectancy: 80 | left: 31.91 |
| **Class contains a function to return how many Jupiter years a person is expected to live** | age: 20; expectancy: 80 | left: 5.06 |
| **If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy** | age: 100; expectancy: 80 | over: 20 |
| **(Optional) Add a UI** |  |  |
| **(Optional) Return the age Keith Richards will be in dog years on the planet Jupiter in 2073** |  |  |
| **(Optional) Determine how many mayfly lifespans a person has lived (5 minutes) and compare to age of the sun in Earth years** |  |  |
| **(Optional) Make the application look nice and give it a solar theme** |  |  |