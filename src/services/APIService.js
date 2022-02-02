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
    const data = {username: USERNAME, password: PASSWORD, ...body};
    const formData = new FormData();
    Object.keys(data).forEach( key => {
        formData.append(key, data[key]);
    });
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };

    try {
        const res = await axios.post(`${ENDPOINT}/caption_image`, formData, config);
        return res.data;
    } catch(err){
        console.log(err);
    }
}
export {get, post};