const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    inStock:{
      type:Boolean,
      default:true
    },
    quantity: { 
      type: Number, 
      default: 0 
    } 
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("product", productSchema);
