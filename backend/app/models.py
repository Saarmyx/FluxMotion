from pydantic import BaseModel
from typing import Optional, Dict

class JournalEntry(BaseModel):
    text: str
    mood_guess: Optional[str] = None

class AnalysisResult(BaseModel):
    mood: str
    score: float
    summary: Optional[str] = None
