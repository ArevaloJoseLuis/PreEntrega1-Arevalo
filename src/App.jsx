import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Product from './Components/Product/Product'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting="Bienvenidos al nuevo Airbn" />
        <div className='grid'>
        <Product 
        img="https://definicion.de/wp-content/uploads/2009/02/departamento-1.jpg" 
        title="Lujo" 
        description="Excelente depto" 
        precios={ 200000} />

        <Product 
        img="https://definicion.de/wp-content/uploads/2009/02/departamento-1.jpg" 
        title="Maso" 
        description="Maso depto" 
        precios={ 200000} />
        
        <Product 
        img="https://definicion.de/wp-content/uploads/2009/02/departamento-1.jpg" 
        title="Tranqui" 
        description="Tranqui depto" 
        precios={ 200000} />
        
        <Product 
        img="https://definicion.de/wp-content/uploads/2009/02/departamento-1.jpg" 
        title="Fenomeno" 
        description="Excelente depto" 
        precios={ 200000} />
        
        <Product 
        img="https://definicion.de/wp-content/uploads/2009/02/departamento-1.jpg" 
        title="Casi" 
        description="Excelente depto" 
        precios={ 200000} />
       
        <Product 
        img="https://definicion.de/wp-content/uploads/2009/02/departamento-1.jpg" 
        title="Tierra" 
        description="Excelente depto" 
        precios={ 200000} />
       
      </div>

      </div>
    </>
  )
}
export default App
