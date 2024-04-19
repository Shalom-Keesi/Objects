const cup ={
    color:"red",
    shape:"circular",
    weight:"50 grams",
    size:"medium",
    description:{
        drinktype:"tea",
        temperature:"hot"
    },
    // method
    drink:function(){
        console.log("use me to drink");
        console.log(`The main purpose of this cup is to drink ${this.description.temperature} ${this.description.drinktype}`);
    }
};
console.log({color:cup.color});
console.log("size",cup["size"]);
console.log("temperature",cup.description.temperature);

// adding a new property
cup.material="ceramic";
console.log({cup});
// changing the color
cup.color="green";
console.log({cup});

// deleting a property
delete cup.material;

console.log({cup});

cup.drink()

// getting the keys
const keys =Object.keys(cup);
console.log({keys});

// getting the values
const values = Object.values(cup)
console.log({values});

// to iterate through the object(to get each key and its values)
Object.keys(cup).forEach(item =>{
    console.log({key:item, values:cup[item]});
})
// ---values:cup[item]-> cup.color -> the item became the key,so we called the object(cup)[the key]


