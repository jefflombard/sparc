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

### Commands
Sparc has convenient commands and shortcuts that make Lightning development a breeze, see [commands](docs/commands.md).

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
Once installation is finished, you can speed up development by running [sparc commands](docs/commands.md) inside your project folder.

## Forking
If you are working on a team with a large project and very specific use cases, I recommend forking and customizing this repo to speed up development.

## Contributing
Help is appreciated, if you would like to contribute, you can either message me or create a PR.

### Appreciated contributions
- Open issues
- Adding features/functionality
    - flag for create project to enable different org types.
- Yarn

# Acknowledgements
Special thanks to the following projects:

- [Create React App](https://github.com/facebookincubator/create-react-app)
- [Lightning Redux](https://github.com/madmax983/lightning-redux)
- [strike by Appiphony](http://www.lightningstrike.io/)

# License

Sparc is open source and available under the [GNU GPLv3 License](LICENSE).
