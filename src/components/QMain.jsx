import React from 'react';
import QTitle from './QTitle';
import QAnswer from './QAnswer';
import QButton from './QButton';
import types from './constants';
import QInput from './QInput';
import QImg from './QImg';

class QMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
  }

  render() {
    const { item, pos, sel } = this.props;
    const selected = sel.answer;
    console.log(item);
    const ch = item.choices;
    console.log(ch);
    if (item.type == types.SIMPLE_MCQ || item.type == types.COMPLEX_MCQ) {
      return (
        <div>
          <QTitle txt={item.question} />
          <QAnswer
            sel={selected}
            answers={item.choices}
            handleClick={i => this.props.changeAns(pos, i)}
          />
          <div className="btn-cont">
            {pos > 0 && (
              <QButton
                txt={'Previous'}
                handleClick={() => this.props.handleClick(-1)}
              />
            )}
            {pos < this.props.max - 1 && (
              <QButton
                txt={'Next'}
                handleClick={() => this.props.handleClick(1)}
              />
            )}
          </div>
        </div>
      );
    }

    if (item.type == types.IMG_MCQ) {
      return (
        <div>
          <QTitle txt={item.question} />
          <QImg
            answers={item.choices}
            sel={selected}
            handleClick={i => this.props.changeAns(pos, i)}
          />
          <div className="btn-cont">
            {pos > 0 && (
              <QButton
                txt={'Previous'}
                handleClick={() => this.props.handleClick(-1)}
              />
            )}
            {pos < this.props.max - 1 && (
              <QButton
                txt={'Next'}
                handleClick={() => this.props.handleClick(1)}
              />
            )}
          </div>
        </div>
      );
    }
    if (item.type == types.BRIEF_ANS) {
      return (
        <div>
          <QTitle txt={item.question} />
          <div>
            <QInput handleSub={txt => this.props.changeAns(pos, txt)} />
          </div>
          <div className="btn-cont">
            {pos > 0 && (
              <QButton
                txt={'Previous'}
                handleClick={() => this.props.handleClick(-1)}
              />
            )}
            {pos < this.props.max - 1 && (
              <QButton
                txt={'Next'}
                handleClick={() => this.props.handleClick(1)}
              />
            )}
          </div>
        </div>
      );
    }
    return <div className="error" />;
  }
}

export default QMain;
