import { FC } from 'react'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import styles from './MainPage.module.css'

const MainPage: FC = () => {
    const { logout } = useActions()
    const { activeUser } = useAppSelector(state => state.auth)

    return (
        <main className={styles.main}>
            <p className={styles.text}>Пользователь {activeUser} успешно авторизован!</p>
            <button className='button' onClick={() => logout()}>
                Выйти
            </button>
        </main>
    )
}

export default MainPage
