const express = require('express');
const app = express();
app.use(express.json());

const user = [{
    id: 1,
    name: 'John',
    email: 'john@gmail.com',
},
{
    id: 2,
    name: 'Jane',
    email: 'jane@gmail.com',
}];

app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) res.status(404).send('The user with the given ID was not found.');
    res.send(user);
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})