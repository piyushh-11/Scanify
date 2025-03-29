import { ReceiptData } from './llm';
import { fetchUserConfig } from './supabase';
import { Client } from '@notionhq/client';

/**
 * Creates a new page in the user's Notion database with receipt information
 */
export async function createNotionPage(receiptData: ReceiptData): Promise<string> {
  try {
    // Get user's Notion configuration from Supabase
    const userConfig = await fetchUserConfig('');
    
    if (!userConfig?.notion_database_id || !userConfig?.notion_token) {
      throw new Error('Notion configuration not found');
    }

    const notion = new Client({ auth: userConfig.notion_token });

    // Create the page in Notion Database
    const response = await notion.pages.create({
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
          number: parseFloat(receiptData.total.toFixed(2))  // Ensure total is rounded to 2 decimal places
        }
      }
    });

    if (!response || !response.id) {
      throw new Error('Failed to create Notion page');
    }

    console.log('Successfully created page:', response.id);

    // Add items table to the newly created page
    await writeToNotionPage(response.id, userConfig.notion_token, receiptData);

    return response.id;
  } catch (error) {
    console.error('Error creating Notion page:', error);
    throw error;
  }
}

/**
 * Writes the list of items to the created Notion page as a table
 */
export async function writeToNotionPage(pageId: string, notionToken: string, receiptData: ReceiptData): Promise<void> {
    const notion = new Client({ auth: notionToken });

    try {
        const children = receiptData.items.map(item => ({
            object: 'block' as const,
            type: 'table_row' as const,
            table_row: {
                cells: [
                    [{ text: { content: item.name } }],
                    [{ text: { content: `$${item.price.toFixed(2)}` } }]  // Format price to 2 decimal places
                ]
            }
        }));

        // Create the table in the page as child blocks
        await notion.blocks.children.append({
            block_id: pageId,
            children: [
                {
                    object: 'block',
                    type: 'table',
                    table: {
                        table_width: 2,
                        has_column_header: true,
                        has_row_header: false,
                        children: [
                            {
                                object: 'block',
                                type: 'table_row',
                                table_row: {
                                    cells: [
                                        [{ text: { content: "Item" } }],
                                        [{ text: { content: "Price ($)" } }]
                                    ]
                                }
                            },
                            ...children
                        ]
                    }
                }
            ]
        });

        console.log('Successfully added items to Notion page.');
    } catch (error) {
        console.error('Error writing items to Notion page:', error);
        throw error;
    }
}
