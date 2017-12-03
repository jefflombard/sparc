# spark
Create Lightning apps with no build configuration.

## Quick Overview
```
npm install -g spark

spark my-app
cd my-app/
spark preview
```

### Shortcuts
Spark also has convenient shortcuts that make Lightning development a breeze, see [shortcuts](#shotcuts).

## Getting Started

### Installation

#### Requirements
- [Node.js](https://nodejs.org) >= v8.1.3
- [SFDX](https://developer.salesforce.com/tools/sfdxcli)

#### Install
Install spark once globally:
```
    npm install spark -g
```

### Log in
*You need to be logged in and authenticated to a dev hub org in SFDX.* This can be done quickly by running:
```
    spark login
```
`spark login` automatically sets whichever hub org you log into as your default.

### Creating an App

To create a new app, run:
```
spark create my-app
cd my-app
```

Spark will create a directory called `my-app` inside the current folder.
Inside that directory, Spark will generate the initial project structure and install the dependencies.

```
my-app
├── README.md
└── app
```

Spark makes it easy to write Lightning apps, handling boiler plate for you.
Once installation is finished, you can speed up development by running shortcuts inside the project folder.

## Shortcuts and Commands
In addition to creating scaffolding for projects, spark contains useful scripts and aliases for SFDX commands. These should be run from within a project folder.

### Development
#### Add packages and tools
- `spark add:redux` - installs redux and adds a provider component as described in [Lightning-Redux](https://github.com/madmax983/lightning-redux).
- `spark add:strike` - adds components from the [strike](http://www.lightningstrike.io/) library.
- `spark add:git` - runs the `git init` command.

#### Working with scratch orgs
- `spark build` - runs the build command for the project.
- `spark push` - pushes local project to default scratch org.
- `spark push:force` - pushes local project to default scratch org ignoring conflicts.
- `spark preview` - pushes local code to default scratch org and opens in a new window.
- `spark open` - opens the local default scratch org.
#### Testing
- `spark test` - runs the test command to run default tests.

#### Deploying to production
- `spark package` - builds a package that can easily be deployed to a production org.

### Starting a new project
- `spark create myProject` - creates a new project called myProject

## Contributing
Help is appreciated, if you would like to contribute, you can either message me or create a PR.

### Appreciated contributions
- Open issues
- Adding features/functionality
- Yarn

# Influenced by:
- Create React App
- Lightning Redux
