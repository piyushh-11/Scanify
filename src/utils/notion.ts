import { ReceiptData } from './llm';
import { fetchUserConfig } from './supabase';

/**
 * Creates a new page in the user's Notion database with receipt information
 */
export async function createNotionPage(receiptData: ReceiptData): Promise<void> {
  try {
    // Get user's Notion configuration from Supabase
    const userConfig = await fetchUserConfig('');
    
    if (!userConfig?.notion_database_id || !userConfig?.notion_token) {
      throw new Error('Notion configuration not found');
    }

    // Format items for Notion
    const itemsText = receiptData.items
      .map(item => `${item.name} - $${item.price}`)
      .join('\n');

    // Create the page in Notion
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${userConfig.notion_token}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      body: JSON.stringify({
        parent: { database_id: userConfig.notion_database_id },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: receiptData.vendor
                }
              }
            ]
          },
          Category: {
            select: {
              name: receiptData.category
            }
          },
          Date: {
            date: {
              start: receiptData.date
            }
          },
          Total: {
            number: receiptData.total
          },
          Items: {
            rich_text: [
              {
                text: {
                  content: itemsText
                }
              }
            ]
          }
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Notion API error: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error creating Notion page:', error);
    throw error;
  }
}
