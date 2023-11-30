const Test = () => {
  const danger = `<script src="https://example.com/melicious_attect.js/">alert("this is a injection atteck:")</script>`;

  return (
    <>
      <h1>{danger}</h1>
    </>
  );
  
};
export default Test;
