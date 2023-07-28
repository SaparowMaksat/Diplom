import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Button from '../../common/form/button'

function NavBar() {
	const navigate = useNavigate()
	const handleLink = () => {
		navigate('/auth/login')
	}

	return (
		<>
			<nav className='navbar navbar-expand-lg bg-body-tertiary'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/'>
						Диплом
					</Link>
					<div className='collapse navbar-collapse'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link className='nav-link active' aria-current='page' to='/'>
									<i className='bi bi-house mx-2'></i>
									Главное
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/createProduct'>
									<i className='bi bi-file-earmark-plus mx-2'></i>
									Разместить объявление
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/basket'>
									<i className='bi bi-cart4 mx-2'></i>
									Корзина
								</Link>
							</li>
							<li className='nav-item dropdown'>
								<Link
									className='nav-link dropdown-toggle'
									to='/catalog'
									role='button'
								>
									<i className='bi bi-card-heading mx-2'></i>
									Категорий
								</Link>
								<ul className='dropdown-menu'>
									<li>
										<Link className='dropdown-item' to='#'>
											Action
										</Link>
									</li>
									<li>
										<Link className='dropdown-item' to='#'>
											Another action
										</Link>
									</li>
									<li>
										<Link className='dropdown-item' to='#'>
											Something else here
										</Link>
									</li>
								</ul>
							</li>
						</ul>
						<div className='d-flex justify-content-center align-items-center'>
							<Button
								label={'Войти'}
								buttonStyle={'btn btn-outline-success'}
								type={'submit'}
								onClick={handleLink}
							/>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default NavBar
