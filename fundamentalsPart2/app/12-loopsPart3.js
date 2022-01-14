const anibalArray = [
    "Anibal",
    "Maldonado",
    1997,
    "Student",
    ['Amigo', 'Pana', 'Pulento']
];

for(let i = anibalArray.length - 1; i >= 0; i--) {
    console.log(i, anibalArray[i]);
};

for(let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---- Starting exercise ${exercise} ----`);
    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise} Lifting weights repetition ${rep} 🏋️`);
    }
}