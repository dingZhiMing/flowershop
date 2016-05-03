var telIndex=require("../tpl/index.string");

SPA.defineView("index",{
	html:telIndex,
	plugins:["delegated"],//插件名字
	modules: [{
    name: 'indexContent',
    container: 'section',
    views: ['home','find','shoping','my','sort'],
    defaultTag: 'shoping'
  }],

  bindActions:{	//绑定对象，
  	"tap.switch":function(e,data){
  		this.modules.indexContent.launch(data.tag)
  		console.log(data)
	  }
	}
})
