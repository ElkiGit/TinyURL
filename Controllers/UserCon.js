import UserMod from "../Models/UserMod.js"

const UsersCon={
    getList: async (req, res) => {
        try {
          const users = await UserMod.find()
          res.json(users)
        } catch (e) {
          res.status(400).json({ message: e.message })
        }
    },
    
    getById: async (req, res) => {
        try {
            const user = await UserMod.findById(req.params.id)
            res.json(user)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    add: async (req, res) => {
        const { name, email, password, links } = req.body;
        try {
            const newUser = await UserMod.create({ name, email, password, links });
            res.json(newUser);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    update: async (req, res) => {
        const { id } = req.params
        try {
            const updatedUser = await UserMod.findByIdAndUpdate(id, req.body, {
            new: true,
            })
            res.json(updatedUser)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    delete: async (req, res) => {
        const { id } = req.params
        try {
            const deleted = await UserMod.findByIdAndDelete(id)
            res.json(deleted)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
}
export default UsersCon