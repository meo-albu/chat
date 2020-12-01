import types from './types'

export const setActive = (name) => {
  return {
    type: types.SET_ACTIVE,
    payload: name
  }
}