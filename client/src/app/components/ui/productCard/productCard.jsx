import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../../common/form/button'

function ProductCard({
	src,
	info,
	imageStyle,
	styleLink,
	label,
	container,
	desc,
	price,
	onClick,
	toLink,
	onChange,
}) {
	return (
		<>
			<div className={container}>
				<img src={src} className={imageStyle} alt={info} />
				<div className='w-75 px-2'>
					<Link to={toLink} className={styleLink}>
						{label}
					</Link>
					<p className='mt-3'>{desc}</p>
					<p className='fw-bold'>{`${price} ₽`}</p>
				</div>
				<div className='d-flex flex-column justify-content-between align-items-end'>
					<i className={`bi bi-heart hover ${onChange}`}></i>
					<Button
						onClick={onClick}
						label='открыть'
						buttonStyle='btn btn-primary m-2'
					/>
				</div>
			</div>
		</>
	)
}

ProductCard.propTypes = {
	src: PropTypes.string,
	info: PropTypes.string,
	imageStyle: PropTypes.string,
	styleLink: PropTypes.string,
	label: PropTypes.string,
	container: PropTypes.string,
	desc: PropTypes.string,
	price: PropTypes.number,
	onClick: PropTypes.func,
	toLink: PropTypes.string,
	onChange: PropTypes.func,
}

export default ProductCard
