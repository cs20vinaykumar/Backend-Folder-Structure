import multer from "multer";
import path from "path";

import { fileURLToPath } from "url";

import ServerErrorResponse from "../../utils/classes/ServerErrorResponse.js";

import { generateFileId } from "../../utils/basic.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, "../..", "public/assets/");
        console.log("uploadDir: ", uploadDir);
        cb(null, uploadDir);
    },

    filename: (req, file, cb) => {
        var currentDate = new Date();
        const formattedDate = currentDate.toISOString().split("T")[0];
        const originalFilename = path
            .parse(file.originalname)
            .name.replace(/\s/g, "_");
        const uniqueID = generateFileId();
        console.log("uniqueID: ", uniqueID);
        const filename = `${formattedDate}-${uniqueID}-${originalFilename}.png`;
        console.log("filename: ", filename);
        cb(null, filename);
    },
});

// const upload = multer({ storage: storage });
const upload = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
        if (
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg"
        ) {
            callback(null, true);
        } else {
            const errorResponse = new ServerErrorResponse(
                false,
                400,
                "FAILED",
                "Not a Image file! Please upload only Image files",
                null
            );
            return callback(errorResponse, false);
        }
    },
});

export default upload;
