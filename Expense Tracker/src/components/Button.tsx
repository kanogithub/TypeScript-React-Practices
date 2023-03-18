interface Props {
	children: string
	type: 'button' | 'submit'
	colorName: 'primary' | 'secondary' | 'success' | 'danger' | 'outline-danger'
	disabled?: boolean
	onClickEvent?: React.MouseEventHandler
}

const Button = ({
	children,
	colorName,
	type,
	disabled = false,
	onClickEvent,
}: Props) => {
	return (
		<button
			type={type}
			className={`btn btn-${colorName}`}
			disabled={disabled}
			onClick={onClickEvent}>
			{children}
		</button>
	)
}

export default Button
