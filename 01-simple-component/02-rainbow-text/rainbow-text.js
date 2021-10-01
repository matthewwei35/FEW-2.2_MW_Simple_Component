
class rainbowText extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    
    // Get the text of the host element this.innerHTML
    this._text = this.innerHTML;
    // Split the string into an array of words text.split(' ')
    this._text = this._text.split(' ')
    // Loop over each word in the array
    for (let i = 0; i < this._text.length; i += 1) {
      // Make a span 
      this._el = document.createElement('span')
      // Set the innerHTML of the span to the current word 
      this._el.innerHTML = this._text[i] + ' '
      // Set the color of the span: span.style.color
      const hue = 360 / this._text.length * i
      const color = `hsl(${hue}, 100%, 50%)`
      this._el.style.color = color
      // Append the word to the shadowroot
      this._shadowRoot.appendChild(this._el)
    }
    
  }
}

customElements.define('rainbow-text', rainbowText);

/*

- Challenge - 1 - 

All of the words in the 'rainbow-text' tag should each be a different
color. To make this happen you'll need to get the text from the source
tag, split into words, make a span for each word and style each of 
these spans with a color. 

Follow these steps: 

- Get the text from the source tag with this.innerHTML
- Split this into an array of words with split(' ')
- Loop over the words
  - Make a new span element with: document.createElement('span')
  - Set the innerHTML to the word from the array: el.innerHTML = arr[i]
  - Set the style to a color: el.style.color = someColor
  - Append the span to the shadowRoot: this._shadowRoot.appendChild(el)

To set the color you can use one of these methods. 

Set the color with something like this: 

const hue = 360 / words.length * i
const color = `hsl(${hue}, 100%, 50%)`

- Challenge - 2 - 

Modify the code to set the color of each letter.



*/