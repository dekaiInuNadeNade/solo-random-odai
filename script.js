new Vue({
  el: '#app',
  data: {
    characterInput: '',
    topicInput: '',
    pairs: []
  },
  methods: {
    generatePairs() {
      const characters = this.characterInput.split(',').map(name => name.trim());
      const topics = this.topicInput.split(',').map(topic => topic.trim());

      if (characters.length !== 8 || topics.length !== 8) {
        alert("キャラクターとお題はそれぞれ8個入力してください。");
        return;
      }

      // ランダムな組み合わせを生成
      const shuffledCharacters = this.shuffleArray(characters);
      const shuffledTopics = this.shuffleArray(topics);

      this.pairs = shuffledCharacters.map((character, index) => ({
        character,
        topic: shuffledTopics[index]
      }));
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  }
});
