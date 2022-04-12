(window.webpackJsonp=window.webpackJsonp||[]).push([[26,6,12],{325:function(t,n,e){"use strict";e.r(n);var r=e(326),o=e.n(r);for(var l in r)["default"].indexOf(l)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(l);n.default=o.a},326:function(t,n){},328:function(t,n,e){"use strict";e.r(n);var r={props:["buttonContent","link"]},o=e(70),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bg-stone-50 text-lime-400 \ntext-xl m-4\nfont-extrabold w-28 h-12 rounded-2xl \ngrid place-items-center \nhover:text-gray-700 hover:bg-indigo-100"},[e("NuxtLink",{attrs:{to:t.link}},[t._v(" "+t._s(t.buttonContent))])],1)}),[],!1,null,null,null);n.default=component.exports},329:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bg-gray-700  border-lime-400 border-b-4 \nmax-w-full h-64 md:h-44 lg:h-28 flex ml-2"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"h-16 rounded-2xl shrink-0 m-4 \n        hover:bg-lime-400 hover:opacity-10",attrs:{src:"Logo.png",alt:"Logo"}})]),t._v(" "),e("div",{staticClass:"grid grid-cols-2 md:grid-cols-3 lg:flex pr-2 pl-2"},[e("ButtonMain",{attrs:{buttonContent:"Blog",link:"blog"}}),t._v(" "),e("ButtonMain",{attrs:{buttonContent:"Projects",link:"projects"}}),t._v(" "),e("ButtonMain",{attrs:{buttonContent:"About",link:"about"}}),t._v(" "),e("ButtonMain",{attrs:{buttonContent:"Contact",link:"contact"}}),t._v(" "),t.$fire.auth.currentUser?t._e():e("ButtonMain",{attrs:{buttonContent:"SignUp",link:"signup"}}),t._v(" "),t.$fire.auth.currentUser?e("ButtonMain",{attrs:{buttonContent:"SignOut",link:"signout"}}):e("ButtonMain",{attrs:{buttonContent:"SignIn",link:"signin"}})],1)],1)},o=[]},330:function(t,n,e){"use strict";e.r(n);var r=e(329),o=e(325);for(var l in o)["default"].indexOf(l)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(l);var c=e(70),component=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);n.default=component.exports,installComponents(component,{ButtonMain:e(328).default})},498:function(t,n,e){"use strict";e.r(n);var r={data:function(){return{snackbar:!1,snackbarText:"No error message",auth:{email:"",password:""}}},methods:{signup:function(){if(this.auth.password===this.confirmPassword){var t=getAuth();createUserWithEmailAndPassword(t,this.auth.email,this.auth.password).then((function(t){t.user;$nuxt.$router.push("/")})).catch((function(t){t.code,t.message}))}else{this.snackbarText="Please try again.",this.snackbar=!0}}}},o=e(70),l=e(379),c=e.n(l),d=e(422),v=e(396),f=e(334),m=e(482),h=e(483),x=e(484),k=e(485),w=e(489),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("NavBar"),t._v(" "),e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"8",md:"4",align:"center"}},[e("v-card",{staticClass:"elevation-4 text-left mt-24",attrs:{width:"500",shaped:"",color:"yellow"}},[e("v-card-title",[t._v("Sign Up")]),t._v(" "),e("v-card-subtitle",[t._v("Sign Up to view exclusive content")]),t._v(" "),e("v-card-text",[e("v-form",[e("v-text-field",{attrs:{label:"Login",name:"login","prepend-icon":"mdi-account",type:"text"},model:{value:t.auth.email,callback:function(n){t.$set(t.auth,"email",n)},expression:"auth.email"}}),t._v(" "),e("v-text-field",{attrs:{label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"},model:{value:t.auth.password,callback:function(n){t.$set(t.auth,"password",n)},expression:"auth.password"}}),t._v(" "),e("v-text-field",{attrs:{label:"Confirm password",name:"Confirmpassword","prepend-icon":"mdi-lock",type:"password"},model:{value:t.confirmPassword,callback:function(n){t.confirmPassword=n},expression:"confirmPassword"}})],1)],1),t._v(" "),e("v-card-actions",{staticClass:"text-center"},[e("v-btn",{staticClass:"login-button",attrs:{depressed:"",large:""},on:{click:t.signup}},[t._v("Sign Up")])],1)],1),t._v(" "),e("v-snackbar",{attrs:{timeout:4e3,absolute:"",bottom:"",center:""},model:{value:t.snackbar,callback:function(n){t.snackbar=n},expression:"snackbar"}},[t._v("\r\n        "+t._s(t.snackbarText)+"\r\n      ")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{NavBar:e(330).default}),c()(component,{VBtn:d.a,VCard:v.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VCol:m.a,VForm:h.a,VRow:x.a,VSnackbar:k.a,VTextField:w.a})}}]);