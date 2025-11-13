// リテラル表現

const fullname = 'taro suzuki';

// バッククォート（Shift+＠）を使用するようにする
const msg = `Hello, ${fullname}
 how are you?`;
console.log(msg);

// こっちは非推奨
const mx = 'Hello,' + fullname + 'How are you?';
console.log(mx);

// 数値セパレーター
const value = 123_456_789;
console.log(value);

// アロー関数
// (arg,..)=>{statements}
// arg : 引数, statements : 関数の本体