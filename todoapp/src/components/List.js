
function List({doList, setEditingIndex,list,remove}){

    return (
        <ol style={{ display: list ? 'inline' : 'none' }}>
        {doList.map((item, i) => (
          <li key={i}>
            <b>{item.task}</b> <br />
            <i>{item.date}</i>
            {/* editing button */}
            <button className="edit-button" onClick={() => setEditingIndex(i)}>
              Edit
            </button>
            <button className="edit-button" onClick={() => { remove(i); }}>
              Remove
            </button>
          </li>
        ))}
      </ol>
    )
}

export default List;