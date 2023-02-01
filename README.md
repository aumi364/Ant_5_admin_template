<h1 align="center">
  <br>
    Ant deisgn 5 template
  <br>
</h1>

<h4 align="center">React admin panel with Ant design 5.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#application-structure">Application Structure</a> •
  <a href="#license">License</a>
</p>

## Key Features

- :fire: Built with Vite but extendable
  - for vite configuration, use `vite.config.ts` file.
- :chart_with_upwards_trend: Use Zustand store, less boilerplate. See <a href="/src/store">store</a>

- :blue_heart: Ant Design

  - Localized Ant Design Component for better multilingual support

- :cop: Eslint and Prettier configured with git hooks

  - Eslint and prettier configured together for auto save format and error checks
  - No git commit allowed if errors and warnings are present

- :raised_hands: Global HTTP error and auth handler. See <a href="/src/services">services</a>

- :nail_care: Styled Components and more goodies on <a href="/src/styles">styles</a>

- :zap: Codesplitting

  - Native React Lazy loaded pages/components with Suspense
  - Custom loader animation added

- :capital_abcd: Multilingual. See <a href="/src/config">config</a>

- :art: Less and Bootstrap utility classes. See <a href="/src/styles">styles</a>

- :rocket: Develepment scope based App config file for deployment. See `.env` file

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. Recommended to use [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) for the project.

From your command line:

```bash
# Clone this repository
$ git clone repo-link

# Clone this repository
$ git clone repo-link

# Go into the repository
$ cd safe-trafikskola-frontend

# Install dependencies
$ yarn install or npm i

# Run the app for development scope
$ yarn dev (for development env file naming convention will be env.development)

# Run the app for development scope
$ yarn stage (for staging env file naming convention will be env.staging)

# Run the app for production scope
$ yarn start (for production env file naming convention will be env.production)

# Build the app
$ yarn build

# Serve the app
$ yarn start


```
## Environment scope
- For development
    - VITE_APP_ENVIRONMENT=development
    - VITE_APP_BACKEND_URL={{dev backend url}}
- For staging
    - VITE_APP_ENVIRONMENT=staging
    - VITE_APP_BACKEND_URL={{stage backend url}}
- For production
    - VITE_APP_ENVIRONMENT=production
    - VITE_APP_BACKEND_URL={{production backend url}}
    
## Application structure

> The directory layout of this boilerplate

    .
    ├── .vscode                 # Vscode config, for autoformat on save.
    ├── build                   # After running the build command the build files get put here
    ├── node_modules            # NPM dependency folder
    ├── public                  # Reacts public folder for the html and static assets
    ├── src                     # Source directory for the React Application
    ├── src                     # Source directory for the React Application
    │   │
    │   ├── assets                # Static assets folder for the global scope. Example: images, icons, fonts etc.
    │   ├── components            # Typical React component folder but only for global components.
    │   ├── features              # Features pattern folder for Application features (More details inside the folder)
    │   ├── language              # Multi lingual configuration
    │   ├── hooks                 #React custom hooks
    │   ├── pages                 # Pages component folder
    │   ├── router                # Application navigation/routing config (More details inside the folder)
    │   ├── services              # Folder for services like custom axios instance, analytics etc.
    │   ├── store                 # Application Redux store
    │   ├── style                 # Custom SC components, CSS, less utilities
    │   └── App.jsx              # Entry component for the React App.
    │
    ├── vite.config.js         # Extend Esbuild config
    ├── jsconfig.json           # Adjust file paths to use absolute file path for React
    ├── package.json            # The NPM config file for all the packages installed and scripts and more
    ├── .env                    # Store API Url, Secret API keys etc
    ├── .eslintrc               # Configure Eslint
    ├── .eslinignore            # ignore certain files for Eslint
    ├── .gitignore              # ignore certain files for git (example: .env)
    ├── .prettierrc             # Configure prettier (example: .env)
    └── .prettierignore         # ignore certain files for Prettier

## Credits

This software uses the following open source packages:

- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)
- [Styled Components](https://styled-components.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Intl](https://formatjs.io/docs/react-intl/)
- [React Router](https://reactrouter.com/)
- [@ant-design/icons](https://github.com/ant-design/ant-design-icons)
- [Axios](https://github.com/axios/axios)
- [Vite](https://vitejs.dev/)
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)
- [polished](https://polished.js.org/docs/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [husky](https://typicode.github.io/husky/#/)
- And more..



## Deployement Instruction

RUN `./build.sh`

SERVER static file from `build` folder



