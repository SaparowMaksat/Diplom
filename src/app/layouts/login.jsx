import React, { useState } from 'react'
import { useParams } from 'react-router'
import RegisterForm from '../components/ui/registerForm'
import LoginForm from '../components/ui/loginForm'
import { Link } from 'react-router-dom'

const Login = () => {
	const { type } = useParams()
	const [formType, setFormType] = useState(type === 'register' ? type : 'login')
	const toggleFormType = () => {
		setFormType(prevState => (prevState === 'register' ? 'login' : 'register'))
	}

	return (
		<div className='container mt-5'>
			<div className='row'>
				<div className='col-md-6 offset-md-3 shadow p-4'>
					{formType === 'register' ? (
						<>
							<h3 className='mb-4'>Регистрация</h3>
							<RegisterForm />
							<p className='mt-3'>
								У вас уже есть аккаунт?{' '}
								<Link
									className='hover link-underline-light'
									role='button'
									onClick={toggleFormType}
								>
									{' '}
									Войти
								</Link>
							</p>
						</>
					) : (
						<>
							<h3 className='mb-4'>Войти</h3>
							<LoginForm />
							<p className='mt-3'>
								Нет учетной записи?{' '}
								<Link
									className='hover link-underline-light'
									role='button'
									onClick={toggleFormType}
								>
									{' '}
									Зарегистрироваться
								</Link>
							</p>
						</>
					)}
				</div>
			</div>
		</div>
	)
}
export default Login
