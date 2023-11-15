import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ILoginData, ILoginResponse } from '../../models'
// import { ILoginData, IRegistrationData } from '../../models/uiModels'
// import { ACTIVE_USER } from '../../helpers/constants'

const IS_AUTH = 'isAuth'
const ACTIVE_USER = 'ACTIVE_USER'

interface InitialStateType {
    isAuth: boolean
    isLoading: boolean
    // errorLogin: string
    // errorRegistration: string
    // successRegistration: string
    activeUser: string
}

const initialState: InitialStateType = {
    isAuth: JSON.parse(localStorage.getItem(IS_AUTH) ?? '[]'),
    isLoading: false,
    // errorLogin: '',
    // errorRegistration: '',
    // successRegistration: '',
    activeUser: localStorage.getItem(ACTIVE_USER) || '[]'
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
            localStorage.setItem(IS_AUTH, JSON.stringify(state.isAuth))
        },
        loginFetch(state, _action: PayloadAction<ILoginData>) {
            state.isLoading = true
        },
        loginSuccess(state, action: PayloadAction<ILoginResponse>) {
            // state.errorLogin = ''
            state.isLoading = false
            state.isAuth = true
            localStorage.setItem(IS_AUTH, JSON.stringify(true))
            state.activeUser = action.payload.email
            localStorage.setItem(ACTIVE_USER, JSON.stringify(action.payload.email))
        },
        logout(state) {
            state.isAuth = false
            localStorage.setItem(IS_AUTH, JSON.stringify(false))
            localStorage.setItem(ACTIVE_USER, JSON.stringify(''))
        }
    }
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
