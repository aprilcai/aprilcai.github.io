---
layout: post
title: Hello World
date: 2016-11-15 00:00:00
tags: 技术 前端
---

这是一篇示例文章，用于显示各种代码的高亮情况

```javascript
	var gulp = require('gulp')
	var less = require('gulp-less')
	var watch = require('gulp-watch')
	gulp.task('less', function() {
		gulp.src('./less/**.less')
		    .pipe(less())
		    .pipe(gulp.dest('../dist/css/'))	    
	})

	gulp.task('auto', function() {
		watch('./less/**.less', function () {
			gulp.start('less')
		})
	})

	gulp.task('default', ['less','auto'])
```

```html
	<div id="html" class="html" > this is a html </div>
```

```css
	.language-javascript .highlight {
	  background: #333;
	  position: relative;
	}
	.language-javascript .highlight::after {
	  content: 'JavaScript';
	  position: absolute;
	  right: 3px;
	  top: 3px;
	  font-size: 12px;
	  color: #fff;
	}
	.language-javascript .highlight code {
	  tab-size: 2;
	  color: #fff;
	}
	.language-javascript .highlight code .kd {
	  color: #1e93ef;
	}
	.language-javascript .highlight code .nx {
	  color: #fff;
	}
	.language-javascript .highlight code .o {
	  color: #ec2929;
	}
	.language-javascript .highlight code .s1 {
	  color: #ff9f00;
	}
	.language-javascript .highlight code .p {
	  color: #fff;
	}
```