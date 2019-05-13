# useCombinedReducers React Hook

[![Build Status](https://travis-ci.org/the-road-to-learn-react/use-combined-reducers.svg?branch=master)](https://travis-ci.org/the-road-to-learn-react/use-combined-reducers) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/the-road-to-learn-react/use-combined-reducers.svg)](https://greenkeeper.io/) [![Coverage Status](https://coveralls.io/repos/github/the-road-to-learn-react/use-combined-reducers/badge.svg?branch=master)](https://coveralls.io/github/the-road-to-learn-react/use-combined-reducers?branch=master) ![NPM](https://img.shields.io/npm/l/use-combined-reducers.svg)

Custom hook to combine all useReducer hooks for one global state container with one dispatch function. Use at top-level and pass dispatch function (and state) down via React's Context API with Provider and Consumer/useContext.

* [Example Application](https://github.com/the-road-to-learn-react/react-with-redux-philosophy)
* ["How to implement it"-tutorial](https://www.robinwieruch.de/redux-with-react-hooks/).
* Philosophy [[1]](https://www.robinwieruch.de/react-state-usereducer-usestate-usecontext/)[[2]](https://www.robinwieruch.de/redux-with-react-hooks/)

## Installation

`npm install use-combined-reducers`

## Usage

```
import useCombinedReducers from 'use-combined-reducers';

const App = () => {
  const [state, dispatch] = useCombinedReducers({
    myTodos: React.useReducer(todoReducer, initialTodos),
    myOtherStuff: React.useReducer(stuffReducer, initialStuff),
  });

  const { myTodos, myOtherStuff } = state;

  ...
}
```

## Contribute

* `git clone git@github.com:the-road-to-learn-react/use-combined-reducers.git`
* `cd use-combined-reducers`
* `npm install`
* `npm run test`

### More

* [Publishing a Node Package to NPM](https://www.robinwieruch.de/publish-npm-package-node/)
* [Node.js Testing Setup](https://www.robinwieruch.de/node-js-testing-mocha-chai/)
