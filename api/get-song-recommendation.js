export default async function handler(req, res) {
  console.log('=== Song Recommendation Called ===');
  
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
    const { concept } = req.body || {};
    
    // Sample songs based on genre/decade
    const songs = {
      '1980s': {
        title: 'Blue Monday',
        artist: 'New Order',
        reason: 'Futuristic synth-pop defining 80s electronic sound - perfect for cyberpunk themes'
      },
      default: {
        title: 'Thriller',
        artist: 'Michael Jackson',
        reason: 'Classic song that captures dramatic cinema energy'
      }
    };
    
    const song = songs[concept?.decade] || songs.default;
    
    console.log('Song recommendation:', song.title);
    return res.status(200).json({ success: true, song });
    
  } catch (error) {
    console.error('Song recommendation error:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}