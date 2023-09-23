# Nobox Console

![NoBox Cloud Service](https://www.nobox.cloud/Grid%20AndLogo.svg)

## Overview

A command line application to access and interact with [NoBox cloud](https://nobox.cloud/) services on a low level from your terminal.

With the console, you can access your account, projects, collections/data, and test other services right from the terminal. This helps to view and manage your account from your terminal.

## Features

The current version includes the following features, is basic interaction with the service as [taught in the documentation](https://www.docs.nobox.cloud/)
which basically is to *interact with collections/data*, which involves:

- Creating collection
- Fetching collection(s)
- Updating collection(s)

> As the project evolves, this document will be updated.

## How to get started

You'll need to have [the latest LTS version of NodeJs](https://nodejs.org/download).

You'll also need a package manager, either `npm` or `yarn`

Run this in your terminal to get the necessary tools if you don't have them

```bash
npm install --global yarn ts-node
```

Once that's ready, run the following in your terminal

```bash
git clone git@github.com:codepraycode/nobox-console.git

# After cloning is complete
cd nobox-console

npm install

# Run console
ts-node index.ts

# According to your package manager.
```

> After cloning the repo, create a `.env` file, and add some environment variables. The format is present in the `.env.example` file in the root directory of the project.

Run the console, and enter the `help` command to see how to use it.
> The help document is self-explanatory, you'll get it, don't worry👍🏾

## Contribution

This project intends to make good use of all the services it offers, on this note, I welcome any contribution to this project. There are reasons why your contribution is important, they include:

- Interact with NoBox cloud services from the terminal on a low-level
- Have examples and best practices for consuming Nobox services
- Have practical solutions to issues and questions on the services
- Learn!

There are features to be implemented to make the first release of the console:

- [ ] Authentication: User login with their credentials, obtain their token and continue with other features
- [x] Access to collections
  - Creating collection
  - Fetching collection(s)
  - Updating collection(s)

To contribute to this project, read the [contribution guide](https://github.com/codepraycode/nobox-console/blob/main/.github/CONTRIBUTING.md) to get started.

## Discussion

If you have questions, any questions actually, please feel free to ask in the [Q&A discussion section](https://github.com/codepraycode/nobox-console/discussions/new?category=q-a)

To contribute to discussions on the project, [general conversation](https://github.com/codepraycode/nobox-console/discussions/new?category=general) is where we can talk about anything.

Thanks!⚡
