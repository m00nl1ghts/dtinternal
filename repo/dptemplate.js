var template = ' \
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> \
<html> \
<head> \
<meta http-equiv="content-type" content="text/html" charset="utf-8"/> \
<meta name="apple-mobile-web-app-capable" content="no"> \
<meta name="apple-mobile-web-app-title" content="H6nrys page"> \
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"> \
<link rel="apple-touch-icon-precomposed" href=""> \
<link rel="apple-touch-startup-image" href=""> \
<meta charset="utf-8"> \
<link rel="shortcut icon" href=""> \
<meta name="robots" content="index,follow"> \
<meta http-equiv="cache-control" content="Public|Private"> \
<title>H6nry\'s page</title> \
</head> \
<body text="#000000" bgcolor="#FFFFFF" link="#404040" alink="#404040" vlink="#404040"><br> \
 \
<div align="center" style="background-color:#77ffff"> \
<h1>H6nry\'s Repo</h1> \
</div> \
 \
<div align="center" style="background-color:#FFFFFF;"> \
<table><td><br> \
';

var content = document.getElementById('content').innerHTML;

var bottom = '\
<h3><a href="http://twitter.com/H6nry_/">Me on twitter: H6nry</a><br> \
<a href="http://github.com/H6nry/">Me on Github: H6nry</a></h3> \
';
document.write(template + content + bottom);