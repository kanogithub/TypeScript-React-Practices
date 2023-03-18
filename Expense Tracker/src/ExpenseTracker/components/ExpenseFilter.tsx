import { categroies as cateList } from '../ExpenseGlobalSettings'

interface Props<T> {
	filterstring: string
	onFilterChange: (string: T) => void
}

function ExpenseFilter<T>({ filterstring, onFilterChange }: Props<T>) {
	return (
		<select
			value={filterstring}
			id='category'
			className='form-select'
			onChange={(e) => onFilterChange(e.target.value as T)}>
			<option value=''>All categories</option>
			{cateList.map((cate) => (
				<option key={cate} value={cate}>
					{cate[0].toUpperCase() + cate.slice(1)}
				</option>
			))}
		</select>
	)
}

export default ExpenseFilter
