const heading = React.createElement("h1", { id: "head" }, [
  React.createElement("h1", { id: "head" }, "hello Reacts world"),
  React.createElement("h5", { id: "head" }, "hello Reacts world2"),
]);
const root = ReactDOM.createRoot(document.getElementById("container"));
console.warn(heading);
root.render(heading);
