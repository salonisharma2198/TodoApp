import { styled } from '@mui/system';
import { Button, Card, Grid, TextField, Typography, Divider, Box } from '@mui/material';

export const HeaderWrapper = styled('div')(({ theme }) => ({
	height: '82px',
	borderRadius: '0px, 0px, 8px, 8px',
	border: '2px solid #A35709',
}));

export const TextWrapper = styled('div')(({ theme }) => ({
	position: 'relative',
	top: '17px',
	marginLeft: '25px',
	width: '100%'
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
	fontSize: '24px',
	fontWeight: 700,
	lineHeight: '28px',
	letterSpacing: '0em',
	textAlign: 'left',
}));

export const HeaderSubText = styled(Typography)(({ theme }) => ({
	fontSize: '16px',
	fontWeight: 700,
	lineHeight: '19px',
	letterSpacing: '0em',
	textAlign: 'left',
}));

export const TodoTextField = styled(TextField)(({ theme }) => ({
	width: '466px',
	color: '#fff',
	'& .MuiOutlinedInput-root': {
		borderRadius: '4px',
		border: '1px solid #FF8303',
		height: '32px',
		fontSize: '14px',
		'&:hover fieldset': {
			border: 'none',
			height: '32px',
		},
		'&.Mui-focused fieldset': {
			border: 'none',
			height: '32px',
		},
	},
	'& .MuiInputLabel-root': {
		fontSize: '14px',
		color: '#fff',
	},
}));

export const TextFieldWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '11px',
	height: '27vh',
}));

export const ListFormWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));

export const AddButton = styled(Button)(({ theme }) => ({
	width: '70px',
	height: '78px',
	borderRadius: '8px',
	border: '2px solid #FF8303',
	color: '#fff',
	marginLeft: '5px',
	fontSize: '12px',
	cursor: 'pointer',
}));

export const CardWrapper = styled(Card)(({ theme }) => ({
	backgroundColor: '#242320',
	color: 'white',
	border: '2px solid #A35709',
	borderRadius: '8px',
	display: 'flex',
	height: '72px',
	gap: '16px',
	justifyContent: 'space-between',
	width: '345px'
}));

export const CardOutLine = styled(Grid)(({ theme }) => ({
	minHeight: '348px',
	padding: '40px',
	borderRadius: '8px',
	border: ' 2px solid #A35709',
}));

export const listWrapper = styled('div')(({ theme }) => ({
	justifyContent: 'center',
	padding: '40px',
}));

export const NoTaskFOund = styled(Typography)(({ theme }) => ({
	fontSize: '24px',
	fontWeight: 400,
	width: '100%',
	lineHeight: '29px',
	letterSpacing: '0em',
}));

export const CustomDivider = styled(Divider)(({ theme }) => ({
	borderColor: '#FF8303',
	border: '3px solid #FF8303',
	width: '64px',
	height: '0px',
	margin: "15px"
}));

export const AlignContentCenter = styled('div')(({ theme }) => ({
	textAlign: 'center',
	display: 'flex',
	width: '100%',
	justifyContent: 'center',
	alignItems: 'center',
	minHeight: '100%',
	flexDirection: 'column'
}));

export const DeleteModalWrapper = styled(Box)(({ theme }) => ({
	width: '281px',
	height: '143px',
	borderRadius: '10px',
	position: 'absolute',
	justifyContent: 'center',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	boxShadow: 24,
	p: 4,
	color: '#fff',
	backgroundColor: '#1B1A17',
}));

export const DeleteModalButton = styled(Button)(({ theme }) => ({
	border: '1px solid #FF8303',
	color: '#fff',
	width: '64px',
	height: '24px',
	borderRadius: '4px',
	fontSize: '10px',
	cursor: 'pointer',
}));
