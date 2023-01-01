
function Editing({edit,editTaskInputRef,editDate,editTask,editDateInputRef}){

	
	return (
		<div className="Editing">
			{/* editing */}
			<input
					placeholder="Edit task"
					className="input"
					style={{ display: edit }}
					type="text"
					onKeyDown={editTask}
					ref={editTaskInputRef}
			></input>
			<input
					className="input"
					style={{ display: edit }}
					type="date"
					onKeyDown={editDate}
					ref={editDateInputRef}
			></input>
		</div>
	)
}
export default Editing;