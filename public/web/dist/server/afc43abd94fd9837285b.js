exports.ids=[6],exports.modules={122:function(t,e,r){var content=r(130);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var c=r(2).default;t.exports.__inject__=function(t){c("38c4b0e9",content,!0,t)}},129:function(t,e,r){"use strict";r.r(e);var c=r(122),n=r.n(c);for(var o in c)"default"!==o&&function(t){r.d(e,t,(function(){return c[t]}))}(o);e.default=n.a},130:function(t,e,r){(t.exports=r(1)(!1)).push([t.i,".article-list .article-item[data-v-49179ed5] {\n  margin-bottom: 20px;\n}\n",""])},136:function(t,e,r){"use strict";r.r(e);var c=r(47),n={layout:"Public",async asyncData(){try{var[t,e]=await Promise.all([c.a.fetchList(),c.a.fetchCarouselList()])}catch(t){return{articleList:[],carouselList:[]}}return{articleList:t,carouselList:e}},data:()=>({}),head:()=>({title:"home"}),methods:{jumpDetail(t){this.$router.push({name:"articles-id",params:t})}}},o=r(3);var component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("el-carousel",{attrs:{height:"300px"}},this._l(this.carouselList,(function(t){return e("el-carousel-item",{key:t.id},[e("img",{attrs:{src:t.cover.path,width:"100%"}})])})),1),this._ssrNode(" "),e("article-list",{attrs:{dataList:this.articleList}})],2)}),[],!1,(function(t){var e=r(129);e.__inject__&&e.__inject__(t)}),"49179ed5","ae3cc254");e.default=component.exports}};
//# sourceMappingURL=afc43abd94fd9837285b.js.map