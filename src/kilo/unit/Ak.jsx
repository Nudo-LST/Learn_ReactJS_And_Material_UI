let Ak = (props) => {
  return (
    <>
      <a
        href={props.href}
        className={props.cn}
        style={props.style}
        onClick={props.click}
      >
        {props.text}
        {props.children}
      </a>
    </>
  );
};

export { Ak };
