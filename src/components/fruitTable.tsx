import type {fruitTableInterface} from "../types/fruitTableInterface";

export default function FruitTable(props: fruitTableInterface) {
  return (
    <div className="row mb-1" id="mibolLehetMegPalinka">
      <div className="col-sm-12 kartya mb-3">
        <h2>{props.title}</h2>
        <table className="table table-bordered">
          <tbody>
            {props.rows.map((row) => (
              <tr key={row.join('-')}>
                {row.map((fruit) => (
                  <td key={fruit}>{fruit}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
