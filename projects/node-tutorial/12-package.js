// npm - global command , comes with ndoe
// npm --version

// local dependency - use it only in this particular project
// npm i <package-name>

// global dependency - use it in any project
// npm install -g <packge name>
// Linux and macOS will most likey ask for a sudo

// However, we still need something called package.json
// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// If you will eventually publish it, then everything should just be unique

// Why do we need this package.json?
// This will be stored as a dependencies, and it indicates which package are in this project
// node_modules is where the packages are installed
// There are some packages that includes other dependencies

// These are different than the built in modules
const _ = require("lodash");
const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);

// Packakge.json is really important when sharing projects with others online
// node_modules are usually huge, and we don't want to push it onto github
// When others pull the project, all they have to do is run npm install to get all dependencies

// Nodemon is a really useful package that watches our files and hot reloads our app
// We will install it as a dev dependency instead of a regular one
// npm i nodemon (-D or --save-dev)
// The reason is we don't need it in actual production

// We will also see how our scripts work
// Inside it, we set up several commands
// "start": "node app.js"
// calling npm start will run the above command

// For some commands, you will also need to give it a full command
// npm run <command name>
// ex: npm run dev

// Of course, there is also a way to uninstall the package
// npm uninstall <packagename>
// Nuclear approach
// delete the node_modules folder, usually necessary for when using Gatsby

// Global installs
// Might need permissions
// We will install nodemon globally to make it easier to develop
// It is needed for certain frameworks such as Gatsby, where you need to install
// certain packages globally for things to run
// This has changed due to the introduction of npx
// with npx, you don't have to install the package globally
// Preferred method is using npx or installing things locally
// npx stands for execute, and the official name is package runner
// Introduced with npm 5.2

// package-lock.json
// Some dependencies have other dependencies
// And you want them to have the same exact setup
// ex: bootstrap version is still the same, but jquery changes, then it won't be the same
// So, use package-lock.json to keep track of the versions

// The version numebr is usually three numbers, ex: 4.17.20
// The first number is a major change
// The second is a minor change, usually backward compatible
// The last number is usually just a patch
