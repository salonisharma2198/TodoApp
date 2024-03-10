import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { TodoTextField, TextFieldWrapper, ListFormWrapper, AddButton } from "./ToDoStyle";
import { useListContext } from './Context/ListContext';
import ShowAlert from "./Alert";

const ListForm = ({ onEditClick, indexChoosen,handleEdit }) => {
	const { addItemToList, title, content, handleTitle, handleContent, clearInputFields, updateListItem } = useListContext();
	const [showToaster, setShowToaster] = useState(false)
	const handleSubmit = (e) => {
		e.preventDefault();
		
		 if(!title && !content){
			setShowToaster(true)
		}
		else if ((title || content) && !onEditClick) {
			addItemToList({ title, content });
		}
		else if((title || content) && onEditClick) {
			handleEdit()
			updateListItem(indexChoosen);
		}
		clearInputFields()
	}

	return (
		<>
		<form onSubmit={handleSubmit}>
			<ListFormWrapper>
				<TextFieldWrapper>
					<TodoTextField
						id="title"
						value={title}
						placeholder="Title..."
						variant="outlined"
						onChange={handleTitle}
						InputLabelProps={{
							style: { color: '#FFF' },
						}}
						inputProps={{ style: { color: '#FFF' } }}
						focusedBorderStyle={{ borderRadius: '4px', border: '1px solid #FF8303' }}
					/>
					<TodoTextField
						value={content}
						id="inputId"
						multiline
                        maxRows={4}
						placeholder="Input..."
						variant="outlined"
						onChange={handleContent}
						InputLabelProps={{
							style: { color: '#fff' },
						}}
                        sx={{
                            '& input, & textarea': {
                                color: '#FFF',
                            },
                            '& label': {
                                color: '#FFF',
                            },
                        }}
						focusedBorderStyle={{ borderRadius: '4px', border: '1px solid #FF8303' }}
					/>
				</TextFieldWrapper>
				<AddButton type="submit">{onEditClick ? 'UPDATE' : <AddIcon style={{color:'#FF8303'}} />}</AddButton>
			</ListFormWrapper>
		</form>
		{showToaster && <ShowAlert showToaster={true} message={'Please fill atleast Title or Input field'} severity="error" onClose={() => setShowToaster(false)}/>}
		</>
	)
}
export default ListForm