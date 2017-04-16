<h1 align="center">MathworldVR</h1>

<p align="center"><a href="http://vr.sld.gs/mathworldvr/" target="_blank"><img width="500" alt="MathworldVR" src="https://raw.githubusercontent.com/michaltakac/mathworldvr/master/public/mathworldvr.jpg"></a></p>

<p align="center">WebVR math platform made with A-Frame, Three.js, React, Redux.</p>

<p align="center">
  <a href="https://travis-ci.org/michaltakac/mathworldvr"><img src="https://img.shields.io/travis/michaltakac/mathworldvr.svg?style=flat-square" alt="Build Status"></a>
  <a href="https://codecov.io/gh/michaltakac/mathworldvr">
    <img src="https://img.shields.io/codecov/c/github/michaltakac/mathworldvr.svg?style=flat-square" alt="Coverage Status">
  </a>
  <a href="https://codeclimate.com/github/michaltakac/mathworldvr/"><img src="https://img.shields.io/codeclimate/github/michaltakac/mathworldvr.svg?style=flat-square" alt="Code climate"></a>
  <img src="https://img.shields.io/github/tag/michaltakac/mathworldvr.svg?style=flat-square" alt="Tag">
  <img src="https://img.shields.io/github/license/michaltakac/mathworldvr.svg?style=flat-square" alt="License">
</p>

## Usage

- Download and install a [WebVR-enabled browser](https://webvr.info/get-chrome/). Currently only the experimental Chromium build on Windows supports the Vive controllers. (You will need to enable these flags for WebVR and Gamepad Extensions: `chrome://flags#enable-webvr` and `chrome://flags#enable-gamepad-extensions`.)
- Visit [http://vr.sld.gs/mathworldvr/](http://vr.sld.gs/mathworldvr/) and play with the math functions.

## Libraries

- [react](https://facebook.github.io/react/)
- [redux](http://reactjs.github.io/redux/)
- [aframe](https://github.com/aframevr/aframe/)
- [aframe-react](https://github.com/aframevr/aframe-react/)
- [aframe-teleport-controls](https://github.com/fernandojsg/aframe-teleport-controls)
- [super-hands](https://github.com/wmurphyrd/aframe-super-hands-component)
- [jest](https://facebook.github.io/jest/) Painless JavaScript Testing.
- And much more. Explore the repository.

## App state in predictable state container

MathworldVR uses Redux for all the stuff around the app's state. It helps you write applications that behave consistently. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger. For example, CalcButton component
used as a backspace on calculator is dispatching Redux action when user "clicks it" with VR hand-controller!

Stateless Calculator component:

```javascript
const Calculator = ({ backspace }) => {
  return (
    <Entity className="interactive calculator">
      // ...
      <CalcButton value="<-" id="calc-backspace" actionToTrigger={backspace} />
      // ...
    </Entity>
  )
}
```

Calculator container (a.k.a HoC - Higher-order Component):

```javascript
import { connect } from 'react-redux'
import { Calculator } from 'components'
import { calculatorBackspace } from 'actions'

// ...
const mapDispatchToProps = (dispatch) => ({
  backspace: () => dispatch(calculatorBackspace()),
})

export default connect(mapDispatchToProps)(Calculator)
```

CalcButton nicely dispatching Redux action that we are passing to it dynamically on 'hover-start' event:

```javascript
export default class CalcButton extends React.Component {
  startIntersection = () => {
    const { actionToTrigger } = this.props
    // Dispatching Redux action from within WebVR
    // by touching the CalcButton with VR hand-controller
    actionToTrigger()
  }

  render() {
    return (
      <Entity
        id={this.props.id}
        className="interactive button"
        hoverable
        clickable
        events={{
          'hover-start': this.startIntersection
        }}
      >
        <Text value={this.props.value} />
      </Entity>
    )
  }
}
```

## Local Development

### Prerequisites

- [node.js](http://nodejs.org) Node 6+
- [git](https://git-scm.com/downloads) git cmd tool is required

First, fork the project. Then:

```bash
git clone git@github.com:yourusername/mathworldvr && cd mathworldvr
npm install // or yarn install
npm start
```

Then, load [`http://localhost:3000`](http://localhost:3000) in your browser.

### Generating Builds

```bash
npm run build
```

## Questions

For questions and support, [ask on StackOverflow](http://stackoverflow.com/questions/ask/?tags=mathworldvr).

## Stay in Touch

- [Follow @michaltakac on Twitter](https://twitter.com/michaltakac).

## A-Frame Community

- To hang out with the community, [join the A-Frame Slack](https://aframevr-slack.herokuapp.com).
- [Follow `A Week of A-Frame` on the A-Frame blog](https://aframe.io/blog).
- [Follow @aframevr on Twitter](https://twitter.com/aframevr).

## Contributing

Get involved! Check out the [Contributing Guide](CONTRIBUTING.md) for how to get started.

## License

This program is free software and is distributed under an [MIT License](LICENSE).
