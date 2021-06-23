const List = (props) => {

  return <p>{props.tasks.join(", ")}</p>

};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>

        <List tasks={["walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["study", "wash clothes", "clean the house"]}/>

      </div>
    );
  }
};

{/*
The .join(", ") method is used to take each element from within the array and join them into a string to be displayed.
*/}