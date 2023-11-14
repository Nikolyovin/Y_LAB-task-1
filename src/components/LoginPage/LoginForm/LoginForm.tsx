import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './LoginForm.module.css'

type FormValues = {
    email: string
    password: string
}

const LoginForm: React.FC = () => {
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
            <label className={styles.label}>Email:</label>
            <input className={styles.input} {...register('email', { required: 'Email is required' })} />
            {errors.email && <p className={styles.textError}>{errors.email.message}</p>}

            <label className={styles.label}>Password:</label>
            <input className={styles.input} {...register('password', { required: 'Password is required' })} />
            {errors.password && <p className={styles.textError}>{errors.password.message}</p>}

            <button className={styles.buttonSubmit} type='submit'>
                Войти
            </button>
        </form>
    )
}

export default LoginForm
