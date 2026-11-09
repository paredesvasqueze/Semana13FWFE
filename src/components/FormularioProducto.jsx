import { useEffect, useEffectEvent, useState } from "react"

export default function FormularioProducto({productoEditar, guardar})
{
const [formulario,setFormulario] = useState(
    {
      id: 0,
      category: "",
      name: "",
      stock: 0,
      imageUrl: ""
    }
)

function manejarcambio(e)
{
    const {name, value} = e.target;
    setFormulario({
        ...formulario,
        [name] : [name]=="stock"? Number(value): value
    });
    
}

function agregar(e)
{
    e.preventDefault();        
    console.log(formulario);
    guardar(formulario);
}

useEffect(()=>{
    if (productoEditar.id>0)
    setFormulario(productoEditar);
 },[productoEditar])

return (
    <>
    <form onSubmit={agregar}>    
        <label htmlFor="category">Categoria</label>          
        <input
        type="text"
        id = "category"
        name = "category"
        value= {formulario.category }
        onChange={manejarcambio}
        >
        </input>

        <br/>

        <label htmlFor="name">Nombre</label>          
        <input
        type="text"
        id = "name"
        name = "name"
        value= {formulario.name }
        onChange={manejarcambio}
        >
        </input>
        <br/>

        <label htmlFor="stock">Stock</label>          
        <input
        type="number"
        id = "stock"
        name = "stock"
        value= {formulario.stock }
        onChange={manejarcambio}
        >
        </input>
        <br/>
        <label htmlFor="imageUrl">Imagen Url</label>          
        <input
        type="url"
        id = "imageUrl"
        name = "imageUrl"
        value= {formulario.imageUrl}
        onChange={manejarcambio}
        >
        </input>     
        <br/>
       <button>Guardar</button> 
    </form>
    
    </>

)
}
