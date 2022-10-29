# JSON Auto Categoriser

## What is the project
JSON Auto Categoriser is a program which takes a JSON file, groups different data in the file, and gives information about data in the file.
This program is my first attempt at using node-JS, working with JSON, and using classes.

## How to run the project
1. Clone the repository (*git clone https://github.com/spruce04/JSON-Auto-Categoriser*).
2. Add a data file to the *JSONData* folder, or use the sample data. (*mv fileName ./path/To/JSONData*)
3. Change the dataPath variable in *./dataPath.js* to represent the new path to the data.
4. Move to the src directory (*cd src*).
5. Run the program (*node index.js*).
6. Move backwards (*cd..*) and open the *results.txt* file to view the categorised data.

## Limitations
- The program can't analyse objects yet (this will be updated in the future). Failure to analyse an object is indicated by logging *'object'* to the console
- The program can't group JSON data from certain files which have objects located in other JSON objects. This should hopefully be fixed soon.
- There are probably many other limitations which I am unaware of.

