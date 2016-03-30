(function (GlossaryList, React) {
  GlossaryList.List = React.createClass({
    scores: [],

    getAnswerHandler(i) {
      var scores = this.scores;
      var report = this.props.onAnswer;

      return function (correct) {
        scores[i] = correct ? 1 : 0;
        report(scores)
      };
    },

    render() {
      var wordNodes = this.props.words.map(function (word, i) {
        return (
          <GlossaryList.Word key={i} original={word.original} translation={word.translation} checkAnswer={this.props.checkAnswers} onAnswer={this.getAnswerHandler(i)} />
        );
      }, this);

      return (
        <div className="h5p-glossary-list">
          I am a GlossaryPage.
          <ol>
            {wordNodes}
          </ol>
        </div>
      );
    }
  });
})(H5P.GlossaryList, H5P.React);
