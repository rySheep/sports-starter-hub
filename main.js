// 功能 1：切換頁籤 (Wiki, Article, Quiz, Calendar)
// ================= 1. 豐富的資料庫 =================

// 原本的紀錄資料
const wikiRecords = {
    f1: [
        { title: "最年輕站上頒獎台的車手", holder: "Max Verstappen", detail: "在 2016 年西班牙大獎賽以 18 歲又 228 天奪冠。" },
        { title: "歷史最多世界冠軍車手", holder: "Michael Schumacher & Lewis Hamilton", detail: "兩人共同保持 7 次世界冠軍的歷史紀錄。" }
    ],
    mlb: [
        { title: "現代棒球歷史最多連敗", holder: "巴爾的摩金鶯 (1988年)", detail: "創下開季 21 連敗的慘烈紀錄。" },
        { title: "史無前例的 50轟50盜", holder: "大谷翔平", detail: "2024年達成單季 50 支全壘打與 50 次盜壘的非人類紀錄。" }
    ]
};

// 新增：F1 歷史編年史資料 (網羅各個年代的精華)
const f1History = [
    {
        year: "1950年代",
        title: "F1 的誕生與前置引擎",
        desc: "1950 年，第一場 F1 世界錦標賽在英國銀石賽道舉辦。當時的賽車多為「前置引擎」，外觀呈現雪茄狀，完全沒有空氣動力學或下壓力概念。車手甚至不繫安全帶，僅佩戴布製頭罩和護目鏡上陣，充滿了危險與純粹的機械感。阿根廷車手 Fangio 統治了這個時代，十年內奪下 5 次世界冠軍。",
        img: "./images/f1 1950.jpg", // 🌟 換成你的本機圖片路徑
        funFact: "💡 趣事：當時有些車手在比賽中途還會停下來喝杯香檳，或是跟隊友交換車輛繼續開！"
    },
    {
        year: "1960s - 1970s",
        title: "引擎後置與空力革命",
        desc: "這個時期帶來了史上最重大的結構革命。引擎被移至車手後方，大幅改善了操控性。隨後 Lotus 車隊首創了「單體殼底盤」與「空氣動力學」概念，賽車長出了巨大的前後翼，利用空氣將車子死死壓在賽道上。70年代末更引入了「地面效應」，過彎速度獲得史詩級提升。",
        img: "./images/f1 1970.jpg", // 🌟 換成你的本機圖片路徑
        funFact: "💡 趣事：1976 年 Tyrrell 車隊造出了「六輪賽車 (P34)」，前面有四個小輪子，雖然拿過冠軍但後來被禁用。"
    },
    {
        year: "1980s - 1990s",
        title: "渦輪怪獸與安全覺醒",
        desc: "80 年代是 F1 的「渦輪增壓」盛世，賽車在排位賽模式下能榨出超過 1,200 匹的恐怖馬力！這時期見證了洗拿 (Ayrton Senna) 與保魯斯 (Alain Prost) 的世紀對決。然而，1994 年洗拿的意外殞落震驚全球，促使 F1 進行了史無前例的安全大改革，並強制實施嚴格的撞擊測試。",
        img: "./images/f1 1990.jpg", // 🌟 換成你的本機圖片路徑
        funFact: "💡 變更：90年代曾引進「主動懸吊系統」，車子過彎會自動保持水平，但因為太像電腦在開車而被禁用。"
    },
    {
        year: "2000s - 2010s",
        title: "V10 聲浪與油電混合",
        desc: "千禧年初期被 V10 引擎高亢刺耳的聲浪所定義，這是舒馬克 (Michael Schumacher) 與法拉利的紅色王朝。到了 2014 年，F1 迎來最大變革，進入「V6 渦輪油電混合動力」時代，開啟了賓士車隊與 Hamilton 的八連霸業。2018 年，拯救無數生命的「Halo」頭部保護架正式強制加裝。",
        img: "./images/f1 2010.jpg", // 🌟 換成你的本機圖片路徑
        funFact: "💡 創新：為了增加賽事觀賞性與超車機會，2011 年正式引入了 DRS (減阻系統)。"
    },
    {
        year: "2020年代",
        title: "地面效應回歸與新世代",
        desc: "為了解決賽車跟車時亂流導致難以超車的問題，2022 年空力規則大洗牌，重新帶回了「地面效應」底盤設計。同時，F1 史上首度實施「預算帽」限制開銷。這個年代開啟了 Max Verstappen 與 Red Bull 車隊的新霸業，寫下現代 F1 最不可思議的連勝神級數據。",
        img: "./images/f1 2020.jpg", // 🌟 換成你的本機圖片路徑
        funFact: "💡 規則：目前車隊每年被限制只能花費約 1.35 億美金打造與研發賽車，以拉近貧富差距。"
    }
];

const quizData = {
    f1: [
        { q: "F1 賽事中揮舞「黃旗」代表什麼？", options: ["比賽結束", "前方危險，減速禁超車", "車輛進站", "有碎屑"], ans: 1 },
        { q: "被稱為 F1 史上最安全的發明「Halo」是哪一年強制引入的？", options: ["1994年", "2008年", "2014年", "2018年"], ans: 3 }
    ],
    mlb: [
        { q: "標準棒球場總共有幾個壘包？", options: ["2個", "3個", "4個", "5個"], ans: 2 }
    ]
};

// ================= 2. 狀態與控制邏輯 =================
let currentSport = 'f1'; 
let currentTab = 'wiki'; 

