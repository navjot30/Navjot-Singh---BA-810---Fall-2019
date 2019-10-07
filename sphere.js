// v = 4/3 pi r cube

function Sphere(){
    let sphere ={};
    let radius = 0;

    sphere.computeSphereVol = function(radius){
        var volume = 0;
        return volume = (4/3)*Math.PI*Math.pow(radius,3);
        
    }
    return sphere;
} 
module.exports = Sphere;