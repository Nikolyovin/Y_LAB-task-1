import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import LoginPage from '../LoginPage/LoginPage'
import MainPage from '../MainPage/MainPage'

const AppRouter = () => {
    const { isAuth } = useAppSelector(state => state.auth)
    return isAuth ? (
        <Routes>
            <Route path='/app' Component={MainPage} />
            <Route path='/*' element={<Navigate to='/app' replace />} />
        </Routes>
    ) : (
        <Routes>
            <Route path='/login' Component={LoginPage} />
            <Route path='/*' element={<Navigate to='/login' replace />} />
        </Routes>
    )
}

export default AppRouter
