const products = [
    {
    product:"mesa",
    price:1500,
    id:1,
    },
    {
    product:"escalera",
    price:3000,
    id:2,
    },
    {
    product:"pinza",
    price:580,
    id:3,
    },
    {
    product:"pico de loro",
    price:3000,
    id:4,
    },
]



const { info } = require('console')
const fs=require('fs')
const path="./info.txt"


const save=(object)=>{
    const data=JSON.stringify(object)
    console.log(data)
    fs.promises.writeFile(path,data,'utf8').then(()=>{
        console.log("Se guardaron los datos en el archivo")
        return (object.id)
    }).catch((error)=>{
        console.log(error)
    })
}


const getById =(id)=>{
    fs.promises.readFile(path).then((response)=>{
        const datos = JSON.parse(response)
        console.log("se Leyo el archivo")
        datos.forEach(producto => {
            if(producto.id==id){
                console.log(producto)
            }
        });
    }).catch((error)=>{
        console.log(error)
    })

}


const getAll=(products)=>{
    fs.promises.readFile(path).then((response)=>{
        const datos = JSON.parse(response)
        console.log("se Leyo el archivo")
        console.log(datos)
        
    }).catch((error)=>{
        console.log(error)
    })

}

const deleteById=(id)=>{
    let toDelete=[]
    fs.promises.readFile(path).then((response)=>{
        const datos = JSON.parse(response)
        console.log("se Leyo el archivo")
        console.log(datos)
        datos.forEach((producto)=>{
            if (producto.id==id){
                toDelete= datos.filter((product)=>product.id!=id)
                console.log(toDelete)
                fs.promises.writeFile(path,JSON.stringify(toDelete),'utf8').then(()=>{
                    console.log("se sobreescribio el archivo exitosamente !")
                }).catch((error)=>{
                    console.log(error)
                })
                
            }
        })
        
    }).catch((error)=>{
        console.log(error)
    })


}

const deleteAll=()=>{
    fs.promises.unlink(path).then(()=>{
        console.log("Se elimino el archivo exitosamente !")
    }).catch((error)=>{
        console.log(error)
    })
}

