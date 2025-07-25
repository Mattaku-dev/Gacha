const games = [
    {
        name: "Genshin Impact",
        characters: [
            "Albedo", "Alhaitham", "Aloy", "Amber", "Arataki Itto", "Arlecchino", "Baizhu", "Barbara", "Beidou", "Bennett",
            "Candace", "Charlotte", "Chasca", "Chevreuse", "Chiori", "Chongyun", "Citlali", "Clorinde", "Collei", "Cyno",
            "Dahlia", "Dehya", "Diluc", "Diona", "Dori", "Emilie", "Escoffier", "Eula", "Faruzan", "Fischl",
            "Freminet", "Furina", "Gaming", "Ganyu", "Gorou", "Hu Tao", "Iansan", "Ifa", "Jean", "Kachina",
            "Kaedehara Kazuha", "Kaeya", "Kamisato Ayaka", "Kamisato Ayato", "Kaveh", "Keqing", "Kinich", "Kirara", "Klee", "Kujou Sara",
            "Kuki Shinobu", "Lan Yan", "Layla", "Lisa", "Lynette", "Lyney", "Mavuika", "Mika", "Mona", "Mualani",
            "Nahida", "Navia", "Neuvillette", "Nilou", "Ningguang", "Noelle", "Ororon", "Qiqi", "Raiden Shogun", "Razor",
            "Rosaria", "Sangonomiya Kokomi", "Sayu", "Sethos", "Shenhe", "Shikanoin Heizou", "Sigewinne", "Skirk", "Sucrose", "Tartaglia",
            "Thoma", "Tighnari", "Traveler", "Varesa", "Venti", "Wanderer", "Wriothesley", "Xiangling", "Xianyun", "Xiao",
            "Xilonen", "Xingqiu", "Xinyan", "Yae Miko", "Yanfei", "Yaoyao", "Yelan", "Yoimiya", "Yumemizuki Mizuki", "Yun Jin",
            "Zhongli"
        ]
    },
    {
        name: "Zenless Zone Zero",
        characters: [
            "Alexandrina Sebastiane", "Anby Demara", "Anton Ivanov", "Asaba Harumasa", "Astra Yao", "Ben Bigger", "Billy Kid", "Burnice White", "Caesar King", "Corin Wickes",
            "Ellen Joe", "Evelyn Chevalier", "Grace Howard", "Hoshimi Miyabi", "Hugo Vlad", "Jane Doe", "Ju Fufu", "Koleda Belobog", "Lighter", "Luciana de Montefio",
            "Nekomiya Mana", "Nicole Demara", "Pan Yinhu", "Piper Wheel", "Pulchra Fellini", "Qingyi", "Seth Lowell", "Soldier 0 - Anby", "Soldier 11", "Soukaku",
            "Trigger", "Tsukishiro Yanagi", "Ukinami Yuzuha", "Vivian Banshee", "Von Lycaon", "Yixuan", "Zhu Yuan"
        ]
    },
    {
        name: "Wuthering Waves",
        characters: [
            "Aalto", "Baizhi", "Brant", "Calcharo", "Camellya", "Cantarella", "Carlotta", "Cartethyia", "Changli", "Chixia",
            "Ciaccona", "Danjin", "Encore", "Jianxin", "Jinhsi", "Jiyan", "Lingyang", "Lumi", "Lupa", "Mortefi",
            "Phoebe", "Phrolova", "Roccia", "Rover-Aero", "Rover-Havoc", "Rover-Spectro", "Sanhua", "Shorekeeper", "Taoqi", "Verina",
            "Xiangli Yao", "Yangyang", "Yinlin", "Youhu", "Yuanwu", "Zani", "Zhezhi"
        ]
    },
    {
        name: "Honkai Star Rail",
        characters: [
            "Acheron", "Aglaea", "Anaxa", "Archer", "Argenti", "Arlan", "Asta", "Aventurine", "Bailu", "Black Swan",
            "Blade", "Boothill", "Bronya", "Castorice", "Cipher", "Clara", "Dan Heng", "Dan Heng • Imbibitor Lunae", "Dr. Ratio", "Feixiao",
            "Firefly", "Fu Xuan", "Fugue", "Gallagher", "Gepard", "Guinaifen", "Hanya", "Herta", "Himeko", "Hook",
            "Huohuo", "Hyacine", "Jade", "Jiaoqiu", "Jing Yuan", "Jingliu", "Kafka", "Lingsha", "Luka", "Luocha",
            "Lynx", "March 7th", "Misha", "Moze", "Natasha", "Pela", "Phainon", "Qingque", "Rappa", "Robin",
            "Ruan Mei", "Saber", "Sampo", "Seele", "Serval", "Silver Wolf", "Sparkle", "Sunday", "Sushang", "The Herta",
            "Tingyun", "Topaz & Numby", "Trailblazer", "Tribbie", "Welt", "Xueyi", "Yanqing", "Yukong", "Yunli"
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
                    showResult();
                }
            }, 50); // Adjust for scan duration (5 seconds total)
        };
    };
    reader.readAsDataURL(file);
});

function showResult() {
    // True randomness for variety each time
    const gameIndex = Math.floor(Math.random() * games.length);
    const game = games[gameIndex];

    const charIndex = Math.floor(Math.random() * game.characters.length);
    const character = game.characters[charIndex];

    document.getElementById('overlay').style.display = 'none';
    document.getElementById('percentage').style.display = 'none';

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>You best align with ${game.name}!</h2>
        <p>Your new best friend is ${character}!</p>
    `;
}
