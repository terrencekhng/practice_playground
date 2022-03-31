class TrieNode {
  constructor(char) {
    this.char = char;
    this.children = [];
    this.numMap = {};
    this.isEndWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('');
  }

  insert(str) {
    let current = this.root;
    for (let i = 0; i < str.length; ++i) {
      let index = current.children.findIndex(curChar => curChar.char === str[i]);
      if (index >= 0) {
        current = current.children[index];
        current.numMap[str[i]] += 1;
      } else {
        let newNode = new TrieNode(str[i]);
        current.children.push(newNode);
        current = newNode;
        current.numMap[str[i]] = 1;
      }
    }
    current.isEndWord = true;
  }

  /**
   * Find how many words having the same common prefix
   * @param prefix
   * @return {number}
   */
  countWords(prefix) {
    let count = 0;
    let current = this.root;
    for (let i = 0; i < prefix.length; ++i) {
      let index = current.children.findIndex(curChar => curChar.char === prefix[i]);
      if (index < 0) {
        count = 0;
        break;
      } else {
        current = current.children[index];
        count = current.numMap[prefix[i]];
      }
    }
    return count;
  }

  /**
   * Print the array contains the preset strings that have the common prefix
   * The output array can be directly used for auto completion
   * @param prefix
   * @return {*[]}
   */
  autoComplete(prefix) {
    let results = [];
    let current = this.root;
    for (let i = 0; i < prefix.length; ++i) {
      let index = current.children.findIndex(curChar => curChar.char === prefix[i]);
      if (index < 0) {
        results = [];
        return results;
      } else {
        current = current.children[index];
      }
    }

    printRest(prefix, current, '', results);
    return results;
  }
}

function printRest(prefix, node, current, results) {
  if (!node.children.length) {
    results.push(`${prefix}${current}`);
    return;
  }
  if (node.isEndWord) {
    results.push(`${prefix}${current}`);
  }
  for (let i = 0; i < node.children.length; ++i) {
    printRest(prefix, node.children[i], `${current}${node.children[i].char}`, results);
  }
}

// let keys = ["the", "a", "there", "answer", "any",
//   "by", "bye", "their","abc"];
let keys = ["apk", "app", "apple", "arp", "array"];
let trie = new Trie();
keys.forEach(key => {
  trie.insert(key);
})
let count = trie.countWords('ap');
console.log('count: ', count);

let candidates = trie.autoComplete('ar');
console.log('candidates: ', candidates);
