import axios from "axios";

class AIRequest {
    constructor() {
        this.url = 'https://api.inferkit.com/v1/models/standard/generate';
        this.header = { Authorization: `Bearer ${process.env.INFERKIT_API_KEY}` };
        this.data = {
            length: 500,
            startFromBeginning: true,
            topP: 0.9
        };
    }

    async makeRequest(input) {
        try {
            const inferkitData = {...this.data, prompt: { text: input } };
            const {
                data: { data: result }
            } = await axios.post(this.url, inferkitData, {
                headers: this.header
            });
            return result;
        } catch (err) {
            console.error(err);
        }
    }
}

export default AIRequest;