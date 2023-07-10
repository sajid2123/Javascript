const initialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: false
  },
  {
    id: 2,
    description: "Shirts",
    quantity: 12,
    packed: false
  },
  {
    id: 3,
    description: "Shoes",
    quantity: 3,
    packed: false
  }

]


export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList itemsObj={initialItems} />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>Far Away</h1>;
}
function Form() {
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
    </div>
  )
}
function PackingList(itemsObj) {
  return (
    <div className="list">

    </div>
  )
}

function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked * 100) / numItems);
  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list, and you already packed{" "}
        {numPacked} ({isNaN(packedPercentage) ? 0 : packedPercentage}%)
      </em>
    </footer>
  );
}
