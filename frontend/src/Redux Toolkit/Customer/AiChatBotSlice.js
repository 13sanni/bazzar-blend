import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";
// ---- Initial State ----
const initialState = {
    response: null,
    loading: false,
    error: null,
    messages: [],
};
// ---- 1️⃣ Simple Chat AI (Optional) ----
export const chatBot = createAsyncThunk("aiChatBot/generateResponse", async ({ prompt, productId, userId }, { rejectWithValue }) => {
    try {
        const response = await api.post("/api/chat", prompt, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            params: { userId, productId },
        });
        return response.data.reply; // bot reply
    }
    catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to generate chatbot response");
    }
});
// ---- 2️⃣ Product Question AI ----
export const askProductQuestion = createAsyncThunk("aiChatBot/askProductQuestion", async ({ productId, question }, { rejectWithValue }) => {
    try {
        // FINAL CORRECT URL (because baseURL = http://localhost:8080)
        const response = await api.post(`/api/product/${productId}`, { question });
        return response.data.answer; // bot answer
    }
    catch (error) {
        const message = error.response?.data?.message ||
            error.message ||
            "Failed to get product answer";
        return rejectWithValue(message);
    }
});
// ---- Slice ----
const aiChatBotSlice = createSlice({
    name: "aiChatBot",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // -------- Simple Chat ----------
            .addCase(chatBot.pending, (state, action) => {
            state.loading = true;
            state.error = null;
            const userPrompt = action.meta.arg.prompt.prompt;
            state.messages.push({ role: "user", message: userPrompt });
        })
            .addCase(chatBot.fulfilled, (state, action) => {
            state.loading = false;
            state.response = action.payload;
            state.messages.push({ role: "bot", message: action.payload });
        })
            .addCase(chatBot.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
            // -------- Product Question ----------
            .addCase(askProductQuestion.pending, (state, action) => {
            state.loading = true;
            state.error = null;
            state.messages.push({
                role: "user",
                message: action.meta.arg.question,
            });
        })
            .addCase(askProductQuestion.fulfilled, (state, action) => {
            state.loading = false;
            state.messages.push({
                role: "bot", // correct role
                message: action.payload,
            });
        })
            .addCase(askProductQuestion.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});
export default aiChatBotSlice.reducer;
