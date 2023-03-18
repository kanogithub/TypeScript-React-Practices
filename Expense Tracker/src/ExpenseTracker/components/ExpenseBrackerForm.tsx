import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	categroies as cateList,
	ExpenseSchema as schema,
	FormPropsType,
} from '../ExpenseGlobalSettings'
import Button from '../../components/Button'

interface Props {
	onFormSubmit: Function
}

const ExpenseBrackerForm = ({ onFormSubmit }: Props) => {
	// Use hook-form for state and info, zodResolver for validation, zod for validation schema and type
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormPropsType>({ resolver: zodResolver(schema) })

	// Event Handler
	const onSubmitHandler = (data: FormPropsType) => {
		onFormSubmit(data)
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmitHandler)}>
			<div className='mb-3'>
				<div className='mb-3'>
					<label htmlFor='description' className='form-label'>
						Description*
					</label>
					<input
						{...register('description')}
						id='description'
						type='text'
						className='form-control'
					/>
					{errors.description && (
						<p className='text-danger'>
							{errors.description.message}
						</p>
					)}
				</div>

				<div className='mb-3'>
					<label htmlFor='amount' className='form-label'>
						Amount*
					</label>
					<input
						{...register('amount', { valueAsNumber: true })}
						id='amount'
						type='number'
						className='form-control'
					/>
					{errors.amount && (
						<p className='text-danger'>{errors.amount.message}</p>
					)}
				</div>

				<div className='mb-3'>
					<label htmlFor='category' className='form-label'>
						Category*
					</label>
					<select
						{...register('category')}
						id='category'
						className='form-select'>
						<option value=''>-- Select a category --</option>
						{cateList.map((cate) => (
							<option key={cate} value={cate}>
								{cate[0].toUpperCase() + cate.slice(1)}
							</option>
						))}
					</select>
					{errors.category && (
						<p className='text-danger'>{errors.category.message}</p>
					)}
				</div>

				<Button type='submit' colorName='primary'>
					Submit
				</Button>
			</div>
		</form>
	)
}

export default ExpenseBrackerForm
