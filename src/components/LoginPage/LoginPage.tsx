import { useAppSelector } from '../../hooks/redux'
import LoginForm from './LoginForm/LoginForm'
import styles from './LoginPage.module.css'
import ReactLoading from 'react-loading'

const LoginPage = () => {
    const { isLoading } = useAppSelector(state => state.auth)
    return (
        <div className={styles.conteiner}>
            {isLoading ? <ReactLoading type='spin' color='#9c27b0' height={100} width={100} /> : <LoginForm />}
        </div>
    )
}

export default LoginPage
