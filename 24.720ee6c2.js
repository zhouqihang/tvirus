(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{273:function(e,t,o){var i=o(274);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(6)(i,r);i.locals&&(e.exports=i.locals)},274:function(e,t,o){(e.exports=o(5)(!1)).push([e.i,"",""])},437:function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return u});var i=o(0),r=o.n(i),a=o(62),n=o(2);o(273);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e}).apply(this,arguments)}function c(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function h(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=h(this,p(t).call(this,e))).state={child:[],line:{title:{text:"多条折线图模板",left:10,textStyle:{fontWeight:"normal",fontSize:16}},grid:{top:100,left:50,right:0,bottom:25},tooltip:{trigger:"axis"},legend:{left:10,top:40,itemWidth:10,itemHeight:10},xAxis:{type:"category",boundaryGap:!1,axisLine:{lineStyle:{color:"#e0e0e0"}},axisLabel:{color:"#333"},data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#E9E9E9"}}},series:[{name:"点评数",type:"line",showSymbol:!1,smooth:!0,barWidth:20,itemStyle:{color:"#45a2fc"},data:[120,110,80,234,5,4]},{name:"好评率",type:"line",showSymbol:!1,smooth:!0,barWidth:20,itemStyle:{color:"#57ca77"},data:[110,10,120,124,95,204]}]},bar:{title:{text:"普通柱状图",left:10,textStyle:{fontWeight:"normal",fontSize:16}},grid:{top:100,left:50,right:0,bottom:25},tooltip:{trigger:"axis"},legend:{x:80,y:"top"},xAxis:{type:"category",axisLine:{lineStyle:{color:"#e0e0e0"}},axisTick:{show:!1},axisLabel:{color:"#333"},data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#E9E9E9"}}},series:[{type:"bar",showSymbol:!1,smooth:!0,barWidth:20,itemStyle:{color:"#45a2fc"},data:[120,110,80,234,5,4]}]},bar2:{title:{text:"普通条形图",left:10,textStyle:{fontWeight:"normal",fontSize:16}},grid:{top:100,left:50,right:0,bottom:25},tooltip:{trigger:"axis"},legend:{x:80,y:"top"},xAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#E9E9E9"}}},yAxis:{type:"category",axisTick:{show:!1},axisLine:{lineStyle:{color:"#e0e0e0"}},axisLabel:{color:"#333"},data:["周一","周二","周三","周四","周五","周六","周日"]},series:[{type:"bar",showSymbol:!1,smooth:!0,barWidth:20,itemStyle:{color:"#45a2fc"},data:[120,110,80,234,5,4]}]},pie:{tooltip:{trigger:"item",formatter:"{b}: {c}<br />占比：{d}%"},legend:{orient:"horizontal",x:80,y:"top"},series:[{type:"pie",showSymbol:!1,smooth:!0,barWidth:20,data:[{name:"展会占比",value:20,itemStyle:{color:"#45a2fc"}},{name:"情侣出行占比",value:50,itemStyle:{color:"#57ca77"}},{name:"旅游占比",value:80,itemStyle:{color:"#fed465"}},{name:"家人出行占比",value:100,itemStyle:{color:"#9766e1"}},{name:"商务出行占比",value:130,itemStyle:{color:"#ff856a"}}]}]}},o}var o,l,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,i["Component"]),o=t,(l=[{key:"componentWillMount",value:function(){this.childs()}},{key:"childs",value:function(){var e=[];e.push({title:"线",children:r.a.createElement("div",{className:"code-demo"},r.a.createElement(n.Chart,{option:this.state.line}))}),e.push({title:"柱",children:r.a.createElement("div",{className:"code-demo"},r.a.createElement(n.Chart,{option:this.state.bar}))}),e.push({title:"饼",children:r.a.createElement("div",{className:"code-demo"},r.a.createElement(n.Chart,{type:"pie",option:this.state.pie}))}),e.push({title:"圆环",children:r.a.createElement("div",{className:"code-demo"},r.a.createElement(n.Chart.ProgressCircle,{value:60,startColor:"#FF9645",endColor:"#FF9645",width:300,height:300}))}),this.setState({childs:e})}},{key:"render",value:function(){var e=this.state.childs;return r.a.createElement(a.a,s({},this.props,{keyword:"chart",className:"main-chart-box",title:"Chart",desc:"图表让数据表达更符合用户心理，帮助『设计者』孵化出更具业务特性的可视化解决方案以满足个性化设计需求。注：需要手工引入Echart",childs:e}))}}])&&c(o.prototype,l),u&&c(o,u),t}();u.displayName="ChartDemo"}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvY29tcG9uZW50L2NoYXJ0L2luZGV4Lmxlc3M/YzZjYiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvY29tcG9uZW50L2NoYXJ0L2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL2NvbXBvbmVudC9jaGFydC9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb250ZW50IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZSIsImkiLCJvcHRpb25zIiwiaG1yIiwidHJhbnNmb3JtIiwiaW5zZXJ0SW50byIsInVuZGVmaW5lZCIsImxvY2FscyIsImV4cG9ydHMiLCJwdXNoIiwiQ2hhcnREZW1vIiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9nZXRQcm90b3R5cGVPZiIsImNhbGwiLCJzdGF0ZSIsImNoaWxkIiwibGluZSIsInRpdGxlIiwidGV4dCIsImxlZnQiLCJ0ZXh0U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJncmlkIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJ0b29sdGlwIiwidHJpZ2dlciIsImxlZ2VuZCIsIml0ZW1XaWR0aCIsIml0ZW1IZWlnaHQiLCJ4QXhpcyIsInR5cGUiLCJib3VuZGFyeUdhcCIsImF4aXNMaW5lIiwibGluZVN0eWxlIiwiY29sb3IiLCJheGlzTGFiZWwiLCJkYXRhIiwieUF4aXMiLCJzaG93IiwiYXhpc1RpY2siLCJzcGxpdExpbmUiLCJzZXJpZXMiLCJuYW1lIiwic2hvd1N5bWJvbCIsInNtb290aCIsImJhcldpZHRoIiwiaXRlbVN0eWxlIiwiYmFyIiwieCIsInkiLCJiYXIyIiwicGllIiwiZm9ybWF0dGVyIiwib3JpZW50IiwidmFsdWUiLCJDb21wb25lbnQiLCJjaGlsZHMiLCJjaGlsZHJlbiIsInJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCIsImEiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidHZpcnVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18iLCJvcHRpb24iLCJQcm9ncmVzc0NpcmNsZSIsInN0YXJ0Q29sb3IiLCJlbmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0U3RhdGUiLCJfY29tbW9uX3dlYmNvbXBvbmVudF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fIiwiX2V4dGVuZHMiLCJrZXl3b3JkIiwiZGVzYyJdLCJtYXBwaW5ncyI6IjhFQUNBLElBQUFBLEVBQWNDLEVBQVEsS0FFdEIsaUJBQUFELE1BQUEsRUFBNENFLEVBQUFDLEVBQVNILEVBQUEsTUFPckQsSUFBQUksRUFBQSxDQUFlQyxLQUFBLEVBRWZDLGVBUEFBLEVBUUFDLGdCQUFBQyxHQUVhUCxFQUFRLEVBQVJBLENBQWlFRCxFQUFBSSxHQUU5RUosRUFBQVMsU0FBQVAsRUFBQVEsUUFBQVYsRUFBQVMsOEJDakJBUCxFQUFBUSxRQUEyQlQsRUFBUSxFQUFSQSxFQUE2RCxJQUt4RlUsS0FBQSxDQUFjVCxFQUFBQyxFQUFTLDJuQ0NFRlMsY0FDakIsU0FBQUEsRUFBWUMsR0FBTSxJQUFBQyxFQUFBLG1HQUFBQyxDQUFBQyxLQUFBSixJQUNkRSxFQUFBRyxFQUFBRCxLQUFBRSxFQUFBTixHQUFBTyxLQUFBSCxLQUFNSCxLQUNETyxNQUFRLENBQ1RDLE1BQU8sR0FDUEMsS0FBTSxDQUNGQyxNQUFPLENBQ0hDLEtBQU0sVUFDTkMsS0FBTSxHQUNOQyxVQUFXLENBQ1BDLFdBQVksU0FDWkMsU0FBVSxLQUdsQkMsS0FBTSxDQUNGQyxJQUFLLElBQ0xMLEtBQU0sR0FDTk0sTUFBTyxFQUNQQyxPQUFRLElBRVpDLFFBQVMsQ0FDTEMsUUFBUyxRQUViQyxPQUFRLENBQ0pWLEtBQU0sR0FDTkssSUFBSyxHQUNMTSxVQUFXLEdBQ1hDLFdBQVksSUFFaEJDLE1BQU8sQ0FDSEMsS0FBTSxXQUNOQyxhQUFhLEVBQ2JDLFNBQVUsQ0FDTkMsVUFBVyxD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VWpELEtBQUtJLE1BQWY2QyxPQUVQLE9BQU9FLEVBQUFDLEVBQUFDLGNBQUNVLEVBQUEsRUFBREMsRUFBQSxHQUFZaEUsS0FBS0gsTUFBakIsQ0FDWm9FLFFBQVEsUUFDQ1gsVUFBVSxpQkFDVi9DLE1BQU0sUUFDTjJELEtBQUssbUVBQ0xqQixPQUFRQSwwQ0E1V0NyRCIsImZpbGUiOiIyNC43MjBlZTZjMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21tb24vd2ViY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tICd0dmlydXMnO1xuaW1wb3J0ICcuL2luZGV4Lmxlc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0RGVtbyBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoaWxkOiBbXSxcbiAgICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5aSa5p2h5oqY57q/5Zu+5qih5p2/JyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTAsXG4gICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDI1XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdheGlzJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQwLFxuICAgICAgICAgICAgICAgICAgICBpdGVtV2lkdGg6IDEwLFxuICAgICAgICAgICAgICAgICAgICBpdGVtSGVpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kYXJ5R2FwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc0xpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2UwZTBlMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMzMzMnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsn5ZGo5LiAJywn5ZGo5LqMJywn5ZGo5LiJJywn5ZGo5ZubJywn5ZGo5LqUJywn5ZGo5YWtJywn5ZGo5pelJ11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHlBeGlzIDogeyBcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA6ICd2YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGF4aXNMaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBheGlzVGljazp7IFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRMaW5lOnsgXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVTdHlsZTp7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6J2Rhc2hlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjRTlFOUU5J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfngrnor4TmlbAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1N5bWJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXJXaWR0aDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtU3R5bGU6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzQ1YTJmYycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDRcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+WlveivhOeOhycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93U3ltYm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhcldpZHRoOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1TdHlsZTp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjNTdjYTc3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDExMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDk1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwNFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfmma7pgJrmn7Hnirblm74nLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMjVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2F4aXMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6ICd0b3AnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlIDogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgICAgICAgYXhpc0xpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2UwZTBlMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc1RpY2s6eyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF4aXNMYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMzMzJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ+WRqOS4gCcsJ+WRqOS6jCcsJ+WRqOS4iScsJ+WRqOWbmycsJ+WRqOS6lCcsJ+WRqOWFrScsJ+WRqOaXpSddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeUF4aXMgOiB7IFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBheGlzTGluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc1RpY2s6eyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNwbGl0TGluZTp7IFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6eyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOidkYXNoZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI0U5RTlFOSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTeW1ib2w6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyV2lkdGg6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVN0eWxlOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyM0NWEyZmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDExMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMzQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFyMjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfmma7pgJrmnaHlvaLlm74nLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMjVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2F4aXMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6ICd0b3AnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBheGlzTGluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc1RpY2s6eyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNwbGl0TGluZTp7IFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6eyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOidkYXNoZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI0U5RTlFOSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHlBeGlzIDogeyBcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgICAgICAgIGF4aXNUaWNrOnsgXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBheGlzTGluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZTBlMGUwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBheGlzTGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMzMydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWyflkajkuIAnLCflkajkuownLCflkajkuIknLCflkajlm5snLCflkajkupQnLCflkajlha0nLCflkajml6UnXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTeW1ib2w6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyV2lkdGg6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVN0eWxlOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyM0NWEyZmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDExMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMzQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGllOiB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogXCJ7Yn06IHtjfTxiciAvPuWNoOavlO+8mntkfSVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudDogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogJ3RvcCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1N5bWJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXJXaWR0aDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+WxleS8muWNoOavlCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAyMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1TdHlsZTp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyM0NWEyZmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfmg4XkvqPlh7rooYzljaDmr5QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNTAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtU3R5bGU6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjNTdjYTc3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5peF5ri45Y2g5q+UJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVN0eWxlOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZlZDQ2NScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+WutuS6uuWHuuihjOWNoOavlCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxMDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtU3R5bGU6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjOTc2NmUxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5ZWG5Yqh5Ye66KGM5Y2g5q+UJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEzMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1TdHlsZTp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjg1NmEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgICAgIHRoaXMuY2hpbGRzKCk7XG4gICAgfVxuXG4gICAgY2hpbGRzKCl7XG4gICAgICAgIGNvbnN0IGNoaWxkcyA9IFtdO1xuICAgICAgICBjaGlsZHMucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogJ+e6vycsXG4gICAgICAgICAgICBjaGlsZHJlbjogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZS1kZW1vXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDaGFydCBvcHRpb249e3RoaXMuc3RhdGUubGluZX0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgICAgICBjaGlsZHMucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogJ+afsScsXG4gICAgICAgICAgICBjaGlsZHJlbjogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZS1kZW1vXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDaGFydCBvcHRpb249e3RoaXMuc3RhdGUuYmFyfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNoaWxkcy5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiAn6aW8JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLWRlbW9cIj5cbiAgICAgICAgICAgICAgICAgICAgPENoYXJ0IHR5cGU9XCJwaWVcIiBvcHRpb249e3RoaXMuc3RhdGUucGllfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNoaWxkcy5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5ZyG546vJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLWRlbW9cIj5cbiAgICAgICAgICAgICAgICAgICAgPENoYXJ0LlByb2dyZXNzQ2lyY2xlIHZhbHVlPXs2MH0gc3RhcnRDb2xvcj1cIiNGRjk2NDVcIiBlbmRDb2xvcj1cIiNGRjk2NDVcIiB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2hpbGRzfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtjaGlsZHN9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiA8TGF5b3V0IHsuLi50aGlzLnByb3BzfSBcblx0XHRcdGtleXdvcmQ9XCJjaGFydFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluLWNoYXJ0LWJveFwiXG4gICAgICAgICAgICB0aXRsZT1cIkNoYXJ0XCJcbiAgICAgICAgICAgIGRlc2M9XCLlm77ooajorqnmlbDmja7ooajovr7mm7TnrKblkIjnlKjmiLflv4PnkIbvvIzluK7liqnjgI7orr7orqHogIXjgI/lrbXljJblh7rmm7TlhbfkuJrliqHnibnmgKfnmoTlj6/op4bljJbop6PlhrPmlrnmoYjku6Xmu6HotrPkuKrmgKfljJborr7orqHpnIDmsYLjgILms6jvvJrpnIDopoHmiYvlt6XlvJXlhaVFY2hhcnRcIlxuICAgICAgICAgICAgY2hpbGRzPXtjaGlsZHN9XG4gICAgICAgIC8+XG4gICAgfVxufVxuICAgICAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==