import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './LoginForm.module.css'

type FormValues = {
    email: string
    password: string
}

const LoginForm: React.FC = () => {
    const [activeInput, setActiveInput] = useState<'inputEmail' | 'inputPassword' | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormValues>()

    const onSubmit: SubmitHandler<FormValues> = data => {
        console.log(data)
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

            <button className={styles.buttonSubmit} type='submit'>
                Войти
            </button>
        </form>
    )
}

export default LoginForm
