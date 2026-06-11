// 功能 1：切換頁籤 (Wiki, Article, Quiz, Calendar)
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const activeTab = document.getElementById(`${tabName}-tab`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// 功能 2：預留給 Wiki 讀取假資料的功能
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