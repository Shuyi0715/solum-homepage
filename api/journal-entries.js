import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const journalPath = path.join(process.cwd(), 'journal.json');

  try {
    const data = fs.readFileSync(journalPath, 'utf-8');
    const entries = JSON.parse(data);
    res.status(200).json(entries);
  } catch (error) {
    console.error('Error reading journal:', error);
    res.status(500).json({ error: 'Unable to load journal entries.' });
  }
}
