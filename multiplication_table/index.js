var i, j;
for (i = 1; i <= 9; i++) {
	document.write("<br>"); // i Ϊ�еĳ�����j Ϊ����  ÿһ�д�ӡ�����
	for (j = 1; j <= i; j++) {
		sum = i * j;
		document.write(i, "*", j, "=", sum, ""); // ʹ "i" �� "j" �ܴ�ӡ����
	}
}
