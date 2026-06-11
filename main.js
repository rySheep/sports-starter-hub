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

// ================= 升級版測驗題庫 =================
// ================= 3大種類各 8 題的黃金題庫 =================
// ================= F1 + MLB 終極大滿貫題庫 =================
const quizData = {
    f1: {
        history: {
            label: "🏆 歷史賽事",
            questions: [
                { q: "被稱為 F1 史上最安全的發明「Halo」是哪一年強制引入的？", options: ["1994年", "2008年", "2014年", "2018年"], ans: 3 },
                { q: "目前 F1 歷史上拿下最多世界冠軍的車手是哪兩位？", options: ["Senna & Prost", "Schumacher & Hamilton", "Vettel & Alonso", "Verstappen & Leclerc"], ans: 1 },
                { q: "車號「44號」是哪一位現役傳奇車手的專屬幸運號碼？", options: ["Lewis Hamilton", "Max Verstappen", "Charles Leclerc", "Lando Norris"], ans: 0 },
                { q: "歷史上唯一的「全勝賽季（除了一場以外全部奪冠）」由哪支車隊在 1988 年創下？", options: ["Ferrari", "Williams", "McLaren", "Red Bull"], ans: 2 },
                { q: "哪位車手在 2007 年以僅僅 1 分之差擊敗強敵，奪得法拉利至今最後一個車手世界冠軍？", options: ["Fernando Alonso", "Kimi Räikkönen", "Felipe Massa", "Sebastian Vettel"], ans: 1 },
                { q: "F1 歷史上最年輕的世界冠軍紀錄保持人是誰？", options: ["Max Verstappen", "Lewis Hamilton", "Fernando Alonso", "Sebastian Vettel"], ans: 3 },
                { q: "F1 歷史上完成最多場大獎賽（Grand Prix）出賽的常青樹車手是誰？", options: ["Michael Schumacher", "Kimi Räikkönen", "Fernando Alonso", "Lewis Hamilton"], ans: 2 },
                { q: "被譽為「車神」，不幸於 1994 年聖馬利諾大獎賽意外身亡的巴西傳奇車手是誰？", options: ["Ayrton Senna", "Alain Prost", "Nigel Mansell", "Nelson Piquet"], ans: 0 }
            ]
        },
        tech: {
            label: "🏎️ 車輛知識",
            questions: [
                { q: "現代 F1 賽車使用的引擎動力單元（Power Unit）是什麼規格？", options: ["V8 自然進氣引擎", "V10 雙渦輪增壓引擎", "V6 渦輪增壓油電混合動力", "純電動力馬達"], ans: 2 },
                { q: "F1 賽車上的「DRS」系統，主要的作用是什麼？", options: ["增加車尾下壓力", "減少空氣阻力以利直線超車", "啟動自動剎車輔助", "快速冷卻後輪胎"], ans: 1 },
                { q: "賽車方向盤上的「Overtake（超車按鈕）」動力釋放，主要依賴哪一個系統？", options: ["ERS 能量回收系統", "DRS 尾翼系統", "NOS 氮氣加速", "Turbo 渦輪增壓"], ans: 0 },
                { q: "F1 賽車在乾燥賽道上使用的「沒有胎紋」的輪胎，通稱為什麼？", options: ["雨胎", "半雨胎", "全地形胎", "光頭胎 (Slicks)"], ans: 3 },
                { q: "賽車在高速行駛時，利用車底特殊設計將車身強力「吸」在地面上的物理效應稱為什麼？", options: ["地面效應 (Ground Effect)", "溫室效應", "白努利效應", "多普勒效應"], ans: 0 },
                { q: "F1 賽車車體最核心、用來在猛烈撞擊中保護車手安全的碳纖維堅固外殼俗稱為什麼？", options: ["保險桿", "防滾籠", "單體殼 (Monocoque)", "底盤擴散器"], ans: 2 },
                { q: "賽車手在暖胎圈時左右大幅蛇行（Weaving），最主要的目的功能是什麼？", options: ["測試方向盤有沒有壞", "提高輪胎溫度以增加抓地力", "清理賽道上的碎石", "向現場觀眾揮手致意"], ans: 1 },
                { q: "當賽車進站換胎（Pit Stop）時，頂尖車隊工作人員通常可以在幾秒內完成四輪更換？", options: ["2秒以下", "5秒左右", "10秒左右", "30秒以上"], ans: 0 }
            ]
        },
        rules: {
            label: "📜 賽車規則",
            questions: [
                { q: "F1 賽事中揮舞「黃旗」代表什麼？", options: ["比賽結束", "前方危險，減速禁超車", "車輛進站", "有碎屑"], ans: 1 },
                { q: "在正賽中，車手必須至少進站幾次並更換不同配方的輪胎？（除非下雨）", options: ["不用進站", "1次", "2次", "沒有硬性規定"], ans: 1 },
                { q: "在排位賽中跑出單圈速度最快、獲得正賽第一位起跑資格的位置稱為什麼？", options: ["桿位 (Pole Position)", "分組一號", "領跑位", "黃金席次"], ans: 0 },
                { q: "如果賽道上發生嚴重事故但不需要中止比賽，大會會出動什麼車輛引導全場賽車減速排隊？", options: ["醫療車", "消防車", "安全車 (Safety Car)", "清運卡車"], ans: 2 },
                { q: "當賽道旁的電子號誌或工作人員揮舞「藍旗」時，代表什麼意思？", options: ["比賽暫停", "後方快車準備超車，慢車需讓道", "賽道上有積水", "最後一圈提示"], ans: 1 },
                { q: "F1 正賽中，單場比賽跑出「最快單圈（Fastest Lap）」且完賽進入前十名的車手，可額外獲得幾分？", options: ["0分", "1分", "3分", "5分"], ans: 1 },
                { q: "如果車手在比賽中發生輕微違規（如超出賽道限制），最常被判罰的時間處分是幾秒？", options: ["5秒", "30秒", "1分鐘", "退賽"], ans: 0 },
                { q: "當賽事因極端惡劣天氣或重大事故必須「完全暫停」時，大會會揮舞什麼顏色的旗幟？", options: ["黑旗", "紅旗", "白旗", "方格旗"], ans: 1 }
            ]
        }
    },
    mlb: {
        history: {
            label: "🏆 經典紀錄",
            questions: [
                { q: "標準棒球場總共有幾個壘包？", options: ["2個", "3個", "4個", "5個"], ans: 2 },
                { q: "大聯盟歷史上單季最多全壘打紀錄（73支）是由哪位傳奇重砲手保持的？", options: ["Babe Ruth", "Hank Aaron", "Barry Bonds", "大谷翔平"], ans: 2 },
                { q: "哪一支邪惡帝國球隊贏得過大聯盟歷史上最多的世界大賽冠軍（27次）？", options: ["波士頓紅襪", "紐約洋基", "洛杉磯道奇", "舊金山巨人"], ans: 1 }
            ]
        },
        rules: {
            label: "📜 棒球規則",
            questions: [
                { q: "棒球比賽中，一個半局防守方需要拿到幾個出局數才能換邊進攻？", options: ["1個", "2個", "3個", "4個"], ans: 2 },
                { q: "當無人出局一壘有人，打者擊出高飛球被接殺時，一壘跑者必須做什麼才不會被觸殺出局？", options: ["直接跑到二壘", "必須先回到一壘觸壘（Tag up）才能起跑", "待在原地不能動", "直接走回休息室"], ans: 1 },
                { q: "大聯盟規則中，什麼情況下會觸發「不死的三振」允許打者即便被三振也能跑向一壘？", options: ["投手投出觸身球", "打者擊出界外球被接殺", "兩好球後打者揮棒落空，且捕手沒有乾淨接穩球", "裁判判決錯誤重賽"], ans: 2 }
            ]
        },
        trivia: {
            label: "⚾ 球場知識",
            questions: [
                { q: "大聯盟在 2023 年引入了哪項重大新規來限制投捕準備時間、大幅加快比賽節奏？", options: ["全面採用電子好球帶", "投球計時器 (Pitch Clock)", "限制每場換投手人數", "縮短壘包之間的距離"], ans: 1 },
                { q: "在棒球記錄與防守定位中，防守紀錄數字代號「6號」代表哪一個位置？", options: ["二壘手", "三壘手", "游擊手", "中外野手"], ans: 2 }
            ]
        }
    }
};

