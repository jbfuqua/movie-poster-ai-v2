export default async function handler(req, res) {
  console.log('=== Generate Image Called ===');
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    // Return a test image (1px transparent PNG) for now
    const testImageBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
    
    const response = {
      success: true,
      imageUrl: 'data:image/png;base64,' + testImageBase64,
      message: 'Test image - DALL-E integration coming soon'
    };
    
    console.log('Image endpoint working');
    return res.status(200).json(response);
    
  } catch (error) {
    console.error('Image generation error:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}