let generateDomian = () => {
    // se crea los componentes de un Domian
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];

    // se crea una accion de asignar numeros aleatorios
    let pronounIndex = Math.floor(Math.random() * pronoun.length);
    let adjIndex = Math.floor(Math.random() * adj.length);
    let nounIndex = Math.floor(Math.random() * noun.length); 

    return (
        pronoun[pronounIndex] + 
        adj[adjIndex] + 
        noun[nounIndex] + 
        ".com"
    )
}

generateDomian()

console.log(generateDomian())

console.log("esto es una prueba")