let quotes = [
    {
        quote:"L'ART, C'EST CE QUI EST BEAU, CE QUI S'INSCRIT DANS LA DUREÉ, CE QUI RESTE ET SUBIT AVEC GRACE LES AFFRES DU TEMPS. CE QUI EST ETERNEL EST BEAU.",
        author:"SASORI"

    },
    {
        quote:"LEARN TO ACCEPT HOW TO EMBRACE THE FEAR OF FEELING ABOUT WHAT IT'S LIKE TO CONTEMPLATE WHAT IT IS TO KNOW TRUE PAIN. BECAUSE WHEN I HAD NOTHING AND NO ONE, I ALWAYS HAD PAIN",
        author:"PAIN"
    },
    {
        quote:"CEUX QUI NE COMPRENNENT PAS LA VRAIE DOULEUR,NE PEUVENT PAS COMPRENDRE LA VRAIE PAIX",
        author:"PAIN"
    },
    {
        quote:"CONTENTE TOI D'AVANCER MEME SI TON CHEMIN EST CELUI DU CARNAGE",
        author:"ITACHI UCHIHA"
    },
    {
        quote:"ARGENT COMPTANT VAUT TOUS LES TOURMENTS MEME CEUX DE L'ENFERS",
        author:"KAKUZU"
    },
    {
        quote:"CE NE SONT PAS LES GENS QUI CHANGENT, CE SONT LES MASQUES QUI TOMBENT.",
        author:"OBITO UCHIHA"
    },
    {
        quote:"L'AMOUR ENGENDRE LE SACRIFIVE QUI LUI MEME ENGENDRE LA HAINE ET C'EST LA QUE LA SOUFRANCE ENTRE EN JEU",
        author:"NAGATO"
    }
]

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let button = document.querySelector("button");

button.addEventListener("click",()=>{
    let random = Math.floor( Math.random() * quotes.length );
    console.log(random);

    h2.innerText = quotes[random].quote;
    h3.innerText = quotes[random].author;
});