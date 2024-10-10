const misProductos = [
    { id: "1", nombre: "Barcelona", stock: 30, precio: 150, img: "../img/Barcelona.jpeg", idCat: "España" },
    { id: "2", nombre: "Real Madrid", stock: 35, precio: 160, img: "../img/RealMadrid.jpg", idCat:"España" },
    { id: "3", nombre: "Atletico Madrid", stock: 22, precio: 120, img: "../img/AtleticoMadrid.jpeg", idCat:"España" }, 
    { id: "4", nombre: "Girona", stock: 19, precio: 100, img: "../img/Girona.jpeg", idCat:"España" },
    { id: "5", nombre: "River Plate", stock: 35, precio: 20, img: "../img/River.png", idCat: "Argentina" },
    { id: "6", nombre: "Independiente", stock: 10, precio: 50, img: "../img/Independiente.jpeg", idCat:"Argentina" },
    { id: "7", nombre: "Racing", stock: 12, precio: 50, img: "../img/Racing.jpeg", idCat:"Argentina" }, 
    { id: "8", nombre: "Boca Juniors", stock: 100, precio: 200, img: "../img/BocaJuniors.avif", idCat:"Argentina" },
    { id: "9", nombre: "Bayern Munchen", stock: 13, precio: 140, img: "../img/BayernMunchen.jpeg", idCat:"Alemania" },
    { id: "10", nombre: "Bayern Leverkusen", stock: 35, precio: 150, img: "../img/BayernLeverkusen.jpg", idCat: "Alemania" },
    { id: "11", nombre: "Stuttgart", stock: 31, precio: 100, img: "../img/Stuttgart.jpg", idCat:"Alemania" },
    { id: "12", nombre: "Borussia Dortmund", stock: 29, precio: 110, img: "../img/BorussiaDortmund.jpg", idCat:"Alemania" }, 
    { id: "13", nombre: "Manchester City", stock: 40, precio: 180, img: "../img/ManchesterCity.jpg", idCat:"Inglaterra", detalle: "El Manchester City es un club de fútbol de la ciudad de Mánchester, Inglaterra, que juega en la Premier League."},
    { id: "14", nombre: "Manchester United", stock: 10, precio: 140, img: "../img/ManchesterUnited.jpeg", idCat: "Inglaterra" },
    { id: "15", nombre: "Aston Villa", stock: 33, precio: 120, img: "../img/AstonVilla.jpg", idCat:"Inglaterra" },
    { id: "16", nombre: "Chelsea", stock: 21, precio: 90, img: "../img/Chelsea.jpeg", idCat:"Inglaterra" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const Producto = misProductos.find(item => item.id === id)
            resolve(Producto)
        }, 100)
    })

}

export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const Producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(Producto)
        }, 100);

    })

}