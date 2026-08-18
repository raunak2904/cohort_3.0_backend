const express = require('express');
const app = express();

app.use(express.json());
let port = 3000;
let users = [];


// create - post
app.post('/', (req, res)=>{
    let body = req.body;
    users.push(body);

    res.send ("users saved successfully");
})


// get - read
app.get("/", (req, res) => {
    res.send(users);
});


// update - put, patch
app.put('/update/:id', (req, res) => {
    let (id) = req.params;
    let body = req.body;

    let updatedUser = users.map((val) => val.id === id? {...val, name } : val);

    res.send(updatedUser);
});


// delete - delete
app.delete("/delete/:id", (req, res) => {
    let {id} = req.params;

    let userData = users.filter((val) => val.id !== id);
    users = userData;
    res.send(userData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});