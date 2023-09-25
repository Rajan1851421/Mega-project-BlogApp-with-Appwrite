import './App.css';

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL); // Access the environment variable
  return (
    <>
      <h1>Blog APP WITH APPWRITE </h1>
    </>
  );
}

export default App;
