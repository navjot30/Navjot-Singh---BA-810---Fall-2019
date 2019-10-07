// v = 4/3 pi r cube

function Sphere(radius){
    let sphere ={};
    sphere.radius = radius;

    sphere.computeVolume = function(){
         return (4/3)*Math.PI*Math.pow(sphere.radius,3);
        
    }
    return sphere;
} 
module.exports = Sphere;