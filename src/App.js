import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import './components/QMain';
import QMain from './components/QMain';
import types from './components/constants';

const items = [
  {
    id: '9201',
    type: types.SIMPLE_MCQ,
    question: 'Vivamus tortor elit, suscipit ut sem non?',
    choices: [
      'purus ut faucibus',
      'ac auctor augue',
      'purus non enim',
      'arcu risus quis'
    ]
  },
  {
    id: '9202',
    type: types.COMPLEX_MCQ,
    question: 'Nunc sed id semper risus in hendrerit gravida?',
    choices: [
      'purus ut faucibus',
      'ac auctor augue',
      'purus non enim',
      'arcu risus quis'
    ]
  },
  {
    id: '9203',
    type: types.IMG_MCQ,
    question: 'Id cursus metus aliquam eleifend mi in nulla?',
    choices: ['imgsrc1', 'imgsrc2', 'imgsrc3', 'imgsrc4']
  },
  {
    id: '9204',
    type: types.BRIEF_ANS,
    question: 'Scelerisque purus semper eget duis at tellus at?',
    placeholder: 'Adhuc invidunt duo ex. Eu tantas dolorum ullamcorper qui.'
  }
];

class App extends Component {
  constructor() {
    super();
    const bulk = items.map(item => {
      const bulkItem = {};
      if (item.type === types.BRIEF_ANS) {
        bulkItem.answer = '';
      } else {
        bulkItem.answer = [];
      }
      bulkItem.id = item.id;
      bulkItem.type = item.type;
      bulkItem.question = item.question;

      return bulkItem;
    });
    this.state = {
      bulk,
      currentDisplay: 0,
      quizDone: false
    };
  }

  submitQuiz = () => {
    this.setState({
      quizDone: true
    });
  };

  changeAnswer = (i, ans) => {
    const bulk = [...this.state.bulk];
    const bulkItem = bulk[i];
    if (bulkItem.type == types.SIMPLE_MCQ || bulkItem.type == types.IMG_MCQ) {
      bulkItem.answer = [ans];
    } else if (bulkItem.type == types.COMPLEX_MCQ) {
      let selected = [...bulkItem.answer];
      console.log(i);
      if (selected.includes(ans)) {
        selected = selected.filter(item => item !== ans);
      } else {
        selected.push(ans);
      }
      console.log(selected);
      bulkItem.answer = selected;
    } else if (bulkItem.type == types.BRIEF_ANS) {
      bulkItem.answer = ans;
    }
    bulk[i] = bulkItem;
    this.setState({
      bulk
    });
  };

  traverseQues = dir => {
    const newDisplay = this.state.currentDisplay + dir;
    if (newDisplay >= 0 && newDisplay < this.state.bulk.length) {
      this.setState({
        currentDisplay: newDisplay
      });
    }
  };

  render() {
    const indx = this.state.currentDisplay;

    return (
      <div className="App">
        <div className="q-num">{indx + 1}/4</div>
        <QMain
          item={items[indx]}
          sel={this.state.bulk[indx]}
          changeAns={this.changeAnswer}
          pos={indx}
          handleClick={this.traverseQues}
          max={4}
        />
      </div>
    );
  }
}

export default App;
