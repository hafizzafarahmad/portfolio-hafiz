(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{354:function(t,e,n){var content=n(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("49e8daa2",content,!0,{sourceMap:!1})},366:function(t,e,n){"use strict";n(354)},367:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,'.title1[data-v-0a09c04f]{font-size:24px;font-weight:500}.title2[data-v-0a09c04f]{font-size:20px;font-weight:400}.title3[data-v-0a09c04f]{font-size:16px;font-weight:400}.badge[data-v-0a09c04f]{background-color:#bbd4dd;font-weight:500;transition:all .5s}.date[data-v-0a09c04f]{font-size:14px;font-weight:300}ul.timeline[data-v-0a09c04f]{list-style-type:none;position:relative}ul.timeline[data-v-0a09c04f]:before{background:#d4d9df;content:" ";display:inline-block;height:93%;left:29px;margin-top:20px;position:absolute;width:2px;z-index:400}ul.timeline>li[data-v-0a09c04f]{margin:20px 0;padding-left:20px}ul.timeline>li[data-v-0a09c04f]:before{background:#8585ad;border:2px solid #8585ad;border-radius:50%;content:" ";display:inline-block;height:25px;left:20px;position:absolute;width:25px;z-index:400}.bg-dark2[data-v-0a09c04f]{background-color:#3c4148!important}',""]),o.locals={},t.exports=o},379:function(t,e,n){"use strict";n.r(e);n(27),n(4),n(67);var o={name:"Timeline",props:{data:{type:Object},nightMode:{type:Boolean}}},l=(n(366),n(66)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"mx-3 mt-3 mb-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-bg-12 col-md-12 col-sm-12"},[e("p",{staticClass:"title1",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"1000"}},[t._v("\n          "+t._s(t.data.title)+"\n        ")]),t._v(" "),t._l(t.data.data,(function(n,o){return e("ul",{key:n.name,staticClass:"timeline m-0 pt-1",style:{"transition-delay":o/4.2+"s"},attrs:{"data-aos":"fade-up","data-offset":"10","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"500"}},[e("li",{staticClass:"m-0 pb-2"},[e("div",[e("div",{staticClass:"px-2 title2"},[t._v(t._s(n.name)+", "+t._s(n.place))]),t._v(" "),e("div",{staticClass:"px-2 title3"},[t._v("\n                "+t._s(n.degree||n.position)+"\n                "+t._s(n.gpa?"("+n.gpa+")":"")+"\n              ")]),t._v(" "),e("div",{staticClass:"px-2 date"},[t._v(t._s(n.date))]),t._v(" "),e("div",{staticClass:"px-2 pb-2 pt-2",staticStyle:{"text-align":"justify"}},[t._v("\n                "+t._s(n.description)+"\n              ")]),t._v(" "),t._l(n.skills,(function(s){return e("span",{key:s,staticClass:"mx-2 badge p-2 mb-2",class:{"bg-dark2":t.nightMode}},[t._v(t._s(s))])})),t._v(" "),e("p",{staticClass:"m-2"})],2)])])}))],2)])])])}),[],!1,null,"0a09c04f",null);e.default=component.exports}}]);