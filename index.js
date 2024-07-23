let nome = "Gabriel";
let xp = 2001;

if (xp <= 1000) {
    xp = "FERRO"
    } else if (xp <= 2000) {
        xp = "BRONZE"
        } 
        else if (xp <= 5000){
            xp = "PRATA"
        }
        else if (xp <= 7000){
            xp = "OURO"
        }
        else if (xp <= 8000){
           xp = "PLATINA"
        }
        else if (xp <= 9000){
            xp = "ASCENDENTE"
        }
        else if (xp <= 10000){
            xp = "IMORTAL"
        }
        else if (xp >= 10001){
            xp = "RADIANTE"
        } else {
            xp = null
            console.log("ERRO, VOCÊ NAO TEM XP")
        }




console.log("O Herói de nome " + nome + " está no nível de " + xp )