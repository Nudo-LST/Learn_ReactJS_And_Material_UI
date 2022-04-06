function ak(props) {
  return (
    <>
      <a href={props.href} className={props.cn}>
        {props.text}
        {props.children}
      </a>
    </>
  );
}

export { ak };
