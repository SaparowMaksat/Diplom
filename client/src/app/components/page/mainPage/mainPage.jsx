import React, { useEffect, useState } from 'react'
import API from '../../../api'
import { paginate } from '../../../utils/paginate.js'
import Pagination from '../../common/form/pagination'
import './style.css'
import ProductCard from '../../ui/productCard/productCard'
import SearchStatusPrice from '../../common/searchStatusPrice'

function MainPage() {
	const [currentPage, setCurrentPage] = useState(1)
	const [valuePrice, setValuePrice] = useState('')
	const [cards, setCards] = useState([])
	const countPage = cards.length
	const pageSize = 2

	const handlePageChange = pageIndex => {
		setCurrentPage(pageIndex)
	}

	const handleChangeValue = e => {
		const { value } = e.target
		setValuePrice(value)
	}

	useEffect(() => {
		setCards(API.basket.fetchAll())
	}, [])

	const cardProductPage = paginate(cards, currentPage, pageSize)

	if (pageSize === 1) return null

	return (
		<>
			<section className='w-75 ms-2 rounded'>
				<SearchStatusPrice value={valuePrice} onChange={handleChangeValue} />

				{cardProductPage.map(card => (
					<ProductCard
						key={card._id}
						container='d-flex my-3 ps-2 rounded w-100'
						src={card.image}
						imageStyle='image'
						styleLink='link-underline-light text-secondary fw-bold'
						{...card}
					/>
				))}
				<div className='d-flex my-3 justify-content-center'>
					<Pagination
						itemsCount={countPage}
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChange={handlePageChange}
					/>
				</div>
			</section>
		</>
	)
}

export default MainPage
