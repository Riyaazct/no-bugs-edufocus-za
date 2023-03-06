import path from "path";

const imagePath = path.join(__dirname, "images");

function getImage(imageName) {
    return path.join(imagePath, imageName);
}

export { getImage };