(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{231:function(t,e,n){var content=n(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5d594f7f",content,!1,{sourceMap:!1})},232:function(t,e,n){"use strict";var r=n(231);n.n(r).a},233:function(t,e,n){(e=n(10)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},234:function(t,e,n){"use strict";var r=n(1).default.extend({props:{icon:{type:String}}}),o=(n(232),n(4)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports},264:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2021/9/13","url":"https://www.city.fuji.shizuoka.jp/0913.html","text":"小長井義正市長から市民の皆様へ（9月13日）"},{"date":"2021/9/10","url":"https://www.city.fuji.shizuoka.jp/0910.html","text":"小長井義正市長から市民の皆様へ（9月10日）"},{"date":"2021/9/10","url":"https://www.city.fuji.shizuoka.jp/kenkou/c0107/rn2ola000002xgyo.html","text":"新型コロナウイルスワクチン接種について"},{"date":"2021/9/2","url":"https://www.city.fuji.shizuoka.jp/sangyo/c0407/rn2ola000003bq5v.html","text":"緊急事態措置に伴う休業要請・営業時間の短縮等について（事業者等への要請） "}]}')},273:function(t,e,n){var content=n(352);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("f0fcac38",content,!1,{sourceMap:!1})},282:function(t,e,n){var content=n(370);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("76516528",content,!1,{sourceMap:!1})},351:function(t,e,n){"use strict";var r=n(273);n.n(r).a},352:function(t,e,n){(e=n(10)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item-message{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-message{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-message-warning{flex:0 1 auto;padding-left:8px;color:#d00}.WhatsNew .WhatsNew-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},369:function(t,e,n){"use strict";var r=n(282);n.n(r).a},370:function(t,e,n){(e=n(10)(!1)).push([t.i,".MainPage .Header[data-v-ef2c9db6]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width: 600px){.MainPage .Header[data-v-ef2c9db6]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-ef2c9db6]{font-size:14px;font-size:0.875rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-ef2c9db6]{font-size:12px;font-size:0.75rem;color:#707070}@media screen and (min-width: 601px){.MainPage .Annotation[data-v-ef2c9db6]{margin:0 0 0 auto}}.MainPage .DataBlock[data-v-ef2c9db6]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-ef2c9db6]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-ef2c9db6]{padding:4px 8px}}",""]),t.exports=e},374:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(234),d=n(240),l=r.default.extend({props:{items:{type:Array,required:!0}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(d.a)(t)}}}),c=(n(351),n(4)),m=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("h3",{staticClass:"WhatsNew-heading"},[n("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    "+t._s(t.$t("最新のお知らせ"))+"\n  ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},[n("li",{staticClass:"WhatsNew-list-item WhatsNew-list-item-message"},[n("span",{staticClass:"WhatsNew-list-item-message-warning"},[t._v("\n        "+t._s(t.$t("本ページの数値は、公表済みの数値をベースとしているため、実際の入院患者数等とは異なる場合があります"))+"\n      ")])]),t._v(" "),t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])}))],2)])}),[],!1,null,null,null).exports,h=n(236),f=n(264),w=n(288),x=n(293),v=n(287),_=n(289),N=n(294),W=r.default.extend({components:{PageHeader:o.a,WhatsNew:m,ConfirmedCasesDetailsCard:w.a,ConfirmedCasesNumberCard:x.a,ConfirmedCasesAttributesCard:v.a,ConsultationDeskReportsNumberCard:N.a,TestedNumberCard:_.a},data:function(){var data={Data:h,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("富士市内の最新感染動向")},newsItems:f.newsItems};return data},computed:{updatedAt:function(){return Object(d.c)(this.$data.Data.lastUpdate)}},head:function(){return{title:this.$t("富士市内の最新感染動向")}}}),C=(n(369),Object(c.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{icon:t.headerItem.icon}},[t._v("\n      "+t._s(t.headerItem.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.Data.lastUpdate))])]),t._v(" "),["ja","ja-basic"].includes(t.$i18n.locale)?t._e():n("div",{staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])],1),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("tested-cases-details-card"),t._v(" "),n("confirmed-cases-attributes-card"),t._v(" "),n("confirmed-cases-number-card"),t._v(" "),n("inspection-persons-number-card"),t._v(" "),n("telephone-advisory-reports-number-card"),t._v(" "),n("metro-card"),t._v(" "),n("agency-card"),t._v(" "),n("shinjuku-visitors-card"),t._v(" "),n("chiyoda-visitors-card")],1),t._v(" "),n("v-divider"),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("shinjuku-st-map-card"),t._v(" "),n("tokyo-st-map-card")],1)],1)}),[],!1,null,"ef2c9db6",null));e.default=C.exports}}]);