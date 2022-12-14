from utils import request_response
import os


def fastspeech(text: str, api_key: str):
    API_URL = "https://api-inference.huggingface.co/models/espnet/kan-bayashi_ljspeech_vits"
    headers = {"Authorization": "Bearer " + api_key}
    input = {'inputs': text}

    # Request a speech
    response = request_response(API_URL, headers=headers, json=input)
    with open("out.mp3", "wb") as f:
        f.write(response.content)

    return os.path.abspath("out.mp3")
