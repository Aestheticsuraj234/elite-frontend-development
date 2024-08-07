import One from "./components/One";




const App = () => {

  const greeting = "Good Morning🔥";

  return (
    <div className='h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-4'>
     <One greeting={greeting}/>
     
    </div>
  );
};

export default App;
