function Item({item, onDeleteItem, onPackedItem}) {
    return <li className={"item"}>
        <input type="checkbox" value={item.packed} onChange={() => onPackedItem(item.id)}/>
        <span style={item.packed ?
            {textDecoration: "line-through"}
            : {textDecoration: "none"}}
        >
            {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}><i className="fas fa-times"></i></button>
    </li>;
}

export default Item;
