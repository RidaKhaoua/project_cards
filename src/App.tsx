
import './App.css'
import ProductCards from './components/ProductCards/ProductCards'
import { data } from './data/data'
function App() {


  return (
    <main className='container'>
       <ProductCards products={data}/> 
    </main>
  )
}

export default App
