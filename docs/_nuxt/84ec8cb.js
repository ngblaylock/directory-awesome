(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{211:function(t,n,e){"use strict";var o=e(2),r=e(28).find,c=e(104),l=e(19),d=!0,f=l("find");"find"in[]&&Array(1).find((function(){d=!1})),o({target:"Array",proto:!0,forced:d||!f},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c("find")},236:function(t,n,e){"use strict";e.r(n);e(211),e(14);var o=e(202),r=e.n(o),c={name:"Directory",data:function(){return{people:[],loading:!0}},created:function(){var t=this;r.a.get("https://jsonbox.io/directoryawesome_asdfjkl1234567890?sort=name").then((function(n){t.people=n.data})).catch((function(t){console.log(t)})).finally((function(){t.loading=!1}))},computed:{selectedPerson:function(){var t=this;return this.$route.params.slug?this.people.find((function(n){return n.nameSlug==t.$route.params.slug})):this.people}}},l=e(15),component=Object(l.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[this.loading?n("div",[n("h1",{staticStyle:{"text-align":"center",color:"#dbdbdb"}},[this._v("Loading...")])]):n("nuxt-child",{attrs:{selectedPerson:this.selectedPerson}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);