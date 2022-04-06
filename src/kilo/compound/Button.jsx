let Bk = (props) => {
  return (
    <>
      <button onClick={props.talk}>{props.text}</button>
      <a
        href="https://courses.w3schools.com/"
        target={props.target}
        className={props.styleClasses}
        style={props.style}
      >
        {props.textI}
      </a>
    </>
  );
};

export { Bk };
