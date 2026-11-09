import { useEffect, useState } from "react"
import { obtenerProductos,guardarProducto,borrarProducto,actualizarProducto } from "../services/ProductoServices"
import CardProducto from "./CardProducto";
import FormularioProducto from "./FormularioProducto";

export default function CatalogoProductos()
{    
const [productos, setProductos] = useState([]);
const [productoEditar, setProductoEditar] = useState({id:0   

});

async function listar(){
           const resultado = await obtenerProductos();
           setProductos(resultado.data);
        }

async function agregarProducto(producto){
            if (producto.id >0)
                {    
                    console.log('holis');
                    await actualizarProducto(producto.id, producto)
                }
            else
                {
                    console.log('holis2');
                    await guardarProducto(producto);
                }            
            listar();           
        }

async function eliminarProducto(id){            
            await borrarProducto(id);
            listar();                       
        }

function editarProducto(oproductoeditar){
  setProductoEditar(oproductoeditar);
}

useEffect(
    () =>
    {        
        listar();
    }     
, []
)
    return(
        <>

        <FormularioProducto productoEditar= {productoEditar}  guardar= {agregarProducto}/>       

        <section className="products-container">
             {productos.map((e, indice) => <CardProducto 
             key = {indice}
             id = {e.id}
             name= {e.name}
             category= {e.category}
             stock= {e.stock}
             imageUrl= {e.imageUrl}
             eliminar = {eliminarProducto}
             editar = {editarProducto}
             />  ) }
        </section>
        </>
    )

}