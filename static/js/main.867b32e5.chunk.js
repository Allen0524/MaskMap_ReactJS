(this.webpackJsonpmaskmap=this.webpackJsonpmaskmap||[]).push([[0],{10:function(e,a,i){e.exports=i(17)},15:function(e,a,i){},17:function(e,a,i){"use strict";i.r(a);var n=i(0),r=i.n(n),m=i(9),o=i.n(m),N=(i(15),i(1)),A=i(2),t=i(4),p=i(3),g=i(5),s=i.n(g),C=(i(6),i(7)),d=function(e){Object(t.a)(i,e);var a=Object(p.a)(i);function i(){return Object(N.a)(this,i),a.apply(this,arguments)}return Object(A.a)(i,[{key:"render",value:function(){return r.a.createElement("div",{className:"all-store-list"},this.props.localStores.map((function(e){return r.a.createElement("div",{className:"store-div"},r.a.createElement("h3",{style:{marginBottom:"3px"}},e.properties.name),r.a.createElement("div",{style:{display:"flex",marginTop:"5px"}},r.a.createElement("h5",{className:"list-adultChild"},"\u5927\u4eba: ",e.properties.mask_adult),r.a.createElement("h5",{className:"list-adultChild"},"\u5c0f\u5b69: ",e.properties.mask_child)))})))}}]),i}(n.Component),E=function(e){Object(t.a)(i,e);var a=Object(p.a)(i);function i(){var e;Object(N.a)(this,i);for(var n=arguments.length,r=new Array(n),m=0;m<n;m++)r[m]=arguments[m];return(e=a.call.apply(a,[this].concat(r))).state={cityName:"\u65b0\u5317\u5e02",areaName:"\u6de1\u6c34\u5340",allData:[],centerStores:[]},e.getData=function(){return fetch("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR0oowBRjj1goAMqtnugBiXMTMY8OCl14TGmgt3YDJi9w5BXs4VsfZQ9mDI").then((function(e){return e.json()})).then((function(e){return e.features})).catch((function(e){return console.error(e)}))},e.onCityChange=function(a){e.setState({cityName:a.target.value})},e.onAreaChange=function(a){e.setState({areaName:a.target.value},(function(){e.setState({centerStores:e.getCenter()},(function(){e.getLatLon()}))}))},e.getLatLon=function(){var a=[];a[0]=e.state.centerStores[0].geometry.coordinates[1],a[1]=e.state.centerStores[0].geometry.coordinates[0],e.props.updateCenter(a)},e.getCenter=function(){return e.state.allData.filter((function(a){return a.properties.address.includes(e.state.cityName+e.state.areaName)}))},e}return Object(A.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.getData().then((function(a){return e.setState({allData:a},(function(){e.setState({centerStores:e.getCenter()})}))}))}},{key:"render",value:function(){var e=this,a=C.map((function(e){return r.a.createElement("option",{key:e.CityName,value:e.CityName},e.CityName)}));return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"citySearch"},r.a.createElement("select",{className:"select-input",value:this.state.cityName,onChange:this.onCityChange},a),r.a.createElement("select",{className:"select-input",value:this.state.areaName,onChange:this.onAreaChange},C.filter((function(a){return a.CityName==e.state.cityName}))[0].AreaList.map((function(e){return r.a.createElement("option",{key:e.AreaName,value:e.AreaName},e.AreaName)})))),r.a.createElement(d,{localStores:this.state.centerStores}))}}]),i}(n.Component),h=(i(16),function(e){Object(t.a)(i,e);var a=Object(p.a)(i);function i(){var e;Object(N.a)(this,i);for(var n=arguments.length,r=new Array(n),m=0;m<n;m++)r[m]=arguments[m];return(e=a.call.apply(a,[this].concat(r))).state={center:[25.171712,121.44587]},e.getData=function(){return fetch("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR0oowBRjj1goAMqtnugBiXMTMY8OCl14TGmgt3YDJi9w5BXs4VsfZQ9mDI").then((function(e){return e.json()})).then((function(e){return e.features})).catch((function(e){return console.error(e)}))},e.updateCenter=function(a){e.setState({center:a})},e}return Object(A.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.map=s.a.map("mapid",{center:[this.state.center[0],this.state.center[1]],zoom:16});s.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map);e.getData().then((function(a){for(var i=s.a.markerClusterGroup({spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,iconCreateFunction:function(e){return s.a.divIcon({html:'<div class="custom-cluster">'.concat(e.getChildCount(),"</div>")})}}).addTo(e.map),n=0;n<a.length;n++){var r=a[n].geometry.coordinates[1],m=a[n].geometry.coordinates[0],o=a[n].properties.mask_adult,N=a[n].properties.mask_child;i.addLayer(s.a.marker([r,m]).bindPopup("<div>\n              <div>".concat(a[n].properties.name,"</div>\n              <div>").concat(a[n].properties.address,"</div>\n              <div>").concat(a[n].properties.phone,"</div>\n              <div>\u5927\u4eba: ").concat(o,"</div>\n              <div>\u5c0f\u5b69: ").concat(N,"</div>\n            </div>")))}e.map.addLayer(i)}))}},{key:"componentDidUpdate",value:function(e){e.center!=this.state.center&&this.map.panTo(this.state.center)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(E,{updateCenter:this.updateCenter}),r.a.createElement("div",{id:"mapid"}))}}]),i}(n.Component));o.a.render(r.a.createElement(h,null),document.getElementById("root"))},6:function(e,a,i){},7:function(e){e.exports=JSON.parse('[{"CityName":"\u81fa\u5317\u5e02","CityEngName":"Taipei City","AreaList":[{"ZipCode":"100","AreaName":"\u4e2d\u6b63\u5340","AreaEngName":"Zhongzheng Dist."},{"ZipCode":"103","AreaName":"\u5927\u540c\u5340","AreaEngName":"Datong Dist."},{"ZipCode":"104","AreaName":"\u4e2d\u5c71\u5340","AreaEngName":"Zhongshan Dist."},{"ZipCode":"105","AreaName":"\u677e\u5c71\u5340","AreaEngName":"Songshan Dist."},{"ZipCode":"106","AreaName":"\u5927\u5b89\u5340","AreaEngName":"Da\u2019an Dist."},{"ZipCode":"108","AreaName":"\u842c\u83ef\u5340","AreaEngName":"Wanhua Dist."},{"ZipCode":"110","AreaName":"\u4fe1\u7fa9\u5340","AreaEngName":"Xinyi Dist."},{"ZipCode":"111","AreaName":"\u58eb\u6797\u5340","AreaEngName":"Shilin Dist."},{"ZipCode":"112","AreaName":"\u5317\u6295\u5340","AreaEngName":"Beitou Dist."},{"ZipCode":"114","AreaName":"\u5167\u6e56\u5340","AreaEngName":"Neihu Dist."},{"ZipCode":"115","AreaName":"\u5357\u6e2f\u5340","AreaEngName":"Nangang Dist."},{"ZipCode":"116","AreaName":"\u6587\u5c71\u5340","AreaEngName":"Wenshan Dist."}]},{"CityName":"\u57fa\u9686\u5e02","CityEngName":"Keelung City","AreaList":[{"ZipCode":"200","AreaName":"\u4ec1\u611b\u5340","AreaEngName":"Ren\u2019ai Dist."},{"ZipCode":"201","AreaName":"\u4fe1\u7fa9\u5340","AreaEngName":"Xinyi Dist."},{"ZipCode":"202","AreaName":"\u4e2d\u6b63\u5340","AreaEngName":"Zhongzheng Dist."},{"ZipCode":"203","AreaName":"\u4e2d\u5c71\u5340","AreaEngName":"Zhongshan Dist."},{"ZipCode":"204","AreaName":"\u5b89\u6a02\u5340","AreaEngName":"Anle Dist."},{"ZipCode":"205","AreaName":"\u6696\u6696\u5340","AreaEngName":"Nuannuan Dist."},{"ZipCode":"206","AreaName":"\u4e03\u5835\u5340","AreaEngName":"Qidu Dist."}]},{"CityName":"\u65b0\u5317\u5e02","CityEngName":"New Taipei City","AreaList":[{"ZipCode":"207","AreaName":"\u842c\u91cc\u5340","AreaEngName":"Wanli Dist."},{"ZipCode":"208","AreaName":"\u91d1\u5c71\u5340","AreaEngName":"Jinshan Dist."},{"ZipCode":"220","AreaName":"\u677f\u6a4b\u5340","AreaEngName":"Banqiao Dist."},{"ZipCode":"221","AreaName":"\u6c50\u6b62\u5340","AreaEngName":"Xizhi Dist."},{"ZipCode":"222","AreaName":"\u6df1\u5751\u5340","AreaEngName":"Shenkeng Dist."},{"ZipCode":"223","AreaName":"\u77f3\u7887\u5340","AreaEngName":"Shiding Dist."},{"ZipCode":"224","AreaName":"\u745e\u82b3\u5340","AreaEngName":"Ruifang Dist."},{"ZipCode":"226","AreaName":"\u5e73\u6eaa\u5340","AreaEngName":"Pingxi Dist."},{"ZipCode":"227","AreaName":"\u96d9\u6eaa\u5340","AreaEngName":"Shuangxi Dist."},{"ZipCode":"228","AreaName":"\u8ca2\u5bee\u5340","AreaEngName":"Gongliao Dist."},{"ZipCode":"231","AreaName":"\u65b0\u5e97\u5340","AreaEngName":"Xindian Dist."},{"ZipCode":"232","AreaName":"\u576a\u6797\u5340","AreaEngName":"Pinglin Dist."},{"ZipCode":"233","AreaName":"\u70cf\u4f86\u5340","AreaEngName":"Wulai Dist."},{"ZipCode":"234","AreaName":"\u6c38\u548c\u5340","AreaEngName":"Yonghe Dist."},{"ZipCode":"235","AreaName":"\u4e2d\u548c\u5340","AreaEngName":"Zhonghe Dist."},{"ZipCode":"236","AreaName":"\u571f\u57ce\u5340","AreaEngName":"Tucheng Dist."},{"ZipCode":"237","AreaName":"\u4e09\u5cfd\u5340","AreaEngName":"Sanxia Dist."},{"ZipCode":"238","AreaName":"\u6a39\u6797\u5340","AreaEngName":"Shulin Dist."},{"ZipCode":"239","AreaName":"\u9daf\u6b4c\u5340","AreaEngName":"Yingge Dist."},{"ZipCode":"241","AreaName":"\u4e09\u91cd\u5340","AreaEngName":"Sanchong Dist."},{"ZipCode":"242","AreaName":"\u65b0\u838a\u5340","AreaEngName":"Xinzhuang Dist."},{"ZipCode":"243","AreaName":"\u6cf0\u5c71\u5340","AreaEngName":"Taishan Dist."},{"ZipCode":"244","AreaName":"\u6797\u53e3\u5340","AreaEngName":"Linkou Dist."},{"ZipCode":"247","AreaName":"\u8606\u6d32\u5340","AreaEngName":"Luzhou Dist."},{"ZipCode":"248","AreaName":"\u4e94\u80a1\u5340","AreaEngName":"Wugu Dist."},{"ZipCode":"249","AreaName":"\u516b\u91cc\u5340","AreaEngName":"Bali Dist."},{"ZipCode":"251","AreaName":"\u6de1\u6c34\u5340","AreaEngName":"Tamsui Dist."},{"ZipCode":"252","AreaName":"\u4e09\u829d\u5340","AreaEngName":"Sanzhi Dist."},{"ZipCode":"253","AreaName":"\u77f3\u9580\u5340","AreaEngName":"Shimen Dist."}]},{"CityName":"\u9023\u6c5f\u7e23","CityEngName":"Lienchiang County","AreaList":[{"ZipCode":"209","AreaName":"\u5357\u7aff\u9109","AreaEngName":"Nangan Township"},{"ZipCode":"210","AreaName":"\u5317\u7aff\u9109","AreaEngName":"Beigan Township"},{"ZipCode":"211","AreaName":"\u8392\u5149\u9109","AreaEngName":"Juguang Township"},{"ZipCode":"212","AreaName":"\u6771\u5f15\u9109","AreaEngName":"Dongyin Township"}]},{"CityName":"\u5b9c\u862d\u7e23","CityEngName":"Yilan County","AreaList":[{"ZipCode":"260","AreaName":"\u5b9c\u862d\u5e02","AreaEngName":"Yilan City"},{"ZipCode":"263","AreaName":"\u58ef\u570d\u9109","AreaEngName":"Zhuangwei Township"},{"ZipCode":"261","AreaName":"\u982d\u57ce\u93ae","AreaEngName":"Toucheng Township"},{"ZipCode":"262","AreaName":"\u7901\u6eaa\u9109","AreaEngName":"Jiaoxi Township"},{"ZipCode":"264","AreaName":"\u54e1\u5c71\u9109","AreaEngName":"Yuanshan Township"},{"ZipCode":"265","AreaName":"\u7f85\u6771\u93ae","AreaEngName":"Luodong Township"},{"ZipCode":"266","AreaName":"\u4e09\u661f\u9109","AreaEngName":"Sanxing Township"},{"ZipCode":"267","AreaName":"\u5927\u540c\u9109","AreaEngName":"Datong Township"},{"ZipCode":"268","AreaName":"\u4e94\u7d50\u9109","AreaEngName":"Wujie Township"},{"ZipCode":"269","AreaName":"\u51ac\u5c71\u9109","AreaEngName":"Dongshan Township"},{"ZipCode":"270","AreaName":"\u8607\u6fb3\u93ae","AreaEngName":"Su\u2019ao Township"},{"ZipCode":"272","AreaName":"\u5357\u6fb3\u9109","AreaEngName":"Nan\u2019ao Township"},{"ZipCode":"290","AreaName":"\u91e3\u9b5a\u81fa","AreaEngName":"Diaoyutai"}]},{"CityName":"\u91e3\u9b5a\u81fa","CityEngName":"Diauyutai","AreaList":[{"ZipCode":"290","AreaName":"\u91e3\u9b5a\u81fa","AreaEngName":"Diaoyutai"}]},{"CityName":"\u65b0\u7af9\u5e02","CityEngName":"Hsinchu City","AreaList":[{"ZipCode":"300","AreaName":"\u6771\u5340","AreaEngName":"East Dist."},{"ZipCode":"300","AreaName":"\u5317\u5340","AreaEngName":"North Dist."},{"ZipCode":"300","AreaName":"\u9999\u5c71\u5340","AreaEngName":"Xiangshan Dist."}]},{"CityName":"\u65b0\u7af9\u7e23","CityEngName":"Hsinchu County","AreaList":[{"ZipCode":"308","AreaName":"\u5bf6\u5c71\u9109","AreaEngName":"Baoshan Township"},{"ZipCode":"302","AreaName":"\u7af9\u5317\u5e02","AreaEngName":"Zhubei City"},{"ZipCode":"303","AreaName":"\u6e56\u53e3\u9109","AreaEngName":"Hukou Township"},{"ZipCode":"304","AreaName":"\u65b0\u8c50\u9109","AreaEngName":"Xinfeng Township"},{"ZipCode":"305","AreaName":"\u65b0\u57d4\u93ae","AreaEngName":"Xinpu Township"},{"ZipCode":"306","AreaName":"\u95dc\u897f\u93ae","AreaEngName":"Guanxi Township"},{"ZipCode":"307","AreaName":"\u828e\u6797\u9109","AreaEngName":"Qionglin Township"},{"ZipCode":"310","AreaName":"\u7af9\u6771\u93ae","AreaEngName":"Zhudong Township"},{"ZipCode":"311","AreaName":"\u4e94\u5cf0\u9109","AreaEngName":"Wufeng Township"},{"ZipCode":"312","AreaName":"\u6a6b\u5c71\u9109","AreaEngName":"Hengshan Township"},{"ZipCode":"313","AreaName":"\u5c16\u77f3\u9109","AreaEngName":"Jianshi Township"},{"ZipCode":"314","AreaName":"\u5317\u57d4\u9109","AreaEngName":"Beipu Township"},{"ZipCode":"315","AreaName":"\u5ce8\u7709\u9109","AreaEngName":"Emei Township"}]},{"CityName":"\u6843\u5712\u5e02","CityEngName":"Taoyuan City","AreaList":[{"ZipCode":"320","AreaName":"\u4e2d\u58e2\u5340","AreaEngName":"Zhongli Dist."},{"ZipCode":"324","AreaName":"\u5e73\u93ae\u5340","AreaEngName":"Pingzhen Dist."},{"ZipCode":"325","AreaName":"\u9f8d\u6f6d\u5340","AreaEngName":"Longtan Dist."},{"ZipCode":"326","AreaName":"\u694a\u6885\u5340","AreaEngName":"Yangmei Dist."},{"ZipCode":"327","AreaName":"\u65b0\u5c4b\u5340","AreaEngName":"Xinwu Dist."},{"ZipCode":"328","AreaName":"\u89c0\u97f3\u5340","AreaEngName":"Guanyin Dist."},{"ZipCode":"330","AreaName":"\u6843\u5712\u5340","AreaEngName":"Taoyuan Dist."},{"ZipCode":"333","AreaName":"\u9f9c\u5c71\u5340","AreaEngName":"Guishan Dist."},{"ZipCode":"334","AreaName":"\u516b\u5fb7\u5340","AreaEngName":"Bade Dist."},{"ZipCode":"335","AreaName":"\u5927\u6eaa\u5340","AreaEngName":"Daxi Dist."},{"ZipCode":"336","AreaName":"\u5fa9\u8208\u5340","AreaEngName":"Fuxing Dist."},{"ZipCode":"337","AreaName":"\u5927\u5712\u5340","AreaEngName":"Dayuan Dist."},{"ZipCode":"338","AreaName":"\u8606\u7af9\u5340","AreaEngName":"Luzhu Dist."}]},{"CityName":"\u82d7\u6817\u7e23","CityEngName":"Miaoli County","AreaList":[{"ZipCode":"350","AreaName":"\u7af9\u5357\u93ae","AreaEngName":"Zhunan Township"},{"ZipCode":"351","AreaName":"\u982d\u4efd\u5e02","AreaEngName":"Toufen City"},{"ZipCode":"352","AreaName":"\u4e09\u7063\u9109","AreaEngName":"Sanwan Township"},{"ZipCode":"353","AreaName":"\u5357\u5e84\u9109","AreaEngName":"Nanzhuang Township"},{"ZipCode":"354","AreaName":"\u7345\u6f6d\u9109","AreaEngName":"Shitan Township"},{"ZipCode":"356","AreaName":"\u5f8c\u9f8d\u93ae","AreaEngName":"Houlong Township"},{"ZipCode":"357","AreaName":"\u901a\u9704\u93ae","AreaEngName":"Tongxiao Township"},{"ZipCode":"358","AreaName":"\u82d1\u88e1\u93ae","AreaEngName":"Yuanli Township"},{"ZipCode":"360","AreaName":"\u82d7\u6817\u5e02","AreaEngName":"Miaoli City"},{"ZipCode":"361","AreaName":"\u9020\u6a4b\u9109","AreaEngName":"Zaoqiao Township"},{"ZipCode":"362","AreaName":"\u982d\u5c4b\u9109","AreaEngName":"Touwu Township"},{"ZipCode":"363","AreaName":"\u516c\u9928\u9109","AreaEngName":"Gongguan Township"},{"ZipCode":"364","AreaName":"\u5927\u6e56\u9109","AreaEngName":"Dahu Township"},{"ZipCode":"365","AreaName":"\u6cf0\u5b89\u9109","AreaEngName":"Tai\u2019an Township"},{"ZipCode":"366","AreaName":"\u9285\u947c\u9109","AreaEngName":"Tongluo Township"},{"ZipCode":"367","AreaName":"\u4e09\u7fa9\u9109","AreaEngName":"Sanyi Township"},{"ZipCode":"368","AreaName":"\u897f\u6e56\u9109","AreaEngName":"Xihu Township"},{"ZipCode":"369","AreaName":"\u5353\u862d\u93ae","AreaEngName":"Zhuolan Township"}]},{"CityName":"\u81fa\u4e2d\u5e02","CityEngName":"Taichung City","AreaList":[{"ZipCode":"400","AreaName":"\u4e2d\u5340","AreaEngName":"Central Dist."},{"ZipCode":"401","AreaName":"\u6771\u5340","AreaEngName":"East Dist."},{"ZipCode":"402","AreaName":"\u5357\u5340","AreaEngName":"South Dist."},{"ZipCode":"403","AreaName":"\u897f\u5340","AreaEngName":"West Dist."},{"ZipCode":"404","AreaName":"\u5317\u5340","AreaEngName":"North Dist."},{"ZipCode":"406","AreaName":"\u5317\u5c6f\u5340","AreaEngName":"Beitun Dist."},{"ZipCode":"407","AreaName":"\u897f\u5c6f\u5340","AreaEngName":"Xitun Dist."},{"ZipCode":"408","AreaName":"\u5357\u5c6f\u5340","AreaEngName":"Nantun Dist."},{"ZipCode":"411","AreaName":"\u592a\u5e73\u5340","AreaEngName":"Taiping Dist."},{"ZipCode":"412","AreaName":"\u5927\u91cc\u5340","AreaEngName":"Dali Dist."},{"ZipCode":"413","AreaName":"\u9727\u5cf0\u5340","AreaEngName":"Wufeng Dist."},{"ZipCode":"414","AreaName":"\u70cf\u65e5\u5340","AreaEngName":"Wuri Dist."},{"ZipCode":"420","AreaName":"\u8c50\u539f\u5340","AreaEngName":"Fengyuan Dist."},{"ZipCode":"421","AreaName":"\u540e\u91cc\u5340","AreaEngName":"Houli Dist."},{"ZipCode":"422","AreaName":"\u77f3\u5ca1\u5340","AreaEngName":"Shigang Dist."},{"ZipCode":"423","AreaName":"\u6771\u52e2\u5340","AreaEngName":"Dongshi Dist."},{"ZipCode":"424","AreaName":"\u548c\u5e73\u5340","AreaEngName":"Heping Dist."},{"ZipCode":"426","AreaName":"\u65b0\u793e\u5340","AreaEngName":"Xinshe Dist."},{"ZipCode":"427","AreaName":"\u6f6d\u5b50\u5340","AreaEngName":"Tanzi Dist."},{"ZipCode":"428","AreaName":"\u5927\u96c5\u5340","AreaEngName":"Daya Dist."},{"ZipCode":"429","AreaName":"\u795e\u5ca1\u5340","AreaEngName":"Shengang Dist."},{"ZipCode":"432","AreaName":"\u5927\u809a\u5340","AreaEngName":"Dadu Dist."},{"ZipCode":"433","AreaName":"\u6c99\u9e7f\u5340","AreaEngName":"Shalu Dist."},{"ZipCode":"434","AreaName":"\u9f8d\u4e95\u5340","AreaEngName":"Longjing Dist."},{"ZipCode":"435","AreaName":"\u68a7\u68f2\u5340","AreaEngName":"Wuqi Dist."},{"ZipCode":"436","AreaName":"\u6e05\u6c34\u5340","AreaEngName":"Qingshui Dist."},{"ZipCode":"437","AreaName":"\u5927\u7532\u5340","AreaEngName":"Dajia Dist."},{"ZipCode":"438","AreaName":"\u5916\u57d4\u5340","AreaEngName":"Waipu Dist."},{"ZipCode":"439","AreaName":"\u5927\u5b89\u5340","AreaEngName":"Da\u2019an Dist."}]},{"CityName":"\u5f70\u5316\u7e23","CityEngName":"Changhua County","AreaList":[{"ZipCode":"500","AreaName":"\u5f70\u5316\u5e02","AreaEngName":"Changhua City"},{"ZipCode":"502","AreaName":"\u82ac\u5712\u9109","AreaEngName":"Fenyuan Township"},{"ZipCode":"503","AreaName":"\u82b1\u58c7\u9109","AreaEngName":"Huatan Township"},{"ZipCode":"504","AreaName":"\u79c0\u6c34\u9109","AreaEngName":"Xiushui Township"},{"ZipCode":"505","AreaName":"\u9e7f\u6e2f\u93ae","AreaEngName":"Lukang Township"},{"ZipCode":"506","AreaName":"\u798f\u8208\u9109","AreaEngName":"Fuxing Township"},{"ZipCode":"507","AreaName":"\u7dda\u897f\u9109","AreaEngName":"Xianxi Township"},{"ZipCode":"508","AreaName":"\u548c\u7f8e\u93ae","AreaEngName":"Hemei Township"},{"ZipCode":"509","AreaName":"\u4f38\u6e2f\u9109","AreaEngName":"Shengang Township"},{"ZipCode":"510","AreaName":"\u54e1\u6797\u5e02","AreaEngName":"Yuanlin City"},{"ZipCode":"511","AreaName":"\u793e\u982d\u9109","AreaEngName":"Shetou Township"},{"ZipCode":"512","AreaName":"\u6c38\u9756\u9109","AreaEngName":"Yongjing Township"},{"ZipCode":"513","AreaName":"\u57d4\u5fc3\u9109","AreaEngName":"Puxin Township"},{"ZipCode":"514","AreaName":"\u6eaa\u6e56\u93ae","AreaEngName":"Xihu Township"},{"ZipCode":"515","AreaName":"\u5927\u6751\u9109","AreaEngName":"Dacun Township"},{"ZipCode":"516","AreaName":"\u57d4\u9e7d\u9109","AreaEngName":"Puyan Township"},{"ZipCode":"520","AreaName":"\u7530\u4e2d\u93ae","AreaEngName":"Tianzhong Township"},{"ZipCode":"521","AreaName":"\u5317\u6597\u93ae","AreaEngName":"Beidou Township"},{"ZipCode":"522","AreaName":"\u7530\u5c3e\u9109","AreaEngName":"Tianwei Township"},{"ZipCode":"523","AreaName":"\u57e4\u982d\u9109","AreaEngName":"Pitou Township"},{"ZipCode":"524","AreaName":"\u6eaa\u5dde\u9109","AreaEngName":"Xizhou Township"},{"ZipCode":"525","AreaName":"\u7af9\u5858\u9109","AreaEngName":"Zhutang Township"},{"ZipCode":"526","AreaName":"\u4e8c\u6797\u93ae","AreaEngName":"Erlin Township"},{"ZipCode":"527","AreaName":"\u5927\u57ce\u9109","AreaEngName":"Dacheng Township"},{"ZipCode":"528","AreaName":"\u82b3\u82d1\u9109","AreaEngName":"Fangyuan Township"},{"ZipCode":"530","AreaName":"\u4e8c\u6c34\u9109","AreaEngName":"Ershui Township"}]},{"CityName":"\u5357\u6295\u7e23","CityEngName":"Nantou County","AreaList":[{"ZipCode":"540","AreaName":"\u5357\u6295\u5e02","AreaEngName":"Nantou City"},{"ZipCode":"541","AreaName":"\u4e2d\u5bee\u9109","AreaEngName":"Zhongliao Township"},{"ZipCode":"542","AreaName":"\u8349\u5c6f\u93ae","AreaEngName":"Caotun Township"},{"ZipCode":"544","AreaName":"\u570b\u59d3\u9109","AreaEngName":"Guoxing Township"},{"ZipCode":"545","AreaName":"\u57d4\u91cc\u93ae","AreaEngName":"Puli Township"},{"ZipCode":"546","AreaName":"\u4ec1\u611b\u9109","AreaEngName":"Ren\u2019ai Township"},{"ZipCode":"551","AreaName":"\u540d\u9593\u9109","AreaEngName":"Mingjian Township"},{"ZipCode":"552","AreaName":"\u96c6\u96c6\u93ae","AreaEngName":"Jiji Township"},{"ZipCode":"553","AreaName":"\u6c34\u91cc\u9109","AreaEngName":"Shuili Township"},{"ZipCode":"555","AreaName":"\u9b5a\u6c60\u9109","AreaEngName":"Yuchi Township"},{"ZipCode":"556","AreaName":"\u4fe1\u7fa9\u9109","AreaEngName":"Xinyi Township"},{"ZipCode":"557","AreaName":"\u7af9\u5c71\u93ae","AreaEngName":"Zhushan Township"},{"ZipCode":"558","AreaName":"\u9e7f\u8c37\u9109","AreaEngName":"Lugu Township"}]},{"CityName":"\u5609\u7fa9\u5e02","CityEngName":"Chiayi City","AreaList":[{"ZipCode":"600","AreaName":"\u897f\u5340","AreaEngName":"West Dist."},{"ZipCode":"600","AreaName":"\u6771\u5340","AreaEngName":"East Dist."}]},{"CityName":"\u5609\u7fa9\u7e23","CityEngName":"Chiayi County","AreaList":[{"ZipCode":"602","AreaName":"\u756a\u8def\u9109","AreaEngName":"Fanlu Township"},{"ZipCode":"603","AreaName":"\u6885\u5c71\u9109","AreaEngName":"Meishan Township"},{"ZipCode":"604","AreaName":"\u7af9\u5d0e\u9109","AreaEngName":"Zhuqi Township"},{"ZipCode":"605","AreaName":"\u963f\u91cc\u5c71\u9109","AreaEngName":"Alishan Township"},{"ZipCode":"606","AreaName":"\u4e2d\u57d4\u9109","AreaEngName":"Zhongpu Township"},{"ZipCode":"607","AreaName":"\u5927\u57d4\u9109","AreaEngName":"Dapu Township"},{"ZipCode":"608","AreaName":"\u6c34\u4e0a\u9109","AreaEngName":"Shuishang Township"},{"ZipCode":"611","AreaName":"\u9e7f\u8349\u9109","AreaEngName":"Lucao Township"},{"ZipCode":"612","AreaName":"\u592a\u4fdd\u5e02","AreaEngName":"Taibao City"},{"ZipCode":"613","AreaName":"\u6734\u5b50\u5e02","AreaEngName":"Puzi City"},{"ZipCode":"614","AreaName":"\u6771\u77f3\u9109","AreaEngName":"Dongshi Township"},{"ZipCode":"615","AreaName":"\u516d\u8173\u9109","AreaEngName":"Liujiao Township"},{"ZipCode":"616","AreaName":"\u65b0\u6e2f\u9109","AreaEngName":"Xingang Township"},{"ZipCode":"621","AreaName":"\u6c11\u96c4\u9109","AreaEngName":"Minxiong Township"},{"ZipCode":"622","AreaName":"\u5927\u6797\u93ae","AreaEngName":"Dalin Township"},{"ZipCode":"623","AreaName":"\u6eaa\u53e3\u9109","AreaEngName":"Xikou Township"},{"ZipCode":"624","AreaName":"\u7fa9\u7af9\u9109","AreaEngName":"Yizhu Township"},{"ZipCode":"625","AreaName":"\u5e03\u888b\u93ae","AreaEngName":"Budai Township"}]},{"CityName":"\u96f2\u6797\u7e23","CityEngName":"Yunlin County","AreaList":[{"ZipCode":"630","AreaName":"\u6597\u5357\u93ae","AreaEngName":"Dounan Township"},{"ZipCode":"631","AreaName":"\u5927\u57e4\u9109","AreaEngName":"Dapi Township"},{"ZipCode":"632","AreaName":"\u864e\u5c3e\u93ae","AreaEngName":"Huwei Township"},{"ZipCode":"633","AreaName":"\u571f\u5eab\u93ae","AreaEngName":"Tuku Township"},{"ZipCode":"634","AreaName":"\u8912\u5fe0\u9109","AreaEngName":"Baozhong Township"},{"ZipCode":"635","AreaName":"\u6771\u52e2\u9109","AreaEngName":"Dongshi Township"},{"ZipCode":"636","AreaName":"\u81fa\u897f\u9109","AreaEngName":"Taixi Township"},{"ZipCode":"637","AreaName":"\u5d19\u80cc\u9109","AreaEngName":"Lunbei Township"},{"ZipCode":"638","AreaName":"\u9ea5\u5bee\u9109","AreaEngName":"Mailiao Township"},{"ZipCode":"640","AreaName":"\u6597\u516d\u5e02","AreaEngName":"Douliu City"},{"ZipCode":"643","AreaName":"\u6797\u5167\u9109","AreaEngName":"Linnei Township"},{"ZipCode":"646","AreaName":"\u53e4\u5751\u9109","AreaEngName":"Gukeng Township"},{"ZipCode":"647","AreaName":"\u83bf\u6850\u9109","AreaEngName":"Citong Township"},{"ZipCode":"648","AreaName":"\u897f\u87ba\u93ae","AreaEngName":"Xiluo Township"},{"ZipCode":"649","AreaName":"\u4e8c\u5d19\u9109","AreaEngName":"Erlun Township"},{"ZipCode":"651","AreaName":"\u5317\u6e2f\u93ae","AreaEngName":"Beigang Township"},{"ZipCode":"652","AreaName":"\u6c34\u6797\u9109","AreaEngName":"Shuilin Township"},{"ZipCode":"653","AreaName":"\u53e3\u6e56\u9109","AreaEngName":"Kouhu Township"},{"ZipCode":"654","AreaName":"\u56db\u6e56\u9109","AreaEngName":"Sihu Township"},{"ZipCode":"655","AreaName":"\u5143\u9577\u9109","AreaEngName":"Yuanchang Township"}]},{"CityName":"\u81fa\u5357\u5e02","CityEngName":"Tainan City","AreaList":[{"ZipCode":"700","AreaName":"\u4e2d\u897f\u5340","AreaEngName":"West Central Dist."},{"ZipCode":"701","AreaName":"\u6771\u5340","AreaEngName":"East Dist."},{"ZipCode":"702","AreaName":"\u5357\u5340","AreaEngName":"South Dist."},{"ZipCode":"704","AreaName":"\u5317\u5340","AreaEngName":"North Dist."},{"ZipCode":"708","AreaName":"\u5b89\u5e73\u5340","AreaEngName":"Anping Dist."},{"ZipCode":"709","AreaName":"\u5b89\u5357\u5340","AreaEngName":"Annan Dist."},{"ZipCode":"710","AreaName":"\u6c38\u5eb7\u5340","AreaEngName":"Yongkang Dist."},{"ZipCode":"711","AreaName":"\u6b78\u4ec1\u5340","AreaEngName":"Guiren Dist."},{"ZipCode":"712","AreaName":"\u65b0\u5316\u5340","AreaEngName":"Xinhua Dist."},{"ZipCode":"713","AreaName":"\u5de6\u93ae\u5340","AreaEngName":"Zuozhen Dist."},{"ZipCode":"714","AreaName":"\u7389\u4e95\u5340","AreaEngName":"Yujing Dist."},{"ZipCode":"715","AreaName":"\u6960\u897f\u5340","AreaEngName":"Nanxi Dist."},{"ZipCode":"716","AreaName":"\u5357\u5316\u5340","AreaEngName":"Nanhua Dist."},{"ZipCode":"717","AreaName":"\u4ec1\u5fb7\u5340","AreaEngName":"Rende Dist."},{"ZipCode":"718","AreaName":"\u95dc\u5edf\u5340","AreaEngName":"Guanmiao Dist."},{"ZipCode":"719","AreaName":"\u9f8d\u5d0e\u5340","AreaEngName":"Longqi Dist."},{"ZipCode":"720","AreaName":"\u5b98\u7530\u5340","AreaEngName":"Guantian Dist."},{"ZipCode":"721","AreaName":"\u9ebb\u8c46\u5340","AreaEngName":"Madou Dist."},{"ZipCode":"722","AreaName":"\u4f73\u91cc\u5340","AreaEngName":"Jiali Dist."},{"ZipCode":"723","AreaName":"\u897f\u6e2f\u5340","AreaEngName":"Xigang Dist."},{"ZipCode":"724","AreaName":"\u4e03\u80a1\u5340","AreaEngName":"Qigu Dist."},{"ZipCode":"725","AreaName":"\u5c07\u8ecd\u5340","AreaEngName":"Jiangjun Dist."},{"ZipCode":"726","AreaName":"\u5b78\u7532\u5340","AreaEngName":"Xuejia Dist."},{"ZipCode":"727","AreaName":"\u5317\u9580\u5340","AreaEngName":"Beimen Dist."},{"ZipCode":"730","AreaName":"\u65b0\u71df\u5340","AreaEngName":"Xinying Dist."},{"ZipCode":"731","AreaName":"\u5f8c\u58c1\u5340","AreaEngName":"Houbi Dist."},{"ZipCode":"732","AreaName":"\u767d\u6cb3\u5340","AreaEngName":"Baihe Dist."},{"ZipCode":"733","AreaName":"\u6771\u5c71\u5340","AreaEngName":"Dongshan Dist."},{"ZipCode":"734","AreaName":"\u516d\u7532\u5340","AreaEngName":"Liujia Dist."},{"ZipCode":"735","AreaName":"\u4e0b\u71df\u5340","AreaEngName":"Xiaying Dist."},{"ZipCode":"736","AreaName":"\u67f3\u71df\u5340","AreaEngName":"Liuying Dist."},{"ZipCode":"737","AreaName":"\u9e7d\u6c34\u5340","AreaEngName":"Yanshui Dist."},{"ZipCode":"741","AreaName":"\u5584\u5316\u5340","AreaEngName":"Shanhua Dist."},{"ZipCode":"744","AreaName":"\u65b0\u5e02\u5340","AreaEngName":"Xinshi Dist."},{"ZipCode":"742","AreaName":"\u5927\u5167\u5340","AreaEngName":"Danei Dist."},{"ZipCode":"743","AreaName":"\u5c71\u4e0a\u5340","AreaEngName":"Shanshang Dist."},{"ZipCode":"745","AreaName":"\u5b89\u5b9a\u5340","AreaEngName":"Anding Dist."}]},{"CityName":"\u9ad8\u96c4\u5e02","CityEngName":"Kaohsiung City","AreaList":[{"ZipCode":"800","AreaName":"\u65b0\u8208\u5340","AreaEngName":"Xinxing Dist."},{"ZipCode":"801","AreaName":"\u524d\u91d1\u5340","AreaEngName":"Qianjin Dist."},{"ZipCode":"802","AreaName":"\u82d3\u96c5\u5340","AreaEngName":"Lingya Dist."},{"ZipCode":"803","AreaName":"\u9e7d\u57d5\u5340","AreaEngName":"Yancheng Dist."},{"ZipCode":"804","AreaName":"\u9f13\u5c71\u5340","AreaEngName":"Gushan Dist."},{"ZipCode":"805","AreaName":"\u65d7\u6d25\u5340","AreaEngName":"Qijin Dist."},{"ZipCode":"806","AreaName":"\u524d\u93ae\u5340","AreaEngName":"Qianzhen Dist."},{"ZipCode":"807","AreaName":"\u4e09\u6c11\u5340","AreaEngName":"Sanmin Dist."},{"ZipCode":"811","AreaName":"\u6960\u6893\u5340","AreaEngName":"Nanzi Dist."},{"ZipCode":"812","AreaName":"\u5c0f\u6e2f\u5340","AreaEngName":"Xiaogang Dist."},{"ZipCode":"813","AreaName":"\u5de6\u71df\u5340","AreaEngName":"Zuoying Dist."},{"ZipCode":"814","AreaName":"\u4ec1\u6b66\u5340","AreaEngName":"Renwu Dist."},{"ZipCode":"815","AreaName":"\u5927\u793e\u5340","AreaEngName":"Dashe Dist."},{"ZipCode":"817","AreaName":"\u6771\u6c99\u7fa4\u5cf6","AreaEngName":"Dongsha Islands"},{"ZipCode":"819","AreaName":"\u5357\u6c99\u7fa4\u5cf6","AreaEngName":"Nansha Islands"},{"ZipCode":"820","AreaName":"\u5ca1\u5c71\u5340","AreaEngName":"Gangshan Dist."},{"ZipCode":"821","AreaName":"\u8def\u7af9\u5340","AreaEngName":"Luzhu Dist."},{"ZipCode":"822","AreaName":"\u963f\u84ee\u5340","AreaEngName":"Alian Dist."},{"ZipCode":"823","AreaName":"\u7530\u5bee\u5340","AreaEngName":"Tianliao Dist."},{"ZipCode":"824","AreaName":"\u71d5\u5de2\u5340","AreaEngName":"Yanchao Dist."},{"ZipCode":"825","AreaName":"\u6a4b\u982d\u5340","AreaEngName":"Qiaotou Dist."},{"ZipCode":"826","AreaName":"\u6893\u5b98\u5340","AreaEngName":"Ziguan Dist."},{"ZipCode":"827","AreaName":"\u5f4c\u9640\u5340","AreaEngName":"Mituo Dist."},{"ZipCode":"828","AreaName":"\u6c38\u5b89\u5340","AreaEngName":"Yong\u2019an Dist."},{"ZipCode":"829","AreaName":"\u6e56\u5167\u5340","AreaEngName":"Hunei Dist."},{"ZipCode":"830","AreaName":"\u9cf3\u5c71\u5340","AreaEngName":"Fengshan Dist."},{"ZipCode":"831","AreaName":"\u5927\u5bee\u5340","AreaEngName":"Daliao Dist."},{"ZipCode":"832","AreaName":"\u6797\u5712\u5340","AreaEngName":"Linyuan Dist."},{"ZipCode":"833","AreaName":"\u9ce5\u677e\u5340","AreaEngName":"Niaosong Dist."},{"ZipCode":"840","AreaName":"\u5927\u6a39\u5340","AreaEngName":"Dashu Dist."},{"ZipCode":"842","AreaName":"\u65d7\u5c71\u5340","AreaEngName":"Qishan Dist."},{"ZipCode":"843","AreaName":"\u7f8e\u6fc3\u5340","AreaEngName":"Meinong Dist."},{"ZipCode":"844","AreaName":"\u516d\u9f9c\u5340","AreaEngName":"Liugui Dist."},{"ZipCode":"845","AreaName":"\u5167\u9580\u5340","AreaEngName":"Neimen Dist."},{"ZipCode":"846","AreaName":"\u6749\u6797\u5340","AreaEngName":"Shanlin Dist."},{"ZipCode":"847","AreaName":"\u7532\u4ed9\u5340","AreaEngName":"Jiaxian Dist."},{"ZipCode":"848","AreaName":"\u6843\u6e90\u5340","AreaEngName":"Taoyuan Dist."},{"ZipCode":"849","AreaName":"\u90a3\u746a\u590f\u5340","AreaEngName":"Namaxia Dist."},{"ZipCode":"851","AreaName":"\u8302\u6797\u5340","AreaEngName":"Maolin Dist."},{"ZipCode":"852","AreaName":"\u8304\u8423\u5340","AreaEngName":"Qieding Dist."}]},{"CityName":"\u5357\u6d77\u5cf6","CityEngName":"Nanhai","AreaList":[{"ZipCode":"817","AreaName":"\u6771\u6c99\u7fa4\u5cf6","AreaEngName":"Dongsha Islands"},{"ZipCode":"819","AreaName":"\u5357\u6c99\u7fa4\u5cf6","AreaEngName":"Nansha Islands"}]},{"CityName":"\u6f8e\u6e56\u7e23","CityEngName":"Penghu County","AreaList":[{"ZipCode":"880","AreaName":"\u99ac\u516c\u5e02","AreaEngName":"Magong City"},{"ZipCode":"881","AreaName":"\u897f\u5dbc\u9109","AreaEngName":"Xiyu Township"},{"ZipCode":"882","AreaName":"\u671b\u5b89\u9109","AreaEngName":"Wang\u2019an Township"},{"ZipCode":"883","AreaName":"\u4e03\u7f8e\u9109","AreaEngName":"Qimei Township"},{"ZipCode":"884","AreaName":"\u767d\u6c99\u9109","AreaEngName":"Baisha Township"},{"ZipCode":"885","AreaName":"\u6e56\u897f\u9109","AreaEngName":"Huxi Township"}]},{"CityName":"\u91d1\u9580\u7e23","CityEngName":"Kinmen County","AreaList":[{"ZipCode":"890","AreaName":"\u91d1\u6c99\u93ae","AreaEngName":"Jinsha Township"},{"ZipCode":"891","AreaName":"\u91d1\u6e56\u93ae","AreaEngName":"Jinhu Township"},{"ZipCode":"892","AreaName":"\u91d1\u5be7\u9109","AreaEngName":"Jinning Township"},{"ZipCode":"893","AreaName":"\u91d1\u57ce\u93ae","AreaEngName":"Jincheng Township"},{"ZipCode":"894","AreaName":"\u70c8\u5dbc\u9109","AreaEngName":"Lieyu Township"},{"ZipCode":"896","AreaName":"\u70cf\u5775\u9109","AreaEngName":"Wuqiu Township"}]},{"CityName":"\u5c4f\u6771\u7e23","CityEngName":"Pingtung County","AreaList":[{"ZipCode":"900","AreaName":"\u5c4f\u6771\u5e02","AreaEngName":"Pingtung City"},{"ZipCode":"901","AreaName":"\u4e09\u5730\u9580\u9109","AreaEngName":"Sandimen Township"},{"ZipCode":"902","AreaName":"\u9727\u81fa\u9109","AreaEngName":"Wutai Township"},{"ZipCode":"903","AreaName":"\u746a\u5bb6\u9109","AreaEngName":"Majia Township"},{"ZipCode":"904","AreaName":"\u4e5d\u5982\u9109","AreaEngName":"Jiuru Township"},{"ZipCode":"905","AreaName":"\u91cc\u6e2f\u9109","AreaEngName":"Ligang Township"},{"ZipCode":"906","AreaName":"\u9ad8\u6a39\u9109","AreaEngName":"Gaoshu Township"},{"ZipCode":"907","AreaName":"\u9e7d\u57d4\u9109","AreaEngName":"Yanpu Township"},{"ZipCode":"908","AreaName":"\u9577\u6cbb\u9109","AreaEngName":"Changzhi Township"},{"ZipCode":"909","AreaName":"\u9e9f\u6d1b\u9109","AreaEngName":"Linluo Township"},{"ZipCode":"911","AreaName":"\u7af9\u7530\u9109","AreaEngName":"Zhutian Township"},{"ZipCode":"912","AreaName":"\u5167\u57d4\u9109","AreaEngName":"Neipu Township"},{"ZipCode":"913","AreaName":"\u842c\u4e39\u9109","AreaEngName":"Wandan Township"},{"ZipCode":"920","AreaName":"\u6f6e\u5dde\u93ae","AreaEngName":"Chaozhou Township"},{"ZipCode":"921","AreaName":"\u6cf0\u6b66\u9109","AreaEngName":"Taiwu Township"},{"ZipCode":"922","AreaName":"\u4f86\u7fa9\u9109","AreaEngName":"Laiyi Township"},{"ZipCode":"923","AreaName":"\u842c\u5dd2\u9109","AreaEngName":"Wanluan Township"},{"ZipCode":"924","AreaName":"\u5d01\u9802\u9109","AreaEngName":"Kanding Township"},{"ZipCode":"925","AreaName":"\u65b0\u57e4\u9109","AreaEngName":"Xinpi Township"},{"ZipCode":"926","AreaName":"\u5357\u5dde\u9109","AreaEngName":"Nanzhou Township"},{"ZipCode":"927","AreaName":"\u6797\u908a\u9109","AreaEngName":"Linbian Township"},{"ZipCode":"928","AreaName":"\u6771\u6e2f\u93ae","AreaEngName":"Donggang Township"},{"ZipCode":"929","AreaName":"\u7409\u7403\u9109","AreaEngName":"Liuqiu Township"},{"ZipCode":"931","AreaName":"\u4f73\u51ac\u9109","AreaEngName":"Jiadong Township"},{"ZipCode":"932","AreaName":"\u65b0\u5712\u9109","AreaEngName":"Xinyuan Township"},{"ZipCode":"940","AreaName":"\u678b\u5bee\u9109","AreaEngName":"Fangliao Township"},{"ZipCode":"941","AreaName":"\u678b\u5c71\u9109","AreaEngName":"Fangshan Township"},{"ZipCode":"942","AreaName":"\u6625\u65e5\u9109","AreaEngName":"Chunri Township"},{"ZipCode":"943","AreaName":"\u7345\u5b50\u9109","AreaEngName":"Shizi Township"},{"ZipCode":"944","AreaName":"\u8eca\u57ce\u9109","AreaEngName":"Checheng Township"},{"ZipCode":"945","AreaName":"\u7261\u4e39\u9109","AreaEngName":"Mudan Township"},{"ZipCode":"946","AreaName":"\u6046\u6625\u93ae","AreaEngName":"Hengchun Township"},{"ZipCode":"947","AreaName":"\u6eff\u5dde\u9109","AreaEngName":"Manzhou Township"}]},{"CityName":"\u81fa\u6771\u7e23","CityEngName":"Taitung County","AreaList":[{"ZipCode":"950","AreaName":"\u81fa\u6771\u5e02","AreaEngName":"Taitung City"},{"ZipCode":"951","AreaName":"\u7da0\u5cf6\u9109","AreaEngName":"Ludao Township"},{"ZipCode":"952","AreaName":"\u862d\u5dbc\u9109","AreaEngName":"Lanyu Township"},{"ZipCode":"953","AreaName":"\u5ef6\u5e73\u9109","AreaEngName":"Yanping Township"},{"ZipCode":"954","AreaName":"\u5351\u5357\u9109","AreaEngName":"Beinan Township"},{"ZipCode":"955","AreaName":"\u9e7f\u91ce\u9109","AreaEngName":"Luye Township"},{"ZipCode":"956","AreaName":"\u95dc\u5c71\u93ae","AreaEngName":"Guanshan Township"},{"ZipCode":"957","AreaName":"\u6d77\u7aef\u9109","AreaEngName":"Haiduan Township"},{"ZipCode":"958","AreaName":"\u6c60\u4e0a\u9109","AreaEngName":"Chishang Township"},{"ZipCode":"959","AreaName":"\u6771\u6cb3\u9109","AreaEngName":"Donghe Township"},{"ZipCode":"961","AreaName":"\u6210\u529f\u93ae","AreaEngName":"Chenggong Township"},{"ZipCode":"962","AreaName":"\u9577\u6ff1\u9109","AreaEngName":"Changbin Township"},{"ZipCode":"963","AreaName":"\u592a\u9ebb\u91cc\u9109","AreaEngName":"Taimali Township"},{"ZipCode":"964","AreaName":"\u91d1\u5cf0\u9109","AreaEngName":"Jinfeng Township"},{"ZipCode":"965","AreaName":"\u5927\u6b66\u9109","AreaEngName":"Dawu Township"},{"ZipCode":"966","AreaName":"\u9054\u4ec1\u9109","AreaEngName":"Daren Township"}]},{"CityName":"\u82b1\u84ee\u7e23","CityEngName":"Hualien County","AreaList":[{"ZipCode":"970","AreaName":"\u82b1\u84ee\u5e02","AreaEngName":"Hualien City"},{"ZipCode":"971","AreaName":"\u65b0\u57ce\u9109","AreaEngName":"Xincheng Township"},{"ZipCode":"972","AreaName":"\u79c0\u6797\u9109","AreaEngName":"Xiulin Township"},{"ZipCode":"973","AreaName":"\u5409\u5b89\u9109","AreaEngName":"Ji\u2019an Township"},{"ZipCode":"974","AreaName":"\u58fd\u8c50\u9109","AreaEngName":"Shoufeng Township"},{"ZipCode":"975","AreaName":"\u9cf3\u6797\u93ae","AreaEngName":"Fenglin Township"},{"ZipCode":"976","AreaName":"\u5149\u5fa9\u9109","AreaEngName":"Guangfu Township"},{"ZipCode":"977","AreaName":"\u8c50\u6ff1\u9109","AreaEngName":"Fengbin Township"},{"ZipCode":"978","AreaName":"\u745e\u7a57\u9109","AreaEngName":"Ruisui Township"},{"ZipCode":"979","AreaName":"\u842c\u69ae\u9109","AreaEngName":"Wanrong Township"},{"ZipCode":"981","AreaName":"\u7389\u91cc\u93ae","AreaEngName":"Yuli Township"},{"ZipCode":"982","AreaName":"\u5353\u6eaa\u9109","AreaEngName":"Zhuoxi Township"},{"ZipCode":"983","AreaName":"\u5bcc\u91cc\u9109","AreaEngName":"Fuli Township"}]}]')}},[[10,1,2]]]);
//# sourceMappingURL=main.867b32e5.chunk.js.map