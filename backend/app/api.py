from fastapi import APIRouter, HTTPException
from app.models import JournalEntry, AnalysisResult
from app.nlp_engine import quick_analyze

router = APIRouter()

@router.post("/analyze", response_model=AnalysisResult)
def analyze(entry: JournalEntry):
    if not entry.text or not entry.text.strip():
        raise HTTPException(status_code=400, detail="Text required")
    res = quick_analyze(entry.text)
    return res
