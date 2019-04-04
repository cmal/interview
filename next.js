function* threeThings() {
  yield 'one';
  yield 'two';
  yield 'three';
}

let tt = threeThings();

tt.hasNext = function() {
};

console.log(tt);
while (tt.hasNext()) {
  console.log(tt.next());
}
