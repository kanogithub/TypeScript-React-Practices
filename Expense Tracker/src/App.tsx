import { useState } from 'react'
import ExpenseBrackerForm from './ExpenseTracker/components/ExpenseBrackerForm'
import ExpenseTrackerList from './ExpenseTracker/components/ExpenseTrackerList'
import ExpenseFilter from './ExpenseTracker/components/ExpenseFilter'
import {
	ExpenseCategory,
	ExpenseTrackerDataType,
} from './ExpenseTracker/ExpenseGlobalSettings'

function App() {
	const [traceData, setTraceData] = useState<ExpenseTrackerDataType[]>([])
	const [filterString, setFilterString] = useState<ExpenseCategory>('')

	// Event handler
	const handleFormSubmit = (data: ExpenseTrackerDataType) => {
		setTraceData([...traceData, { ...data, id: traceData.length + 1 }])
	}
	const handleRowDelet = (expensData: ExpenseTrackerDataType) => {
		setTraceData(
			traceData.filter((_data) => {
				return _data != expensData
			})
		)
	}
	const handleFilterChange = (value: ExpenseCategory) => {
		setFilterString(value)
	}

	// Filter function
	const applyFilter = (_data: ExpenseTrackerDataType[], _queryStr: string) =>
		_queryStr ? _data.filter((row) => row.category === _queryStr) : _data

	return (
		<div className='container-fluid m-3'>
			<div className='col-4'>
				<ExpenseBrackerForm onFormSubmit={handleFormSubmit} />
			</div>
			{traceData.length > 0 && (
				<div className='col-4 mt-4'>
					<div className='mb-3'>
						<ExpenseFilter<ExpenseCategory>
							filterstring={filterString}
							onFilterChange={handleFilterChange}
						/>
					</div>
					<ExpenseTrackerList
						data={applyFilter(traceData, filterString)}
						onRowDelete={handleRowDelet}
					/>
				</div>
			)}
		</div>
	)
}

export default App
