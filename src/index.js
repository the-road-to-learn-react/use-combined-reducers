function memoize(fn) {
  let lastResult,
    //initial last arguments is not going to be the same
    //  as anything you will pass to the function the first time
    lastArguments = [{}];
  return (...currentArgs) => {
    //returning memoized function
    //check if currently passed arguments are the same as
    //  arguments passed last time
    const sameArgs =
      currentArgs.length === lastArguments.length &&
      lastArguments.reduce(
        (result, lastArg, index) =>
          result && Object.is(lastArg, currentArgs[index]),
        true,
      );
    if (sameArgs) {
      //current arguments are same as last so just
      //  return the last result and don't execute function
      return lastResult;
    }
    //current arguments are not the same as last time
    //  or function called for the first time, execute the
    //  function and set last result
    lastResult = fn.apply(null, currentArgs);
    //set last args to current args
    lastArguments = currentArgs;
    //return result
    return lastResult;
  };
}

const createDispatch = memoize((...dispatchers) => action =>
  dispatchers.forEach(fn => fn(action)),
);

const useCombinedReducers = combinedReducers => {
  // Global State
  const state = Object.keys(combinedReducers).reduce(
    (acc, key) => ({ ...acc, [key]: combinedReducers[key][0] }),
    {},
  );

  const dispatchers = Object.values(combinedReducers).map(
    ([, dispatch]) => dispatch,
  );

  // Global Dispatch Function
  const dispatch = createDispatch(...dispatchers);

  return [state, dispatch];
};

export default useCombinedReducers;
