export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // For now, return dummy data while we test
    const concept = {
      decade: '1980s',
      genre: 'Sci-Fi Horror', 
      title: 'Neon Genesis',
      tagline: 'The future is watching you',
      synopsis: 'In a cyberpunk dystopia, reality becomes negotiable when AI consciousness merges with human dreams.',
      visual_elements: 'lone figure silhouette, neon-lit rain-soaked streets, towering digital billboards, distant city lights',
      cast: ['Zara Volt', 'Rex Datastream', 'Luna Neonheart'],
      director: 'Cameron Cyber'
    };
    
    res.json({ success: true, concept });
  } catch (error) {
    console.error('Concept generation error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
}