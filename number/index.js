function jishu (num) {
	console.log(num + '是奇数');
}
function oushu (num) {
	console.log(num + '是偶数');
}
for (var i=1; i<=20; i++) {
	if (i%2==0) {
		oushu(i);
	} else {
		jishu(i);
	}
}