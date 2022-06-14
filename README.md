# Website

The [janm.dev website](https://janm.dev).

## Related projects

- [**qna**](https://qna.janm.dev) - Cross-screen QnA question queue.
- [**ws-relay**](https://github.com/janm-dev/ws-relay) - Websocket relay server.

## Running locally

0. Make sure [Node.js](https://nodejs.org/) (`v14.17.0` or later), [npm](https://www.npmjs.com/), and [yarn](https://yarnpkg.com/) are installed. [Clone this repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).
1. In the root directory of this project, run `yarn install` to install all dependencies.
2. Optionally, add a file named `.env` with the contents `NEXT_PUBLIC_NAME=local.janm.dev`.
3. Run `yarn start` to start a development webserver. This will automatically refresh the site when you change any file. This is recommended for development.
4. Optionally, run `yarn build` and `npx serve -s build` to create and view an optimized production version. This is recommended for final tests before committing.

## Design

The design files for this project are available (read-only) on [figma](https://www.figma.com). There, you can find the [library of colors and fonts](https://www.figma.com/file/WgcBPSvtR8LJZq3oFMLFdp/library) that the project uses, the [website design files](https://www.figma.com/file/ESsWG7a5EDno1CBk0cOcXM/web), as well as [various other assets](https://www.figma.com/file/SfQFpmiB0SjptGIr3wpC1G/assets) (for example the logo).

Not all pages, assets, and components are fully represented in the design files.

## Attribution

- This project uses a modified version of [Automattic's Privacy Policy](https://github.com/Automattic/legalmattic), licensed under the [Creative Commons Sharealike](https://creativecommons.org/licenses/by-sa/4.0/) license.
- This project uses the [Inter](https://github.com/rsms/inter/) font, licensed under the [Open Font License](https://scripts.sil.org/OFL). For more info, check the `public/fonts/inter.LICENSE` file.
- This project uses the [Roboto](https://github.com/google/roboto/) font, licensed under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0). For more info, check the `public/fonts/roboto.LICENSE` file.
- This project uses the [Roboto Mono](https://github.com/google/roboto/) font, licensed under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0). For more info, check the `public/fonts/roboto-mono.LICENSE` file.

## License

The privacy policy (`privacy-policy.md`) is licensed under the [Creative Commons Sharealike](https://creativecommons.org/licenses/by-sa/4.0/) (`CC BY-SA 4.0`) license.

The design for this project is licensed under the [Creative Commons Sharealike](https://creativecommons.org/licenses/by-sa/4.0/) (`CC BY-SA 4.0`) license.

The rest of this project is licensed under GNU AGPLv3 or later (`AGPL-3.0-or-later`). You can find the full license text in the LICENSE file.
