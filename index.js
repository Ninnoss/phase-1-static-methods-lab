// this is a utility class that has only static methods
class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');
    const titleizedWords = [];

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i === 0 || !exceptions.includes(word.toLowerCase())) {
        titleizedWords.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
      } else {
        titleizedWords.push(word.toLowerCase());
      }
    }
    return titleizedWords.join(' ');
  }
}
