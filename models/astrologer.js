class Astrologer {
    constructor(id, name, isTopAstrologer = false) {
      this.id = id;
      this.name = name;
      this.currentFlow = 0;
      this.isTopAstrologer = isTopAstrologer;
    }
  }
  
  module.exports = Astrologer;
  