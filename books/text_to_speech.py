# Import the required module for text 
# to speech conversion 
from gtts import gTTS 
import ebooklib
from ebooklib import epub


import os 

def process_text(filename):
    text = ""

    with open(filename, "r") as file_in: 
        line = file_in.readline()

        while line[:32] != "*** END OF THE PROJECT GUTENBERG":
            # print(line)
            if line.strip() != "[Illustration]":
                text += line
            line = file_in.readline()

    return text


def speech(filename):
    text = process_text(filename)

    audio = gTTS(text=text, lang='en', slow=False)

    audio.save(filename + ".mp3")
    print("done")


speech("books/the_tale_of_the_pie_and_the_pattypan.txt")
#speech("books/the_tale_of_two_bad_mice.txt")







# book = epub.read_epub("backend/books/the_story_of_miss_moppet")
# items = list(book.get_items_of_type(ebooklib.ITEM_DOCUMENT))
# cover_image = book.get_item_with_id('cover-image')
# cover_image.save("backend/books/test.jpg")
# print(items)
# print(book.get_items())