(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{430:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y});var o=n(0),r=n.n(o),a=n(2),i=(n(75),n(63));function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={username:[{required:!0,message:"请填写用户名"}],password:[{required:!0,message:"请填写密码"}]},y=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return o=this,r=(e=s(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==l(r)&&"function"!=typeof r?c(o):r,p(c(n),"state",{loading:!1}),p(c(n),"handleOnSubmit",function(e){if(!e)return!1;n.setState({loading:!0}),setTimeout(function(){n.props.history.push("/demo")},5e3)}),p(c(n),"onHandleChange",function(){var e;(e=console).log.apply(e,arguments)}),n}var n,y,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o["Component"]),n=t,(y=[{key:"render",value:function(){return r.a.createElement("div",{className:"tv-user-layout"},r.a.createElement("div",{className:"tv-user-layout-top"},r.a.createElement("div",{className:"tv-user-layout-header"},r.a.createElement("a",{href:"#"},r.a.createElement(i.a,null))),r.a.createElement("div",{className:"tv-user-layout-desc"},"酒店智慧解决之道")),r.a.createElement("div",{className:"tv-components-login-index-login"},r.a.createElement(a.Form,{onSubmit:this.handleOnSubmit,rules:f},r.a.createElement(a.Form.Item,{name:"username"},r.a.createElement(a.Form.Field,{value:"admin",name:"username",tagName:"input",size:"large",placeholder:"用户名",prefix:"user"})),r.a.createElement(a.Form.Item,{name:"password"},r.a.createElement(a.Form.Field,{name:"password",tagName:"input",size:"large",placeholder:"密码",showToggle:!0,prefix:"unlock",type:"password"})),r.a.createElement(a.Form.Item,null,r.a.createElement(a.Checkbox,{checked:!0,onChange:this.onHandleChange,value:"1",name:"key"},"记住密码"),r.a.createElement(a.Button,{type:"link",style:{float:"right"}},"忘记密码")),r.a.createElement(a.Form.Item,null,r.a.createElement(a.Button,{loading:this.state.loading,htmlType:"submit",className:"tv-submit",size:"large",type:"primary"},"登录")))))}}])&&u(n.prototype,y),d&&u(n,d),t}();y.displayName="DemoLogin"},75:function(e,t,n){var o=n(76);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(o,r);o.locals&&(e.exports=o.locals)},76:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,"p,\nul,\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.tv-user-layout {\n  height: 100vh;\n  background-color: #EDEFF3;\n}\n.tv-user-layout-top {\n  text-align: center;\n}\n.tv-user-layout-header {\n  height: 84px;\n}\n.tv-user-layout-desc {\n  margin-top: 12px;\n  margin-bottom: 40px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n.tv-user-layout a {\n  position: relative;\n  top: 2px;\n  text-decoration: none;\n}\n.tv-user-layout a .bwlogo {\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 120px;\n}\n.tv-components-login-index-login {\n  margin: 0 auto;\n  width: 388px;\n}\n",""])}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvZGVtby9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvZGVtby9jc3MvbG9naW4ubGVzcz82MjA5Iiwid2VicGFjazovLy8uL2NsaWVudC9wYWdlcy9kZW1vL2Nzcy9sb2dpbi5sZXNzIl0sIm5hbWVzIjpbInJ1bGVzIiwidXNlcm5hbWUiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJwYXNzd29yZCIsIkRlbW9Mb2dpbiIsImxvYWRpbmciLCJ2YWxpZCIsIl90aGlzIiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCIsIl9jb25zb2xlIiwiY29uc29sZSIsImxvZyIsImFwcGx5IiwiYXJndW1lbnRzIiwiQ29tcG9uZW50IiwicmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0IiwiYSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJocmVmIiwiX2xvZ29fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyIsInR2aXJ1c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fIiwib25TdWJtaXQiLCJ0aGlzIiwiaGFuZGxlT25TdWJtaXQiLCJJdGVtIiwibmFtZSIsIkZpZWxkIiwidmFsdWUiLCJ0YWdOYW1lIiwic2l6ZSIsInBsYWNlaG9sZGVyIiwicHJlZml4Iiwic2hvd1RvZ2dsZSIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJvbkhhbmRsZUNoYW5nZSIsInN0eWxlIiwiZmxvYXQiLCJzdGF0ZSIsImh0bWxUeXBlIiwiY29udGVudCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGUiLCJpIiwib3B0aW9ucyIsImhtciIsInRyYW5zZm9ybSIsImluc2VydEludG8iLCJ1bmRlZmluZWQiLCJsb2NhbHMiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOGdDQVlBLElBQU1BLEVBQVEsQ0FDVkMsU0FBVSxDQUNOLENBQ0lDLFVBQVUsRUFDVkMsUUFBUyxXQUdqQkMsU0FBVSxDQUNOLENBQ0lGLFVBQVUsRUFDVkMsUUFBUyxXQUtBRSwrVUFDVCxDQUFDQyxTQUFTLDRCQUNELFNBQUNDLEdBQ2QsSUFBSUEsRUFDQSxPQUFPLEVBRVhDLEVBQUtDLFNBQVMsQ0FBQ0gsU0FBUyxJQUV4QkksV0FBVyxXQUNQRixFQUFLRyxNQUFNQyxRQUFRQyxLQUFLLFVBQ3pCLCtCQUVVLFdBQVksSUFBQUMsR0FDekJBLEVBQUFDLFNBQVFDLElBQVJDLE1BQUFILEVBQUFJLHFRQWIrQkMsdURBZ0IvQixPQUNJQyxFQUFBQyxFQUFBQyxjQUFBLE9BQUtDLFVBQVUsa0JBQ1hILEVBQUFDLEVBQUFDLGNBQUEsT0FBS0MsVUFBVSxzQkFDWEgsRUFBQUMsRUFBQUMsY0FBQSxPQUFLQyxVQUFVLHlCQUNYSCxFQUFBQyxFQUFBQyxjQUFBLEtBQUdFLEtBQUssS0FBSUosRUFBQUMsRUFBQUMsY0FBQ0csRUFBQSxFQUFELFFBRWhCTCxFQUFBQyxFQUFBQyxjQUFBLE9BQUtDLFVBQVUsdUJBQWYsYUFJSkgsRUFBQUMsRUFBQUMsY0FBQSxPQUFLQyxVQUFVLG1DQUNYSCxFQUFBQyxFQUFBQyxjQUFDSSxFQUFBLEtBQUQsQ0FBTUMsU0FBVUMsS0FBS0MsZUFBZ0I3QixNQUFPQSxHQUN4Q29CLEVBQUFDLEVBQUFDLGNBQUNJLEVBQUEsS0FBS0ksS0FBTixDQUFXQyxLQUFLLFlBQ1pYLEVBQUFDLEVBQUFDLGNBQUNJLEVBQUEsS0FBS00sTUFBTixDQUFZQyxNQUFNLFFBQVFGLEtBQUssV0FBV0csUUFBUSxRQUFRQyxLQUFLLFFBQVFDLFlBQVksTUFBTUMsT0FBTyxVQUVwR2pCLEVBQUFDLEVBQUFDLGNBQUNJLEVBQUEsS0FBS0ksS0FBTixDQUFXQyxLQUFLLFlBQ1pYLEVBQUFDLEVBQUFDLGNBQUNJLEVBQUEsS0FBS00sTUFBTixDQUFZRCxLQUFLLFdBQVdHLFFBQVEsUUFBUUMsS0FBSyxRQUFRQyxZQUFZLEtBQUtFLFlBQVUsRUFBQ0QsT0FBTyxTQUFTRSxLQUFLLGNBRTlHbkIsRUFBQUMsRUFBQUMsY0FBQ0ksRUFBQSxLQUFLSSxLQUFOLEtBQ0lWLEVBQUFDLEVBQUFDLGNBQUNJLEVBQUEsU0FBRCxDQUFVYyxTQUFTLEVBQU1DLFNBQVViLEtBQUtjLGVBQWdCVCxNQUFNLElBQUlGLEtBQUssT0FBdkUsUUFHQVgsRUFBQUMsRUFBQUMsY0FBQ0ksRUFBQSxPQUFELENBQVFhLEtBQUssT0FBT0ksTUFBTyxDQUFDQyxNQUFPLFVBQW5DLFNBRUp4QixFQUFBQyxFQUFBQyxjQUFDSSxFQUFBLEtBQUtJLEtBQU4sS0FDSVYsRUFBQUMsRUFBQUMsY0FBQ0ksRUFBQSxPQUFELENBQ0lwQixRQUFTc0IsS0FBS2lCLE1BQU12QyxRQUNwQndDLFNBQVMsU0FDVHZCLFVBQVUsWUFDVlksS0FBSyxRQUNMSSxLQUFLLFdBTFQsK0NBekNQbEMsOENDMUJyQixJQUFBMEMsRUFBY0MsRUFBUSxJQUV0QixpQkFBQUQsTUFBQSxFQUE0Q0UsRUFBQUMsRUFBU0gsRUFBQSxNQU9yRCxJQUFBSSxFQUFBLENBQWVDLEtBQUEsRUFFZkMsZUFQQUEsRUFRQUMsZ0JBQUFDLEdBRWFQLEVBQVEsRUFBUkEsQ0FBaUVELEVBQUFJLEdBRTlFSixFQUFBUyxTQUFBUCxFQUFBUSxRQUFBVixFQUFBUyw2QkNqQkFQLEVBQUFRLFFBQTJCVCxFQUFRLEVBQVJBLEVBQTZELElBS3hGbkMsS0FBQSxDQUFjb0MsRUFBQUMsRUFBUyw0bEJBQTBsQiIsImZpbGUiOiI0OS42N2Q5NjE3Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgXG4gICAgRGlhbG9nLFxuICAgIEljb24sICBCdXR0b24sXG4gICAgSW5wdXQsIENoZWNrYm94LCBGb3JtXG59IGZyb20gJ3R2aXJ1cyc7XG5pbXBvcnQgJy4vY3NzL2xvZ2luLmxlc3MnO1xuXG5pbXBvcnQgQndMb2dvIGZyb20gJy4vbG9nbyc7XG5cbmNvbnN0IHJ1bGVzID0ge1xuICAgIHVzZXJuYW1lOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ+ivt+Whq+WGmeeUqOaIt+WQjSdcbiAgICAgICAgfVxuICAgIF0sXG4gICAgcGFzc3dvcmQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiAn6K+35aGr5YaZ5a+G56CBJ1xuICAgICAgICB9XG4gICAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZW1vTG9naW4gZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgc3RhdGUgPSB7bG9hZGluZzogZmFsc2V9XG4gICAgaGFuZGxlT25TdWJtaXQgPSAodmFsaWQpID0+IHtcbiAgICAgICAgaWYoIXZhbGlkKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSlcbiAgICAgICAgLy90b2RvOiDmqKHmi5/lvILmraXnmbvlvZVcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2RlbW8nKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgfVxuICAgIG9uSGFuZGxlQ2hhbmdlID0gKC4uLmFyZykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyguLi5hcmcpO1xuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHYtdXNlci1sYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR2LXVzZXItbGF5b3V0LXRvcFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR2LXVzZXItbGF5b3V0LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48QndMb2dvIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0di11c2VyLWxheW91dC1kZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDphZLlupfmmbrmhafop6PlhrPkuYvpgZNcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0di1jb21wb25lbnRzLWxvZ2luLWluZGV4LWxvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZU9uU3VibWl0fSBydWxlcz17cnVsZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwidXNlcm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB2YWx1ZT1cImFkbWluXCIgbmFtZT1cInVzZXJuYW1lXCIgdGFnTmFtZT1cImlucHV0XCIgc2l6ZT1cImxhcmdlXCIgcGxhY2Vob2xkZXI9XCLnlKjmiLflkI1cIiBwcmVmaXg9XCJ1c2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBuYW1lPVwicGFzc3dvcmRcIiB0YWdOYW1lPVwiaW5wdXRcIiBzaXplPVwibGFyZ2VcIiBwbGFjZWhvbGRlcj1cIuWvhueggVwiIHNob3dUb2dnbGUgcHJlZml4PVwidW5sb2NrXCIgdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2hlY2tlZD17dHJ1ZX0gb25DaGFuZ2U9e3RoaXMub25IYW5kbGVDaGFuZ2V9IHZhbHVlPVwiMVwiIG5hbWU9XCJrZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6K6w5L2P5a+G56CBXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCIgc3R5bGU9e3tmbG9hdDogJ3JpZ2h0J319PuW/mOiusOWvhueggTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR2LXN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOeZu+W9lVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpbi5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpbi5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9naW4ubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwicCxcXG51bCxcXG5saSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLnR2LXVzZXItbGF5b3V0IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFRkYzO1xcbn1cXG4udHYtdXNlci1sYXlvdXQtdG9wIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnR2LXVzZXItbGF5b3V0LWhlYWRlciB7XFxuICBoZWlnaHQ6IDg0cHg7XFxufVxcbi50di11c2VyLWxheW91dC1kZXNjIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi50di11c2VyLWxheW91dCBhIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4udHYtdXNlci1sYXlvdXQgYSAuYndsb2dvIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgZm9udC1zaXplOiAxMjBweDtcXG59XFxuLnR2LWNvbXBvbmVudHMtbG9naW4taW5kZXgtbG9naW4ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMzg4cHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=