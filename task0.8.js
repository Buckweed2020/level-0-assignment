function convertToTime(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;

    if((hours == 0 || hours >= 2) && (minutes == 0 || minutes >= 2)){
        return hours + " hours," + " " + minutes +" minutes";
    } 
    if ((hours == 1) && (minutes == 0 || minutes >= 2)) {
        return hours + " hour," + " " + minutes + " minutes";
    }
    if ((hours == 0 || hours >= 2) && (minutes == 1)) {
        return hours + " hours," + " " + minutes + " minute";
    }
    if ((hours == 1) && (minutes <= 1)) {
        return hours + " hour," + minutes + " " + " minute";
    }

    return hours + " hours," + minutes + " " + " minutes"  
} 

convertToTime(65)