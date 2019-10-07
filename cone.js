// v = pi r square h/3

function Cone(radius, height){
    let cone ={};
    cone.radius = radius;
    cone.height = height;

    Cone.computeVolume = function(){
        return cone.height/3 * cone.radius**2 * Math.PI;
    }
    return cone;
} 
module.exports = Cone;