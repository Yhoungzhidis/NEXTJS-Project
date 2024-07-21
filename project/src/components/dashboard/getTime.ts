// This function gets the time of the day
export function getTime() {
    const hours = new Date().getHours();

    if (hours < 12){
        return 'morning';
    } else if (hours < 18){
        return 'afternoon';
    } else {
        return 'evening';
    }  
}