// 🌟 重要：這裡要預設成 null，代表一開始不選取任何種類
let currentQuizCategory = null;
let userAnswers = {}; // 🌟 新增：用來偷偷記錄使用者每一題答對(true)還是答錯(false)

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
    
    currentQuizCategory = null; // 🌟 切換運動項目時，重置測驗種類，不預設顯示題目
    
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
    
    if (tabName === 'quiz') {
        currentQuizCategory = null; // 🌟 每次點擊導覽列切換到「小小測驗王」時，都先清空題目，讓使用者重新選
        loadQuiz();
    }
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
    const categoryBtnContainer = document.getElementById('quiz-category-buttons');
    
    const sportCategories = quizData[currentSport];
    
    title.innerText = `🧠 ${currentSport === 'f1' ? '🏁 F1' : '⚾ MLB'} 測驗挑戰`;

    // 1. 動態生成「種類選擇按鈕」
    categoryBtnContainer.innerHTML = '';
    for (let catKey in sportCategories) {
        const isBtnActive = currentQuizCategory === catKey;
        categoryBtnContainer.innerHTML += `
            <button class="btn ${currentSport}-btn" 
                    style="padding: 8px 20px; margin: 0 10px; font-size: 0.9rem; opacity: ${isBtnActive ? '1' : '0.4'}; transform: ${isBtnActive ? 'scale(1.05)' : 'scale(1)'}; transition: 0.3s;" 
                    onclick="setQuizCategory('${catKey}')">
                ${sportCategories[catKey].label}
            </button>
        `;
    }

    // 2. 🌟 關鍵修改：如果還沒選擇題目種類，顯示提示訊息，不跳出題目
    if (!currentQuizCategory || !sportCategories[currentQuizCategory]) {
        display.innerHTML = `
            <div class="card" style="text-align: center; padding: 40px; border-left: 5px solid #34495e;">
                <p style="font-size: 1.2rem; color: #7f8c8d; margin: 0;">💡 請點擊上方按鈕，選擇你想挑戰的測驗類型！</p>
            </div>`;
        return;
    }

    // 3. 顯示選定種類對應的題目
    display.innerHTML = ''; 
    const data = sportCategories[currentQuizCategory].questions;

    data.forEach((item, index) => {
        let optionsHtml = '';
        item.options.forEach((opt, optIdx) => {
            // 替每個按鈕加上獨一無二的 class 名稱（如 q-0-opt-2），方便等一下 checkAnswer 撈出來變色
            optionsHtml += `<button class="quiz-option q-${index}-opt-${optIdx}" onclick="checkAnswer(this, ${index}, ${optIdx}, ${item.ans})">${opt}</button>`;
        });
        display.innerHTML += `
            <div class="card ${currentSport}-card" style="margin-bottom: 20px;">
                <h3>Q${index + 1}: ${item.q}</h3>
                <div class="options-group">${optionsHtml}</div>
            </div>`;
    });
    userAnswers = {}; // 每次載入新題目時，清空計分板

    // 加入最底部的「交卷」按鈕
    display.innerHTML += `
        <div style="text-align: center; margin-top: 40px; margin-bottom: 20px;">
            <button class="btn ${currentSport}-btn" onclick="showQuizResult()" style="font-size: 1.2rem; padding: 15px 40px; box-shadow: 0 8px 20px rgba(0,0,0,0.2);">
                📝 交卷看成績！
            </button>
        </div>
    `;
}

