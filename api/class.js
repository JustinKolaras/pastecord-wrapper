const axios = require("axios");

const REQUEST_URL = "https://pastecord.com/documents";
const DOC_URL = "https://pastecord.com/";

module.exports = class PastecordWrapper {
    async publish(body) {
        let result;
        try {
            result = await axios.post(REQUEST_URL, body);
        } catch (err) {
            throw new Error(err);
        }
        return DOC_URL + result.data.key;
    }
};
