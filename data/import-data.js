const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const fs = require("fs");
const model = require("../model/showModel");

const data = JSON.parse(fs.readFileSync(`${__dirname}/showData.json`, "utf-8"));

async function addPop() {
  try {
    const datas = await model.create(data);
    console.log(datas);
  } catch (e) {
    console.log(`hato ${e.message}`);
  }
}

addPop();
