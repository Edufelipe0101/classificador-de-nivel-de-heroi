let nomeDoHeroi = prompt('Qual o nome do seu personagem?');
let nivelDeXp = parseInt(prompt('Quantos XP possui seu personagem?'));
let nomeNivel;

if (nivelDeXp <= 1000) {
    nomeNivel = 'Ferro';
} else if (nivelDeXp <= 2000) {
    nomeNivel = 'Bronze';
} else if (nivelDeXp <= 5000) {
    nomeNivel = 'Prata';
} else if (nivelDeXp <= 7000) {
    nomeNivel = 'Ouro';
} else if (nivelDeXp <= 8000) {
    nomeNivel = 'Platina';
} else if (nivelDeXp <= 9000) {
    nomeNivel = 'Ascendente';
} else if (nivelDeXp <= 10000) {
    nomeNivel = 'Imortal';
} else {
    nomeNivel = 'Radiante'; 
}

alert(`O Herói de nome ${nomeDoHeroi} está no nível de ${nomeNivel}`);


