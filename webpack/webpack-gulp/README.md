假如使用webpack来处理js，gulp来处理css

webpack和gulp如何配合起来使用

```
gulp dev
```

主要使用的是gulp.watch
```
gulp.watch(glob[, opts], tasks)
```

第一个参数作为监听的文件，第二个参数为文件变化后的task，例如
```
gulp.watch(['./css/**/*', './js/**/*'], ['webpack', 'compile.css']);
```