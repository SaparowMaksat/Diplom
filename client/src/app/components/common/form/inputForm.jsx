import React from 'react'
import PropTypes from 'prop-types'

function InputForm({
	label,
	htmlFor,
	id,
	name,
	type,
	value,
	inputStyle,
	placeholder,
	onChange,
}) {
	return (
		<>
			<label htmlFor={htmlFor}>{label}</label>
			<input
				id={id}
				name={name}
				type={type}
				value={value}
				className={inputStyle}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</>
	)
}

InputForm.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string], PropTypes.number),
	onChange: PropTypes.func,
	inputStyle: PropTypes.string,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	htmlFor: PropTypes.string,
}

export default InputForm
