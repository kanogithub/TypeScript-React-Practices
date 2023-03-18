import { ExpenseTrackerDataType } from '../ExpenseGlobalSettings'
import Button from '../../components/Button'

interface Props {
	data: ExpenseTrackerDataType[]
	onRowDelete?: (data: ExpenseTrackerDataType) => void
}

const ExpenseTrackerList = ({ data, onRowDelete }: Props) => {
	if (data.length === 0) return null
	return (
		<table className='table table-bordered'>
			<thead>
				<tr>
					<th scope='col' className='align-middle'>
						Description
					</th>
					<th scope='col' className='align-middle'>
						Amount
					</th>
					<th scope='col' className='align-middle'>
						Category
					</th>
					<th scope='col'></th>
				</tr>
			</thead>
			<tbody>
				{data.map((row) => {
					return (
						<tr key={row.id}>
							<td className='align-middle'>{row.description}</td>
							<td className='align-middle'>
								${row.amount.toFixed(2)}
							</td>
							<td className='align-middle'>
								{row.category[0].toUpperCase() +
									row.category.slice(1)}
							</td>
							<td className='align-middle text-center'>
								<Button
									colorName={'outline-danger'}
									type={'button'}
									onClickEvent={() =>
										onRowDelete && onRowDelete(row)
									}>
									Delete
								</Button>
							</td>
						</tr>
					)
				})}
			</tbody>
			<tfoot>
				<tr>
					<td className='align-middle'>Total</td>
					<td className='align-middle'>
						$
						{data
							.reduce(
								(_total, expense) => _total + expense.amount,
								0
							)
							.toFixed(2)}
					</td>
					<td></td>
					<td></td>
				</tr>
			</tfoot>
		</table>
	)
}

export default ExpenseTrackerList
