import { useState } from "react";
import { HeaderSubText, HeaderWrapper, TextWrapper, HeaderText } from "./ToDoStyle";
import ListForm from "./ListForm";
import ShowListItem from "./ShowListItem";
import ListProvider from "./Context/ListContext";

const Dashboard = () => {
	const [onEditClick, setOnEditClick] = useState(false);
	const [indexChoosen, setIndexChoosen] = useState(null);

	const handleEdit = () => {
		setOnEditClick(!onEditClick)
	}

	const handleChoosenIndex = (index) => {
		setIndexChoosen(index)
	}
	return (
		<ListProvider>
			<HeaderWrapper>
				<TextWrapper>
					<HeaderText>GYIZER</HeaderText>
					<HeaderSubText>TODO APP</HeaderSubText>
				</TextWrapper>
			</HeaderWrapper>
			<ListForm onEditClick={onEditClick} indexChoosen={indexChoosen} handleEdit={handleEdit}/>
			<div style={{padding:70}}>
			<ShowListItem onEditClick={onEditClick} handleChoosenIndex={handleChoosenIndex} indexChoosen={indexChoosen} handleEdit={handleEdit}/>
			</div>
		</ListProvider>
	)
}

export default Dashboard