// 點擊分類按鈕時觸發的魔法
function setQuizCategory(category) {
    currentQuizCategory = category;
    loadQuiz(); // 點擊按鈕後，記錄選取的種類並重新渲染畫面
}

function checkAnswer(clickedBtn, qIdx, userChoice, correctChoice) {
    // 撈出這一題包包裡面的所有選項按鈕
    const optionsGroup = clickedBtn.parentElement;
    const allOptions = optionsGroup.querySelectorAll('.quiz-option');
    
    // 🔄 重置：先把這題所有按鈕的外觀清空（這樣選錯了才能隨時點別的改答案）
    allOptions.forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.color = '';
        btn.style.borderColor = '';
        btn.style.fontWeight = 'normal';
    });

    if (userChoice === correctChoice) {
        // 🟢 答對：自己那一條直接變成質感主題綠色
        clickedBtn.style.backgroundColor = '#18bc9c';
        clickedBtn.style.color = 'white';
        clickedBtn.style.borderColor = '#18bc9c';
        clickedBtn.style.fontWeight = 'bold';
    } else {
        // 🔴 答錯：自己變成紅色一條
        clickedBtn.style.backgroundColor = '#e74c3c';
        clickedBtn.style.color = 'white';
        clickedBtn.style.borderColor = '#e74c3c';
        
        // 🟢 同時把隱藏在裡面的正確答案撈出來，亮起綠色一條
        const correctBtn = optionsGroup.querySelector(`.q-${qIdx}-opt-${correctChoice}`);
        if (correctBtn) {
            correctBtn.style.backgroundColor = '#18bc9c';
            correctBtn.style.color = 'white';
            correctBtn.style.borderColor = '#18bc9c';
            correctBtn.style.fontWeight = 'bold';
        }
    }
    if (userChoice === correctChoice) {
        userAnswers[qIdx] = true;  // 記下這題答對
    } else {
        userAnswers[qIdx] = false; // 記下這題答錯
    }
}

