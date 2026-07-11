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
        
        # Update font to Arial 12 for all cells in the sheet
        # By using fields mask we only overwrite the font name and size,
        # keeping the header's bold and white text intact.
        requests.append({
            "repeatCell": {
                "range": {
                    "sheetId": sheet_id
                },
                "cell": {
                    "userEnteredFormat": {
                        "textFormat": {
                            "fontFamily": "Arial",
                            "fontSize": 12
                        }
                    }
                },
                "fields": "userEnteredFormat.textFormat(fontFamily,fontSize)"
            }
        })

    service.spreadsheets().batchUpdate(
        spreadsheetId=SPREADSHEET_ID,
        body={'requests': requests}
    ).execute()
    print("Font updated to Arial 12 successfully!")

if __name__ == '__main__':
    main()
