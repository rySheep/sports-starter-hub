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

const f1ArticleData = {
    tech: [
        { title: "跨世代引擎與動力單元", desc: "引擎是 F1 的心臟。從 2000 年代初高達 19,000 轉、發出高亢尖嘯的 3.0升 V10 自然進氣引擎（約900匹馬力），演進到今日的 1.6升 V6 渦輪增壓油電混合動力單元（Power Unit）。現代 F1 引擎熱效率超過 50%，結合內燃機與動能回收（MGU-K）、熱能回收（MGU-H）及高壓電池，綜效馬力突破 1,000 匹，擁有極致驚人的紐矩輸出，是人類史上最先進的科技結晶。", img: "./images/f1 engine.jpg" },
        { title: "特製輪胎與賽道策略", desc: "F1 全面採用 Pirelli 18吋特製輪胎。乾地使用「光頭胎 (Slicks)」，分為 C1(最硬) 到 C5(最軟)，軟胎抓地力極強但壽命短暫。雨天則有「半雨胎 (綠底)」與「全雨胎 (藍底)」，全雨胎在時速 300 公里下每秒可排開 85 公升的積水！車手在正賽中必須至少使用兩種不同配方的乾胎，進站換胎時機往往是決定勝負的關鍵。", img: "./images/f1 tires.jpg" },
        { title: "航空級空氣動力學", desc: "F1 的空力設計與戰鬥機機翼原理正好「相反」。飛機機翼用來產生升力，而 F1 的前翼與尾翼則利用空氣產生向下的「下壓力」，在高速過彎時把車身死死壓在賽道上（承受高達 5G 側向力）。尾翼更配有 DRS 減阻系統，在直線上打開翼片能降低阻力，換取 15km/h 的尾速優勢以利超車。", img: "./images/f1 aero.jpg" },
        { title: "HALO 神級防護系統", desc: "2018 年強制引入的「人」字型頭部防護架。由航太級鈦合金製成，重量僅約 7 公斤，卻能承受高達 12 噸的靜態衝擊力——這相當於把一台倫敦雙層巴士壓在上方也不會變形！它在無數次翻車與重疊碰撞中擋下致命碎片，是現代賽車安全的絕對核心。", img: "./images/f1 halo.jpg" },
        { title: "方向盤與純機械轉向", desc: "為了感受最直接的路面反饋，F1 堅持使用無動力輔助的「純機械轉向」，車手需要極大的臂力才能過彎。價值五萬美金以上的碳纖維方向盤佈滿旋鈕與液晶螢幕，讓車手能在時速 300 公里的極限環境下，以純手動調整煞車分配比、差速器鎖定與電池釋放模式。", img: "./images/f1 steering.jpg" }
    ],
    rules: [
        { title: "賽事週末流程", desc: "標準賽事分為三天：週五進行兩次自由練習（FP1、FP2），讓車隊測試車輛設定；週六進行 FP3 與「排位賽（Qualifying）」，排位賽採 Q1、Q2、Q3 三階段淘汰制，決出正賽的起跑順位；週日則是令人血脈賁張的正賽（Race），距離通常約為 305 公里。", img: "./images/f1 rule 1.jpg" },
        { title: "旗號系統與安全車", desc: "賽道以旗幟傳遞訊息：黃旗代表前方危險需減速禁超車；紅旗代表比賽因事故完全中斷；藍旗警告慢車需讓路給即將套圈的快車。發生重大事故但無需暫停時，會出動「安全車 (Safety Car)」，全場賽車必須跟在它後方減速繞行，嚴禁超車。", img: "./images/f1 rule 2.jpg" },
        { title: "積分分配制度", desc: "正賽前 10 名完賽的車手可獲得積分，依序為：25, 18, 15, 12, 10, 8, 6, 4, 2, 1 分。此外，若在前 10 名內完賽且跑出單場「最快單圈」，可額外獲 1 分。車手與所屬車隊將同時累計，爭奪年度車手總冠軍與車隊總冠軍。", img: "./images/f1 rule 3.jpg" }
    ],
    records: [
        { title: "歷史最年輕分站冠軍", desc: "紀錄保持人：Max Verstappen。2016 年西班牙大獎賽，年僅 18 歲又 228 天的他在升上 Red Bull 車隊的第一場比賽就奇蹟般奪下冠軍，寫下難以跨越的超年輕紀錄。", img: "./images/f1 rec max.jpg" },
        { title: "歷史最年輕世界冠軍", desc: "紀錄保持人：Sebastian Vettel。2010 年，23 歲又 134 天的 Vettel 駕駛 Red Bull 賽車在收官戰逆轉奪下年度總冠軍，開啟了他的四連霸王朝。", img: "./images/f1 rec sab.jpg" },
        { title: "歷史最多世界冠軍車手", desc: "紀錄保持人：Michael Schumacher 與 Lewis Hamilton。兩位跨時代的傳奇各自拿下了高達 7 次的世界冠軍。舒馬克主宰了千禧年初的紅色王朝，漢米爾頓則統治了 2010 年代的油電混合時代。", img: "./images/f1 rec lou mai.jpg" }
    ]
};

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
let currentArticleSubTab = null; // 🌟 紀錄目前在科普專欄的哪個分區 (tech, rules, records)

