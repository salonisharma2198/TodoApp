import { useState } from "react";
import { Grid, CardContent, Typography, CardActions, Divider } from '@mui/material';
import { useListContext } from "./Context/ListContext";
import { CardWrapper, CardOutLine, NoTaskFOund, CustomDivider, AlignContentCenter } from "./ToDoStyle";
import DeleteModal from "./DeleteModal";
import { InfoIcon, DeleteIcon, EditIcon, EditClickIcon } from "./asset";

const ShowListItem = ({ handleEdit, indexChoosen, handleChoosenIndex, onEditClick }) => {
	const { list, deleteListItem, UpdateListValues } = useListContext()

	const [isClicked, setIsClicked] = useState(null)
	const [onDelete, setOnDelete] = useState(false);

	const handleCardActions = (index) => {
		setIsClicked(isClicked == index ? null : index)
	}

	const handleDeleteModalClose = () => {
		setOnDelete(false)
	}

	const handleDelete = () => {
		deleteListItem(indexChoosen)
		handleDeleteModalClose()
	}

	const handleEditButtonClick = (index) => {
		handleEdit()
		UpdateListValues(index)
	}

	return (
		<listWrapper>
			<CardOutLine container spacing={2}>
				{list.length > 0 ? list?.map((value, index) => {
					return (
						<Grid item xs={12} sm={6} md={4} key={index}>
							<CardWrapper >
								<CardContent>
									<Typography variant="h5" component="div" sx={{ fontSize: 22, fontWeight: 500 }}>
										{value?.title.slice(0, 10) || 'Title...'} {value?.title.length > 10 ? '...' : ''}
									</Typography>
									<Typography sx={{ mb: 1.5, fontSize: 14, fontWeight: 400 }}>
										{value?.content.slice(0, 10) || 'Input...'} {value?.content.length > 10 ? '...' : ''}
									</Typography>
								</CardContent>
								<CardActions>
									{isClicked !== index && <img style={{cursor:'pointer'}} src={InfoIcon} onClick={() => handleCardActions(index)} alt="edit" />}
									{
										isClicked === index && <>
											<img src={onEditClick ? EditClickIcon : EditIcon} style={{cursor:'pointer'}} alt="edit" onClick={() => {
												handleChoosenIndex(index);
												handleEditButtonClick(index)
											}} />
											<img src={DeleteIcon} style={{cursor:'pointer'}} alt="delete" onClick={() => {
												handleChoosenIndex(index);
												setOnDelete(true)
											}} />
										</>

									}
								</CardActions>
							</CardWrapper>
						</Grid>
					)
				}) : <AlignContentCenter>
					<CustomDivider />
					<NoTaskFOund>No tasks</NoTaskFOund>
					<CustomDivider />
				</AlignContentCenter>
				}
			</CardOutLine>
			{onDelete && <DeleteModal open={onDelete} handleClose={handleDeleteModalClose} handleYesClick={handleDelete} />}
		</listWrapper>
	)
}
export default ShowListItem