

export default function Item(props) {
    return (
        <li className="border d-flex justify-content-between align-items-center d-flex p-2 m-2 h-50">
            <div className="p-3">{props.txt}</div>
            <button
                className="btn btn-danger"
                onClick={() => props.funcDeleteItem(props.id)}
            >Supprimer</button>
        </li>
    )
}
