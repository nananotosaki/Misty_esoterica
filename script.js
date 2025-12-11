const cardsArray = [
    { number: 0, name: "The Fool", meaning: "New beginnings, optimism, trust in life", img: "imgs/TarotCard_01_TheFool.jpeg", alt: "The Fool Tarot Card" },
    { number: 1, name: "The Magician", meaning: "Action, the power to manifest", img: "imgs/TarotCard_02_TheMagician.jpeg", alt: "The Magician Tarot Card" },
    { number: 2, name: "The High Priestess", meaning: "Inaction, going within, the subconscious", img: "imgs/TarotCard_03_TheHighPriestess.jpg", alt: "The High Priestess Tarot Card" },
    { number: 3, name: "The Empress", meaning: "Abundance, nurturing, fertility, life in bloom!", img: "imgs/TarotCard_04_TheEmpress.jpg", alt: "The Empress Tarot Card" },
    { number: 4, name: "The Emperor", meaning: "Structure, stability, rules and power", img: "imgs/TarotCard_05_TheEmperor.jpg", alt: "The Emperor Tarot Card" },
    { number: 5, name: "The Hierophant", meaning: "Institutions, tradition, society and its rules", img: "imgs/TarotCard_06_TheHierophant.jpg", alt: "The Hierophant Tarot Card" },
    { number: 6, name: "The Lovers", meaning: "Sexuality, passion, choice, uniting", img: "imgs/TarotCard_07_TheLovers.jpg", alt: "The Lovers Tarot Card" },
    { number: 7, name: "The Chariot", meaning: "Movement, progress, integration", img: "imgs/TarotCard_08_TheChariot.jpg", alt: "The Chariot Tarot Card" },
    { number: 8, name: "Strength", meaning: "Courage, subtle power, integration of animal self", img: "imgs/TarotCard_09_Strength.jpg", alt: "The Strength Tarot Card" },
    { number: 9, name: "The Hermit", meaning: "Meditation, solitude, consciousness", img: "imgs/TarotCard_10_TheHermit.jpg", alt: "The Hermit Tarot Card" },
    { number: 10, name: "Wheel of Fortune", meaning: "Cycles, change, ups and downs", img: "imgs/TarotCard_11_WheelOfFortune.jpg", alt: "The Wheel of Fortune Tarot Card" },
    { number: 11, name: "Justice", meaning: "Fairness, truth, cause and effect", img: "imgs/TarotCard_12_Justice.jpg", alt: "The Justice Tarot Card" },
    { number: 12, name: "The Hanged Man", meaning: "Surrender, new perspective, enlightenment", img: "imgs/TarotCard_13_TheHangedMan.jpg", alt: "The Hanged Man Tarot Card" },
    { number: 13, name: "Death", meaning: "Endings, change, transformation", img: "imgs/TarotCard_14_Death.jpg", alt: "The Death Tarot Card" },
    { number: 14, name: "Temperance", meaning: "Balance, moderation, patience", img: "imgs/TarotCard_15_Temperance.jpg", alt: "The Temperance Tarot Card" },
    { number: 15, name: "The Devil", meaning: "Bondage, addiction, sexuality, shadow self", img: "imgs/TarotCard_16_TheDevil.jpg", alt: "The Devil Tarot Card" },
    { number: 16, name: "The Tower", meaning: "Sudden change, upheaval, revelation", img: "imgs/TarotCard_17_TheTower.jpg", alt: "The Tower Tarot Card" },
    { number: 17, name: "The Star", meaning: "Hope, inspiration, generosity", img: "imgs/TarotCard_18_TheStar.jpg", alt: "The Star Tarot Card" },
    { number: 18, name: "The Moon", meaning: "Illusion, intuition, the subconscious mind", img: "imgs/TarotCard_19_TheMoon.jpg", alt: "The Moon Tarot Card" },
    { number: 19, name: "The Sun", meaning: "Joy, success, celebration, positivity", img: "imgs/TarotCard_20_TheSun.jpg", alt: "The Sun Tarot Card" },
    { number: 20, name: "Judgement", meaning: "Reflection, reckoning, awakening", img: "imgs/TarotCard_21_Judgement.jpg", alt: "The Judgement Tarot Card" },
    { number: 21, name: "The World", meaning: "Completion, integration, accomplishment", img: "imgs/TarotCard_22_TheWorld.jpg", alt: "The World Tarot Card" }
];

function tarot() {
    // alert("Tarot function called!");
    
    // Create array of indices [0, 1, 2, ..., 21]
    const indices = Array.from({length: 22}, (_, i) => i);
    
    // Shuffle the indices
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    const shuffledIndices = shuffleArray(indices);
    const selectedIndices = shuffledIndices.slice(0, 3);
    
    // Map directly to card objects
    const selectedCards = selectedIndices.map(index => cardsArray[index]);
    
    // console.log("Selected Cards:", selectedCards);
    
    // Display them (example)
    selectedCards.forEach((card, position) => {
        console.log(`Card ${position + 1}: ${card.name} - ${card.meaning}`);
        document.getElementById("card_" + (position + 1) + "_img").src = card.img;
        document.getElementById("card_" + (position + 1) + "_img").alt = card.alt;
        document.getElementById("card_" + (position + 1) + "_name").innerText = card.name;
        document.getElementById("card_" + (position + 1) + "_meaning").innerText = card.meaning;
    });
    
    return selectedCards;
}