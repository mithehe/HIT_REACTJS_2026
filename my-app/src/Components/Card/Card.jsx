function Card({ children }) {
  return (
    <div>
      <h2>Card Title</h2>
      <p>This is a card component.</p>
      {children}
    </div>
  );
}

export default Card;