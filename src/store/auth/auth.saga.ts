import { put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { ILoginData } from '../../models'
import { authActions } from './auth.slice'
import AuthService from '../../services/AuthService'

function* workLoginFetch({ payload }: PayloadAction<ILoginData>): any {
    try {
        const authData = yield AuthService.Login(payload)
        yield put(authActions.loginSuccess(authData))
    } catch (error) {
        throw error
    }
}

function* authSaga() {
    yield takeLatest('auth/loginFetch', workLoginFetch)
}

export default authSaga
