<h1 align="center">MathworldVR</h1>

<p align="center"><a href="https://mathworldvr.com/" target="_blank"><img width="500" alt="MathworldVR" src="https://raw.githubusercontent.com/michaltakac/mathworldvr/master/public/mathworldvr.jpg"></a></p>

<p align="center">WebVR math platform made with Three.js and React (react-three-fiber)</p>

<p align="center">
  <a href="https://travis-ci.org/michaltakac/mathworldvr"><img src="https://img.shields.io/travis/michaltakac/mathworldvr.svg?style=flat-square" alt="Build Status"></a>
  <a href="https://codecov.io/gh/michaltakac/mathworldvr">
    <img src="https://img.shields.io/codecov/c/github/michaltakac/mathworldvr.svg?style=flat-square" alt="Coverage Status">
  </a>
  <a href="https://codeclimate.com/github/michaltakac/mathworldvr/"><img src="https://img.shields.io/codeclimate/github/michaltakac/mathworldvr.svg?style=flat-square" alt="Code climate"></a>
  <img src="https://img.shields.io/badge/tested_with-jest-99424f.svg?style=flat-square" alt="tested with jest">
  <img src="https://img.shields.io/github/tag/michaltakac/mathworldvr.svg?style=flat-square" alt="Tag">
  <img src="https://img.shields.io/github/license/michaltakac/mathworldvr.svg?style=flat-square" alt="License">
</p>

## Usage

- Download and install a [WebXR-enabled browser](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API#Browser_compatibility). Currently only Chrome and Firefox supports it.
- ~~Visit [https://mathworldvr.com/](https://mathworldvr.com/) and play with the math functions.~~

## Libraries

- [react](https://facebook.github.io/react/)
- [jest](https://facebook.github.io/jest/) Painless JavaScript Testing.
- And much more. Explore the repository.

## Local Development

### Prerequisites

- [node.js](http://nodejs.org) Node 6+
- [git](https://git-scm.com/downloads) cmd tool is required

First, fork the project. Then:

```bash
git clone git@github.com:yourusername/mathworldvr && cd mathworldvr
git checkout webxr-three-ecs
cd client
npm install // or yarn install
npm start
```

Then, load [`http://localhost:3000`](http://localhost:3000) in your browser.

### "I don't own VR headset, how can I help with development?"

You can use [WebXR emulator](https://blog.mozvr.com/webxr-emulator-extension/).

### Generating Builds

```bash
npm run build
```

## Questions

For questions and support, [ask on StackOverflow](http://stackoverflow.com/questions/ask/?tags=mathworldvr).

## Stay in Touch

- [Follow @michaltakac on Twitter](https://twitter.com/michaltakac).

## Contributing

Get involved! Check out the [Contributing Guide](CONTRIBUTING.md) for how to get started.

## License

This program is free software and is distributed under an [MIT License](LICENSE).
