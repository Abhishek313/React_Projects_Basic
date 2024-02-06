import Items from './components/Items'
import './App.css'
import Cart from './components/Cart'

function App() {


  return (
    <>
    <Items name = "macbook"  price = {10000}/>
    <Items name = "Iphone"   price = {20000}/>
    <Items name = "Pendrive" price = {35000}/>
    <Cart/>
    </>
  )
}

export default App
