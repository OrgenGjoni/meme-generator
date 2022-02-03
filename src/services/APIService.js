import axios from "axios";

const ENDPOINT = process.env.VUE_APP_API_ENDPOINT;
const USERNAME = process.env.VUE_APP_USERNAME;
const PASSWORD = process.env.VUE_APP_PASSWORD;

const get = async ()=>{
    try {
        const res = await axios.get(`${ENDPOINT}/get_memes`);
        return res.data.data;
    } catch(err){
        console.log(err);
    }
}

const post = async (body)=>{
    body.append("username", USERNAME);
    body.append("password", PASSWORD);

    const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
    try {
        const res = await axios.post(`${ENDPOINT}/caption_image`, body, config);
        return res.data;
    } catch(err){
        console.log(err);
    }
}
export {get, post};