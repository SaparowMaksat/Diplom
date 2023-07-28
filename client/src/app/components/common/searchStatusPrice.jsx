import React from 'react'
import PropTypes from 'prop-types'
import InputForm from './form/inputForm'

function SearchStatusPrice({ id, value, onChange }) {
	return (
		<div className='d-flex justify-content-end w-100'>
			<p className='fw-bold mx-2 text-secondary'>Сортировка по стоимости</p>
			<InputForm
				id={id}
				inputStyle='form-control w-25'
				placeholder='от'
				value={value}
				onChange={onChange}
			/>
			<InputForm
				id={id}
				inputStyle='form-control w-25 ms-2'
				placeholder='до'
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}

SearchStatusPrice.propTypes = {
	id: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
}

export default SearchStatusPrice
