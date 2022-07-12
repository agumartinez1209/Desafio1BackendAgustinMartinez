class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    obtenerNombre (){
        return this.nombre
    }
    
    obtenerApellido (){
        return this.apellido

    }

    obtenerLibros (){
        return this.libros
    }

    obtenerMascota (){
        return this.mascotas
    }

    getFullName(){
        return `Hola ${this.nombre} ${this.apellido}`
    }
    
    addMascota(){
        this.mascotas.push("loro")
        return this.mascotas;
    }
    
    countMascotas(){
        return this.mascotas.length;
    }
    addBook({nombre,autor}){
        this.libros.push({nombre:"El ruido de un trueno", autor:"Ray Bradbury"})
    }
   
    getBookNames(){
        return this.libros.map(NombreLibros =>{
            return NombreLibros.nombre
        })
    }
}

const usuario1 = new Usuario ("Pablo", "Gomez", [{nombre:"Witcher", autor:"Andrzej Sapkowski"},{nombre:"Game Of Thrones", autor:"George R. R. Martin"} ] , ["perro","gato"])

console.log(usuario1.countMascotas());
console.log(usuario1.getBookNames());
console.log(usuario1.getFullName());