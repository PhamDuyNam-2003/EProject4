const { google } = require('googleapis');
const path = require('path');

async function formatSheet() {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(__dirname, 'credentials.json'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1wgF0TeTV6nghyjurKFVHiso86CbBrDb8_eqzp4vNaHk';

    // Lấy thông tin tất cả các sheet
    const sheetData = await sheets.spreadsheets.get({ spreadsheetId });
    const sheetList = sheetData.data.sheets;
    
    const requests = [];
    
    for (const sheet of sheetList) {
      const sheetId = sheet.properties.sheetId;
      
      requests.push({
        repeatCell: {
          range: {
            sheetId: sheetId,
          },
          cell: {
            userEnteredFormat: {
              wrapStrategy: 'WRAP',
            },
          },
          fields: 'userEnteredFormat.wrapStrategy',
        }
      });
      
      requests.push({
        autoResizeDimensions: {
          dimensions: {
            sheetId: sheetId,
            dimension: 'ROWS',
          },
        }
      });
    }

    const response = await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      resource: { requests },
    });

    console.log('Successfully formatted the sheet!');
  } catch (error) {
    console.error('Error formatting sheet:', error.message);
  }
}

formatSheet();
