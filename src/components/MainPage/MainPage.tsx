import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'

const MainPage = () => {
    const { logout } = useActions()
    const { activeUser } = useAppSelector(state => state.auth)
    return (
        <div>
            <span>{activeUser}</span>
            <button onClick={() => logout()}>Выйти</button>
        </div>
    )
}

export default MainPage
