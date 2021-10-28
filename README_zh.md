[Egnlish](README.md)

现代 web 开发变得更加复杂，我们需要了解 node、npm、babel、webpack、React、Vue 以及许多路由和状态管理库才能完成工作。
但我认为我们仍然可以保持简单，就像 jQuery。所以我写了一些方法来简化日常工作。其实只是原生方法的一些短名称。
我认为这对于大多数开发工作来说已经足够了。

###关于名字

我觉得一个字的名字就够清楚了，'iOS'也只是一个字的名字，但我觉得它比'Android'这样的长名字更可爱，所以我安排了所有
字符，并将它们分为三组。

i t e n g u o x

a f h k m p q s v

b c d j l r w y z

第一组各方面都比较好，可用于大多数环境。通常，'i t e n' 表示局部名称，'g u o x' 表示全局名称。
第二组一般，有时可以用。
第三组外观不太好，所以我不经常使用它们。

更具体地说，“g”的意思是“全局”，它通常是全局对象的名称。 'u' 可以被认为是 'ultra' 或 'ultimate'，所以我用作全局名称。
't' 经常用于类似 'to' 或 'transform'，而 e 使用像 'edit'，'n' 用作 'find' 或 'number'，'i' 用作 'it'，'itself'。


## 简化语法
qcs, qht, qjs 方法是关于简化css、html和js代码的一些想法，灵感来自[gulp-qcss](https://github.com/zhangxinxu/gulp-qcss)
简化后的 CSS 代码是这样的
`
 .f2 { w: 154; h: 154; mt: 200; bd: 2 s #F1F1F1; bo: 50%; bgi: url(logo-128.png); }
 .f4 { fw: bd; f: 48; c: #333; m: 36 a; }
 .f1 { w: 158; h: 2; bgi: lg(270deg, #B1B1B1 0%, rgba(213,213,213,.5) 95.59%); o: .2; }
 .f3 { f: 36; c: #999; mb: 150; }
 .f5 { f: 30; c: #999; mt: 30; }
`
并且可以转化为完整的形式
`
.f2 { width: 154px; height: 154px; margin-top: 200px; border: 2px solid #F1F1F1; border-radius: 50%; background-image: url(logo-128.png); }
.f4 { font-weight: bold; font-size: 48px; color: #333; margin: 36px auto; }
.f1 { width: 158px; height: 2px; background-image: linear-gradient(270deg, #B1B1B1 0%, rgba(213,213,213,.5) 95.59%); opacity: .2; }
.f3 { font-size: 36px; color: #999; margin-bottom: 150px; }
.f5 { font-size: 30px; color: #999; margin-top: 30px; }
`
HTML 简化语法类似于 Pug，但解析器很简单，只关心简单和基本的语法。它使用 JSON parse和stringify方法在列表和树之间进行转换。
关于简化的Javascript，现在只是有一些想法，构建一个完整语言的解析器不是那么容易，所以现在我使用Livescript，我认为它包含了我的大部分计划，例如缩进和非括号样式，以及隐式参数的lambda。我仍然尝试对三元表达式（？:) 之类的语法进行一些更改。我认为如果没有很大的好处，最好保持与 Javascript 兼容。这将降低学习和迁移成本。

代码很简单，可以随心所欲地使用，也可以根据自己的习惯添加或更改其名称和方法。
