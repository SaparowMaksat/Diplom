import React, { useEffect, useState } from 'react'
import { validator } from '../../utils/validator.js'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthErrors, login } from '../../store/users'
import TextField from '../common/form/textField.jsx'

const LoginForm = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
		stayOn: false,
	})
	const loginError = useSelector(getAuthErrors())
	// const history = useHistory();
	const dispath = useDispatch()
	const [errors, setErrors] = useState({})

	const handleChange = target => {
		setData(prevState => ({
			...prevState,
			[target.name]: target.value,
		}))
	}

	const validatorConfog = {
		email: {
			isRequired: {
				message: 'Электронная почта обязательна для заполнения',
			},
		},
		password: {
			isRequired: {
				message: 'Пароль обязателкн для заполнения',
			},
		},
	}
	useEffect(() => {
		validate()
	}, []) //data в зависомосте должно стоять
	const validate = () => {
		const errors = validator(data, validatorConfog)
		setErrors(errors)
		return Object.keys(errors).length === 0
	}
	const isValid = Object.keys(errors).length === 0

	const handleSubmit = e => {
		e.preventDefault()
		//     const isValid = validate();
		//     if (!isValid) return;
		//     const redirect = history.location.state
		//         ? history.location.state.from.pathname
		//         : "/";

		dispath(login({ payload: data }))
	}
	return (
		<form onSubmit={handleSubmit}>
			<TextField
				label='Электронная почта'
				name='email'
				value={data.email}
				onChange={handleChange}
				error={errors.email}
			/>
			<TextField
				label='Пароль'
				type='password'
				name='password'
				value={data.password}
				onChange={handleChange}
				error={errors.password}
			/>

			{loginError && <p className='text-danger'>{loginError}</p>}

			<button
				type='submit'
				disabled={!isValid}
				className='btn btn-primary w-100 mx-auto'
			>
				Войти
			</button>
		</form>
	)
}

export default LoginForm
