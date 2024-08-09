export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items in your packing list🚀 </em>
      </p>
    );
  }

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <span className="stats">
      {percentage === 100 ? (
        <em> You got everything! Ready to go✈️ </em>
      ) : (
        <em>
          You have {numItem} items on you list, and you already packed{" "}
          {numPacked} ({percentage}%){" "}
        </em>
      )}
    </span>
  );
}
