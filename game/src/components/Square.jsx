export default function Square({ value, onClick, mode, onInput }) {
  if (mode === "puzzle") {
    return (
      <input
        className="square puzzle-input"
        type="text"
        inputMode="numeric"
        maxLength={1}
        value={value}
        onChange={(e) => {
          const val = e.target.value.replace(/[^0-9]/g, "");
          onInput(val);
        }}
      />
    );
  }

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
