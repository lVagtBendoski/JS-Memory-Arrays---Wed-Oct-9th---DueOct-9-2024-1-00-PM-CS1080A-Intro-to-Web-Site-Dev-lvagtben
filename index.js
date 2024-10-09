console.log("hello world");
const spellBook = ['Expelliarmus', 'Accio', 'Expecto Patronum', 'Wingardium Leviosa'];
let manaPoints = 50;

const castSpell = () => {
    console.log('huzzah! spell cast!');
    if(manaPoints > 0){
        //choose random spell
        const randomIndex = Math.floor(Math.random() * spellBook.length)
        console.log('randomIndex = ', randomIndex);
        spell = spellBook[randomIndex];
        console.log(spell);
        //print random spell
        const spellElement = document.getElementById('spell');
        const message = `you cast the ${spell} spell`;
        spellElement.textContent = message;

        //subtract mana points from the total
        manaPoints -= 5;
        console.log(manaPoints);
    }
    //show the user the new manna points
    const manaElement = document.getElementById('mana-points');
    manaElement.textContent = manaPoints;
}