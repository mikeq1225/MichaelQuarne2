import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_EXAMPLE = "ex/GET_EXAMPLE"

const initialState = {
  foo: "bar"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EXAMPLE:
      return { ...state, foo: action.payload }
    default:
      return state
  }
}

function getExample() {
  return dispatch => {
    axios.get("/api").then(resp => {
      const data = resp.data
      dispatch({
        type: GET_EXAMPLE,
        payload: data.message
      })
    })
  }
}

export function useExample() {
  const dispatch = useDispatch()
  const foo = useSelector(appState => appState.exampleState.foo)
  const get = () => dispatch(getExample())

  return { foo, get }
}
