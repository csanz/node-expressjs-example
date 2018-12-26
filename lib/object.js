var obj = exports = module.exports = {};

obj.set = function(setting,val){
  if(!this.settings)
    this.settings = {}
  this.settings[setting] = val;
}

obj.get = function(setting){

  if (this.settings && this.settings[setting]) {
    return this.settings[setting];
  }
  else {
    return undefined;
  }
}
