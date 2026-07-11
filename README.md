# Google Sheets Auto-Formatter

This project contains scripts to automate formatting and updating Google Sheets via the Google Sheets API.

## Setup

1. Enable the **Google Sheets API** in your Google Cloud Console.
2. Create a Service Account and download the JSON key.
3. Rename the JSON key to `credentials.json` and place it in the root folder of this project.
4. Share your target Google Sheet with the Service Account email address.

## Usage

### Node.js (Javascript)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the formatting script:
   ```bash
   node src/format_sheet.js
   ```

### Python
1. Install dependencies:
   ```bash
   pip install google-api-python-client google-auth-httplib2 google-auth-oauthlib
   ```
2. Run the formatting script:
   ```bash
   python src/format_sheet.py
   ```
