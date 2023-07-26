import React from 'react'
import Button from '../../common/form/button'

function ProductList() {
	return (
		<div>
			<table className='table'>
				<thead>
					<tr>
						<th scope='col'>id</th>
						<th scope='col'>Наименование</th>
						<th scope='col'>Категория</th>
						<th scope='col'>Стоимость</th>
						<th scope='col'>Кол-во</th>
						<th scope='col'>Фото</th>
						<th />
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope='row'>1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>3</td>
						<td>url</td>
						<td>
							<Button
								label={'Редактировать'}
								buttonStyle={'btn btn-secondary'}
							/>
						</td>
					</tr>
					<tr>
						<th scope='row'>2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default ProductList
