import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Your Anthropic API call here
    const concept = {
      decade: '1980s',
      genre: 'Sci-Fi Horror', 
      title: 'Test Movie',
      tagline: 'It works!',
      synopsis: 'Fresh start success.',
      visual_elements: 'clean code, working deployment',
      cast: ['Fresh Actor', 'Clean Code'],
      director: 'New Repo'
    };
    
    res.json({ success: true, concept });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}