
import './App.css'
import Card from './components/Card';
function App() {

  let myObject={userName:"Abhishek",email:"vabh5149@gmail.com"}

  let newArr=[1,2,4,5,3];


  return(
    <>
       <h1 className="bg-green-400 p-5 rounded-2xl "> Hello world! </h1>

       <Card userName="Hitesh" btnText="Click Me"/>
       <Card userName="Abhishek" btnText="Handle Me"/>
       


    </>
  )
}

export default App
