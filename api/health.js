export default function handler(req, res) {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    hasAnthropicKey: !!process.env.ANTHROPIC_API_KEY,
    hasOpenAIKey: !!process.env.OPENAI_API_KEY
  });
}