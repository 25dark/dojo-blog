const Home = () => {
  const handleClick = (e) => {
    console.log("You clicked me!", e);
  };

  const handleClickAgain = (name) => {
    console.log(`You clicked me again! ${name}`);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={() => {
          handleClickAgain("John");
        }}
      >
        Click Me Again
      </button>
    </div>
  );
};

export default Home;
