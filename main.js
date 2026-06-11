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

const mlbHistory = [
    {
        year: "1950年代：黃金紐約與球隊西進",
        title: "現代大聯盟版圖的成形",
        desc: "這個年代由紐約洋基隊的霸權統治，但最大的歷史轉折是球隊開始「向西搬遷」。布魯克林道奇與紐約巨人隊雙雙搬到加州，象徵大聯盟真正成為橫跨美國東西岸的全國性賽事，同時有色人種球員也開始在各隊大放異彩。",
        img: "./images/mlb 1950.jpg", 
        funFact: "💡 趣事：當時球員搭火車橫跨美國比賽要花好幾天，直到 1957 年道奇與巨人西遷後，大聯盟才全面進入「飛機移動時代」。"
    },
    {
        year: "1960年代：投手之年與規則修正",
        title: "統治打者的極端投手時代",
        desc: "1960 年代投手實力強悍到了極點，1968 年更被稱為「投手之年（Year of the Pitcher）」，全聯盟打擊率低到只有 .237。為了挽救低迷的得分與票房，大聯盟在 1969 年強行把投手丘的高度降低了 5 英吋，並縮小好球帶。",
        img: "./images/mlb 1960.jpg",
        funFact: "💡 紀錄：1968 年紅雀隊投手 Bob Gibson 創下單季防禦率 1.12 的神級紀錄，至今被認為是無法打破的現代障礙。"
    },
    {
        year: "1970年代：指定打擊與自由市場",
        title: "改變棒球生態的兩大震撼",
        desc: "1973 年，美國聯盟（AL）為了增加進攻火力，正式引入了「指定打擊（DH）」制度，讓投手不用上場打擊，這造成了美聯與國聯長達半世紀的規則差異。同時，「自由球員」制度也在這時期誕生，球員終於可以爭取千萬合約。",
        img: "./images/mlb 1970.jpg",
        funFact: "💡 變革：這個年代各大球場開始瘋狂鋪設「人工草皮」，讓比賽節奏變快，也讓內野手的防守變得更具挑戰性。"
    },
    {
        year: "1980年代：速度戰與牛棚專業化",
        title: "盜壘狂潮與終結者的崛起",
        desc: "這是一個充滿速度與激情的年代。以 Rickey Henderson 為首的飛毛腿們在壘包上瘋狂肆虐，單季破百次盜壘屢見不鮮。同時，球隊不再讓先發投手完投整場，「佈局投手」與「終結者（Closer）」的牛棚精細分工正式確立。",
        img: "./images/mlb 1980.jpg",
        funFact: "💡 紀錄：Rickey Henderson 在 1982 年跑出了至今無人能及的單季 130 次盜壘成功。"
    },
    {
        year: "1990年代：全壘打狂熱與外卡賽制",
        title: "巨砲轟炸與季後賽擴張",
        desc: "經歷了 1994 年的歷史性大罷工後，大聯盟急需挽回球迷。隨之而來的是 McGwire 與 Sosa 瘋狂的全壘打追逐戰，讓棒球重回全美焦點（儘管後來爆出禁藥爭議）。此外，1995 年正式引入「外卡（Wild Card）」制度，讓季後賽變得更激烈。",
        img: "./images/mlb 1990.jpg",
        funFact: "💡 趣事：1993 年大聯盟誕生了兩支新球隊（落磯、馬林魚），並開始大量生產專門用來打全壘打的「打者天堂」球場。"
    },
    {
        year: "2000年代：魔球理論與數據分析",
        title: "打破迷思的科學化建軍",
        desc: "以奧克蘭運動家隊為首，開始利用「上壘率」等進階數據來發掘被低估的球員，這套被稱為「魔球（Moneyball）」的哲學徹底顛覆了傳統球探只看打擊率與全壘打的迷思。各隊開始成立數據分析部門，棒球正式進入算盤時代。",
        img: "./images/mlb 2000.jpg",
        funFact: "💡 解咒：這個年代見證了兩大百年魔咒的破除——波士頓紅襪的「貝比魯斯魔咒」與芝加哥白襪的「黑襪魔咒」。"
    },
    {
        year: "2010年代：飛球革命與極端佈陣",
        title: "科技監測與極端棒球",
        desc: "隨著 Statcast 雷達追蹤系統的全面啟用，「擊球初速」與「擊球仰角」成為顯學，打者不再追求安打，而是全力追求把球扛出牆的「飛球革命」。防守方則發展出把內野手全塞在同一邊的「極端佈陣（Shift）」來沒收安打。",
        img: "./images/mlb 2010.jpg",
        funFact: "💡 戰術：因為大家都想打全壘打，導致這十年間的「三振數」年年破歷史新高，比賽變成了純粹的「全壘打、保送或三振」對決。"
    },
    {
        year: "2020年代：規則大改寫與二刀流降臨",
        title: "加快節奏與百年奇蹟",
        desc: "為了讓年輕人願意看球，大聯盟在 2023 年祭出史無前例的規則大改：引入「投球計時器」、禁止極端佈陣、加大壘包。同時，大谷翔平以百年難得一見的「二刀流」席捲全球，用不可思議的投打雙棲表現，將大聯盟推向全新的頂峰。",
        img: "./images/mlb 2020.jpg",
        funFact: "💡 影響：投球計時器引進的第一年，大聯盟每場比賽的平均時間一口氣縮短了將近 24 分鐘，盜壘數也激增了 40%！"
    }
];

