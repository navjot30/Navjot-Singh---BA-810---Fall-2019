function Shape(){

    let shape = {};
    /*
    shape.radiusOfCone = radiusOfCone;
    shape.radiusOfSphere = radiusOfSphere;
    shape.heightOfCone = heightOfCone;
    */
    let radiusOfCone = 0;
    let radiusOfSphere = 0;
    let heightOfCone = 0;
    
    let Sphere = require ('./sphere');
    let shape1 = new Sphere();
    
    //console.log(shape1.computeSphereVol(8));
    
    let Cone = require ('./cone');     
    let shape2 = new Cone();   
    //console.log(shape2.computeConeVol(5,10));
    
    shape.totalVol = function (radiusOfSphere, radiusOfCone, heightOfCone){
        let totalVolume = 0;
        return totalVolume = shape1.computeSphereVol(radiusOfSphere) 
                           + shape2.computeConeVol(radiusOfCone, heightOfCone)
        }
        return shape.totalVol(8,5,10);
    }
    console.log(Shape());
    