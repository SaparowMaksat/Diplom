import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainPage from '../components/page/mainPage/mainPage'
import Breadcrumbs from '../components/common/form/breadcrumbs'
import InputForm from '../components/common/form/inputForm'
import SideGroup from '../components/common/form/saideGroup'

function Main() {
	const [inputValue, setInputValue] = useState('')

	const handleInputValueChange = e => {
		const { value } = e.target
		setInputValue(value)
	}

	return (
		<main className='container-fluid mt-3'>
			<Breadcrumbs content='Главное' label='Все товары' />
			<InputForm
				inputStyle='form-control'
				placeholder='Введите наименование товара...'
				value={inputValue}
				onChange={handleInputValueChange}
			/>
			<div className='d-flex mt-3 w-100'>
				<div className='w-25 rounded'>
					<SideGroup />
				</div>
				<MainPage />
			</div>
			<Outlet />
		</main>
	)
}

export default Main
