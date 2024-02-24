export default function pickRandomItem (array: any[]) {
    let randomIndex: number = Math.floor(Math.random() * array.length);
    return array[randomIndex];

}