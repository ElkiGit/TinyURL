import LinkMod from "../Models/LinkMod.js";

const TargetCon={
    getById: async (req, res) => {
        try {
            const link = await LinkMod.findById(req.params.id);
            if (!link) {
                return res.status(404).json({ message: 'Link not found' });
            }
            const clicksBySource = {};
            link.targetValues.forEach(target => {
                const sourceName = target.name;
                clicksBySource[sourceName] = link.clicks.filter(click => click.targetParamValue === target.value);
            })
            res.json(clicksBySource);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
},}
export default TargetCon
