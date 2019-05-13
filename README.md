# useCombinedReducers React Hook

[![Build Status](https://travis-ci.org/the-road-to-learn-react/use-combined-reducers-hook.svg?branch=master)](https://travis-ci.org/the-road-to-learn-react/node-babel-server) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/the-road-to-learn-react/use-combined-reducers-hook.svg)](https://greenkeeper.io/)

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
    filter: useReducer(filterReducer, 'ALL'),
    todos: useReducer(todoReducer, initialTodos),
  });

  const { filter, todos } = state;

  ...
}
```

## Contribute

* `git clone git@github.com:the-road-to-learn-react/use-combined-reducers-hook.git`
* `cd use-combined-reducers-hook`
* `npm install`
