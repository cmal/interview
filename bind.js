Function.prototype.bind = function(oThis) {
  if (typeof this != 'function') {
    throw new Error('Function.prototype.bind -- what is trying to be bound is not a function');
  }
  var boundArgs = Array.prototype.slice(arguments, 1),
      fToBind = this,
      fNOP = function() {},
      fBound = function() {
        return fToBind.apply(this instanceof fBound ? this : oThis,
                             boundArgs.concat(Array.prototype.slice.call(arguments)));
      };
  if (this.prototype) {
    fNOP.prototype = this.prototype;
  }
  fBound.prototype = new fNOP();
  return fBound;
};


