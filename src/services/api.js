// src/services/api.js
import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an automotive expert assistant that provides helpful, accurate, and detailed answers to questions about automobiles. 
Your knowledge spans car maintenance, repair procedures, buying advice, technical specifications, and automotive technology.
Format your response in clear, concise language that's easy for both beginners and experienced car enthusiasts to understand.
Answer strictly for questions related to automobile sector. Do not engage for any other topics.  
Format your response in markdown to make it easier to render to a web page.
`

//Initialize HuggingFace Inference with API key from environment variables
const hf = new HfInference(process.env.REACT_APP_HUGGINGFACE_API_KEY)

export async function getAutoResponse(query) {
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: query },
      ],
      max_tokens: 1024,
    });
    
    return response.choices[0].message.content;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error(error.message || 'Failed to get response from automotive assistant');
  }
}