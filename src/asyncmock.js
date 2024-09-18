const misCamisetas = [
    { id: "1", nombre: "Barcelona", stock: 30, precio: 150, img: "../img/Barcelona.jpeg", idCat: "España" },
    { id: "2", nombre: "Real Madrid", stock: 35, precio: 160, img: "../img/RealMadrid.jpg", idCat:"España" },
    { id: "3", nombre: "Atletico Madrid", stock: 22, precio: 120, img: "../img/AtleticoMadrid.jpeg", idCat:"España" }, 
    { id: "4", nombre: "Girona", stock: 19, precio: 100, img: "../img/Girona.jpeg", idCat:"España" },
]

export const getCamisetas = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misCamisetas);
        }, 100)
    })
}

export const getUnaCamiseta = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const camiseta = misCamisetas.find(item => item.id === id)
            resolve(camiseta)
        }, 100)
    })

}

export const getCamisetasPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const camiseta = misCamisetas.filter(item => item.idCat === idCategoria)
            resolve(camiseta)
        }, 100);

    })

}