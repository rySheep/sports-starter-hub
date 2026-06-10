// 功能：切換頁籤 (Wiki, Article, Quiz, Calendar)
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const activeTab = document.getElementById(`${tabName}-tab`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// 預留給 Wiki 讀取假資料的功能
function loadWiki(sportType) {
    const display = document.getElementById('wiki-display');
    if (sportType === 'f1') {
        display.innerHTML = `
            <div class="card">
                <h3>最年輕站上頒獎台的車手</h3>
                <p><strong>紀錄保持人：</strong>Max Verstappen</p>
                <p>在 2016 年西班牙大獎賽以 18 歲又 228 天的年紀奪冠。</p>
            </div>
        `;
    } else if (sportType === 'mlb') {
        display.innerHTML = `
            <div class="card">
                <h3>現代棒球歷史最多連敗隊伍</h3>
                <p><strong>紀錄保持人：</strong>巴爾的摩金鶯 (1988年)</p>
                <p>創下開季 21 連敗的慘烈紀錄。</p>
            </div>
        `;
    }
}