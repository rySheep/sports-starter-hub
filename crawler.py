import requests
from bs4 import BeautifulSoup
import json
import datetime
import calendar
import os

# ====== MLB 中英對照翻譯字典 ======
MLB_TRANSLATOR = {
    "Arizona Diamondbacks": "響尾蛇",
    "Atlanta Braves": "勇士",
    "Baltimore Orioles": "金鶯",
    "Boston Red Sox": "紅襪",
    "Chicago Cubs": "小熊",
    "Chicago White Sox": "白襪",
    "Cincinnati Reds": "紅人",
    "Cleveland Guardians": "守護者",
    "Colorado Rockies": "落磯",
    "Detroit Tigers": "老虎",
    "Houston Astros": "太空人",
    "Kansas City Royals": "皇家",
    "Los Angeles Angels": "天使",
    "Los Angeles Dodgers": "道奇",
    "Miami Marlins": "馬林魚",
    "Milwaukee Brewers": "釀酒人",
    "Minnesota Twins": "雙城",
    "New York Mets": "大都會",
    "New York Yankees": "洋基",
    "Oakland Athletics": "運動家",
    "Philadelphia Phillies": "費城人",
    "Pittsburgh Pirates": "海盜",
    "San Diego Padres": "教士",
    "San Francisco Giants": "巨人",
    "Seattle Mariners": "水手",
    "St. Louis Cardinals": "紅雀",
    "Tampa Bay Rays": "光芒",
    "Texas Rangers": "遊騎兵",
    "Toronto Blue Jays": "藍鳥",
    "Washington Nationals": "國民"
}

# ====== MLB 球場中英對照翻譯字典 ======
MLB_VENUE_TRANSLATOR = {
    "Chase Field": "大通體育場 (響尾蛇主場)",
    "Truist Park": "Truist球場 (勇士主場)",
    "Oriole Park at Camden Yards": "金鶯球場 (金鶯主場)",
    "Fenway Park": "芬威球場 (紅襪主場)",
    "Wrigley Field": "瑞格利球場 (小熊主場)",
    "Guaranteed Rate Field": "保證率球場 (白襪主場)",
    "Great American Ball Park": "大美利堅球場 (紅人主場)",
    "Progressive Field": "進步球場 (守護者主場)",
    "Coors Field": "庫爾斯球場 (落磯主場)",
    "Comerica Park": "聯信球場 (老虎主場)",
    "Minute Maid Park": "美利果球場 (太空人主場)",
    "Kauffman Stadium": "考夫曼球場 (皇家主場)",
    "Angel Stadium": "天使球場 (天使主場)",
    "Dodger Stadium": "道奇體育場 (道奇主場)",
    "loanDepot park": "貸款得寶球場 (馬林魚主場)",
    "American Family Field": "美國家庭球場 (釀酒人主場)",
    "Target Field": "標靶球場 (雙城主場)",
    "Citi Field": "花旗球場 (大都會主場)",
    "Yankee Stadium": "洋基體育場 (洋基主場)",
    "Oakland Coliseum": "奧克蘭競技場 (運動家主場)",
    "Citizens Bank Park": "市民銀行球場 (費城人主場)",
    "PNC Park": "PNC球場 (海盜主場)",
    "Petco Park": "Petco球場 (教士主場)",
    "Oracle Park": "甲骨文球場 (巨人主場)",
    "T-Mobile Park": "T-Mobile球場 (西雅圖水手主場)",
    "Busch Stadium": "布希球場 (紅雀主場)",
    "Tropicana Field": "純品康納球場 (光芒主場)",
    "Globe Life Field": "全球人壽球場 (遊騎兵主場)",
    "Rogers Centre": "羅傑斯中心 (藍鳥主場)",
    "Nationals Park": "國民球場 (國民主場)"
}