function enterSport(sport) {
    setSport(sport);
    document.querySelector('.navbar').scrollIntoView({ behavior: 'smooth' });
}


function setSport(sport) {
    currentSport = sport;
    document.getElementById('nav-btn-f1').className = sport === 'f1' ? 'active-f1' : '';
    document.getElementById('nav-btn-mlb').className = sport === 'mlb' ? 'active-mlb' : '';
    if (currentTab === 'wiki') loadWiki();
    if (currentTab === 'quiz') loadQuiz();
}

function switchTab(tabName) {
    currentTab = tabName;
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    const tabs = ['wiki', 'quiz', 'article', 'calendar'];
    tabs.forEach(t => document.getElementById(`tab-btn-${t}`).classList.remove('active'));
    document.getElementById(`tab-btn-${tabName}`).classList.add('active');

    if (tabName === 'wiki') loadWiki();
    if (tabName === 'quiz') loadQuiz();
}

// ================= 3. 渲染資料函數 =================
function loadWiki() {
    const display = document.getElementById('wiki-display');
    const title = document.getElementById('wiki-title');
    display.innerHTML = ''; 

    if (currentSport === 'f1') {
        // 隱藏原本的預設標題，因為我們要用滿版全螢幕來展示
        title.style.display = 'none'; 

        // 建立全螢幕滾動容器
        const storyContainer = document.createElement('div');
        storyContainer.className = 'story-container';

        // 直接跑迴圈，動態生成每一個年代的「全螢幕頁面」
        f1History.forEach((era, index) => {
            // 如果是最後一頁，就不顯示向下箭頭
            const arrowHtml = index === f1History.length - 1 ? '' : '<div class="slide-arrow">↓</div>';
            
            storyContainer.innerHTML += `
                <div class="story-slide" style="background-image: url('${era.img}');">
                    <div class="story-content">
                        <span class="story-year">${era.year}</span>
                        <h3>${era.title}</h3>
                        <p>${era.desc}</p>
                        <div class="story-fun-fact">${era.funFact}</div>
                    </div>
                    ${arrowHtml}
                </div>
            `;
        });

        display.appendChild(storyContainer);

    } else {
        // MLB 維持原本的顯示方式，把標題叫回來
        title.style.display = 'block';
        title.innerText = `⚾ MLB 大聯盟歷史維基`;
        const gridContainer = document.createElement('div');
        gridContainer.className = 'card-container';
        wikiRecords.mlb.forEach(item => {
            gridContainer.innerHTML += `
                <div class="card mlb-card">
                    <h3>${item.title}</h3>
                    <p><strong>紀錄保持：</strong> <span style="color:var(--mlb-color);">${item.holder}</span></p>
                    <p>${item.detail}</p>
                </div>`;
        });
        display.appendChild(gridContainer);
    }
}

// ====== 功能 3：最新賽程表 (讀取 schedule.json 資料) ======
function loadSchedule(sportType) {
    const display = document.getElementById('schedule-display');
    display.innerHTML = '<p>最新賽程載入中...</p>';

    // 去 data 資料夾抓我們剛剛用 Python 爬蟲生出來的 schedule.json
    fetch('data/schedule.json')
        .then(response => response.json())
        .then(data => {
            const matches = data[sportType];
            display.innerHTML = ''; // 清空載入中提示
            
            // 如果找不到資料
            if (!matches || matches.length === 0) {
                display.innerHTML = '<p>目前沒有即將到來的賽事喔！</p>';
                return;
            }

            // 跑迴圈把每一場比賽渲染成字卡
            matches.forEach(match => {
                display.innerHTML += `
                    <div class="card" style="border-left: 5px solid #18bc9c; margin-bottom: 15px; padding: 15px; background: #f8f9fa; border-radius: 4px;">
                        <span style="font-size: 14px; color: #7f8c8d; font-weight: bold;">📅 比賽日期：${match.date}</span>
                        <h3 style="margin: 8px 0;">${match.event}</h3>
                        <p style="margin: 4px 0; font-size: 15px;">📍 <strong>比賽地點：</strong>${match.location}</p>
                        <p style="margin: 4px 0; font-size: 15px; color: #e74c3c;">⏰ <strong>開賽時間：</strong>${match.time}</p>
                    </div>
                `;
            });
        })
        .catch(err => {
            console.error("載入失敗：", err);
            display.innerHTML = `<p style="color:red;">賽程表載入失敗，請檢查檔案路徑或重新整理。</p>`;
        });
}
function loadQuiz() {
    const display = document.getElementById('quiz-display');
    const title = document.getElementById('quiz-title');
    const data = quizData[currentSport];
    
    title.innerText = `🧠 ${currentSport === 'f1' ? '🏁 F1' : '⚾ MLB'} 測驗挑戰`;
    display.innerHTML = ''; 

    data.forEach((item, index) => {
        let optionsHtml = '';
        item.options.forEach((opt, optIdx) => {
            optionsHtml += `<button class="quiz-option" onclick="checkAnswer(${optIdx}, ${item.ans})">${opt}</button>`;
        });
        display.innerHTML += `
            <div class="card ${currentSport}-card">
                <h3>Q${index + 1}: ${item.q}</h3>
                <div>${optionsHtml}</div>
            </div>`;
    });
}

function checkAnswer(userChoice, correctChoice) {
    if (userChoice === correctChoice) {
        alert("🎉 答對了！");
    } else {
        alert("❌ 答錯了，再試一次！");
    }
}

window.onload = () => setSport('f1');
