const sharp = require("sharp");
sharp("./oracle_cloud.2e16d0ba.fill-1200x630.png").resize(80).grayscale().toFile("resized.png");