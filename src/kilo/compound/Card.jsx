//import './kilo/compound/style.css';
let Card1 = (props) => {
  return (
    <>
      <figure className="snip1113 red">
        <img src={props.imgsrc} alt="pr-sample1" />
        <figcaption>
          <h3>
            {props.name} <span>{props.ln}</span>
          </h3>
          <h4>{props.title}</h4>
        </figcaption>
      </figure>
    </>
  );
};

export { Card1 };
