const games = [
    {
        name: "Genshin Impact",
        characters: [
            { name: "Albedo", image: "https://static.wikia.nocookie.net/genshin-impact/images/b/b3/Character_Albedo_Icon.png/revision/latest" },
            { name: "Alhaitham", image: "https://static.wikia.nocookie.net/genshin-impact/images/1/1c/Character_Alhaitham_Icon.png/revision/latest" },
            { name: "Arataki Itto", image: "https://static.wikia.nocookie.net/genshin-impact/images/4/4b/Character_Arataki_Itto_Icon.png/revision/latest" },
            { name: "Arlecchino", image: "https://static.wikia.nocookie.net/genshin-impact/images/7/75/Character_Arlecchino_Icon.png/revision/latest" },
            { name: "Baizhu", image: "https://static.wikia.nocookie.net/genshin-impact/images/0/0f/Character_Baizhu_Icon.png/revision/latest" },
            { name: "Chasca", image: "https://static.wikia.nocookie.net/genshin-impact/images/3/37/Character_Chasca_Icon.png/revision/latest" },
            { name: "Chiori", image: "https://static.wikia.nocookie.net/genshin-impact/images/5/58/Character_Chiori_Icon.png/revision/latest" },
            { name: "Citlali", image: "https://static.wikia.nocookie.net/genshin-impact/images/6/68/Character_Citlali_Icon.png/revision/latest" },
            { name: "Clorinde", image: "https://static.wikia.nocookie.net/genshin-impact/images/2/2f/Character_Clorinde_Icon.png/revision/latest" },
            { name: "Cyno", image: "https://static.wikia.nocookie.net/genshin-impact/images/8/80/Character_Cyno_Icon.png/revision/latest" }
        ]
    },
    {
        name: "Zenless Zone Zero",
        characters: [
            { name: "Alexandrina Sebastiane", image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/4d/Alexandrina_Sebastiane_Icon.png/revision/latest" },
            { name: "Anby Demara", image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/4a/Anby_Demara_Icon.png/revision/latest" },
            { name: "Anton Ivanov", image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/7f/Anton_Ivanov_Icon.png/revision/latest" },
            { name: "Asaba Harumasa", image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/1e/Asaba_Harumasa_Icon.png/revision/latest" },
            { name: "Astra Yao", image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/0b/Astra_Yao_Icon.png/revision/latest" },
            { name: "Ben Bigger", image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/7e/Ben_Bigger_Icon.png/revision/latest" },
            { name: "Billy Kid", image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6a/Billy_Kid_Icon.png/revision/latest" },
            { name: "Burnice White", image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/0f/Burnice_White_Icon.png/revision/latest" },
            { name: "Caesar King", image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/3d/Caesar_King_Icon.png/revision/latest" },
            { name: "Corin Wickes", image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/3e/Corin_Wickes_Icon.png/revision/latest" }
        ]
    },
    {
        name: "Wuthering Waves",
        characters: [
            { name: "Aalto", image: "https://static.wikia.nocookie.net/wutheringwaves/images/f/f2/Icon_Aalto.png/revision/latest" },
            { name: "Baizhi", image: "https://static.wikia.nocookie.net/wutheringwaves/images/4/4b/Icon_Baizhi.png/revision/latest" },
            { name: "Calcharo", image: "https://static.wikia.nocookie.net/wutheringwaves/images/3/3f/Icon_Calcharo.png/revision/latest" },
            { name: "Changli", image: "https://static.wikia.nocookie.net/wutheringwaves/images/6/6d/Icon_Changli.png/revision/latest" },
            { name: "Chixia", image: "https://static.wikia.nocookie.net/wutheringwaves/images/2/2f/Icon_Chixia.png/revision/latest" },
            { name: "Encore", image: "https://static.wikia.nocookie.net/wutheringwaves/images/0/0d/Icon_Encore.png/revision/latest" },
            { name: "Jiyan", image: "https://static.wikia.nocookie.net/wutheringwaves/images/9/9e/Icon_Jiyan.png/revision/latest" },
            { name: "Lingyang", image: "https://static.wikia.nocookie.net/wutheringwaves/images/8/8a/Icon_Lingyang.png/revision/latest" },
            { name: "Verina", image: "https://static.wikia.nocookie.net/wutheringwaves/images/4/4e/Icon_Verina.png/revision/latest" },
            { name: "Yinlin", image: "https://static.wikia.nocookie.net/wutheringwaves/images/5/5d/Icon_Yinlin.png/revision/latest" }
        ]
    },
    {
        name: "Honkai Star Rail",
        characters: [
            { name: "Acheron", image: "https://static.wikia.nocookie.net/honkai-star-rail/images/7/76/Character_Acheron_Icon.png/revision/latest" },
            { name: "Argenti", image: "https://static.wikia.nocookie.net/honkai-star-rail/images/6/6f/Character_Argenti_Icon.png/revision/latest" },
            { name: "Aventurine", image: "https://static.wikia.nocookie.net/honkai-star-rail/images/2/25/Character_Aventurine_Icon.png/revision/latest" },
            { name: "Bailu", image: "https://static.wikia.nocookie.net/honkai-star-rail/images/5/50/Character_Bailu_Icon.png/revision/latest" },
            { name: "Black Swan", image: "https://static.wikia.nocookie.net/honkai-star-rail/images/7/75/Character_Black_Swan_Icon.png/revision/latest" },
            { name: "Blade", image: "https://static.wikia.nocookie.net/honkai-star-rail/images/6/62/Character_Blade_Icon.png/revision/latest" },
            { name: "Boothill", image: "https://static.wikia.nocookie.net/honkai-star-rail/images/1/1d/Character_Boothill_Icon.png/revision/latest" },
            { name: "Bronya", image: "https://static.wikia.nocookie.net/honkai-star-rail/images/2/2e/Character_Bronya_Icon.png/revision/latest" },
            { name: "Clara", image: "https://static.wikia.nocookie.net/honkai-star-rail/images/5/59/Character_Clara_Icon.png/revision/latest" },
            { name: "Dan Heng • Imbibitor Lunae", image: "https://static.wikia.nocookie.net/honkai-star-rail/images/3/3f/Character_Dan_Heng_%E2%80%A2_Imbibitor_Lunae_Icon.png/revision/latest" }
        ]
    }
];

document.getElementById('upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = document.getElementById('selfie');
        img.src = event.target.result;
        img.style.display = 'block';

        img.onload = function() {
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('percentage').style.display = 'block';

            let percent = 0;
            const interval = setInterval(() => {
                percent += 1;
                document.getElementById('percentage').textContent = percent + '%';
                if (percent >= 100) {
                    clearInterval(interval);
                    showResult(img);
                }
            }, 50); // Adjust for scan duration (5 seconds total)
        };
    };
    reader.readAsDataURL(file);
});

function showResult(img) {
    // Use image dimensions as a simple "seed" for deterministic randomness based on the uploaded image
    const seed = img.naturalWidth + img.naturalHeight;
    const gameIndex = seed % games.length;
    const game = games[gameIndex];

    const charSeed = seed * 2; // Simple variation
    const charIndex = charSeed % game.characters.length;
    const character = game.characters[charIndex];

    document.getElementById('overlay').style.display = 'none';
    document.getElementById('percentage').style.display = 'none';

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>You best align with ${game.name}!</h2>
        <p>Your new best friend is ${character.name}!</p>
        <img src="${character.image}" alt="${character.name}">
    `;
}
