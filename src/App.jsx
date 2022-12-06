import { useState, useRef, useMemo } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  function onSubmit(e) {
    e.preventDefault();
    inputRef.current.value;

    const value = inputRef.current.value;
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });
    inputRef.current.value = "";
  }

  return (
    <>
      Search:
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
      />
      <form onSubmit={onSubmit}>
        New item:
        <input type="text" ref={inputRef} />
        <button type="submit">Add</button>
      </form>
      <h2>Items</h2>
      {filteredItems.map((item) => (
        <div key={item.id}>{item}</div>
      ))}
    </>
  );
}

export default App;
