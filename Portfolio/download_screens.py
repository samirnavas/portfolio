import json
import urllib.request
import os

target_dir = r"c:\Programming\portfolio\Portfolio\Stitch_Screens"
os.makedirs(target_dir, exist_ok=True)

# 1. Process Design System
json_path = r"C:\Users\samir\.gemini\antigravity-ide\brain\748fb2e1-d0b6-44dc-8ac8-6a8ad472366a\.system_generated\steps\27\output.txt"
with open(json_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

    design_md = data["designSystems"][0]["designSystem"]["theme"]["designMd"]
    with open(os.path.join(target_dir, "design_system.md"), "w", encoding="utf-8") as f:
        f.write(design_md)

# 2. Download Screens (Images and HTML)
screens = [
    {
        "name": "About Samir Navas",
        "image_url": "https://lh3.googleusercontent.com/aida/ADBb0ujQK3ySM0fzjgJAf4JXb6LAKpBQ85tCJK2bqjGIEU4HHs6LK0jnUnvMKuY7C1I_bdS7j7yjLfjahgAbDuDxLy3jz9vYqo997X3425zJVGcD8qoObH6Oa3NrU9VID9_XW2Rne6I03oprk-xz4VLtb6sKuDH67TJI-fLNNYpSahZTHhYJOSn0RzshAVq3bHGbZV6oFkw5IODqM4fFfBgfMhk7TaRB5VcyS2b-gsv9NAjBHjNWdFPwEnic0Ik",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzA2NWQ4MzcxZDQzODRkMDhhZDcxZTUxZGMyYjkxMDQzEgsSBxCfm-bn6RwYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTk2Mjg3MzM3MTIzNjYyMzQ0OA&filename=&opi=89354086"
    },
    {
        "name": "Samir Navas Portfolio Home",
        "image_url": "https://lh3.googleusercontent.com/aida/ADBb0uiWin58fzdj7pJ9yeokEDWGqBaDjadS7ueewICIgmWi6u11lXfi1AZbJ9ZeoqWqEC1EuyIFqXOmFqiqAnSene3X5M0zQFthVWJwLYX6N6Jb7ta9S2C68sMsoCwLcIGp4aKrB1mSQpcbTzlqMlLn4UDtuE2Vzhz2fM5lMT97q1mn5WnUyh3ok0XfxE3Uu5JWA0cyXLhUrwliWJxHe9PcOR6GleI4ecNtK6x6dRVPnyM_qNY8VBT9NHYokgs",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2Y2MTU1M2JhNWI1MjRiZDViMzhjZTY5NWM2ZjM5MWMwEgsSBxCfm-bn6RwYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTk2Mjg3MzM3MTIzNjYyMzQ0OA&filename=&opi=89354086"
    },
    {
        "name": "Project Detail - Samir Navas",
        "image_url": "https://lh3.googleusercontent.com/aida/ADBb0uiO_6GkuWVkXpolU_DLRjTrzPBORDlDrAe5QuwLJ0oxlPiDEqSQrInVHYMy10dt833DJcT-NgmxOveqdTSIEWJqCusMpPP_mvEISdElDieHiKyTNXECJecReu7au3TEUU3IhqisEB_5NRHyfGBsnLrzb0FmeU7PaNTTkpDwLiGk9tDYCINLow0AuKjzdtiusvB1Q18qC4iDMc8mt4t5lJlgZTvzbQtrOxCcQv11J9PHeWmZnJJa5EsY2p6s",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzY1Y2FhNTlhMGE1MjQxOTRhNjM4NTZmMDRmNzk1NjRiEgsSBxCfm-bn6RwYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTk2Mjg3MzM3MTIzNjYyMzQ0OA&filename=&opi=89354086"
    }
]

for screen in screens:
    safe_name = "".join([c if c.isalnum() else "_" for c in screen["name"]])
    img_path = os.path.join(target_dir, f"{safe_name}.png")
    html_path = os.path.join(target_dir, f"{safe_name}.html")
    
    print(f"Downloading {screen['name']}...")
    urllib.request.urlretrieve(screen["image_url"], img_path)
    urllib.request.urlretrieve(screen["html_url"], html_path)

print("Done!")
