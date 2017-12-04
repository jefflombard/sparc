# Sparc
Create Lightning apps with no build configuration. Sparc is a cli and project scaffolder.

Inspired by [Create React App](https://github.com/facebookincubator/create-react-app).

## Quick Overview
```
npm install -g sparc

sparc my-app
cd my-app/
sparc preview
```

### Shortcuts
sparc also has convenient shortcuts that make Lightning development a breeze, see [shortcuts](#shotcuts).

## Getting Started

### Installation

#### Requirements
- [Node.js](https://nodejs.org) >= v8.1.3
- [SFDX](https://developer.salesforce.com/tools/sfdxcli)

#### Install
Install sparc once globally:
```
    npm install sparc -g
```

### Log in
*You need to be logged in and authenticated to a dev hub org in SFDX.* This can be done quickly by running:
```
    sparc login
```
`sparc login` automatically sets whichever hub org you log into as your default.

### Creating an App

To create a new app, run:
```
sparc create my-app
cd my-app
```

sparc will create a directory called `my-app` inside the current folder.
Inside that directory, sparc will generate the initial project structure and install the dependencies.

```
my-app
├── README.md
└── app
```

sparc makes it easy to write Lightning apps, handling boiler plate for you.
Once installation is finished, you can speed up development by running shortcuts inside the project folder.

## Shortcuts and Commands
In addition to creating scaffolding for projects, sparc contains useful scripts and aliases for SFDX commands. These should be run from within a project folder.

### Starting a new project
- `sparc create myProject` - creates a new project called myProject

### Development
#### Add packages and tools
- `sparc add:redux` - installs redux and adds a provider component as described in [Lightning-Redux](https://github.com/madmax983/lightning-redux).
- `sparc add:strike` - adds components from the [strike](http://www.lightningstrike.io/) library.
- `sparc add:git` - runs the `git init` command.
- `spark add:flow` - adds Flow dependency and associated command shortcuts.
- `spark add:jest` - installs Jest dependency and associated command shortcuts.

#### Working with scratch orgs
- `sparc build` - runs the build command for the project.
- `sparc push` - pushes local project to default scratch org.
- `sparc push:force` - pushes local project to default scratch org ignoring conflicts.
- `sparc preview` - pushes local code to default scratch org and opens in a new window.
- `sparc open` - opens the local default scratch org.

#### Creating Assets
- `sparc apex myClass` - creates a new apex class with name of `myClass`.
- `sparc component myComponent` - creates a new component with name of `myComponent`.

#### Deploying to production
- `sparc package` - builds a package that can easily be deployed to a production org.

### Add Ons
#### Jest
- `sparc test`
#### Flow
- `sparc typeCheck`

## Contributing
Help is appreciated, if you would like to contribute, you can either message me or create a PR.

### Appreciated contributions
- Open issues
- Adding features/functionality
- Yarn

# Acknowledgements
Special thanks to the following projects:

- [Create React App](https://github.com/facebookincubator/create-react-app)
- [Lightning Redux](https://github.com/madmax983/lightning-redux)