// 👇 貼在 f1History 陣列的下面 👇
// ================= 3. 渲染資料函數 =================
function loadWiki() {
    const display = document.getElementById('wiki-display');
    const title = document.getElementById('wiki-title');
    display.innerHTML = ''; 

    // 隱藏原本的標題，全螢幕展示不需要原本的傳統標題
    title.style.display = 'none'; 

    // 建立全螢幕滾動容器
    const storyContainer = document.createElement('div');
    storyContainer.className = 'story-container';

    // 🌟 直接根據當前的運動項目，抓取對應的歷史年代資料
    const currentHistory = currentSport === 'f1' ? f1History : mlbHistory;

    // 動態生成每一個年代的「全螢幕頁面」（已經把經典紀錄封面刪除了）
    currentHistory.forEach((era, index) => {
        const arrowHtml = index === currentHistory.length - 1 ? '' : '<div class="slide-arrow">↓</div>';
        
        storyContainer.innerHTML += `
            <div class="story-slide" style="background-image: url('${era.img}');">
                <div class="story-content">
                    <span class="story-year" style="background: var(--${currentSport}-color); box-shadow: 0 4px 10px rgba(0,0,0,0.5);">${era.year}</span>
                    <h3>${era.title}</h3>
                    <p>${era.desc}</p>
                    <div class="story-fun-fact">${era.funFact}</div>
                </div>
                ${arrowHtml}
            </div>
        `;
    });

    display.appendChild(storyContainer);
}
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
                { q: "被譽為「車神」，不幸於 1994 年聖馬利諾大獎賽意外身亡的巴西傳奇車手是誰？", options: ["Ayrton Senna", "Alain Prost", "Nigel Mansell", "Nelson Piquet"], ans: 0 },
                { q: "2021年阿布達比收官戰，Max Verstappen 在最後一圈超車奪冠，當時被超越的車手是誰？", options: ["Valtteri Bottas", "Lewis Hamilton", "Charles Leclerc", "Sergio Perez"], ans: 1 },
                { q: "F1 歷史上唯一一位在死後才被追授世界冠軍的車手是誰？", options: ["Gilles Villeneuve", "Jochen Rindt", "Niki Lauda", "Jim Clark"], ans: 1 },
                { q: "哪支車隊被稱為「躍馬」，且是唯一一支從1950年第一屆參與至今的車隊？", options: ["McLaren", "Mercedes", "Ferrari", "Williams"], ans: 2 },
                { q: "2009年，哪支「只存在了一年」的奇蹟車隊拿下了車隊與車手雙料世界冠軍？", options: ["Brawn GP", "Red Bull Racing", "Lotus", "Renault"], ans: 0 },
                { q: "電影《決戰終點線(Rush)》中，描述的是哪兩位車手在1976年的史詩級對決？", options: ["Senna vs Prost", "Schumacher vs Hakkinen", "Lauda vs Hunt", "Hamilton vs Rosberg"], ans: 2 },
                { q: "哪位芬蘭車手以其冷酷寡言的性格被車迷們暱稱為「冰人(The Iceman)」？", options: ["Mika Hakkinen", "Valtteri Bottas", "Keke Rosberg", "Kimi Räikkönen"], ans: 3 },
                { q: "Sebastian Vettel 在效力哪支車隊期間，創下了史無前例的車手四連霸？", options: ["Ferrari", "Red Bull Racing", "Aston Martin", "Toro Rosso"], ans: 1 },
                { q: "史上最多分站冠軍（超過100勝）的紀錄目前由誰保持？", options: ["Michael Schumacher", "Alain Prost", "Lewis Hamilton", "Ayrton Senna"], ans: 2 },
                { q: "Monaco 摩納哥大獎賽與 Indy 500、Le Mans 24小時耐力賽並稱為賽車界的什麼？", options: ["三大傳奇", "三冠王 (Triple Crown)", "極速殿堂", "黃金三角"], ans: 1 },
                { q: "哪位車隊領隊（Team Principal）帶領 Mercedes 車隊創下了恐怖的八連冠王朝？", options: ["Christian Horner", "Toto Wolff", "Mattia Binotto", "Zak Brown"], ans: 1 },
                { q: "2020年 Sakhir 大獎賽，哪位車手在第一圈遭遇恐怖的火燒車事故卻奇蹟生還？", options: ["Romain Grosjean", "Lance Stroll", "Kevin Magnussen", "Daniil Kvyat"], ans: 0 },
                { q: "首屆 F1 世界錦標賽是在哪一年舉辦的？", options: ["1945年", "1950年", "1960年", "1970年"], ans: 1 }
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
                { q: "當賽車進站換胎（Pit Stop）時，頂尖車隊工作人員通常可以在幾秒內完成四輪更換？", options: ["2秒以下", "5秒左右", "10秒左右", "30秒以上"], ans: 0 },
                { q: "在倍耐力（Pirelli）提供的 F1 乾地輪胎中，代表「軟胎（Soft）」且抓地力最強、磨損最快的是什麼顏色的標籤？", options: ["黃色", "白色", "紅色", "綠色"], ans: 2 },
                { q: "現代 F1 賽車（包含車手，但不含比賽燃油）的最低重量限制大約落在多少？", options: ["約 600 公斤", "約 798 公斤", "約 1000 公斤", "約 1200 公斤"], ans: 1 },
                { q: "用來保護車手頭部、能承受一台雙層巴士重量的「Halo」系統，主要是由什麼材質製成的？", options: ["鋁合金", "碳纖維", "航太級鈦合金", "強化玻璃纖維"], ans: 2 },
                { q: "F1 賽車在進入彎道前劇烈煞車時，碳纖維煞車碟盤的溫度最高可以達到攝氏幾度？", options: ["約 300 度", "約 500 度", "約 1000 度以上", "超過 2000 度"], ans: 2 },
                { q: "現代 F1 賽車的無縫換檔變速箱（Gearbox）總共規定有幾個「前進」檔位？", options: ["6 個", "7 個", "8 個", "10 個"], ans: 2 },
                { q: "F1 動力單元中，縮寫為「MGU-K」的系統是負責回收並轉化賽車哪裡的能量？", options: ["煞車時的動能", "引擎排氣的熱能", "太陽能", "輪胎摩擦的熱能"], ans: 0 },
                { q: "F1 動力單元中，另一個縮寫為「MGU-H」的系統則是負責回收哪裡產生的能量？", options: ["懸吊系統震動", "渦輪增壓器的廢氣熱能", "冷卻液溫度", "行進間的風阻"], ans: 1 },
                { q: "F1 賽車的下壓力非常驚人，理論上當車速超過 200km/h 時，它甚至能做到什麼事？", options: ["在水面上行駛", "在天花板上倒著開", "完全不需要耗油", "垂直向上起飛"], ans: 1 },
                { q: "車隊在自由練習時，常在賽車車身塗抹色彩鮮豔的「螢光顏料（Flow-vis）」，主要目的是什麼？", options: ["增加贊助商曝光", "測試車漆防刮能力", "觀察空氣流經車身的氣流分佈", "幫助車手辨識自己的車"], ans: 2 },
                { q: "賽車前端常見的懸吊設計分為兩大流派：一種是「推桿式（Push-rod）」，另一種是什麼？", options: ["拉桿式 (Pull-rod)", "氣壓式", "電磁式", "彈簧式"], ans: 0 },
                { q: "一個佈滿按鈕與螢幕的現代 F1 賽車方向盤，其造價大約落在哪個區間？", options: ["約 1 千美元", "約 5 千美元", "大約 5 萬到 10 萬美元", "超過 100 萬美元"], ans: 2 },
                { q: "現代 F1 賽車使用的燃油，比起過去的太空級特調燃料，現在規定必須與哪種油品極度相似（重合度達 99%）？", options: ["航空煤油", "柴油", "市售一般無鉛汽油", "酒精燃料"], ans: 2 }
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
                { q: "當賽事因極端惡劣天氣或重大事故必須「完全暫停」時，大會會揮舞什麼顏色的旗幟？", options: ["黑旗", "紅旗", "白旗", "方格旗"], ans: 1 },
                { q: "在比賽中，如果對特定車手揮舞「黑旗」，代表什麼意思？", options: ["必須立刻進站換胎", "取消比賽資格（Disqualified），必須退賽", "警告駕駛行為不當", "前方有慢車需注意"], ans: 1 },
                { q: "F1 一場標準大獎賽的正賽冠軍車手，可以獲得多少年度積分？", options: ["10分", "15分", "25分", "50分"], ans: 2 },
                { q: "從排位賽開始到正賽起跑前，賽車會進入「Parc Fermé（封閉車場）」狀態，這代表什麼意思？", options: ["車輛必須上鎖", "車手不能觸碰賽車", "嚴禁車隊對賽車進行任何重大的機械或空力設定更改", "賽車將被大會暫時沒收檢查"], ans: 2 },
                { q: "當賽道發生局部危險，大會啟動「VSC（虛擬安全車）」時，車手必須遵守什麼規定？", options: ["立刻跟在實體安全車後方", "在各個計時區段必須保持低於大會規定的最低限速", "強制進站", "只能使用最高三檔行駛"], ans: 1 },
                { q: "要成為正式的 F1 車手，必須先取得 FIA 核發的哪一種最高等級證照？", options: ["F1 專屬駕照", "國際 A 級駕照", "職業賽車手執照", "超級駕照（Super Licence）"], ans: 3 },
                { q: "自從 Max Verstappen 以 17 歲之姿震撼出道後，FIA 修改規則，規定 F1 車手的「最低參賽年齡」是幾歲？", options: ["16歲", "18歲", "20歲", "21歲"], ans: 1 },
                { q: "賽車在高速過彎時，大會判定是否「超出賽道限制（Track Limits）」的標準，是看車輪是否完全超出了什麼標線？", options: ["紅白相間的路緣石", "賽道兩側的白線", "防撞輪胎牆", "賽車場周邊的草地區域"], ans: 1 },
                { q: "近年來引入的「衝刺賽（Sprint Race）」距離約為 100 公里，拿下衝刺賽第一名的車手可以獲得幾分？", options: ["沒有積分", "3分", "8分", "15分"], ans: 2 },
                { q: "如果車手在排位賽（Q1）中跑得太慢，沒有達到最快單圈的「107%」以內，通常會面臨什麼後果？", options: ["正賽被罰退 5 位", "無法自動晉級，需由大會裁定是否獲准參加正賽", "正賽必須從維修區起跑", "該週末直接被驅逐出場"], ans: 1 },
                { q: "比賽中若對車手揮舞「黑底橘圈旗（俗稱肉丸旗）」，代表該車輛發生了什麼事？", options: ["車速過慢阻礙比賽", "車輛有機械損壞並危及安全，必須立刻進站維修", "車手未戴好安全帶", "輪胎已經嚴重磨損"], ans: 1 },
                { q: "為了控制成本與強調車輛可靠性，車隊如果在一季中更換超出配額的「全新引擎動力單元」，會受到什麼處罰？", options: ["扣除車隊積分", "罰款 100 萬歐元", "正賽退後起跑順位（Grid Penalty）", "取消下一場比賽資格"], ans: 2 },
                { q: "F1 正賽的比賽距離通常約為 305 公里，但為了避免比賽因紅旗暫停而過度冗長，大會規定的「最長比賽時間極限（含暫停）」是多久？", options: ["2 小時", "3 小時", "4 小時", "沒有時間限制，跑到完為止"], ans: 1 }
            ]
        }
    },
    mlb: {
        history: {
            label: "🏆 經典紀錄",
            questions: [
                { q: "標準棒球場總共有幾個壘包？", options: ["2個", "3個", "4個", "5個"], ans: 2 },
                { q: "大聯盟歷史上單季最多全壘打紀錄（73支）是由哪位傳奇重砲手保持的？", options: ["Babe Ruth", "Hank Aaron", "Barry Bonds", "大谷翔平"], ans: 2 },
                { q: "哪一支邪惡帝國球隊贏得過大聯盟歷史上最多的世界大賽冠軍（27次）？", options: ["波士頓紅襪", "紐約洋基", "洛杉磯道奇", "舊金山巨人"], ans: 1 },
                { q: "誰是大聯盟歷史上生涯最多全壘打（762支）的紀錄保持人？", options: ["Barry Bonds", "Hank Aaron", "Babe Ruth", "Alex Rodriguez"], ans: 0 },
                { q: "哪位傳奇球星擁有「永遠的42號」，大聯盟全面退休他的背號以紀念他打破種族藩籬？", options: ["Willie Mays", "Roberto Clemente", "Jackie Robinson", "Hank Aaron"], ans: 2 },
                { q: "史上連續出賽最多場（2,632場）的「鐵人」是誰？", options: ["Lou Gehrig", "Cal Ripken Jr.", "Pete Rose", "Ichiro Suzuki"], ans: 1 },
                { q: "「盜壘王」Rickey Henderson 生涯累積了幾次盜壘成功，高居大聯盟史上第一？", options: ["892次", "1,036次", "1,204次", "1,406次"], ans: 3 },
                { q: "大聯盟百年歷史上，哪位球員在 2024 年創下史無前例的「50轟、50盜」俱樂部紀錄？", options: ["Ronald Acuña Jr.", "Mike Trout", "大谷翔平", "Aaron Judge"], ans: 2 },
                { q: "大聯盟生涯最多安打（4,256支），卻因涉賭無法進入名人堂的傳奇球星是誰？", options: ["Ty Cobb", "Pete Rose", "Derek Jeter", "Stan Musial"], ans: 1 },
                { q: "誰是大聯盟最後一位單季打擊率超過四成（1941年 .406）的傳奇打者？", options: ["Tony Gwynn", "Ted Williams", "Ichiro Suzuki", "Joe DiMaggio"], ans: 1 },
                { q: "日本傳奇球星「鈴木一朗」在 2004 年創下大聯盟單季最多安打紀錄，請問是幾支？", options: ["257支", "262支", "268支", "273支"], ans: 1 },
                { q: "史上唯一一位以全票（100%得票率）入選美國棒球名人堂的球員是誰？", options: ["Babe Ruth", "Ken Griffey Jr.", "Mariano Rivera", "Derek Jeter"], ans: 2 },
                { q: "擁有「特快車」稱號的 Nolan Ryan，生涯累計投出過幾場「無安打比賽」，高居史上第一？", options: ["4場", "5場", "7場", "9場"], ans: 2 },
                { q: "世界大賽歷史上，哪支球隊曾經在系列賽 0勝3敗 的絕境下，連贏 4 場上演史詩級大逆轉？", options: ["2004年 波士頓紅襪", "2016年 芝加哥小熊", "2020年 洛杉磯道奇", "1999年 紐約洋基"], ans: 0 },
                { q: "賽揚獎是頒給單季最佳投手的榮耀。Cy Young 本人生涯累積了幾場勝投，至今被認為是棒球史上最難打破的紀錄？", options: ["354勝", "411勝", "473勝", "511勝"], ans: 3 },
                { q: "大聯盟史上連續最多場次擊出安打的紀錄是「56場」，由哪位洋基名將保持？", options: ["Mickey Mantle", "Joe DiMaggio", "Lou Gehrig", "Derek Jeter"], ans: 1 },
                { q: "「棒球之神」Babe Ruth 生涯不僅全壘打無數，他早期在哪支球隊是以王牌投手的身分大放異彩？", options: ["紐約洋基", "波士頓紅襪", "芝加哥白襪", "聖路易紅雀"], ans: 1 },
                { q: "史上投出最快球速（105.8 mph，約 170.3 km/h）並被官方認證的「古巴飛彈」是誰？", options: ["Aroldis Chapman", "Ben Joyce", "Jordan Hicks", "Justin Verlander"], ans: 0 },
                { q: "哪支球隊在 2001 年創下大聯盟單季最多勝的「116勝」平歷史紀錄，但在季後賽卻無緣世界大賽？", options: ["紐約洋基", "奧克蘭運動家", "西雅圖水手", "亞特蘭大勇士"], ans: 2 },
                { q: "2022 年，哪位洋基重砲手擊出單季第 62 轟，正式打破 Roger Maris 保持了 61 年的美聯單季全壘打紀錄？", options: ["Giancarlo Stanton", "Aaron Judge", "Gary Sánchez", "Gleyber Torres"], ans: 1 }
            ]
        },
        rules: {
            label: "📜 棒球規則",
            questions: [
                { q: "棒球比賽中，一個半局防守方需要拿到幾個出局數才能換邊進攻？", options: ["1個", "2個", "3個", "4個"], ans: 2 },
                { q: "當無人出局一壘有人，打者擊出高飛球被接殺時，一壘跑者必須做什麼才不會被觸殺出局？", options: ["直接跑到二壘", "必須先回到一壘觸壘（Tag up）才能起跑", "待在原地不能動", "直接走回休息室"], ans: 1 },
                { q: "大聯盟規則中，什麼情況下會觸發「不死的三振」允許打者即便被三振也能跑向一壘？", options: ["投手投出觸身球", "打者擊出界外球被接殺", "兩好球後打者揮棒落空，且捕手沒有乾淨接穩球", "裁判判決錯誤重賽"], ans: 2 },
                { q: "當壘上有跑者時，若投手發生「投手犯規（Balk）」，會有什麼處罰？", options: ["直接保送打者", "壘上所有跑者無條件推進一個壘包", "投手被驅逐出場", "記壞球一個"], ans: 1 },
                { q: "為了防止防守方故意漏接引發雙殺，在『無人或一人出局，一二壘或滿壘有人』時，打出內野高飛球會直接宣告打者出局，這稱為什麼規則？", options: ["內野高飛必死球 (Infield Fly Rule)", "場地規則", "妨礙守備", "突破僵局制"], ans: 0 },
                { q: "大聯盟規定的「好球帶（Strike Zone）」垂直範圍，大約落在哪裡？", options: ["打者的頭部到腳踝", "打者的肩膀到腰部", "打者準備擊球時，胸部下緣到膝蓋下緣", "打者的脖子到膝蓋"], ans: 2 },
                { q: "在球數兩好球的絕對落後下，如果打者使用「觸擊短打（Bunt）」卻點成界外球，裁判會如何判決？", options: ["算作壞球", "重新打擊，球數不變", "投手犯規", "直接記三振出局"], ans: 3 },
                { q: "打者如果選到「四壞球（Base on Balls）」，會獲得什麼結果？", options: ["直接保送上二壘", "直接保送上一壘", "重新打擊", "打者出局"], ans: 1 },
                { q: "打者揮棒時球只輕輕擦過球棒，並且直接被捕手穩穩接住的「擦棒被捕球（Foul Tip）」，規則上怎麼認定？", options: ["算壞球", "算界外球但不計好球", "視為好球（若為第三好球則三振出局）", "直接出局"], ans: 2 },
                { q: "如果打者在揮棒時，球棒不小心打到了捕手的手套，構成「妨礙打擊（Catcher's Interference）」，會有什麼判決？", options: ["打者被判出局", "投手計壞球一次", "打者免費保送上一壘", "比賽暫停重新投球"], ans: 2 },
                { q: "如果打者擊出全壘打，但在繞壘時因為太興奮「漏踩了一壘壘包」，且防守方成功促請裁決（Appeal），結果會如何？", options: ["全壘打沒收，打者被判出局", "裁判立刻暫停比賽", "重新打擊", "只算三壘安打"], ans: 0 },
                { q: "大聯盟為了加快比賽節奏，規定投手在『同一個打席內』，最多只能退板或牽制幾次？（若第3次沒抓到跑者算投手犯規）", options: ["無限制", "最多 2 次", "最多 5 次", "全場只能 3 次"], ans: 1 },
                { q: "大聯盟在延長賽實施的「突破僵局制（Ghost Runner）」，會在每一局開始時直接把哪一位跑者放在二壘？", options: ["從滿壘開始打", "一壘直接放跑者", "前一局最後一個出局的打者", "直接比全壘打大賽"], ans: 2 },
                { q: "如果打者擊出的球是界內球，但落地後彈跳越過或鑽入全壘打牆外，這在規則上稱為什麼？", options: ["場地二壘安打 (Ground Rule Double)", "全壘打", "界外球", "妨礙守備"], ans: 0 },
                { q: "在棒球紀錄表上，如果三振的「K」是寫成『反過來的 ꓘ』，代表什麼意思？", options: ["揮棒落空被三振", "站立不動看著好球進壘被三振（見振）", "不死三振", "因界外短打被三振"], ans: 1 },
                { q: "如果投手的投球直接砸中打者的身體（且打者沒有故意去碰觸或揮棒），這稱為「觸身球」，結果會如何？", options: ["直接保送打者上一壘", "記一個壞球", "投手犯規", "算作好球"], ans: 0 },
                { q: "在棒球防守紀錄代號中，投手跟捕手分別代表數字幾號？", options: ["投手是1，捕手是2", "投手是9，捕手是8", "投手是4，捕手是6", "投手是5，捕手是3"], ans: 0 },
                { q: "防守方在「單一一個守備動作（Play）」中，連續抓到三個出局數，這種極度罕見的神級守備稱為什麼？", options: ["雙殺守備", "再見失誤", "三殺守備 (Triple Play)", "完全打擊"], ans: 2 },
                { q: "如果跑壘員在跑壘時，故意或不小心撞到正在處理球的內野手，構成「妨礙守備」，會怎麼判決？", options: ["跑者被判出局", "守備員被判犯規", "重新投球", "跑者免費推進一個壘包"], ans: 0 },
                { q: "一名打者在「同一場比賽」中，分別打出了一壘安打、二壘安打、三壘安打與全壘打各至少一支，這項難得的紀錄稱為什麼？", options: ["完全打擊 (Hitting for the Cycle)", "完全比賽", "大滿貫", "猛打賞"], ans: 0 }
            ]
        },
        trivia: {
            label: "⚾ 球場知識",
            questions: [
                { q: "大聯盟在 2023 年引入了哪項重大新規來限制投捕準備時間、大幅加快比賽節奏？", options: ["全面採用電子好球帶", "投球計時器 (Pitch Clock)", "限制每場換投手人數", "縮短壘包之間的距離"], ans: 1 },
                { q: "在棒球記錄與防守定位中，防守紀錄數字代號「6號」代表哪一個位置？", options: ["二壘手", "三壘手", "游擊手", "中外野手"], ans: 2 },
                { q: "波士頓紅襪隊的主場「芬威球場」左外野，有一面高達 11 公尺的著名綠色巨大高牆，它的暱稱是什麼？", options: ["綠色怪物 (Green Monster)", "嘆息之牆", "波士頓長城", "芬威屏障"], ans: 0 },
                { q: "大聯盟歷史最悠久、於 1912 年啟用且目前仍在作為大聯盟主場使用的球場是哪一座？", options: ["洋基體育場", "瑞格利球場", "道奇體育場", "芬威球場"], ans: 3 },
                { q: "哪一支球隊的主場外野長滿了著名的「常春藤（Ivy）」，且牆面是堅硬的磚牆？", options: ["聖路易紅雀", "芝加哥小熊 (瑞格利球場)", "紐約大都會", "費城費城人"], ans: 1 },
                { q: "舊金山巨人的主場右外野外面有一片海灣（McCovey Cove），當球員擊出全壘打掉進海裡時，球迷通常會怎麼做？", options: ["跳進海裡游泳去撿", "開著獨木舟或小船去撈球", "等漲潮把球沖回來", "不能撿，會被罰款"], ans: 1 },
                { q: "哪一支球隊的主場（庫爾斯球場）因為地處高海拔，空氣稀薄導致球飛得特別遠，被稱為「打者天堂」？", options: ["科羅拉多落磯", "亞利桑那響尾蛇", "德州遊騎兵", "西雅圖水手"], ans: 0 },
                { q: "大聯盟唯一一支主場「不在美國境內」的球隊是哪一支？", options: ["蒙特婁博覽會", "溫哥華灰熊", "多倫多藍鳥", "墨西哥城紅魔鬼"], ans: 2 },
                { q: "紐約大都會隊的主場中外野有一顆巨大的「大蘋果」，它在什麼時候會從中外野升起來？", options: ["比賽開始時", "自家球員擊出全壘打時", "球隊贏得比賽時", "第七局局間"], ans: 1 },
                { q: "大聯盟球場上的「牛棚（Bullpen）」是做什麼用的區域？", options: ["球隊經理休息的地方", "後援投手熱身準備的地方", "放置備用球棒與頭盔的地方", "關吉祥物的地方"], ans: 1 },
                { q: "在標準的棒球場上，投手丘距離本壘板的規定距離是多少？", options: ["50英尺6英吋", "60英尺6英吋 (約18.44公尺)", "70英尺", "沒有硬性規定"], ans: 1 },
                { q: "哪座球場的中外野有一座黃色的溜滑梯設施（Bernie's Chalet），當自家球員開轟時，吉祥物會溜下來慶祝？", options: ["密爾瓦基釀酒人", "明尼蘇達雙城", "辛辛那提紅人", "匹茲堡海盜"], ans: 0 },
                { q: "芝加哥小熊隊的球迷有一個非常著名的傳統：當他們在左外野看台接到「敵隊球員」打出的全壘打球時，他們會怎麼做？", options: ["帶回家做紀念", "請敵隊球員簽名", "無情地把球直接扔回場內", "交給球場保全"], ans: 2 },
                { q: "在棒球比賽的「第七局上半結束時」，通常會有一個被稱為 Seventh-inning stretch 的傳統，這時全場球迷會站起來一起唱哪一首歌？", options: ["We Will Rock You", "Take Me Out to the Ball Game", "美國國歌", "Sweet Caroline"], ans: 1 },
                { q: "哪一支球隊的主場（大通體育場）在外野觀眾席設有「溫水游泳池」，球迷可以邊泡水邊看球？", options: ["邁阿密馬林魚", "坦帕灣光芒", "洛杉磯天使", "亞利桑那響尾蛇"], ans: 3 },
                { q: "紐約洋基隊的主場中外野有一個非常神聖的區域，用來擺放退役球星的紀念碑與背號，這個區域稱為什麼？", options: ["榮耀之路", "洋基博物館", "紀念碑公園 (Monument Park)", "神話之牆"], ans: 2 },
                { q: "洋基體育場的「右外野」全壘打牆距離特別短，這對左打者非常有利，這個著名的右外野區域暱稱是什麼？", options: ["小迴廊 (Short Porch)", "黃金三角", "打者天堂", "右側高牆"], ans: 0 },
                { q: "標準大聯盟棒球場的內野是由四個壘包組成，請問這個形狀在英文中通常被稱為什麼？", options: ["Square (正方形)", "Circle (圓形)", "Diamond (鑽石形/菱形)", "Rectangle (長方形)"], ans: 2 },
                { q: "大聯盟近年為了保護球員，規定跑者在滑向二壘試圖破壞雙殺時，不能偏離壘包直接剷向防守員。這條規則通常以哪位前道奇隊球員命名？", options: ["Chase Utley Rule", "Buster Posey Rule", "Pete Rose Rule", "Manny Machado Rule"], ans: 0 },
                { q: "坦帕灣光芒隊的主場（純品康納球場）是目前大聯盟極少數的封閉式巨蛋球場。這座球場內部有一個特殊的生態池，裡面養了什麼動物？", options: ["鯊魚", "海豚", "魟魚 (Ray)", "鱷魚"], ans: 2 }
            ]
        }
    }
};

