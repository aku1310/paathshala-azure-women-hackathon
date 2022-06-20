import requests, uuid, json

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
    'to': str(input("Enter language to translate to: "))
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

file=open("file.json", "w")
json.dump(response, file, sort_keys=True, ensure_ascii=False, indent=4, separators=(',', ': '))
file.close()


import azure.cognitiveservices.speech as speechsdk

speech_config = speechsdk.SpeechConfig(subscription="b46d4f0f74a844d4a5a2ef9d75f50c04", region="southeastasia")
audio_config = speechsdk.audio.AudioOutputConfig(use_default_speaker=True)

# The language of the voice that speaks.
speech_config.speech_synthesis_voice_name='en-US-JennyNeural'

speech_synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config, audio_config=audio_config)

with open("file.json") as f:
    data=json.load(f)
    values = []
    i = data[0].values()
    for txt in i:
        values.append(txt)
    print("Translation: ")
    print(values[1][0]['text'])
    text1=values[1][0]['text']

speech_synthesis_result = speech_synthesizer.speak_text_async(text1).get()

#if speech_synthesis_result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
    #print("Speech synthesized for text [{}]".format(text1))
if speech_synthesis_result.reason == speechsdk.ResultReason.Canceled:
    cancellation_details = speech_synthesis_result.cancellation_details
    print("Speech synthesis canceled: {}".format(cancellation_details.reason))
    if cancellation_details.reason == speechsdk.CancellationReason.Error:
        if cancellation_details.error_details:
            print("Error details: {}".format(cancellation_details.error_details))
            print("Did you set the speech resource key and region values?")
