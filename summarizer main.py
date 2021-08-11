from youtube_transcript_api import YouTubeTranscriptApi
#import PySimpleGUI as sg
#import nltk
import spacy
from collections import Counter
import numpy as np
import pandas as pd

url = "https://www.youtube.com/watch?v=UF8uR6Z6KLc"

video_id = url.split("=")[1]

#print(video_id)

transcript = YouTubeTranscriptApi.get_transcript(video_id)

final_text = ""

for line in transcript:
    for key in line:
        if key=="text":
            final_text += line[key]

print(final_text)



#print(final_text)


nlp = spacy.load("en_core_web_sm")

doc = nlp(final_text)

sentence = [sent for sent in doc.sents]
#print(sentence)

fraction = 0.2
numsentence = int(np.ceil(fraction*len(sentence)))

# Tokenizing and filtering key words
words = [word.text.lower() for word in doc.doc if word.is_alpha and word.is_stop == False]
# Converting to df for calculating weighted frequency
df = pd.DataFrame.from_dict( data=dict(Counter(words)), orient="index", columns=["freq"])
df["wfreq"] = np.round(df.freq/df.freq.max(), 3)
df = df.drop('freq', axis=1)

# Convert weighted frequency back to dict
wfreq_words = df.wfreq.to_dict()

# Weight each sentence based on their wfreq
sent_weight = []
for sent in sentence:
    temp = 0
    for word in sent:
        if word.text.lower() in wfreq_words:
            temp += wfreq_words[word.text.lower()]
    sent_weight.append(temp)
wdf = pd.DataFrame(data=np.round(sent_weight, 3), columns=['weight'])
wdf = wdf.sort_values(by='weight', ascending=False)
indexlist = list(wdf.iloc[:numsentence, :].index)

# Summary
sumlist = []
for s in indexlist[:5]:
    sumlist.append(sentence[s])
summary = ''.join(token.string.strip() for token in sumlist)
print(summary)