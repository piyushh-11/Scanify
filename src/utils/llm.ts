import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export interface ReceiptData {
    vendor: string;
    items: Array<{
        name: string;
        quantity: number;
        price: number;
    }>;
    total: number;
    category: string;
    date: string;
}

export async function processReceiptImage(imageFile: File): Promise<ReceiptData> {
    try {
        // Convert image to base64
        const base64Image = await fileToBase64(imageFile);
        
        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: `Extract the receipt information and format it as JSON with the following structure:
                            {
                                "vendor": "string",                 // The name of the vendor/store
                                "items": [                          // List of items purchased
                                    {
                                        "name": "string",          // Name of the item
                                        "quantity": "integer",     // Quantity purchased
                                        "price": "float"           // Price per item
                                    }
                                ],
                                "total": "float",                   // Total amount after tax
                                "category": "string",               // Overall category of purchase
                                "date": "string"                    // Date of purchase in ISO format
                            }`
                        },
                        {
                            type: "image_url",
                            image_url: {
                                url: base64Image
                            }
                        }
                    ]
                }
            ],
            max_tokens: 1000,
            response_format: { type: "json_object" }
        });

        const result = JSON.parse(completion.choices[0].message.content || '{}');
        console.log('Extracted receipt data:', result);
        return result;
    } catch (err) {
        console.error('Error processing receipt:', err);
        throw err;
    }
}

function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
}
