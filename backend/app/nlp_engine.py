from textblob import TextBlob

def quick_analyze(text: str):
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity  # -1 .. 1
    if polarity > 0.15:
        mood = "feliz"
    elif polarity < -0.15:
        mood = "triste"
    else:
        mood = "neutral"
    # simple summary: first 6 noun_phrases if any
    summary = ", ".join(blob.noun_phrases[:6]) if hasattr(blob, "noun_phrases") else None
    return {"mood": mood, "score": float(abs(polarity)), "summary": summary}