function enterSport(sport) {
    setSport(sport);
    document.querySelector('.navbar').scrollIntoView({ behavior: 'smooth' });
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
    if (tabName === 'article') {
        currentArticleSubTab = null; 
        loadArticle();
    }
}


function loadArticle() {
    const display = document.getElementById('article-tab');
    display.innerHTML = ''; 

    if (currentSport === 'mlb') {
        display.innerHTML = '<h2 style="text-align:center; margin-top:40px;">✍️ MLB 體育科普專欄</h2><p style="text-align:center;">MLB 專欄內容正在籌備中，敬請期待...</p>';
        return;
    }

    // === F1 科普專欄邏輯 ===
    if (currentArticleSubTab === null) {
        // 狀態 1：渲染三分割首頁入口
        display.innerHTML = `
            <div class="article-hub">
                <div class="split bg-tech" onclick="enterArticleSub('tech')">
                    <div class="content">
                        <h2> 技術核心</h2>
                        <p>引擎、空力、輪胎與科技</p>
                    </div>
                </div>
                <div class="split bg-rules" onclick="enterArticleSub('rules')">
                    <div class="content">
                        <h2> 賽制規則</h2>
                        <p>旗號、週末流程與積分</p>
                    </div>
                </div>
                <div class="split bg-records" onclick="enterArticleSub('records')">
                    <div class="content">
                        <h2> 榮耀紀錄</h2>
                        <p>神級數據與傳奇名將</p>
                    </div>
                </div>
            </div>
        `;
    } else {
        // 狀態 2：渲染沉浸式滿版展示
        const data = f1ArticleData[currentArticleSubTab];
        
        // 🌟 新增：確保外層畫布是相對定位，讓返回按鈕可以準確定位在左上角
        display.style.position = 'relative'; 

        // 建立返回按鈕
        const backBtn = document.createElement('button');
        backBtn.className = 'floating-back-btn';
        backBtn.innerText = '← 返回科普大廳';
        backBtn.onclick = () => {
            currentArticleSubTab = null;
            loadArticle();
        };
        // 🌟 關鍵修改：把按鈕直接加在 display (#article-tab) 上，而不是加在會滾動的容器裡
        display.appendChild(backBtn); 

        // 建立全螢幕滾動容器
        const storyContainer = document.createElement('div');
        storyContainer.className = 'story-container';

        data.forEach((item, index) => {
            const arrowHtml = index === data.length - 1 ? '' : '<div class="slide-arrow">↓</div>';
            storyContainer.innerHTML += `
                <div class="story-slide" style="background-image: url('${item.img}');">
                    <div class="story-content">
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                    </div>
                    ${arrowHtml}
                </div>
            `;
        });
        display.appendChild(storyContainer);
    }
}

function enterArticleSub(subTab) {
    currentArticleSubTab = subTab;
    loadArticle();
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