const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    weight : { type:Array ,required:true},
    
    price: { type: Number, required: true },
    inStock:{ type:boolean ,requierd :true},
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);