// POEM: Forests are green, oceans are blue. Keep the earth clean, for me and for you

const obj = {
    color1: "green",
    color2: "blue",
    planet: "Earth",
    adjective: "clean",
    emojis: ["🚂", "🌍", "🛼", "🍩", "🏖", "🎠", "🔮"],
    sentence: function() {
      return `Forests are <span style="color:green;">${this.color1}</span>, oceans are <span style="color:purple;">${this.color2}</span>. Keep the ${this.emojis[1]} clean, for me and for you`
    }
};
  
  obj.color2 = "purple"
  
  document.getElementById("poem").innerHTML = obj.sentence()