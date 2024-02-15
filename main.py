import random
import pyscript
from pyscript import document


def stupid(input_text):
    for i in range(len(input_text)):
        isUpper = random.choice([True, False])
        if isUpper == True:
            input_text = input_text[:i] + input_text[i].upper() + input_text[(i+1):]
        else: 
            input_text = input_text[:i] + input_text[i].lower() + input_text[(i+1):]
    return input_text



def translate(event):
    input_text = document.querySelector("#language").value
    input_text = stupid(input_text)
    output_div = document.querySelector("#output")
    output_div.innerText = str(input_text)

