class heroi{
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque
        
        if(this.tipo === "Guerreiro"){
            ataque = "a espada"
        } else if(this.tipo === "Mago") {
            ataque = "a magia"
        } else if(this.tipo === "Monge") {
            ataque = "as artes marciais"
        } else if(this.tipo === "Ninja") {
            ataque = "a shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque} `)
    }
}

let heroiGuerreiro = new heroi("Bower","18","Guerreiro")
let heroiMago = new heroi("Kazin","21","Mago")
let heroiMonge = new heroi("Cloud","37","Monge")
let heroiNinja = new heroi("Hibiki","17","Ninja")

heroiGuerreiro.atacar()
heroiMago.atacar()
heroiMonge.atacar()
heroiNinja.atacar()