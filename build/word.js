(function (GlossaryList, React) {
  GlossaryList.Word = React.createClass({
    displayName: 'Word',

    componentWillMount() {
      this.id = GlossaryList.unqiueId();
    },

    handleChange() {
      this.correct = this.refs.answerInput.value === this.props.translation;
      this.props.onAnswer(this.correct);
    },

    createMarkup(prop) {
      return {
        __html: this.props[prop]
      };
    },

    render() {
      var status;
      if (this.props.checkAnswer && this.refs.answerInput) {
        status = React.createElement(
          'span',
          null,
          this.correct ? 'Correct' : 'Wrong'
        );
      }

      return React.createElement(
        'li',
        null,
        React.createElement('span', { id: this.id, dangerouslySetInnerHTML: this.createMarkup('original') }),
        React.createElement('input', { type: 'text', ref: 'answerInput', onChange: this.handleChange, 'aria-labelledby': this.id }),
        status
      );
    }
  });
})(H5P.GlossaryList, H5P.React);