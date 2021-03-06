# Lineup

Lineup is a browser extension that helps you manage tasks by adding them to a queue. After adding tasks to your queue, only the current task will show which allows you to focus on the task at hand. When the task is completed, it's one click and onto the next.

## Getting Started

Run the following commands to install dependencies and start developing

```
yarn install
yarn dev
```
### Scripts

- `yarn dev` - run webpack in watch mode
- `yarn build` - builds the production-ready unpacked extension
- `yarn test `-u - runs Jest + updates test snapshots
- `yarn lint` - runs EsLint
- `yarn prettify` - runs Prettier

### Built with

- React
- TypeScript
- Jest
- Eslint
- Prettier
- Webpack
- Babel
- SCSS
- webextension-polyfill-ts

<details>
  <summary>Loading the extension in Google Chrome</summary>

In [Google Chrome](https://www.google.com/chrome/), open up [chrome://extensions](chrome://extensions) in a new tab. Make sure the `Developer Mode` checkbox in the upper-right corner is turned on. Click `Load unpacked` and select the `dist` directory in this repository - your extension should now be loaded.

![Installed Extension in Google Chrome](https://i.imgur.com/ORuHbDR.png "Installed Extension in Google Chrome")

</details>

<details>
  <summary>Loading the extension in Brave</summary>

In [Brave](https://brave.com/), open up [brave://extensions](brave://extensions) in a new tab. Make sure the `Developer Mode` checkbox in the upper-right corner is turned on. Click `Load unpacked` and select the `dist` directory in this repository - your extension should now be loaded.

![Installed Extension in Brave](https://i.imgur.com/z8lW02m.png "Installed Extension in Brave")

</details>

<details>
  <summary>Loading the extension in Mozilla Firefox</summary>

In [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/), open up the [about:debugging](about:debugging) page in a new tab. Click the `Load Temporary Add-on...` button and select the `manfiest.json` from the `dist` directory in this repository - your extension should now be loaded.

![Installed Extension in Mozilla Firefox](https://i.imgur.com/gO2Lrb5.png "Installed Extension in Mozilla Firefox")

</details>