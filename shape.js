function Shape(){

    let shape = [];
    //shape.totalVolume = totalVolume;
  
     
    //console.log(shape2.computeConeVol(5,10));
    
    shape.volume = function () {
        let totalVolume = [];
        shape.forEach(item => {
            totalVolume.push(item.computeVolume());
        });

        return totalVolume;
}
return shape;
}
let Sphere = require ('./sphere');
let shape1 = new Sphere(8);

let Cone = require ('./cone');     
let shape2 = new Cone(5,10);  

    