const students = [
    {
        name: 'First',
        marks: [8, 10, 7, 5, 4]
    },
    {
        name: 'Second',
        marks: [10, 7, 8, 5, 4]
    },
    {
        name: 'Third',
        marks: [8, 7, 10, 10]
    },
    {
        name: 'Fourth',
        marks: [8, 10, 9, 7, 5, 4]
    },
    {
        name: 'Fifth',
        marks: [4, 5, 5, 4]
    },
];
let media = 0;
for(let student of students){
    console.log('Имя: ' + student.name);
    for(let i = 0; i < student.marks.length; i++){
        media += student.marks[i];
    };
    media /=student.marks.length;
    console.log('Средняя оценка:' + media.toFixed(2));
    media = 0;
};

console.log('Ученики со средней оценкой ниже 5: ');
media = 0;
for(let student of students){
    for(let i = 0; i < student.marks.length; i++){
        media += student.marks[i];
    };
    media /=student.marks.length;
    if(media < 5){
        console.log('Имя: ' + student.name);
        console.log('Средняя оценка:' + media.toFixed(2));
    }
    media =0;
};
let min = 10, max = 0, minIndex, maxIndex;
for(let s = 0; s < students.length; s++){
    for(let i = 0; i < students[s].marks.length; i++){
        media += students[s].marks[i];
    };
    media /=students[s].marks.length;
    if(media < min){
        minIndex = s;
        min = media;
    }
    else {
        if(media > max){
            maxIndex = s;
            max = media;
        }
    }
    media =0;
};
console.log('Ученик с наибольшим средним баллом: ' + students[maxIndex].name + ' ' + max.toFixed(2));
console.log('Ученик с наименьшим средним баллом: ' + students[minIndex].name + ' ' + min.toFixed(2));

const studentsMedia = [];
for(let student of students){
    for(let i = 0; i < student.marks.length; i++){
        media += student.marks[i];
    };
    media /=student.marks.length;
    studentsMedia.push({name: student.name, m: media.toFixed(2)});
    media = 0;
}
function sortByMedia(arr) {
    arr.sort((a, b) => a.m > b.m ? 1 : -1);
}
sortByMedia(studentsMedia);
console.log(studentsMedia);