// Cada producto que gestione debe contar con las propiedades:
// title (nombre del producto)
// description (descripción del producto)
// price (precio)
// thumbnail (ruta de imagen)
// code (código identificador)
// stock (número de piezas disponibles)


// Aspectos a incluir

// Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
// Validar que no se repita el campo “code” y que todos los campos sean obligatorios
// Al agregarlo, debe crearse con un id autoincrementable
// Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento

// Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
// En caso de no coincidir ningún id, mostrar en consola un error “Not found”


class ProductManager{
   
    constructor(){
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if(title != "" && description != "" && price != null && thumbnail != "" && code != ""){
            let product = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
            };

            if (this.products.length === 0) {
                product['id'] = 1;
                this.products.push(product);
            }else{
                let codeValues = this.products.find(product => product['code'] === code);
                if(!codeValues){
                    product['id'] = this.products[this.products.length - 1]['id'] + 1;
                    this.products.push(product);
                }
                else{
                    console.log("Este producto está repetido");
                }
            
            }
        }
    };   

    getProducts(){
        return this.products;
    };

    getProductById(id){
        let product = this.products.find(product => product['id'] === id);
        if (product != null){
            return product;
        }else{
            console.log("El producto no fue encontrado");
            return null;
        }
    };

};



let productos = new ProductManager();
console.log(productos.getProducts());
let titulo = "Producto de prueba"
let descripcion = "Este es un producto prueba"
let precio = 5000;
let img = "img"
let code = "a1b2c3"
let stock = 7;
productos.addProduct(titulo, descripcion, precio, img, code, stock);
console.log(productos.getProducts());let id = 1;
console.log(productos.getProductById(id));
id = 2;
productos.getProductById(id);