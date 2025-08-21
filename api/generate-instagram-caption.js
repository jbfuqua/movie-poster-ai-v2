export default async function handler(req, res) {
  console.log('=== Instagram Caption Called ===');
  
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
    
    if (!concept || !concept.title) {
      return res.status(400).json({
        success: false,
        error: 'Concept with title is required'
      });
    }

    let caption = '';
    caption += '🎬 New AI-generated movie poster alert! ✨\n\n';
    caption += 'Movie: \"' + concept.title + '\" (' + (concept.decade || 'Unknown Era') + ')\n';
    caption += '🎭 ' + (concept.tagline || 'An unforgettable cinematic experience') + '\n\n';
    
    const synopsis = concept.synopsis || 'A groundbreaking film that will leave you on the edge of your seat.';
    const shortSynopsis = synopsis.length > 120 ? synopsis.substring(0, 120) + '...' : synopsis;
    caption += shortSynopsis + '\n\n';
    
    if (concept.cast && concept.cast.length > 0) {
      caption += '⭐ Starring: ' + concept.cast.slice(0, 2).join(', ') + '\n';
    }
    if (concept.director) {
      caption += '🎥 Directed by: ' + concept.director + '\n';
    }
    
    caption += '\n🤖 Created with AI • What movie should I generate next?\n\n';
    caption += '#AIart #MoviePoster #GenerativeAI #FilmDesign #CinematicArt #' + (concept.decade || '2020s');
    
    console.log('Instagram caption generated');
    return res.status(200).json({ success: true, caption });
    
  } catch (error) {
    console.error('Instagram caption error:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}