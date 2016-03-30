(function (GlossaryList, React) {
  GlossaryList.Word = React.createClass({
    componentWillMount() {
      this.id = GlossaryList.unqiueId();
    },

    handleChange() {
      this.correct = (this.refs.answerInput.value === this.props.translation);
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
        status = (
          <span>{ this.correct ? 'Correct' : 'Wrong' }</span>
        );
      }

      return (
        <li>
          <span id={this.id} dangerouslySetInnerHTML={this.createMarkup('original')} />
          <input type="text" ref="answerInput" onChange={this.handleChange} aria-labelledby={this.id} />
          {status}
        </li>
      );
    }
  });
})(H5P.GlossaryList, H5P.React);
