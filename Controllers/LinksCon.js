import ClickMod from "../Models/ClickMod.js"
import LinkModel from "../Models/LinkMod.js"

const LinksCont = {

    getList: async (req, res) => {
        try {
            const links = await LinkModel.find()
            res.json(links)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },
    //sprint 2-Tracking
    getById: async (req, res) => {
        try {
            const link = await LinkModel.findById(req.params.id);
            if (!link) {
                return res.status(404).json({ message: 'Link not found' });
            }
            const targetParamName = link.targetParamName;
            const targetParamValue = req.query[targetParamName] || "";
            const ip = req.ip;
            const newClick = {
                ipAddress: ip,
                targetParamValue: targetParamValue
            };
            const newCli = await ClickMod.create(newClick);
            link.clicks.push(newCli);
            await link.save();
            res.redirect(link.originalUrl);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    
    

    add: async (req, res) => {
        const { originalUrl } = req.body;
        try {
            const newLink = await LinkModel.create({ originalUrl })
            res.json(newLink);
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    update: async (req, res) => {
        const { id } = req.params
        try {
            const updatedLink = await LinkModel.findByIdAndUpdate(id, req.body, {
                new: true,
            })
            res.json(updatedLink)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },

    delete: async (req, res) => {
        const { id } = req.params
        try {
            const deleted = await LinkModel.findByIdAndDelete(id)
            res.json(deleted)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
}
export default LinksCont