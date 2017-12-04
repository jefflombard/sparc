# Available Commands

- `sparc auth` - opens web login and automatically sets the authenticated hub org to default.
- `sparc auth aliasName` - does the same as `sparc auth` plus assigns the hub org the alias `aliasName`
- `sparc open` - opens the local default scratch org.
- `sparc orgs` - lists all of your dev hub orgs and active scratch orgs.
- `sparc orgs -l` - lists all of your available orgs.


## Planned

- `sparc create myProject` - creates a new project called myProject
- `sparc add redux` - installs redux and adds a provider component as described in [Lightning-Redux](https://github.com/madmax983/lightning-redux).
- `sparc add strike` - adds components from the [strike](http://www.lightningstrike.io/) library.
- `sparc add git` - runs the `git init` command.
- `sparc add flow` - adds Flow dependency and associated command shortcuts.
- `sparc add jest` - installs Jest dependency and associated command shortcuts.
- `sparc build` - runs the build command for the project.
- `sparc push` - pushes local project to default scratch org.
- `sparc push -f --force` - pushes local project to default scratch org ignoring conflicts.
- `sparc preview` - pushes local code to default scratch org and opens in a new window.
- `sparc apex myClass` - creates a new apex class with name of `myClass`.
- `sparc component myComponent` - creates a new component with name of `myComponent`.
- `sparc package` - builds a package that can easily be deployed to a production org.
- `sparc test`
- `sparc typeCheck`
