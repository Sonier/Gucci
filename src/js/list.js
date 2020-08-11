class List{
    constructor(){
        this.load();
    }
    load(){
        ajax("../static/goods.json",(res)=>{
            console.log(res)
        })
    }
}
new List();