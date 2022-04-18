const tablou = [
    {x: 1, y: 2},
    {x: 3, y: 4},
    {x: null, y: 4},
    {x: 3, y: undefined}
];
console.log('Массив с правильно указанными точками:')
for(let element of tablou){
    if((typeof(element.x) == 'number') && (typeof(element.y) == 'number')) console.log(element);
}