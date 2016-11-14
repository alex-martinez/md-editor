import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import './github-md.css';
import './App.css';

const editorOptions = {
  bold: '**bold**',
  italic: '_italic_',
  underline: '\nUnderline\n------\n',
  strikethrough: '~~strikethrough~~',
  ul: '\n* Unordered',
  ol: '\n1. Ordered',
  link: '\n[Link Text](http://google.com)',
  codeInline: '`<strong>Hello, world</strong>`',
  codeBlock: '\n```\n<strong>Hola, mundo</strong>\n```\n',
  quote: {
    quoteList: [
      "My fake plants died because I did not pretend to water them. - Mitch Hedberg",
      "Is a hippopotamus a hippopotamus, or just a really cool Opotamus? - Mitch Hedberg",
      "I like to play blackjack. I'm not addicted to gambling. I'm addicted to sitting in a semi-circle. - Mitch Hedberg",
      "I'd like to get four people who do cart wheels very good, and make a cart. - Mitch Hedberg",
      "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is. Ellen DeGeneres - Ellen DeGeneres"
    ]
  },
  image: {
    imageList: [
      'http://i.imgur.com/4UqVJ.png',
      'http://i.imgur.com/UqoBgPc.png',
      'http://i.imgur.com/U61rzQ9.jpg',
      'http://i.imgur.com/zh7N3do.jpg',
      'http://i.imgur.com/e3IZHch.jpg'
    ]
  },
  lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo labore distinctio quia, aliquid dolore? Cupiditate illo impedit architecto itaque, officiis eius assumenda. ',
  youtube: '\n[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)'
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { mdSource: '' };

    this.randomNumberInRange = this.randomNumberInRange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ mdSource: e.target.value });
  }

  addHeading(size) {
    const hSizes = ['#', '##', '###', '####', '#####', '######'];
    this.setState({ mdSource: `${this.state.mdSource}\n${hSizes[size - 1]} Heading\n` });
    this.textareaElem.focus();
  }

  randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  buttonsFunctions(expr) {
    switch(expr) {
      case 'addUnderline':
        this.setState({ mdSource: `${this.state.mdSource} ${editorOptions.underline}` });
        break;

      case 'addStrikethrough':
        this.setState({ mdSource: `${this.state.mdSource} ${editorOptions.strikethrough}` });
        break;

      case 'addImage':
        let imageList = editorOptions.image.imageList;
        this.setState({ mdSource: `${this.state.mdSource} \n![Alt Text](${imageList[this.randomNumberInRange(0, imageList.length)]})` });
        break;

      case 'addLink':
        this.setState({ mdSource: `${this.state.mdSource} ${editorOptions.link}` });
        break;

      case 'addCodeInline':
        this.setState({ mdSource: `${this.state.mdSource} ${editorOptions.codeInline}` });
        break;

      case 'addCodeBlock':
        this.setState({ mdSource: `${this.state.mdSource} ${editorOptions.codeBlock}` });
        break;

      case 'addUL':
        this.setState({ mdSource: `${this.state.mdSource} ${editorOptions.ul}` });
        break;

      case 'addOL':
        this.setState({ mdSource: `${this.state.mdSource} ${editorOptions.ol}` });
        break;

      case 'addBold':
        this.setState({ mdSource: `${this.state.mdSource} ${editorOptions.bold}` });
        break;

      case 'addItalic':
        this.setState({ mdSource: `${this.state.mdSource} ${editorOptions.italic}` });
        break;

      case 'addQuote':
        let quoteList = editorOptions.quote.quoteList;
        this.setState({ mdSource: `${this.state.mdSource} \n\n> ${quoteList[this.randomNumberInRange(0, quoteList.length)]}` });
        break;

      case 'addYoutube':
        this.setState({ mdSource: `${this.state.mdSource}${editorOptions.youtube}` });
        break;

      case 'addLorem':
        this.setState({ mdSource: `${this.state.mdSource}${editorOptions.lorem}` });
        break;

      case 'clear':
        this.setState({ mdSource: '' });
        break;

      default:
        return null;
    }

    this.textareaElem.focus();
  }

  render() {
    return (
      <div className="app container-fluid h100p m-0">
        <div className="row app__btns">
          <div className="col-xs-12 h100p">
            <div className="text-xs-center mt-2">
              <div className="btn-group btn-group-sm d-inline-block mr-1">
                <button onClick={ () => this.buttonsFunctions('addBold') } type="button" className="btn btn-secondary"><i className="fa fa-bold"/></button>
                <button onClick={ () => this.buttonsFunctions('addItalic') }type="button" className="btn btn-secondary"><i className="fa fa-italic"/></button>
                {/*<button onClick={ () => this.buttonsFunctions('addUnderline') }type="button" className="btn btn-secondary"><i className="fa fa-underline"/></button>*/}
                {/*<button onClick={ () => this.buttonsFunctions('addStrikethrough') }type="button" className="btn btn-secondary"><i className="fa fa-strikethrough"/></button>*/}
              </div>

              <div className="btn-group btn-group-sm d-inline-block mr-1">
                <button onClick={ e => this.addHeading(1) } type="button" className="btn btn-secondary"><i className="fa fa-header"/>1</button>
                <button onClick={ e => this.addHeading(2) } type="button" className="btn btn-secondary"><i className="fa fa-header"/>2</button>
                <button onClick={ e => this.addHeading(3) } type="button" className="btn btn-secondary"><i className="fa fa-header"/>3</button>
                <button onClick={ e => this.addHeading(4) } type="button" className="btn btn-secondary"><i className="fa fa-header"/>4</button>
                <button onClick={ e => this.addHeading(5) } type="button" className="btn btn-secondary"><i className="fa fa-header"/>5</button>
                <button onClick={ e => this.addHeading(6) } type="button" className="btn btn-secondary"><i className="fa fa-header"/>6</button>
              </div>

              <div className="btn-group btn-group-sm d-inline-block mr-1">
                <button onClick={ () => this.buttonsFunctions('addOL') } type="button" className="btn btn-secondary"><i className="fa fa-list-ul"/></button>
                <button onClick={ () => this.buttonsFunctions('addUL') } type="button" className="btn btn-secondary"><i className="fa fa-list-ol"/></button>
              </div>

              <div className="btn-group btn-group-sm d-inline-block mr-1">
                <button onClick={ () => this.buttonsFunctions('addLorem') } type="button" className="btn btn-secondary">Lorem</button>
                <button onClick={ () => this.buttonsFunctions('addCodeInline') } type="button" className="btn btn-secondary"><i className="fa fa-code"/> Inline</button>
                <button onClick={ () => this.buttonsFunctions('addCodeBlock') } type="button" className="btn btn-secondary"><i className="fa fa-code"/> Block</button>
                <button onClick={ () => this.buttonsFunctions('addLink') } type="button" className="btn btn-secondary"><i className="fa fa-link"/></button>
                <button onClick={ () => this.buttonsFunctions('addImage') } type="button" className="btn btn-secondary"><i className="fa fa-image"/></button>
                <button onClick={ () => this.buttonsFunctions('addYoutube') } type="button" className="btn btn-secondary"><i className="fa fa-youtube-play"/></button>
                <button onClick={ () => this.buttonsFunctions('addQuote') } type="button" className="btn btn-secondary"><i className="fa fa-quote-right"/></button>
              </div>

              <div className="btn-group btn-group-sm d-inline-block">
                <button onClick={ () => this.buttonsFunctions('clear') } type="button" className="btn btn--clear"><i className="fa fa-eraser"/> Clear</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row app__editor">
          <div className="col-xs-12 col-md-6 h100p">
            <form onSubmit={ this.handleSubmit } className="editor__form">
              <div className="heading-title">Markdown</div>
              <textarea
                className="form-control h100p"
                value={ this.state.mdSource }
                onChange={ this.handleChange }
                ref={(input) => this.textareaElem = input}
                placeholder="Type some markdown" />
            </form>
          </div>

          <div className="col-xs-12 col-md-6 h100p">
            <div className="heading-title">Preview</div>
            <div className={ `markdown-body${this.state.mdSource === '' ? ' markdown-body--empty' : ''}` }>
              <ReactMarkdown
                source={ this.state.mdSource }
                escapeHtml={ true } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
