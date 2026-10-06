import type {footerInterface} from "../types/footerInterface";

export default function Footer(props: footerInterface) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 kartya mb-3">
          <p className="text-center"><b>Az oldalt készítette: </b><i>{props.author}</i></p>
          <p className="text-center"><b>Készítés dátuma: </b><span className="dolt">{props.date}</span></p>
        </div>
      </div>
    </div>
  );
}
