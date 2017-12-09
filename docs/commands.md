# Available Commands

- `sparc apex <myClass>` - creates a new apex class called `myClass`.
- `sparc app <myApp>` - creates a new Lightnning app called `myApp`.
- `sparc create <myProject>` - creates a new project called `myProject`.
- `sparc component <myComponent>` - creates a new component with name of `myComponent`.
- `sparc login` - opens web login and automatically sets the authenticated hub org to default.
- `sparc login [aliasName]` - does the same as `sparc auth` plus assigns the hub org the alias `aliasName`
- `sparc open` - opens the local default scratch org.
- `sparc open [appName]` - opens the `appName` Lightning app on the local scratch org.
- `sparc org <orgName>` - creates a scratch org with the alias <orgName>
- `sparc orgs` - lists all of your dev hub orgs and active scratch orgs.
- `sparc orgs -a` - lists all of your available orgs.
- `sparc preview` - pushes local code to default scratch org and opens in a new window.
- `sparc preview [appName]` - pushes local code and opens lightning app called `appName`
- `sparc pull` - pulls changed source from the scratch org to local project folder.
- `sparc pull -f` - same as `sparc pull` but ignores metadata conflicts.
- `sparc push` - pushes local project to default scratch org.
- `sparc push -f` - same as `sparc push` but ignores metadata conflicts.

## Planned

- `sparc build` - runs the build command for the project.
- `sparc add strike` - adds components from the [strike](http://www.lightningstrike.io/) library.
- `sparc add redux` - installs redux and adds a provider component as described in [Lightning-Redux](https://github.com/madmax983/lightning-redux).
- `sparc add flow` - adds Flow dependency and associated command shortcuts.
- `sparc test`
- `sparc add jest` - installs Jest dependency and associated command shortcuts.
- `sparc typeCheck`

- `sparc package` - builds a package that can easily be deployed to a production org.
