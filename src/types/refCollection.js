export class RefCollection {
  constructor (){
    this._refMap = {};
  };

  setRef(key) {
    return ((node) => {
      // console.log(node)
      if (node) this._refMap[key] = node;
    });
  } 

  set(key, value) {
    if (this._refMap[key]) {
      this._refMap[key].value = value;
    }
    return value;
  }

  get(key) {
    if (this._refMap[key]) {
      if (this._refMap[key].value === 'undefined') return null;
      return this._refMap[key].value;
    }
    return null;
  }

  setError(key) {
    if (this._refMap[key]) {
      this._refMap[key].classList.add(this._INPUT_ERROR);
    }
  }

  clearError(key) {
    if (this._refMap[key]) {
      this._refMap[key].classList.remove(this._INPUT_ERROR);
    }
  }

  hasError(key) {
    if (this._refMap[key]) {
      return this._refMap[key].classList.contains(this._INPUT_ERROR);
    }
    return false;
  }

  clearAllErrors() {
    this.keys.map(k => this.clearError(k));
  }

  clear() {
    Object.keys(this._refMap).forEach((ref) => {
      this._refMap[ref].value = null;
    });
  }

  get keys() {
    return Object.keys(this._refMap);
  }

  get values() {
    return Object.keys(this._refMap).reduce((acc, key) => {
      return { ...acc, [key]: this.get(key) };
    }, {});
  }
}
