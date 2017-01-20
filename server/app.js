// ps:使用之前请先阅读README.md文件
//
/****************************定义和引入********************************/
// 引入模块
var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var server = http.Server(app);
var host = 'http://localhost:';
var port = 9999; //设置本地转发服务端口
var Mock = require('mockjs')

/*************************以下为设置和启用*****************************/
// 设置node服务
app.set('port', port);
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// 启动服务
server.listen(app.get('port'), function() {
  console.log("服务已经启动，APIhost：" + host + app.get('port'));
});

/******************以下为此服务支持跨域请求********************/
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH');
  // res.set({
  //   'Content-Type': 'Content-Type:application/json; charset=UTF-8',
  // })
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});


/******************以下是api部分***********************/

// 设置后端服务器url
var dbUrl = 'http://localhost:8383'; //这里写你的后端api地址


//登录
app.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var data = Mock.mock({"timestamp":1483950325945,"status":401,"error":"Unauthorized","message":"Authentication Failed: Bad credentials","path":"/login"})
  if (username === 'egoadmin' && password === '616616'){
    res.status(200)
    res.send('');
  }else {
    res.send(JSON.stringify(data));
    res.status(401)
  }
  console.log('login')
});

// 登陆后获取users信息
app.get('/users/:name', function(req, res) {
  var username = req.params.name
  var data = Mock.mock({"userInfo":{"userId":1,"userName":"egoadmin","chineseName":"无敌超人","password":"$2a$10$91IGwt1azNAsPxO5trjaW.X1hwXxsfxQyHYnIDPr6hh/dVUqolhyq","email":"dengwu.wang@easygovm.com","mobile":"15309268871","regIp":"124.115.217.166","lastLoginTime":1483950440000,"lastLoginIp":"124.115.217.166","status":"A","gmtCreated":1483950745000,"gmtModified":1483950745000},"rules":["01","02","03","04","030104","05","030101","09","030103","030102","0402","0403","040302","0401","040301","040103","040102","040101","050104","050302","050303","050102","050103","050301","050304","090203","050101","090204","090201","090202","090205","090206","010202","010201","010204","010203","010205","030202","030201","0501","0105","0502","0103","010310","0301","0302","040202","0104","0101","010312","0102","010311","0903","040201","0901","0505","0902","0506","0503","0504","050203","050401","050204","050402","050201","050202","090101","090104","090302","090303","090102","090301","090103","010101","090304","090305","010103","010301","010102","010303","010501","010104","010302","010305","010304","010502","010307","010306","010309","010308"],"organizationStructures":[{"orgId":"01","orgName":"前海易购","upOrgId":"0","level":"1","status":"1","gmtCreated":1448094801000,"gmtModified":1453802627000}]})
  if (username === 'egoadmin'){
    res.send(JSON.stringify(data));
    res.status(200)
  }
  console.log('users')
});

// 提交修改密码
app.put('/users/editPwd', function(req, res) {
  var newPwd = req.query.newPwd
  var username = req.body.userName
  var password = req.body.password
  var data1 = Mock.mock({result: 1})
  var data2 = Mock.mock({result: -11})
  if (password === '616616'){
    res.send(JSON.stringify(data1));
  } else {
    res.send(JSON.stringify(data2));
  }
  console.log('newPwd')
});


