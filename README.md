# spark
Create Lightning apps with no build configuration.

## Quick Overview
```
npm install -g spark

spark my-app
cd my-app/
npm preview:new
```

### Get Started Immediately

## Getting Started

### Installation
Install spark once globally:
```
    npm install spark -g
```

#### Requirements
- [Node.js](https://nodejs.org) >= v8.1.3
- [SFDX](https://developer.salesforce.com/tools/sfdxcli)

You need to be logged in and authenticated to a dev hub org in SFDX.

### Creating an App
To create a new app, run:
```
spark my-app
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
Once installation is finished, you can run some prebuilt commands inside the project folder:

- `npm test`
- `npm build`
- `npm watch`
- `npm add:redux` - installs redux and adds a provider component as described in (Lightning-Redux)[https://github.com/madmax983/lightning-redux]

## Contributing
Help is appreciated, if you would like to contribute, you can either message me or create a PR.

### Appreciated contributions
- Open issues
- Adding features/functionality
- Yarn

# Influenced by:
- Create React App
- Lightning Redux
