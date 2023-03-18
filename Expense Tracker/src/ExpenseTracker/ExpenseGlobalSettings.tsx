import { z } from 'zod'

export const categroies = ['groceries', 'utilities', 'entertainment'] as const

// Zod validation declare
export const ExpenseSchema = z.object({
	description: z
		.string()
		.min(3, { message: 'Descript must have at lease 3 characters' })
		.max(50),
	amount: z
		.number({ invalid_type_error: 'Amount filed is required' })
		.min(1)
		.max(10_000),
	category: z.enum(categroies, {
		errorMap: () => ({
			message: 'Category is reuiqred',
		}),
	}),
})

export type FormPropsType = z.infer<typeof ExpenseSchema>

export type ExpenseCategory = 'groceries' | 'utilities' | 'entertainment' | ''

export type ExpenseTrackerDataType = FormPropsType & {
	id: number
}
