import "./App.css"

function Title() {
  return <h1>I'm the Title!</h1>;
}

function App() {
  return (
  <div>
    <h1>This is my app component! </h1>
    <p>inside app componet we have : </p>
  <Title />
  </div>
  );
}

export default App
