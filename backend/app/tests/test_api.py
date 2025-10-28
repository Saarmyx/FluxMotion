from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_analyze():
    r = client.post("/api/analyze", json={"text": "Hoy fue un día hermoso y feliz"})
    assert r.status_code == 200
    data = r.json()
    assert "mood" in data
