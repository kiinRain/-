// index.js
Page({
  data:{
    testNum: Math.random() * 10,
    testNum2:Math.random().toFixed(2),
    num: 33

  },
  btnClick(e){
    console.log(e.detail.x,e.detail.y);
    // console.log(e.detail.y);
  },
  btnClick1(e){
    this.data.num = this.data.num + e.target.dataset.info;
    console.log(this.data.num);
    console.log(e);
  },
  
})
