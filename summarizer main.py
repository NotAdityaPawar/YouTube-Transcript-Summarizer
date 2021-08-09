from youtube_transcript_api import YouTubeTranscriptApi
import PySimpleGUI as sg
import nltk

url = "https://www.youtube.com/watch?v=UF8uR6Z6KLc"

video_id = url.split("=")[1]

#print(video_id)

transcript = YouTubeTranscriptApi.get_transcript(video_id)

final_text = ""

for line in transcript:
    for key in line:
        if key=="text":
            final_text += line[key]

#print(final_text)