window.onload = () => setSport('f1');

// ================= 結算成績與彈出視窗 =================
function showQuizResult() {
    const data = quizData[currentSport][currentQuizCategory].questions;
    const totalQuestions = data.length;
    const answeredCount = Object.keys(userAnswers).length;

    // 檢查是不是每一題都作答了
    if (answeredCount < totalQuestions) {
        alert(`⚠️ 你還有 ${totalQuestions - answeredCount} 題沒寫完喔！請全部填完再交卷。`);
        return;
    }

    // 計算分數
    let correctCount = 0;
    for (let key in userAnswers) {
        if (userAnswers[key] === true) correctCount++;
    }
    let wrongCount = totalQuestions - correctCount;
    let score = Math.round((correctCount / totalQuestions) * 100);

    // 動態產生彈出視窗 (如果還沒有的話就建立一個)
    let modal = document.getElementById('quiz-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'quiz-modal';
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);
    }

    // 根據分數給予不同評語
    let comment = score === 100 ? "🏆 太神啦！你是傳奇滿分大師！" :
                  score >= 60 ? "👏 表現不錯喔，繼續保持對體育的熱愛！" : 
                  "💪 再接再厲，多看歷史維基補充知識吧！";

    // 填入結算畫面內容
    modal.innerHTML = `
        <div class="modal-content">
            <h2>成績結算</h2>
            <div class="score-circle" style="border-color: ${score >= 60 ? '#18bc9c' : '#e74c3c'};">${score}<span>分</span></div>
            <div class="score-details">
                <p style="color: #18bc9c;">✅ 答對：${correctCount} 題</p>
                <p style="color: #e74c3c;">❌ 答錯：${wrongCount} 題</p>
            </div>
            <p class="score-comment">${comment}</p>
            <button class="btn" style="background:#34495e; color:white; width: 100%; margin-top:25px; padding: 12px;" onclick="closeQuizResult()">關閉並重新挑戰</button>
        </div>
    `;
    
    // 顯示視窗
    modal.style.display = 'flex';
}

function closeQuizResult() {
    const modal = document.getElementById('quiz-modal');
    if (modal) modal.style.display = 'none';
    
    // 🌟 關鍵修改：把目前選取的分類清空，然後重新載入畫面
    currentQuizCategory = null;
    loadQuiz();
}