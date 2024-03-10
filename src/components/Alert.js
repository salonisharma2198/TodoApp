import { Snackbar, Alert } from '@mui/material';

const ShowAlert = ({showToaster,message, severity,onClose}) => {
	return (
		<Snackbar open={showToaster} autoHideDuration={4000} onClose={onClose}>
			<Alert severity={severity} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	)
}
export default ShowAlert