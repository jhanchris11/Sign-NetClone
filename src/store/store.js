import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
const jwtToken = localStorage.getItem('JWT_TOKEN')
console.log(jwtToken)
const store = createStore(
    reducer,
    {
        auth: {
            token: jwtToken,
            isAutenticated: jwtToken ? true : false
        }
    },
    compose(applyMiddleware(thunk),

        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__() !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)
console.log(store)

export default store