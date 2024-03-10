import { Modal, Typography, Grid } from '@mui/material';
import { DeleteModalWrapper, DeleteModalButton, CustomDivider } from './ToDoStyle';

const DeleteModal = ({ open, handleClose, handleYesClick }) => {
	return (
		<Modal
			open={open}
			onClose={handleClose}
		>
			<DeleteModalWrapper>
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
					<div>
						<CustomDivider sx={{ width: '279px', margin: '0 auto', borderRadius: '10px' }} />
						<Typography variant="h6" component="h2" align="center" sx={{ paddingTop: '32px',paddingBottom:'16px' }}>
							Delete this task?
						</Typography>
					</div>
					<div style={{ marginBottom: '16px', textAlign: 'center' }}>
						<Grid container spacing={2} justifyContent="center">
							<Grid item>
								<DeleteModalButton onClick={handleYesClick} variant="outlined">
									Yes
								</DeleteModalButton>
							</Grid>
							<Grid item>
								<DeleteModalButton onClick={handleClose} variant="outlined">
									No
								</DeleteModalButton>
							</Grid>
						</Grid>
					</div>
				</div>
			</DeleteModalWrapper>
		</Modal>
	)

}
export default DeleteModal