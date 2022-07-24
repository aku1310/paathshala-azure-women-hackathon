import requests, uuid, json
from flask import Flask

# Add your key and endpoint
key = "ef60340512b344708c0d15781fccc904"
endpoint = "https://api.cognitive.microsofttranslator.com"

# Add your location, also known as region. The default is global.
# This is required if using a Cognitive Services resource.
location = "southeastasia"

path = '/translate'
constructed_url = endpoint + path

params = {
    'api-version': '3.0',
    'to': str(input("Enter language code to translate: "))
}

headers = {
    'Ocp-Apim-Subscription-Key': key,
    'Ocp-Apim-Subscription-Region': location,
    'Content-type': 'application/json',
    'X-ClientTraceId': str(uuid.uuid4())
}

# You can pass more than one object in body.
body = [{
    'text': str(input("Enter text here:"))
}]

request = requests.post(constructed_url, params=params, headers=headers, json=body)
response = request.json()

print(json.dumps(response, sort_keys=True, ensure_ascii=False, indent=4, separators=(',', ': ')))
