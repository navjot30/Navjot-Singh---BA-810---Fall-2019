// v = pi r square h/3

function Cone(){
    let cone ={};
    let radius = 0;
    let height = 0;

    cone.computeConeVol = function(radius,height){
        var volume = 0;
        return volume = (height/3)*(radius*radius)*(Math.PI);
    }
    return cone;
} 
module.exports = Cone;