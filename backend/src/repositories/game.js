import game from '../models/game.js';


class gameRepository {
    async create(userData){
        const game = new game(userData);
        await game.save();
        return game;
    }
    async findAll(){
        return game.find();
    }
    async findById(id) {
        return game.findById(id);
    }
    async updateById(id, gameData) {
        return game.findByIdAndUpdate(id, gameData, { new: true })
    }
    async deleteById(id) {
        return game.findByIdAndDelete(id)
    }
}

const gameRepositories = new gameRepository();
export default gameRepositories;