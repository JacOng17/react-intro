[![Maintainability](https://api.codeclimate.com/v1/badges/2510b63e7c562c6a0691/maintainability)](https://codeclimate.com/github/JacOng17/react-intro/maintainability)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/JacOng17/react-intro.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/JacOng17/react-intro/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/JacOng17/react-intro.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/JacOng17/react-intro/context:javascript)
[![Build Status](https://travis-ci.org/JacOng17/react-intro.svg?branch=master)](https://travis-ci.org/JacOng17/react-intro)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run deploy`

Deploys the code to be published at: [https://JacOng17.github.io/react-intro/](https://JacOng17.github.io/react-intro/)

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Deploying a React App* to GitHub Pages

\* created using `create-react-app`
https://raw.githubusercontent.com/gitname/react-gh-pages/master/README.md

# Introduction

How to deploy a React app (created using `create-react-app`) to GitHub Pages.

You can visit the deployed app, at [https://JacOng17.github.io/react-intro/](https://JacOng17.github.io/react-intro/).

This repository contains the files related to the app. The `master` branch contains the app's source code (the code the app's developers edit), and the `gh-pages` branch contains a *built* version of the app (i.e. the code that GitHub Pages serves to the app's visitors).

## Prerequisites

1. [`Node.js`](https://nodejs.org/) is installed (this version or higher):

    ```sh
    $ node --version
    v11.10.0
    ```

2. [`npm`](https://nodejs.org/) (this version or higher):

    ```sh
    $ npm --version
    6.7.0
    ```
3. [`create-react-app`](https://github.com/facebookincubator/create-react-app) (this version or higher):

    ```sh
    $ create-react-app --version
    2.1.3
    ```

    In the case of `create-react-app`, you can either install it globally (i.e. `$ npm install -g create-react-app`) or install it locally (i.e. `$ npm install create-react-app`). If you choose the latter, you will have to specify its path whenever you invoke it (e.g. `path/to/node_modules/.bin/create-react-app`).

4. A [GitHub](https://www.github.com) account. :octocat:

5. A command-line Git client [setup according to GitHub](https://help.github.com/articles/set-up-git/).

## Procedure

1. **Create an *empty* repository on GitHub.** (2 minutes)

2. **Create a new React app on your computer.** (5 minutes)

```sh
$ create-react-app <app name>
```

3. **Install the `gh-pages` package as a "dev-dependency" of the app.** (1 minute)

```sh
$ cd react-gh-pages
$ npm install gh-pages --save-dev
```

4. **Add some properties to the app's `package.json` file.** (3 minutes)

* At the top level, add a `homepage` property where `{username}` is your GitHub username, and `{repo-name}` is the name of the GitHub repository you created in step 1.

```js
//...
"homepage": "http://{username}.github.io/{repo-name}"
```

* In the existing `scripts` property, add a `predeploy` property and a `deploy` property with the values:

```js
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

5. **Create a git repository in the app's folder.** (1 minute)

```sh
$ git init
Initialized empty Git repository in C:/path/to/react-intro/.git/
```

6. **Add the GitHub repository as a "remote" in your local git repository.** (1 minute)

```sh
$ git remote add origin https://github.com/JacOng17/react-intro.git
```

* This will make it so the `gh-pages` package knows where you want it to deploy your app in step 7.
* It will also make it so git knows where you want it to push your source code (i.e. the commits on your `master` branch) in step 8.

7. **Generate a *production build* of your app, and deploy it to GitHub Pages.** (2 minutes)

```sh
$ npm run deploy
```

* That's it! Your app is now accessible at at: https://JacOng17.github.io/react-intro/
* I recommend exploring the GitHub repository at this point. When I explored it, I noticed that, although a `master` branch did not exist, a `gh-pages` branch did exist. I noticed the latter contained the *built* app code, as opposed to the app's source code.

8. **Optionally, commit your source code to the "master" branch and push your commit to GitHub.** (1 minute)

```sh
  $ git add .
  $ git commit -m "Create a React app and publish it to GitHub Pages"
  $ git push origin master
  ```

* I recommend exploring the GitHub repository once again at this point. When I did that, I noticed that a `master` branch now existed, and it contained the app's source code.
* So, the `master` branch held the source code, and the `gh-pages` branch held the *built* app code.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
