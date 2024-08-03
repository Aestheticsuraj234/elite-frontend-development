import {useState ,  useEffect}from 'react';
import { Button } from './components/ui/button';


const App = () => {

  const [title , setTitle] = useState(document.title);
  const [count , setCount] = useState(0);

  const onTitleChange = () => {
    const newTitle = prompt('Enter new title');
    if(newTitle){
      setTitle(document.title=newTitle);
    }
  }


  
// *using dependency array in useEffect
  useEffect(() => {

    setTimeout(()=>{
      setCount(count+1);
    },2000)

    console.log('useEffect called');

    ()=>console.log('component unmounted');
  },[
    count
  ]);

  



  return (
    <div className='h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-4'>
      <h1 className='text-4xl font-bold'>Change Your Website title.</h1>
      <Button variant={"secondary"} onClick={onTitleChange}>
        Change Title
      </Button>
      {/* {title} */}
      {count}
    </div>
  )
}

export default App



  


  // const [githubUser , setGithubUser] = useState(null);

  // async function FetchUserData(){
  //   try {
  //     const response = await fetch("https://api.github.com/users/Aestheticsuraj234");
  //     const data = await response.json();
  //     setGithubUser(data);
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }