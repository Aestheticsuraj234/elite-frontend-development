import {useState ,  useEffect, useRef, useMemo}from 'react';
import { Button } from './components/ui/button';
import Navbar from './components/Navbar';


// let Number = new Array(4000000).fill(0).map((_,i)=>{
//   return {
//     index:i,
//     isSpecialNumber:i===3900000
//   }
// })



const App = () => {
  const [count , setCount] = useState(0);
  // const [numbers , setNumbers] = useState(Number);

  // const SpecialNumber = useMemo(()=>numbers.find(item=>item.isSpecialNumber === true),[numbers])





  // const Btnref = useRef();
  // const number = useRef(0);

// useEffect(()=>{
//   number.current = number.current +1;
//   console.log(`UseEffect Rendering!... and value of Number is ${number.current}`);
// })
  
const ChangeNavlink = ()=>{
  return "About"
}

  const onIncrement = () => {
    setCount(count + 1);
    // Btnref.current.style.backgroundColor = "red";
  }


  return (
    <div className='h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-4'>
     <Navbar Navlink={"Home"} />
     {/* <p className="text-2xl font-bold text-white">I am a Special Number🚀 <span className="text-indigo-500">{SpecialNumber.index}</span></p> */}
      <Button  variant={"outline"} size={"default"} onClick={onIncrement} className="text-black">
        {`Count Value is ${count}`}
      </Button>
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


  // const nums = new Array(3000000).fill(0).map((_, i) => {
//   return{
//     index: i,
//     isMagical: i===2000000
//   }
// });
// const [numbers , setNumbers] = useState(nums);

// const magicaNumber = useMemo(() => numbers.find(num => num.isMagical), []);