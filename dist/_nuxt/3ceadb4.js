(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{369:function(t,e,o){var content=o(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("3f5d7026",content,!0,{sourceMap:!1})},388:function(t,e,o){"use strict";o(369)},389:function(t,e,o){var n=o(53)((function(i){return i[1]}));n.push([t.i,".title[data-v-d94e82ba]{font-size:30px;font-weight:500}.title1[data-v-d94e82ba]{font-size:24px;font-weight:400}.title2[data-v-d94e82ba]{font-size:20px;font-weight:500}.title3[data-v-d94e82ba]{font-size:16px;font-weight:400}.fa[data-v-d94e82ba],.fas[data-v-d94e82ba]{color:#8585ad;font-size:40px;transition:all .5s}",""]),n.locals={},t.exports=n},403:function(t,e,o){"use strict";o.r(e);o(16);var n={name:"Skills",props:{nightMode:{type:Boolean}},data:function(){return{skills:null}},computed:{info:function(){return this.$store.state.profile.data}},mounted:function(){this.skills=this.info.skills}},l=(o(388),o(66)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[e("div",{staticClass:"container py-4"},[e("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[e("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Skills.")])]),t._v(" "),e("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row"},t._l(t.skills,(function(o,n){return e("div",{key:o.title,staticClass:"col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4",style:{"transition-delay":n/4.2+"s"},attrs:{"data-aos":"fade-up","data-aos-offset":"10","data-aos-delay":"30","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[e("div",{staticClass:"bg-div"},[e("font-awesome-icon",{attrs:{size:"3x",icon:[o.icon.split(" ")[0],o.icon.split(" ")[1]]}})],1),t._v(" "),e("div",{staticClass:"title2 pt-2"},[t._v(t._s(o.title))]),t._v(" "),e("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),t._v(" "),e("span",{staticClass:"title3"},[t._v(t._s(o.info.join(", ")))])])})),0)])])}),[],!1,null,"d94e82ba",null);e.default=component.exports}}]);