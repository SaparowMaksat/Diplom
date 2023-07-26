import React from 'react'
import PropTypes from 'prop-types'

function Button({ label, onClick, children, buttonStyle, type }) {
	return (
		<button onClick={onClick} className={buttonStyle} type={type}>
			{label || children}
		</button>
	)
}

Button.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func,
	buttonStyle: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.node], PropTypes.node),
}

export default Button
