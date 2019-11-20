
    class Product
    {
        constructor(nombre,precio,año){
            this.nombre = nombre;
            this.precio = precio;
            this.año = año;
        }
    }

    class UI
    {
        AgregarProducto(product)
        {
            const ListaDeProducto = document.getElementById("product-list");
            const Elemento = document.createElement("div");
            Elemento.innerHTML = `
                <div class = "card text-center mb-4">
                    <div class="card-body">
                    <strong>Nombre del producto</strong>: ${product.nombre}
                    <strong>Precio del producto</strong>: ${product.precio}
                    <strong>Año del producto</strong>: ${product.año}
                    <button type="button" class="btn btn-outline-danger" name="eliminar" >Eliminar</button>
                    </div>
                </div>
            `;
            ListaDeProducto.appendChild(Elemento);
        }

        ResetForm()
        {
            document.getElementById("product-form").reset();
        }

        EliminarProducto(elemento) 
        {
            if (elemento.name === "eliminar")
            {
                elemento.parentElement.parentElement.parentElement.remove();
            }
        }

        MostrarMensaje(mensaje, cssclass)
        {
            const div = document.createElement("div");
            div.className = `alert alert-${cssclass} mt-2`;
            div.appendChild(document.createTextNode(mensaje));
            const container = document.querySelector(".container");
            const app = document.querySelector("#App");
            container.insertBefore(div, app);
            
            setTimeout(function() 
            {
                document.querySelector(".alert").remove();
            }, 3000);
        }
    }

    document.getElementById("product-form").addEventListener("submit",function(e)
    {
        const nombre = document.getElementById("nombre").value;
        const precio = document.getElementById("precio").value;
        const año = document.getElementById("año").value;

        const product = new Product(nombre, precio, año);
        const ui = new UI();
        if (nombre === "" || precio === "" || año === "")
        {
            ui.MostrarMensaje("Colocar todos los datos", "danger");
        }
        else
        {
            ui.AgregarProducto(product);
            ui.ResetForm();
            ui.MostrarMensaje("Producto agregado", "success");            
        }


        e.preventDefault();
    })

    document.getElementById("product-list").addEventListener("click",function(e){
        const ui = new UI();
        ui.EliminarProducto(e.target);
        ui.MostrarMensaje("Producto eliminado", "info");
    })
