const App = () => {

    


    const onClick = (e)=>{
        console.log(e);
        alert("Button is Clicked")
    }




    return (
        <>
            <button onClick={onClick}>
                Click Me
            </button>
        </>
    )
}


export default App;