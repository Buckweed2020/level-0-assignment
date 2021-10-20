//Task 0.6


function max(x,y,z) {
    x = x + 0;
    y = y + 0;
    z = z + 0;
    Math.max(x,y,z);
    return Math.max(x,y,z)
}

max(10,20,21)

//BONUS
function max(x,y,z,...n) {
    x = x + 0;
    y = y + 0;
    z = z + 0
    return Math.max(x,y,z,...n)
}

max(10,20,21,30,50,95)