def get_mlb_schedule(start_date, end_date):
    print(f"⚾ 正在抓取 MLB 賽程 ({start_date} ~ {end_date})...")
    # 使用 MLB 官方 API 抓取特定日期範圍的賽程
    url = f"https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&startDate={start_date}&endDate={end_date}"
    
    response = requests.get(url)
    data = response.json()
    
    mlb_games = []
    
    # 解析官方 API 回傳的 JSON
    if "dates" in data:
        for date_info in data["dates"]:
            for game in date_info.get("games", []):
                # 1. 取得官方 API 傳回的英文原名
                away_team_en = game["teams"]["away"]["team"]["name"]
                home_team_en = game["teams"]["home"]["team"]["name"]
                venue_en = game["venue"]["name"]
                game_date = game["gameDate"] # 格式為 2026-06-15T23:05:00Z
                
                # 2. 呼叫翻譯字典轉成中文！(用 .get 確保如果字典沒建到，至少會顯示原文不會報錯)
                away_team = MLB_TRANSLATOR.get(away_team_en, away_team_en)
                home_team = MLB_TRANSLATOR.get(home_team_en, home_team_en)
                venue = MLB_VENUE_TRANSLATOR.get(venue_en, venue_en)
                
                # 3. 簡單處理時間字串
                date_str = game_date[:10]
                time_str = game_date[11:16] + " (UTC)"
                
                # 4. 把翻譯好的漂亮中文資料塞進清單裡
                mlb_games.append({
                    "date": date_str,
                    "event": f"⚾ {away_team} vs {home_team}",
                    "location": venue,
                    "time": time_str
                })
    return mlb_games

def get_f1_schedule():
    print("🏎️ 啟動 F1 備用賽程庫 (因 ESPN 網頁結構變更)...")
    # 直接回傳 2026 年 6 月份的重點 F1 賽程
    return [
        {
            "date": "2026-06-07",
            "event": "🇨🇦 加拿大大獎賽 (Canadian GP)",
            "location": "吉爾·維倫紐夫賽道",
            "time": "台灣時間 02:00"
        },
        {
            "date": "2026-06-21",
            "event": "🇪🇸 西班牙大獎賽 (Spanish GP)",
            "location": "加泰羅尼亞賽道",
            "time": "台灣時間 21:00"
        },
        {
            "date": "2026-06-28",
            "event": "🇦🇹 奧地利大獎賽 (Austrian GP)",
            "location": "紅牛賽道",
            "time": "台灣時間 21:00"
        },
        {
            "date": "2026-07-05",
            "event": "🇬🇧 英國大獎賽 (British GP)",
            "location": "銀石賽道 (Silverstone)",
            "time": "台灣時間 22:00"
        },
        {
            "date": "2026-07-19",
            "event": "🇭🇺 匈牙利大獎賽 (Hungarian GP)",
            "location": "匈牙利賽道 (Hungaroring)",
            "time": "台灣時間 21:00"
        },
        {
            "date": "2026-07-26",
            "event": "🇧🇪 比利時大獎賽 (Belgian GP)",
            "location": "斯帕-弗朗科爾尚賽道 (Spa)",
            "time": "台灣時間 21:00"
        },
        {
            "date": "2026-08-30",
            "event": "🇳🇱 荷蘭大獎賽 (Dutch GP)",
            "location": "贊德沃特賽道 (Zandvoort)",
            "time": "台灣時間 21:00"
        },
        {
            "date": "2026-09-06",
            "event": "🇮🇹 義大利大獎賽 (Italian GP)",
            "location": "蒙札賽道 (Monza)",
            "time": "台灣時間 21:00"
        }
    ]

def main():
    # 1. 自動取得當月的第一天與最後一天
    now = datetime.datetime.now()
    year = now.year
    month = now.month
    last_day = calendar.monthrange(year, month)[1]
    
    start_date = f"{year}-{month:02d}-01"
    end_date = f"{year}-{month:02d}-{last_day}"
    
    # 2. 執行抓取
    mlb_data = get_mlb_schedule(start_date, end_date)
    f1_data = get_f1_schedule()
    
    # 3. 組合最後的資料庫
    final_data = {
        "f1": f1_data,
        "mlb": mlb_data
    }
    
    # 4. 寫入專案的 data/schedule.json 檔案
    # 確保 data 資料夾存在
    if not os.path.exists("data"):
        os.makedirs("data")
        
    with open("data/schedule.json", "w", encoding="utf-8") as f:
        json.dump(final_data, f, ensure_ascii=False, indent=2)
        
    print("\n✅ 爬蟲執行完畢！")
    print(f"📊 共抓到 {len(f1_data)} 場 F1 賽事，{len(mlb_data)} 場 MLB 賽事。")
    print("📁 資料已成功更新到 data/schedule.json！")

if __name__ == "__main__":
    main()