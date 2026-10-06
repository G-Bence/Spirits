import type {fruitCardInterface} from "../types/fruitCardInterface";

export default function FruitCard(props: fruitCardInterface) {
  return (
    <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
      <h2>{props.name}</h2>
      <img src={props.image} className="img-fluid" alt={props.alt} />
      <p className="mt-2">{props.description}</p>
    </div>
  );
}