let currentQuizCategory = null; 
let userAnswers = {}; 
let current10Questions = []; // 🌟 新增：用來記錄「這次抽出的 10 題」，讓交卷時知道滿分是多少

// 🌟 新增：萬用洗牌小工具 (Fisher-Yates Shuffle)
// 這個函數可以把任何陣列（題目或選項）隨機打亂
function shuffleArray(arr) {
    let newArr = [...arr]; // 複製一份，避免改到原始資料
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

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
// ================= 3. 渲染資料函數 =================
// ================= 3. 渲染資料函數 =================
// ================= 3. 渲染資料函數 =================
function loadWiki() {
    const display = document.getElementById('wiki-display');
    const title = document.getElementById('wiki-title');
    display.innerHTML = ''; 

    title.style.display = 'none'; 

    const storyContainer = document.createElement('div');
    storyContainer.className = 'story-container';

    const currentHistory = currentSport === 'f1' ? f1History : mlbHistory;

    currentHistory.forEach((era, index) => {
        const arrowHtml = index === currentHistory.length - 1 ? '' : '<div class="slide-arrow">↓</div>';
        
        storyContainer.innerHTML += `
            <div class="story-slide" style="background-image: url('${era.img}');">
                <div class="story-content">
                    <span class="story-year" style="background: var(--${currentSport}-color); box-shadow: 0 4px 10px rgba(0,0,0,0.5);">${era.year}</span>
                    <h3>${era.title}</h3>
                    <p>${era.desc}</p>
                    <div class="story-fun-fact">${era.funFact}</div>
                </div>
                ${arrowHtml}
            </div>
        `;
    });

    display.appendChild(storyContainer);
}
// ⚠️ 請確保往下滾動時，沒有第二個 function loadWiki() 出現，有的話請刪除！

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
    userAnswers = {}; // 清空計分板

    // 🌟 1. 從 20 題庫中，隨機洗牌並抽出前 10 題
    // 在 loadQuiz 裡
    const allQuestions = sportCategories[currentQuizCategory].questions;
    current10Questions = shuffleArray(allQuestions).slice(0, 10); // 確保這行有在跑

    // 🌟 2. 顯示這 10 題，並將裡面的「選項」也洗牌
    current10Questions.forEach((item, index) => {
        // 先把選項跟「它是不是正確答案」綁定在一起
        let optionsWithState = item.options.map((opt, idx) => ({
            text: opt,
            isCorrect: idx === item.ans
        }));
        
        // 把選項打亂
        let shuffledOptions = shuffleArray(optionsWithState);
        
        // 找出打亂後，正確答案跑到第幾個位置了
        let newCorrectIndex = shuffledOptions.findIndex(o => o.isCorrect);

        let optionsHtml = '';
        shuffledOptions.forEach((optObj, optIdx) => {
            // 這裡傳入的是打亂後的新正確位置 (newCorrectIndex)
            optionsHtml += `<button class="quiz-option q-${index}-opt-${optIdx}" onclick="checkAnswer(this, ${index}, ${optIdx}, ${newCorrectIndex})">${optObj.text}</button>`;
        });

        // 修正：這裡應該是獨立的交卷按鈕，而不是重複的一張題目卡片
        display.innerHTML += `
            <div class="card ${currentSport}-card">
                <h3>Q${index + 1}: ${item.q}</h3>
                <div class="options-group">${optionsHtml}</div>
            </div>`;
    });

    // 🌟 關鍵：這裡必須要在 forEach 迴圈之外，把按鈕加進去
    display.innerHTML += `
        <div style="text-align: center; margin-top: 40px; margin-bottom: 40px;">
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
    // 檢查這題是否已經作答過，如果已經有紀錄，直接跳出 (鎖定功能)
    if (userAnswers.hasOwnProperty(qIdx)) {
        return; 
    }

    // 撈出這一題包包裡面的所有選項按鈕
    const optionsGroup = clickedBtn.parentElement;
    const allOptions = optionsGroup.querySelectorAll('.quiz-option');
    
    // 答題後鎖定該題所有選項的外觀
    allOptions.forEach(btn => {
        btn.style.cursor = 'not-allowed'; 
        btn.style.opacity = '0.7';
    });

    // 判斷對錯
    if (userChoice === correctChoice) {
        // 🟢 答對：自己變成綠色
        clickedBtn.style.backgroundColor = '#18bc9c';
        clickedBtn.style.color = 'white';
        clickedBtn.style.borderColor = '#18bc9c';
        clickedBtn.style.fontWeight = 'bold';
    } else {
        // 🔴 答錯：自己變成紅色
        clickedBtn.style.backgroundColor = '#e74c3c';
        clickedBtn.style.color = 'white';
        clickedBtn.style.borderColor = '#e74c3c';
        
        // 🟢 同時把正確答案亮綠色
        const correctBtn = optionsGroup.querySelector(`.q-${qIdx}-opt-${correctChoice}`);
        if (correctBtn) {
            correctBtn.style.backgroundColor = '#18bc9c';
            correctBtn.style.color = 'white';
            correctBtn.style.borderColor = '#18bc9c';
            correctBtn.style.fontWeight = 'bold';
        }
    }
    
    // 🌟 關鍵修正：必須在此處記錄該題答對與否 (true 或 false)
    userAnswers[qIdx] = (userChoice === correctChoice);
}

window.onload = () => setSport('f1');

// ================= 結算成績與彈出視窗 =================
function showQuizResult() {
    const totalQuestions = 10; // 強制固定為 10 題
    const answeredCount = Object.keys(userAnswers).length;

    // 檢查作答進度
    if (answeredCount < totalQuestions) {
        alert(`⚠️ 你還有 ${totalQuestions - answeredCount} 題沒寫完喔！`);
        return;
    }

    // 計算分數
    let correctCount = 0;
    for (let i = 0; i < totalQuestions; i++) {
        if (userAnswers[i] === true) correctCount++;
    }
    let wrongCount = totalQuestions - correctCount;
    let score = (correctCount / totalQuestions) * 100;

    // 取得評語
    let comment = score === 100 ? "🏆 太神啦！你是傳奇滿分大師！" :
                  score >= 60 ? "👏 表現不錯喔，繼續保持對體育的熱愛！" : 
                  "💪 再接再厲，多看歷史維基補充知識吧！";

    // 建立或取得 Modal
    let modal = document.getElementById('quiz-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'quiz-modal';
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);
    }

    // 填入精緻化的內容
    modal.innerHTML = `
        <div class="modal-content">
            <h2>成績結算</h2>
            <div class="score-circle">
                ${score}<span>分</span>
        </div>
        
        <div class="score-details" style="display: flex; flex-direction: column; align-items: center; margin: 20px auto;">
            <div style="text-align: left; width: 140px;">
                <p style="color: #18bc9c; font-size: 1.2rem; font-weight: bold; margin: 5px 0;">✅ 答對：${correctCount} 題</p>
                <p style="color: #e74c3c; font-size: 1.2rem; font-weight: bold; margin: 5px 0;">❌ 答錯：${wrongCount} 題</p>
            </div>
        </div>

        <p class="score-comment">${comment}</p>
        <button class="btn" style="background:#2c3e50; color:white; width: 100%; margin-top:25px; padding: 12px; border-radius: 10px;" onclick="closeQuizResult()">
            關閉並重新挑戰
        </button>
    </div>
`;
    
    // 強制顯示
    modal.style.display = 'flex';
}

function closeQuizResult() {
    const modal = document.getElementById('quiz-modal');
    if (modal) modal.style.display = 'none';
    
    // 🌟 關鍵修改：把目前選取的分類清空，然後重新載入畫面
    currentQuizCategory = null;
    loadQuiz();
}