//Task 0.6


function findMax(x,y,z) {
    if(x > y && x > z){
        return x
    } else if(y > x && y > z) {
        return y
    } else if(z > x && z > y ) {
        return z
    }
}

findMax(10,20,21)

