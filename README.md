[中文](README_zh.md)

Nowdays the web develop become much more complex, we need to know node, npm, babel, webpack, React, Vue, and many router and state library to finish work.
but I think we can still keep simple, like jQuery. so I write some methods to simplify daily work. It's no other thing but some short name for native methods.
I think it's enough for most develop work.

### About the name

I think one charactor name is clear enough, 'iOS' is also just one charactor name, but I think it's more cute than a long name like 'Android', so I arrange all
charactor, and sort them to three groups.

i t e n g u o x

a f h k m p q s v

b c d j l r w y z

the first group is good, can be used for most environment. usually, 'i t e n' for local name, and 'g u o x' for global name.
the second group is so so, can be used some times.
the third group is not so good in appearance, so I don't use them often.

more concretely, 'g' means 'global', and it usually be the name of global object. and 'u' can be think as 'ultra' or 'ultimate', so I use as the global name.
't' often use like 'to' or 'transform', and e use like 'edit', 'n' use as 'find' or 'number', 'i' use as 'it', 'itself'.


### simplified syntax
the qcs, qht, qjs method is about some thoughts to simplify the css, html, and js code, inspired from the [gulp-qcss](https://github.com/zhangxinxu/gulp-qcss)

the simpified CSS code is like this

```
 .f2 { w: 154; h: 154; mt: 200; bd: 2 s #F1F1F1; bo: 50%; bgi: url(logo-128.png); }
 .f4 { fw: bd; f: 48; c: #333; m: 36 a; }
 .f1 { w: 158; h: 2; bgi: lg(270deg, #B1B1B1 0%, rgba(213,213,213,.5) 95.59%); o: .2; }
 .f3 { f: 36; c: #999; mb: 150; }
 .f5 { f: 30; c: #999; mt: 30; }
```

and can be transformed to complete form

```
.f2 { width: 154px; height: 154px; margin-top: 200px; border: 2px solid #F1F1F1; border-radius: 50%; background-image: url(logo-128.png); }
.f4 { font-weight: bold; font-size: 48px; color: #333; margin: 36px auto; }
.f1 { width: 158px; height: 2px; background-image: linear-gradient(270deg, #B1B1B1 0%, rgba(213,213,213,.5) 95.59%); opacity: .2; }
.f3 { font-size: 36px; color: #999; margin-bottom: 150px; }
.f5 { font-size: 30px; color: #999; margin-top: 30px; }
```

the HTML simplified syntax is like Pug, but the parser is simple and just care the simple and normal case. it use the JSON parse and stringify method to convert between list and tree.

about simplified Javascript, now just have some thoughts, for build a parser of a complete language is not so easy, so now I use Livescript, I think it contain most part of my plan, like the indent and non parentheses style, and implicit parameter of lambda. I still try to make some change to the syntax like the compare expression(? :). I think if without great benefit, it's better to keep compatible to Javascript. It will reduce the learn and migration costs.

the code is simple, so you can use it as you like, add or change its name and method according to your habit.
