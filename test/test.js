if (require != null) {
	var buster = require("/opt/local/lib/node_modules/buster/lib/buster");
	buster.spec.expose();
	//----------------------------------------
	// var Math = require(Math);
}

/*
abs 	絶対値を返す、ただし値が負数であれば正数として返す
acos 	アークコサインを返す、ただし値はラジアンで指定する
asin 	アークサインを返す、ただし値はラジアンで指定する
atan 	アークタンジェントを返す、ただし値はラジアンで指定する
atan2 	Ｘ軸の座標と指定された座標との角度をラジアン単位で返す
ceil 	値が小数点以下の場合、もっとも大きくて近い整数を返す
cos 	コサインを返す、ただし値はラジアンで指定する
exp 	Eを基数とする指数 (自然対数の底e) の累乗を返す
floor 	最も小さい整数値を返す (14.98であれば 14に、-28.45なら -29になる)
log 	自然対数 (底eとする対数) を返す
max 	２つの数値を比較し大きい方の値を返す
min 	２つの数値を比較し小さい方の値を返す
pow 	べき乗を返す (引数が文字列でも含まれる文字が符号や数値なら結果を返す)
random 	0から 1未満のランダムな数 (乱数) を発生する
sin 	サインを返す、ただし値はラジアンで指定する
sqrt 	平方根 (ルート) を返す
tan 	タンジェントを返す、ただし値はラジアンで指定する
*/

buster.testCase("Math test", {
	setUp: function () {

	},

	"abs 絶対値を返す、ただし値が負数であれば正数として返す": function () {
		assert(Math.abs(-1) == Math.abs(1));
	},

	"ceil 値が小数点以下の場合、もっとも大きくて近い整数を返す": function () {
		assert(Math.ceil(0.1) == 1);
		assert(Math.ceil(-0.1) == 0);
	},

	"floor 最も小さい整数値を返す (14.98であれば 14に、-28.45なら -29になる)": function () {
		assert(Math.floor(0.1) == 0)
		assert(Math.floor(-0.1) == -1)
	},

	"max ２つの数値を比較し大きい方の値を返す": function () {
		assert(Math.max(0, 1) == 1);
		assert(Math.max(0, -1) == 0);
	},

	"min ２つの数値を比較し小さい方の値を返す": function () {
		assert(Math.min(0, 1) == 0);
		assert(Math.min(0, -1) == -1);
	},

	"sin サインを返す、ただし値はラジアンで指定する": function () {
		assert(Math.sin(0) == 0, "0 : " + Math.sin(0));
		assert(Math.sin(Math.PI) < 0.0000000001 && Math.sin(Math.PI) > -0.0000000001, "PI : " + Math.sin(Math.PI));
		assert(Math.sin(Math.PI * 2) < 0.0000000001 && Math.sin(Math.PI * 2) > -0.0000000001, "2PI : " + Math.sin(Math.PI * 2));
	},

	"cos コサインを返す、ただし値はラジアンで指定する": function () {
		assert(Math.cos(0) == 1);
		assert(Math.cos(Math.PI) == -1, Math.cos(Math.PI));
		assert(Math.cos(Math.PI * 2) == 1, Math.cos(Math.PI * 2));
	},

	"sqrt 平方根 (ルート) を返す": function () {
		for( var i = 0; i < 100; i++) {
			assert(Math.sqrt(i*i) == i, "i");
		}
	},

	"pow べき乗を返す (引数が文字列でも含まれる文字が符号や数値なら結果を返す)": function () {
		var i, j, v;
		for (i = 1;i < 10; i++) {
			v = 1;
			for(j = 1; j < 10; j++) {
				v *= i;
				assert( Math.pow(i, j) == v, i + ":" + j + ":" + v + "/" + Math.pow(i, j));		
			}
		}
		assert( Math.pow(0, 0) == 1 );
	},

	"random 0から 1未満のランダムな数 (乱数) を発生する": function () {
		var vals=[];
		for (var i = 0; i< 100; i++){
			vals.push( Math.random() );
			assert(vals[i] >= 0 && vals[i] < 1, vals[i]);
			for (var j = 0; j< i; j++){
				assert(vals[i] !== vals[j], vals[i] + ":" + vals[j]);
			}
		}
	}

});