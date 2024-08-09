export const FuncCounter = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Children: {props.children}</p>
    </div>
  );
};
