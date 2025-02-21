function dom(selector){
    if(!(this instanceof dom)){
        return new dom(selector);
    };
    this.elements = document.querySelectorAll(selector);
    this.hide = function(){
        this.elements.forEach(el => el.style.display = "none");
        return this;
    };
    this.show = function(){
        this.elements.forEach(el => el.style.display = "block");
        return this;
    };
    this.on = function(event, callback){
        this.elements.forEach(el => el.addEventListener(event, callback));
        return this;
    };
    this.css = function(styles){
        this.elements.forEach(el => Object.assign(el.style, styles));
        return this;
    };
    this.html = function(content){
        this.elements.forEach(el => el.innerHTML = content);
        return this;
    };
    this.text = function(content){
        this.elements.forEach(el => el.textContent = content);
        return this;
    };
}

if(typeof module !== "undefined"){
    module.exports = dom;
}else{
    window.dom = dom;
}