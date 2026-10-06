import type {listCardInterface} from "../types/listCardInterface";

export default function ListCard(props: listCardInterface) {
  const List = props.numbered ? "ol" : "ul";

  return (
    <div className="col-sm-4 kartya mb-2">
      <h2>{props.title}</h2>
      <List className={props.numbered ? "list-group list-group-numbered" : "list-group"}>
        {props.items.map((item) => (
          <li className="list-group-item" key={item}>{item}</li>
        ))}
      </List>
    </div>
  );
}
