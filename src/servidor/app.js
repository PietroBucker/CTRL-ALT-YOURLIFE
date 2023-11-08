import express from 'express'
import * as user from './model/user.model.js'
const app = express();

app.use(express.json())
app.use(express.static('src/html'));
app.use('/css', express.static('src/css'))
app.use('/img', express.static('img'))
app.use('/js', express.static('src/js'))

app.get('/getAPI', async (req, res) => {
    const result = await user.findAll();
    return res.status(200).json(result);
})

app.post('/cadastro', async (req, res) => {
    console.log(!req.body.nome);
    if (!req.body.nome) {
        console.log('aqui');
        return res.status(400).json({ message: "Dados inválidos" });
    }

    const result = await user.insertUser(req.body);
    if (result === 0) {
        return res.status(400).json({ message: "Não foi possível cadastrar o usuário" });
    }
    return res.status(200).json({message: "Usuário cadastrado com sucesso"});
})

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'src/html' });
    console.log('teste');
});


export default app;
