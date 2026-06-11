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
        year: "1950年代：F1 的誕生",
        title: "銀石賽道的初代霸主",
        desc: "1950 年 5 月 13 日，史上第一場 F1 世界錦標賽在英國銀石 (Silverstone) 賽道舉辦。當時的賽車引擎裝在車頭，車手甚至只戴著簡單的皮帽或帆布帽就上場飆速，完全沒有現代的安全帶概念。阿根廷車手 Fangio 統治了這個時代，拿下 5 座世界冠軍。",
        img: "https://images.unsplash.com/photo-1541343759972-e1903e67041c?auto=format&fit=crop&w=800&q=80",
        funFact: "💡 趣事：當時有些車手在比賽中途還會停下來喝杯香檳，或是跟隊友交換車輛繼續開！"
    },
    {
        year: "1960 - 1970年代：空氣動力學革命",
        title: "引擎後置與翅膀的出現",
        desc: "工程師發現把引擎移到車手後方能大幅提升操控性，Cooper 車隊開啟了「後置引擎」革命。隨後，Lotus 車隊率先引入了「空氣動力學」概念，在賽車上裝上巨大的前後翼（翅膀），利用空氣把車子死死壓在賽道上（下壓力）。",
        img: "https://images.unsplash.com/photo-1532560877990-281b3df601d5?auto=format&fit=crop&w=800&q=80",
        funFact: "💡 趣事：1976 年 Tyrrell 車隊造出了「六輪賽車 (P34)」，前面有四個小輪子，雖然真的拿過冠軍，但後來被賽會禁止了。"
    },
    {
        year: "1980 - 1990年代：黃金時代與安全覺醒",
        title: "渦輪怪獸與洗牌的賽規",
        desc: "80 年代迎來了「渦輪增壓」時代，賽車在排位賽的馬力甚至可以榨出恐怖的 1200 匹！這個時期誕生了洗拿 (Ayrton Senna) 與保魯斯 (Alain Prost) 的世紀宿敵對決。然而，1994 年洗拿的意外殞落震驚全球，促使 F1 進行了史無前例的安全大改革。",
        img: "https://images.unsplash.com/photo-1511365857211-1baab1bf7cbb?auto=format&fit=crop&w=800&q=80",
        funFact: "💡 變更：90年代曾引進「主動懸吊系統」，車子過彎會自動保持水平，但因為太像「電腦在開車」而被禁用。"
    },
    {
        year: "2010 - 2020年代：現代科技頂峰",
        title: "油電混合與 Halo 保護陣",
        desc: "2014 年 F1 進入「V6 渦輪油電混合動力」時代，引擎變得更小卻更高效，開啟了賓士 (Mercedes) 車隊與 Hamilton 的霸業。2018 年強制加裝了人字型防滾架「Halo」，雖然一開始被車迷嫌醜，卻在隨後幾年拯救了無數車手的性命。現在則是 Verstappen 統治的地面效應 (Ground Effect) 時代。",
        img: "https://images.unsplash.com/photo-1610884447640-42b8ec61a933?auto=format&fit=crop&w=800&q=80",
        funFact: "💡 規則：為了縮小貧富差距，F1 在 2021 年正式引入「預算帽」，限制豪門車隊每年只能花約 1.35 億美金打造賽車。"
    }
];

// 原本的測驗資料 (維持不變)
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
    document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
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
        // 隱藏原本的標題，因為我們要用全螢幕來展示
        title.style.display = 'none'; 

        // 建立全螢幕滾動容器
        const storyContainer = document.createElement('div');
        storyContainer.className = 'story-container';

        // 加上一個「封面頁」：經典歷史紀錄
        let coverHtml = `
            <div class="story-slide" style="background-image: url('https://images.unsplash.com/photo-1541343759972-e1903e67041c?auto=format&fit=crop&w=1920&q=80');">
                <div class="story-content">
                    <span class="story-year">F1 榮耀殿堂</span>
                    <h3>🏆 經典歷史紀錄</h3>
                    <div style="text-align: left; margin-top: 20px;">
        `;
        wikiRecords.f1.forEach(item => {
            coverHtml += `<p><strong>${item.title}：</strong> <span style="color:#ff4a4a;">${item.holder}</span><br><span style="font-size:0.9rem; opacity:0.8;">${item.detail}</span></p>`;
        });
        coverHtml += `
                    </div>
                    <p style="margin-top: 30px; font-size: 0.9rem; opacity: 0.7;">向下滾動進入時光機 ↓</p>
                </div>
                <div class="slide-arrow">↓</div>
            </div>
        `;
        storyContainer.innerHTML += coverHtml;

        // 動態生成每一個年代的「全螢幕頁面」
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
