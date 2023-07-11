export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Add items to your List.</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked * 100) / numItems);
  return (
    <footer className="stats">
      {packedPercentage === 100 ? (
        <em>You got everthing, ready to go🛫</em>
      ) : (
        <em>
          You have {numItems} items on your list, and you already packed{" "}
          {numPacked} ({isNaN(packedPercentage) ? 0 : packedPercentage}%)
        </em>
      )}
    </footer>
  );
}
