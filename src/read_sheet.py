import os
import json
from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
SERVICE_ACCOUNT_FILE = 'credentials.json'

def main():
    creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    service = build('sheets', 'v4', credentials=creds)
    spreadsheet_id = '1wgF0TeTV6nghyjurKFVHiso86CbBrDb8_eqzp4vNaHk'

    sheet_metadata = service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
    sheets = sheet_metadata.get('sheets', '')
    
    out = {}
    for sheet in sheets:
        title = sheet['properties']['title']
        result = service.spreadsheets().values().get(spreadsheetId=spreadsheet_id, range=title).execute()
        rows = result.get('values', [])
        out[title] = rows
        
    with open('sheet_data.json', 'w', encoding='utf-8') as f:
        json.dump(out, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    main()
