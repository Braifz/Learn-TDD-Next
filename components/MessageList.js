export default function MessageList({ data }) {
  return (
    <ul>
      {data.length > 0
        ? data.map((message) => <li key={message}>{message}</li>)
        : null}
    </ul>
  );
}
