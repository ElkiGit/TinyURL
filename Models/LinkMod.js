import mongoose from "mongoose"
import ClickMod from "./ClickMod.js"
import TargetMod from "./TargetMod.js"


const LinkSchema = mongoose.Schema({
  originalUrl: {
    type: String,
    required: true
  },
  clicks:[ClickMod.schema], 
  targetParamName: {
    type: String,
    default:"t"
  },
  targetValues: [TargetMod.schema]
})
export default mongoose.model("links", LinkSchema)