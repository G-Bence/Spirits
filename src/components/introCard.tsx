import type {introCardInterface} from "../types/introCardInterface";

export default function IntroCard(props: introCardInterface) {
  return (
    <div className="row mb-2">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">{props.title}</div>
          <div className="card-body">
            {props.paragraphs.map((paragraph, index) => (
              <p className={index === props.paragraphs.length - 1 ? "mb-0" : undefined} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
