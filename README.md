# Ottonova JavaScript Coding Challenge

The gist: Implement a web client for a https://socket.io chat server.
Please implement the following:
- A login screen, with username & password, which protects the chat client
- A chat client which can:
- Emit and receive message events as described below
- Emit and receive command events as described below
- Display widgets in response to server command events
 
##

## Contents

### Project link in GitHub
https://github.com/hamideslami32/ottonova-challenge-react

#### clone project with:
##### SSH : [git@github.com:hamideslami32/ottonova-challenge-react.git](git@github.com:hamideslami32/ottonova-challenge-react.git)
##### Https: https://github.com/hamideslami32/ottonova-challenge-react.git

##

### Tech Stack:

This project was created by [Vite.js](https://vitejs.dev/) the **Next Generation Frontend Tooling**.
 is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

-   A dev server that provides  [rich feature enhancements](https://vitejs.dev/guide/features.html)  over  [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), for example extremely fast  [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement).
    
-   A build command that bundles your code with  [Rollup](https://rollupjs.org/), pre-configured to output highly optimized static assets for production.

##

#### Javascript Framework for the frontend application

The javascript framework that is used for the frontend of this project is **react**.  You can read more about it on [reactjs.org](https://reactjs.org/) website.

#####  Dependencies (Libraries)
We can find dependencies which is used in this project in package.json but some of important libraries are:

- Leaflet (for more info please see [leafletjs.com](https://leafletjs.com/))
- Ant design (for more info please see [ant.design](https://ant.design/))
- Ant design icons (for more info please see [ant.design/components/icon](https://ant.design/components/icon/))
- Sass (scss for styling)
- React router (for more info please see [reactrouter.com](https://reactrouter.com/))

##

### Build Setup

``` bash
# install dependencies
$ yarn install (or npm install)
# serve with hot reload at localhost:3000
$ yarn dev
# build for production
$ yarn build
```
For a detailed explanation of how things work, checkout [Vite.js docs](https://vitejs.dev/).

## 

###  Config File

When running `vite` from the command line, Vite will automatically try to resolve a config file named `vite.config.js` inside [project root](https://vitejs.dev/guide/#index-html-and-project-root).

For more info please see [vite.js config](https://vitejs.dev/config/)

##

### Project Structure

All important parts are inside the `src` folder which has 3 directories.

- `auth` 
- `components` 
- `pages` 


What is inside every directory? let me explain.

#### `auth`  
auth directory contains files to protect chat client which is handled by `react context` and user data is simply added to local storage without hash or backend services.
##
#### `components`
There are five components inside this directory. there is the list of components :
 - complete-confirm
 >This component show two buttons (Yes, No) to verify the end of the conversation. (used in home page)
 
 - day-picker
 >This component show five buttons to help the user select the appropriate day. (For example: "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" based on `date` we received from chat server bot). (used in home page)
 
 - map
 >This component show user location based on two parameters that we received from the chat server bot and gets the user to confirm. (used in home page)
 
 - rating
 >This component lets the user rate his/her experience with the conversation. (used in home page)
 
 - login-form
 >This component provides a login form that we used on the login page.

##

#### `pages`
We have three pages inside this directory to handle the home page, login page, and not-found page.

- `home`
>This page contains important components( to work with chat server bot. After login, we redirect to this page.
>User can send a message and get a response. user can send a command and get a random response with four types (Date, Complete, Map, Rate) and the client will show the proper component to help the user.

##

- `login`
>This page contains a login form to protect the chat client app. We store user data in localStorage without hash or backend services.

##

- `not-found`
> This page show `404 page` and a button to back to the `home page`.

##

### App.jsx
This file contains routing (pages) and UI Kit (ant design) style imported here that we have access to styles globally on all pages.

##

### Main.jsx
This file contains react rendering method and also we use auth module (Provider) here and wrap it around the `App` component.

##

### index.html
- `Leaflet` map style link and script tag are imported in this file.
- `Fira Sans` font imported here with four weights: `300;400;500;700`

##

### vite.config.js
This file provides a simple config and lets us change it. (for more info please see [vitejs.dev/config/](https://vitejs.dev/config/))

##

### Style rule
> Every style file in this project used sass (scss) and css-module to keep scope of every component/page. (Example: we define style file like `app.module.scss` and we import style file inside component like `import classses from './app.module.scss')

##

#### Contributor
**Hamid Eslami**
Github: https://github.com/hamideslami32
Linkedin: https://www.linkedin.com/in/hamid-eslami-048579196/

##

### The End
