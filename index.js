var _ =require('underscore');

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => {     //=>는funtion 과 같다
  res.charset = 'UTF-8';
  console.log(req.query);
  res.send('GET으로 넘어온 name은 '+ req.query.name + '입니다.');
} );//template 템플릿 =
app.get('/template', (req, res) => {
res.charset = 'UTF-8';
var tpl = _.template('<h1>안녕하세효?줴 이룸은 <%=name%>이고 나이는 <%=age%>에요</h1>');//tpl은 구멍을 매꿔줄 object를 발아서 string을 돌려주는 함수
var obj = { name: '홍길동', age:300};
res.send(tpl(obj));
} );

//http://localhost:8080/rowcol?row=4&col=6
app.get('/rowcol', (req, res) => {
res.charset = 'UTF-8';
var checkbox = '<input type="checkbox">';
var row = req.query.row;
var col = req.query.col;
var string = '';
var result = '';
string += '<form>';
for (var i = 0; i < col; i++){
  string += checkbox;
}
string += '</form>' ;

for (var i = 0; i < row; i++){
result += string;
}
res.send(result);
} );

app.post('/', (req, res) => {
  res.charset = 'UTF-8';
  res.send('POST로 넘어온 name은 '+ req.body.name + '입니다.');
} );


app.listen(8080, () => console.log('Example app listening on port 8080!'));