app.get('/machineType', function(req, res) {
  var data = Mock.mock([{"machineTypeId":4,"typeName":"旧三号机","aisleRowNumber":6,"aisleColumnNumber":6,"screenSize":7,"enableTouch":"0","haveSelectGoodsButton":"0","haveNumberKeyboard":"1","controlBoardType":"ZJ","gmtCreated":1446106859000,"gmtModified":1463561310000},{"machineTypeId":5,"typeName":"老一号机","aisleRowNumber":5,"aisleColumnNumber":6,"screenSize":32,"enableTouch":"0","haveSelectGoodsButton":"1","haveNumberKeyboard":"0","controlBoardType":"EG","gmtCreated":1446106967000,"gmtModified":1463560823000},{"machineTypeId":6,"typeName":"旧一号机","aisleRowNumber":5,"aisleColumnNumber":6,"screenSize":32,"enableTouch":"0","haveSelectGoodsButton":"1","haveNumberKeyboard":"0","controlBoardType":"ZJ","gmtCreated":1446437223000,"gmtModified":1463561319000},{"machineTypeId":8,"typeName":"易购一号机","aisleRowNumber":5,"aisleColumnNumber":6,"screenSize":32,"enableTouch":"0","haveSelectGoodsButton":"1","haveNumberKeyboard":"0","controlBoardType":"NEG","gmtCreated":1451454875000,"gmtModified":1463560850000},{"machineTypeId":9,"typeName":"易购三号机","aisleRowNumber":6,"aisleColumnNumber":6,"screenSize":7,"enableTouch":"0","haveSelectGoodsButton":"0","haveNumberKeyboard":"1","controlBoardType":"NEG","gmtCreated":1457341045000,"gmtModified":1463560927000},{"machineTypeId":10,"typeName":"易触二号机","aisleRowNumber":21,"aisleColumnNumber":3,"screenSize":32,"enableTouch":"1","haveSelectGoodsButton":"1","haveNumberKeyboard":"0","controlBoardType":"YC","gmtCreated":1472528990000,"gmtModified":1477548095000},{"machineTypeId":11,"typeName":"易购二号机","aisleRowNumber":24,"aisleColumnNumber":1,"screenSize":13,"enableTouch":"0","haveSelectGoodsButton":"0","haveNumberKeyboard":"1","controlBoardType":"JY","gmtCreated":1474801049000,"gmtModified":1477636537000},{"machineTypeId":12,"typeName":"易购八号机","aisleRowNumber":4,"aisleColumnNumber":4,"screenSize":7,"enableTouch":"0","haveSelectGoodsButton":"0","haveNumberKeyboard":"0","controlBoardType":"CHZH","gmtCreated":1482388467000,"gmtModified":1482389190000}])
    res.send(JSON.stringify(data))
  console.log('machineType')
});

app.get('/aisleDesc', function(req, res) {
  var data = Mock.mock([{"goodsAisleTemplateId":7,"templateName":"3-B-36个货道","machineTypeInfo":{"machineTypeId":4,"typeName":"旧三号机","aisleRowNumber":6,"aisleColumnNumber":6,"screenSize":7,"enableTouch":"0","haveSelectGoodsButton":"0","haveNumberKeyboard":"1","controlBoardType":"ZJ","gmtCreated":1446106859000,"gmtModified":1463561310000},"applySceneDesc":"3-B-36个货道测试模板","gmtCreated":1446107985000,"gmtModified":1446107985000},{"goodsAisleTemplateId":8,"templateName":"1-B-30","machineTypeInfo":{"machineTypeId":6,"typeName":"旧一号机","aisleRowNumber":5,"aisleColumnNumber":6,"screenSize":32,"enableTouch":"0","haveSelectGoodsButton":"1","haveNumberKeyboard":"0","controlBoardType":"ZJ","gmtCreated":1446437223000,"gmtModified":1463561319000},"applySceneDesc":"1-B-30个货道测试模板","gmtCreated":1446437508000,"gmtModified":1446439025000},{"goodsAisleTemplateId":9,"templateName":"1-A-30","machineTypeInfo":{"machineTypeId":5,"typeName":"老一号机","aisleRowNumber":5,"aisleColumnNumber":6,"screenSize":32,"enableTouch":"0","haveSelectGoodsButton":"1","haveNumberKeyboard":"0","controlBoardType":"EG","gmtCreated":1446106967000,"gmtModified":1463560823000},"applySceneDesc":"1-A-30测试易购","gmtCreated":1447156186000,"gmtModified":1447156186000},{"goodsAisleTemplateId":10,"templateName":"1-C-30","machineTypeInfo":{"machineTypeId":8,"typeName":"易购一号机","aisleRowNumber":5,"aisleColumnNumber":6,"screenSize":32,"enableTouch":"0","haveSelectGoodsButton":"1","haveNumberKeyboard":"0","controlBoardType":"NEG","gmtCreated":1451454875000,"gmtModified":1463560850000},"applySceneDesc":"新单片机测试","gmtCreated":1451454992000,"gmtModified":1451454992000},{"goodsAisleTemplateId":11,"templateName":"1-C-36","machineTypeInfo":{"machineTypeId":9,"typeName":"易购三号机","aisleRowNumber":6,"aisleColumnNumber":6,"screenSize":7,"enableTouch":"0","haveSelectGoodsButton":"0","haveNumberKeyboard":"1","controlBoardType":"NEG","gmtCreated":1457341045000,"gmtModified":1463560927000},"applySceneDesc":"太冷测试模板","gmtCreated":1457341179000,"gmtModified":1457341179000}])
  res.send(JSON.stringify(data))
  console.log('aisleDesc')
});
