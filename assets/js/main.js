function Pokemon(nombre,color,poderDeAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad =0;
  this.vida = 100;
  this.poderDeAtaque = poderDeAtaque;

  this.mostrarPokemon = function(){
     return ("Hola, soy " + this.nombre + " " + "y soy de color " + this.color + " " + "y mi poder de ataque es " + this.poderDeAtaque + "</br>");
}

this.aumentarAmistad = function(valor){
  this.nivelDeAmistad = this.nivelDeAmistad + valor
}

this.atacar = function(pokemon){
  pokemon.vida = pokemon.vida - this.poderDeAtaque
   }
};

const Squirtle = new Pokemon('Squirtle','celeste',200)
const Pikachu = new Pokemon ('Pikachu', 'amarillo', 100)
const Charmander = new Pokemon('Charmander','rojo',20)


Pikachu.atacar(Charmander);
Squirtle.atacar(Pikachu);

console.log(Pikachu.mostrarPokemon());
console.log(Charmander.mostrarPokemon());
console.log(Charmander.vida);
console.log(Pikachu.vida);

document.write(Pikachu.mostrarPokemon());
document.write(Charmander.mostrarPokemon());
document.write(Charmander.vida);
document.write(Pikachu.vida);
