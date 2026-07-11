import os
from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
SERVICE_ACCOUNT_FILE = 'credentials.json'
SPREADSHEET_ID = '1wgF0TeTV6nghyjurKFVHiso86CbBrDb8_eqzp4vNaHk'

def main():
    creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    service = build('sheets', 'v4', credentials=creds)

    sheet_metadata = service.spreadsheets().get(spreadsheetId=SPREADSHEET_ID).execute()
    sheets = sheet_metadata.get('sheets', '')

    requests = []

    for sheet in sheets:
        sheet_id = sheet.get("properties", {}).get("sheetId", 0)
        
        # 1. Freeze top row
        requests.append({
            "updateSheetProperties": {
                "properties": {
                    "sheetId": sheet_id,
                    "gridProperties": {
                        "frozenRowCount": 1
                    }
                },
                "fields": "gridProperties.frozenRowCount"
            }
        })

        # 2. Format Header (Row 1)
        requests.append({
            "repeatCell": {
                "range": {
                    "sheetId": sheet_id,
                    "startRowIndex": 0,
                    "endRowIndex": 1
                },
                "cell": {
                    "userEnteredFormat": {
                        "backgroundColor": {"red": 0.16, "green": 0.32, "blue": 0.75}, # Dark Blue
                        "textFormat": {
                            "bold": True,
                            "foregroundColor": {"red": 1.0, "green": 1.0, "blue": 1.0}, # White
                            "fontSize": 11
                        },
                        "horizontalAlignment": "CENTER",
                        "verticalAlignment": "MIDDLE",
                        "wrapStrategy": "WRAP"
                    }
                },
                "fields": "userEnteredFormat(backgroundColor,textFormat,horizontalAlignment,verticalAlignment,wrapStrategy)"
            }
        })

        # 3. Format Data Rows (Row 2 onwards)
        requests.append({
            "repeatCell": {
                "range": {
                    "sheetId": sheet_id,
                    "startRowIndex": 1
                },
                "cell": {
                    "userEnteredFormat": {
                        "verticalAlignment": "MIDDLE",
                        "wrapStrategy": "WRAP"
                    }
                },
                "fields": "userEnteredFormat(verticalAlignment,wrapStrategy)"
            }
        })

        # 4. Borders for all cells (assuming up to column H = index 8)
        requests.append({
            "updateBorders": {
                "range": {
                    "sheetId": sheet_id,
                    "startRowIndex": 0,
                    "startColumnIndex": 0,
                    "endColumnIndex": 8
                },
                "top": {"style": "SOLID", "width": 1, "color": {"red": 0.8, "green": 0.8, "blue": 0.8}},
                "bottom": {"style": "SOLID", "width": 1, "color": {"red": 0.8, "green": 0.8, "blue": 0.8}},
                "left": {"style": "SOLID", "width": 1, "color": {"red": 0.8, "green": 0.8, "blue": 0.8}},
                "right": {"style": "SOLID", "width": 1, "color": {"red": 0.8, "green": 0.8, "blue": 0.8}},
                "innerHorizontal": {"style": "SOLID", "width": 1, "color": {"red": 0.8, "green": 0.8, "blue": 0.8}},
                "innerVertical": {"style": "SOLID", "width": 1, "color": {"red": 0.8, "green": 0.8, "blue": 0.8}}
            }
        })

        # 5. Clear existing bandings (if any) then apply alternating row colors manually to avoid banding conflicts
        # Instead of banding, we can just apply alternating background colors to row 1..100 (which is enough for this sheet)
        for i in range(1, 30):
            bg_color = {"red": 0.95, "green": 0.97, "blue": 1.0} if i % 2 != 0 else {"red": 1.0, "green": 1.0, "blue": 1.0}
            requests.append({
                "repeatCell": {
                    "range": {
                        "sheetId": sheet_id,
                        "startRowIndex": i,
                        "endRowIndex": i + 1,
                        "startColumnIndex": 0,
                        "endColumnIndex": 8
                    },
                    "cell": {
                        "userEnteredFormat": {
                            "backgroundColor": bg_color
                        }
                    },
                    "fields": "userEnteredFormat.backgroundColor"
                }
            })

    # Execute all formatting
    service.spreadsheets().batchUpdate(
        spreadsheetId=SPREADSHEET_ID,
        body={'requests': requests}
    ).execute()
    print("Formatting applied successfully!")

if __name__ == '__main__':
    main()
