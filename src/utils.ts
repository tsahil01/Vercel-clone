const MAXLENGTH = 5;
export function generateRandomId(): string{

    let ans = ""
    const subnet = "123456789qwertyuiopasdfghjklmnbvcxz"

    for(let i = 0; i<MAXLENGTH; i++){
        ans = ans + subnet[Math.floor(Math.random() * subnet.length)];
    }
    return ans;
}
