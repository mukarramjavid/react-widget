import axios from "axios";

const DownloadFileManager = {
    DownloadStringFromURL: async (url, body) => {
        // console.log(url);
        let matches;
        try {
            let resp = await axios.post(url, body);
            matches = await resp.data;
        } catch (error) {
            console.error("DownloadStringFromURL: ", error);
        }

        return matches;
    }
}

export default DownloadFileManager