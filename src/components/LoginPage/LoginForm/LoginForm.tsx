import { FC, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './LoginForm.module.css'
import { useActions } from '../../../hooks/actions'
import { ILoginData } from '../../../models'

const LoginForm: FC = () => {
    const [activeInput, setActiveInput] = useState<'inputEmail' | 'inputPassword' | null>(null)
    const { loginFetch } = useActions()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ILoginData>()

    const onSubmit: SubmitHandler<ILoginData> = data => {
        console.log(data)
        loginFetch(data)
        reset()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.title}>Вход</h1>
            <label className={`${styles.label} ${activeInput === 'inputEmail' ? styles.labelActive : ''}`}>
                Email:
            </label>
            <input
                autoComplete='off'
                onFocus={() => setActiveInput('inputEmail')}
                type='email'
                className={`${styles.input} ${!errors.email ? '' : styles.inputError}`}
                {...register('email', { required: 'Email is required', onBlur: () => setActiveInput(null) })}
            />
            {errors.email && <p className={styles.textError}>{errors.email.message}</p>}

            <label className={`${styles.label} ${activeInput === 'inputPassword' ? styles.labelActive : ''}`}>
                Password:
            </label>
            <input
                onFocus={() => setActiveInput('inputPassword')}
                type='password'
                className={`${styles.input} ${!errors.password ? '' : styles.inputError}`}
                {...register('password', { required: 'Password is required', onBlur: () => setActiveInput(null) })}
            />
            {errors.password && <p className={styles.textError}>{errors.password.message}</p>}

            <button className='button' type='submit'>
                Войти
            </button>
        </form>
    )
}

export default LoginForm
