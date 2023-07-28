import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function SideGroup({ userId }) {
	let createLink = '/auth/login' ? '/auth/login' : '/auth/:userId/createProduct'
	let basketLink = '/auth/login' ? '/auth/login' : '/auth/:userId/basket'
	let favoritesLink = '/auth/login' ? '/auth/login' : '/auth/:userId/favorites'

	return (
		<>
			<aside>
				<ul className='list-group'>
					<li className='list-group-item'>
						<Link
							to='/'
							className='hover link-underline-light fw-semibold text-uppercase'
						>
							<i className='bi bi-house-fill mx-2'></i>
							Главное
						</Link>
					</li>
					<li className='list-group-item'>
						<Link
							to={createLink}
							className='hover link-underline-light fw-semibold text-uppercase'
						>
							<i className='bi bi-file-earmark-plus mx-2'></i>
							Добавить
						</Link>
					</li>
					<li className='list-group-item'>
						<Link
							to={basketLink}
							className='hover link-underline-light fw-semibold text-uppercase'
						>
							<i className='bi bi-basket3-fill mx-2'></i>
							Корзина
						</Link>
					</li>
					<li className='list-group-item'>
						<Link
							to={favoritesLink}
							className='hover link-underline-light fw-semibold text-uppercase'
						>
							<i className='bi bi-heart-fill mx-2'></i>
							Избранное
						</Link>
					</li>
					{userId ? (
						<li className='list-group-item'>
							<Link
								to='/'
								className='hover link-underline-light fw-semibold text-uppercase'
							>
								<i className='bi bi-box-arrow-left mx-2'></i>
								Выйти
							</Link>
						</li>
					) : (
						<li className='list-group-item'>
							<Link
								to='auth/login'
								className='hover link-underline-light fw-semibold text-uppercase'
							>
								<i className='bi bi-box-arrow-right mx-2'></i>
								Войти
							</Link>
						</li>
					)}
				</ul>
			</aside>
		</>
	)
}

SideGroup.propTypes = {
	userId: PropTypes.string,
}

export default SideGroup
