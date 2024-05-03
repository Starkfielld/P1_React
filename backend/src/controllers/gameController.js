
import gameRepositories from '../repositories/game.js';

export async function createGame (req, res) {
    try {
        const game = await gameRepositories.create(req.body);
        res.status(201).json(game)
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

export async function getAllGame(req, res) {
    try{
        const game = await gameRepositories.findAll();
        res.status(200).json(game);
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

export async function getById(req, res) {
    try {
        const game = await gameRepositories.findById(req.params.id);
        res.status(200).json(game);
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

export async function updateGame(req, res){
    try {
        const game = await gameRepositories.updateById(req.params.id, req.body);
        res.status(200).json(game);
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

export async function deleteGame(req, res){
    try {
        const deleteGame = await gameRepositories.deleteById(req.params.id);
        res.status(200).json({message: "jogo deletado com sucesso"});
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}
