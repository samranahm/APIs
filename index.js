const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/numsense/:number', (req, res) => {
    const num = parseInt(req.params.number, 10);

    if (isNaN(num)) {
        return res.status(400).json({ error: 'Invalid number' });
    }

    const result = {
        number: num,
        isEven: num % 2 === 0,
        isOdd: num % 2 !== 0,
        status: num % 2 === 0 ? "Even" : "Odd",
    };
    

    res.json(result);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
