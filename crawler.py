import requests
from bs4 import BeautifulSoup
import json
import datetime
import calendar
import os

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
                away_team = game["teams"]["away"]["team"]["name"]
                home_team = game["teams"]["home"]["team"]["name"]
                venue = game["venue"]["name"]
                game_date = game["gameDate"] # 格式為 2026-06-15T23:05:00Z
                
                # 簡單處理時間字串
                date_str = game_date[:10]
                time_str = game_date[11:16] + " (UTC)"
                
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