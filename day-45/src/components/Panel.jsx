export default function Panel({ title, children, onShow, isActive }) {
  return (
    <div>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </div>
  );
}
