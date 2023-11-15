import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import { authReducer } from './auth/auth.slice'

const saga = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: [saga]
})

saga.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
