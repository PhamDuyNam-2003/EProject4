from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
SERVICE_ACCOUNT_FILE = 'credentials.json'

def format_sheet():
    try:
        # Authentication
        creds = service_account.Credentials.from_service_account_file(
                SERVICE_ACCOUNT_FILE, scopes=SCOPES)
        service = build('sheets', 'v4', credentials=creds)

        # The ID of your spreadsheet
        spreadsheet_id = '1wgF0TeTV6nghyjurKFVHiso86CbBrDb8_eqzp4vNaHk'

        # Lấy thông tin tất cả các sheet
        sheet_metadata = service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
        sheets = sheet_metadata.get('sheets', '')

        requests = []
        for sheet in sheets:
            sheet_id = sheet.get("properties", {}).get("sheetId", 0)
            
            requests.append({
                "repeatCell": {
                    "range": {
                        "sheetId": sheet_id
                    },
                    "cell": {
                        "userEnteredFormat": {
                            "wrapStrategy": "WRAP"
                        }
                    },
                    "fields": "userEnteredFormat.wrapStrategy"
                }
            })
            requests.append({
                "autoResizeDimensions": {
                    "dimensions": {
                        "sheetId": sheet_id,
                        "dimension": "ROWS"
                    }
                }
            })

        body = {
            'requests': requests
        }

        # Execute the request
        response = service.spreadsheets().batchUpdate(
            spreadsheetId=spreadsheet_id,
            body=body).execute()

        print('Successfully formatted the sheet using Python!')
        
    except Exception as e:
        print(f"Error formatting sheet: {e}")

if __name__ == '__main__':
    format_sheet()
