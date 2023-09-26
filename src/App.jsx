import './App.css';

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL); // Access the environment variable
  return (
    <>
      <h1 className='bg-orange-500 p-2 uppercase text-lg border-l-emerald-50'>bolg APP with appwrite</h1>

    </>
  );
}

export default App;
