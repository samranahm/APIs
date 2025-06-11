const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const callGroupPreviewData = Array.from({ length: 10 }, (_, index) => ({
    language: ['English', 'Spanish', 'French', 'German'][Math.floor(Math.random() * 4)],
    level: ['Beginner', 'Intermediate', 'Advanced'][Math.floor(Math.random() * 3)],
    subtitle: `Group ${index + 1} subtitle`,
    isMicrophoneDisabled: Math.random() < 0.5,
    numberOfParticipants: Math.floor(Math.random() * 10) + 1,
}));

app.get('/call-group-preview', (req, res) => {
    res.json(callGroupPreviewData);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
});
