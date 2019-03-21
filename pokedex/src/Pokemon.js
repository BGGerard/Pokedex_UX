class Pokemon {
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.sprite = data.sprites.front_default;
      this.type = data.types[0].type.name;
      this.ability = data.abilities[0].ability.name;
      this.speed = data.stats[0].base_stat;
      this.sdf = data.stats[1].base_stat;
      this.sat = data.stats[2].base_stat;
      this.df = data.stats[3].base_stat;
      this.atc = data.stats[4].base_stat;
      this.hp = data.stats[5].base_stat;
    }
  }
  
  export default Pokemon;