(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{179:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"react生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" React生命周期")]),t._v(" "),a("h4",{attrs:{id:"_1、componentdidmount-组件挂载完成之后触发的生命周期-相当于vue的mounted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、componentdidmount-组件挂载完成之后触发的生命周期-相当于vue的mounted","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、componentDidMount() // 组件挂载完成之后触发的生命周期 相当于vue的mounted")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("componentDidMount(){\n    setInterval(()=>{\n        // 修改state的唯一方法\n        // @param 要修改的数据\n        // @param 修改完成之后的回调函数\n        this.setState({\n            index:this.state.index++\n        },()=>{\n            consloe.log(this.state.index)\n        })\n    },1000)\n}\n\n")])])]),a("h4",{attrs:{id:"_2、componentwillmount-组件挂载之前-相当于vue的beforemount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、componentwillmount-组件挂载之前-相当于vue的beforemount","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、componentWillMount()  // 组件挂载之前 相当于vue的beforeMount")]),t._v(" "),a("h4",{attrs:{id:"_3、componentwillreceiveprops-nextprops-组件将要接收新的props-vue没有"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、componentwillreceiveprops-nextprops-组件将要接收新的props-vue没有","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、componentWillReceiveProps(nextProps)  // 组件将要接收新的props vue没有")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 和props相关的唯一一个生命周期\n// 执行完成之后，this.props指向新的props\ncomponentWillReceiveProps(nextProps){\n    // 旧的props   this.props\n    // 新的props   nextProps\n    \n}\n\n\n")])])]),a("h4",{attrs:{id:"_4、shouldcomponentupdate-nextprops-nextstate-通过返回值判断组件是否需要更新-用于react优化，vue没有-true更新，false不更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、shouldcomponentupdate-nextprops-nextstate-通过返回值判断组件是否需要更新-用于react优化，vue没有-true更新，false不更新","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、shouldComponentUpdate(nextProps,nextState)  // 通过返回值判断组件是否需要更新,用于react优化，vue没有 true更新，false不更新")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("shouldComponentUpdate(nextProps,nextState){\n    // 旧的props   this.props\n    // 新的props   nextProps\n    // 旧的State   this.state\n    // 新的state   nextState\n    // 返回值是Boolean  默认true\n}\n\n\n")])])]),a("h4",{attrs:{id:"_5、componentwillupdate-组件将要更新-相当于vue的beforeupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、componentwillupdate-组件将要更新-相当于vue的beforeupdate","aria-hidden":"true"}},[t._v("#")]),t._v(" 5、componentWillUpdate // 组件将要更新 相当于vue的beforeUpdate")]),t._v(" "),a("h4",{attrs:{id:"_6、componentdidupdate-组件更新完成-相当于vue的updated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、componentdidupdate-组件更新完成-相当于vue的updated","aria-hidden":"true"}},[t._v("#")]),t._v(" 6、componentDidUpdate // 组件更新完成 相当于vue的updated")]),t._v(" "),a("h4",{attrs:{id:"_7、componentwillunmount-组件将要卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、componentwillunmount-组件将要卸载","aria-hidden":"true"}},[t._v("#")]),t._v(" 7、componentWillUnmount() // 组件将要卸载")]),t._v(" "),a("h4",{attrs:{id:"_8、unmountcomponentatnode-卸载组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、unmountcomponentatnode-卸载组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 8、unmountComponentAtNode() // 卸载组件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ReactDom.unmountComponentAtNode(document.getElementById('root'))\n")])])]),a("h4",{attrs:{id:"_9、分为三个阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、分为三个阶段","aria-hidden":"true"}},[t._v("#")]),t._v(" 9、分为三个阶段")]),t._v(" "),a("ol",[a("li",[t._v("实例化阶段")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("首次使用一个组件类时会有getDefaultProps\n对于组件类的所有后续应用没有getDefaultProps\n1、getDefaultProps\n2、getInitialState\n3、componentWillMount\n4、render\n5、componentDidMount\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("更新阶段(存在期)")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1. componentWillReceiveProps \n2. shouldComponentUpdate \n3. componentWillUpdate \n4. render \n5. componentDidUpdate\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("销毁&清理期")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("componentWillUnmount\n")])])])])}],!1,null,null,null);s.options.__file="React生命周期.md";e.default=s.exports}}]);