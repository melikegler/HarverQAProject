Harver QA Exercise

## Getting Started

### Installation

Ensure that [Node.js](https://nodejs.org/) ([Current or Active LTS](https://github.com/nodejs/Release#release-phases) is recommended, version 12 at minimum) and [npm](https://www.npmjs.com/) are installed on your computer before running it:

```sh
npm install -g testcafe
```
### Running the Test

Call the following command in a command shell.
Specify the [target browser](https://testcafe.io/documentation/402639/reference/command-line-interface#browser-list)
and [file path](https://testcafe.io/documentation/402639/reference/command-line-interface#file-pathglob-pattern).

```sh
testcafe chrome Drag.js
testcafe chrome Dropdown.js,
testcafe chrome FileUpload.js
testcafe chrome IFrame.js
testcafe chrome LoginPage.js
```

TestCafe opens the chrome browser and starts executing the test.

> Important! Make sure the browser tab that runs tests stays active.
> Do not minimize the browser window. Inactive tabs and minimized browser windows switch
> to a lower resource consumption mode where tests are not guaranteed to execute correctly.

### Viewing the Results

TestCafe outputs the results into a command shell by default. 