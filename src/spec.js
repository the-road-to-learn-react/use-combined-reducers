import { expect } from 'chai';
import { spy } from 'sinon';

import useCombinedReducers from './';

describe('useCombinedReducer', () => {
  it('returns a state object with defined substates', () => {
    const [state, dispatch] = useCombinedReducers({
      a: ['1', () => {}],
      b: ['2', () => {}],
    });

    expect(state).to.eql({ a: '1', b: '2' });
  });

  it('returns a dispatch function that calls all child dispatch functions', () => {
    const aCallback = spy();
    const bCallback = spy();

    const [state, dispatch] = useCombinedReducers({
      a: ['1', aCallback],
      b: ['2', bCallback],
    });

    dispatch({ type: 'SOME_ACTION' });

    expect(aCallback.calledOnce).to.eql(true);
    expect(bCallback.calledOnce).to.eql(true);
  });
});

describe('dispatch should not change reference', () => {
  const reactDispatch = () => {};
  const otherDispatch = () => {};

  it('should not create a new dispatch reference if not needed', () => {
    const [, dispatch1] = useCombinedReducers({
      a: ['1', reactDispatch],
    });
    const [, dispatch2] = useCombinedReducers({
      a: ['1', reactDispatch],
    });
    expect(dispatch1).to.be.equal(dispatch2);
  });
  it('should create a new dispatch reference if changed', () => {
    const [, dispatch1] = useCombinedReducers({
      a: ['1', reactDispatch],
    });
    const [, dispatch2] = useCombinedReducers({
      a: ['1', otherDispatch],
    });
    expect(dispatch1).to.not.be.equal(dispatch2);
  });
});

describe('state should not change reference', () => {
  const reactDispatch = () => {};
  const otherDispatch = () => {};
  const combined = {
    a: ['1', reactDispatch],
  };
  it('should not create a new dispatch reference if not needed', () => {
    const [state1] = useCombinedReducers(combined);
    const [state2] = useCombinedReducers(combined);
    expect(state1).to.be.equal(state2);
  });
  // it('should create a new dispatch reference if changed', () => {
  //   const [, dispatch1] = useCombinedReducers({
  //     a: ['1', reactDispatch],
  //   });
  //   const [, dispatch2] = useCombinedReducers({
  //     a: ['1', otherDispatch],
  //   });
  //   expect(dispatch1).to.not.be.equal(dispatch2);
  // });
});
