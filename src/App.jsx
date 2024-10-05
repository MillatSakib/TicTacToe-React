function Square({ value }) {
  return (
    <button className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg">
      {value}
    </button>
  );
}

function App() {
  let i = 0;
  return (
    <>
      <div>
        <Square value={i++} />
        <Square value={i++} />
        <Square value={i++} />
      </div>
      <div>
        <Square value={i++} />
        <Square value={i++} />
        <Square value={i++} />
      </div>
      <div>
        <Square value={i++} />
        <Square value={i++} />
        <Square value={i++} />
      </div>
    </>
  );
}

export default App;
