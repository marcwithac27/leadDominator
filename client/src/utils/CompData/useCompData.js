import {useContext} from 'react';
import {compDataStore} from './compDataStore';

const useCompData = name => {
  if(!name || typeof name !== 'string') {
    throw Error('Must provide a name to useCompData(name).')
  }
  const {state, dispatch} = useContext(compDataStore);
  const getCompData = compName => state[compName] || {};
  const setData = (payload, altName = name) => {
    if(typeof altName !== 'string') {
      throw Error('Second parameter to setData(object, [string]) must be a string.')
    }
    return dispatch({type: 'SET_DATA', name: altName, payload});
  };
  const clearStore = () => dispatch({type: 'CLEAR_STORE'});
  const clearComp = (altName) => {
    if (typeof altName === 'string') {
      return dispatch({type: 'CLEAR_COMP', name: altName });
    }
      return dispatch({type: 'CLEAR_COMP', name });
  };
  return {setData, compData: getCompData(name), getCompData, clearStore, clearComp};
};

export default useCompData;
