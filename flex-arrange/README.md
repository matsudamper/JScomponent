# flex-arrange
サイズが固定されている複数要素を横に均等に縦列を揃えて並べたい時に使用する。
左寄せになる。
```html
<flex-arrange>
    <div></div>
    <div></div>
    <div></div>
</flex-arrange>
```
中央寄せがいいなら[flex-row-just-wrap](../flex-row-just-wrap)を使えば良いがパフォーマンスは悪い。  
一列の場合クラスに「single」が追加される。  

## 動作
1. 画面サイズを要素の幅で割った数要素を追加する。