from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import main  # Assuming your main chatbot logic is in main.py

app = FastAPI()

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # You can also use ["*"] to allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QueryRequest(BaseModel):
    input: str
    semantic_search: bool = False

@app.post("/query")
def query_chatbot(request: QueryRequest):
    result = main.main(request.input, request.semantic_search)  # Adjust this according to your main.py function
    return {"result": result}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
