export default function Mycont({ msg, dosum }) {
  return (
    <>
      <p>{msg}</p>
      <h1>sum is:{dosum(5, 10)}</h1>
    </>
  );
}
