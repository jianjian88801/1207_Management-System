
var projectName = '大创管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '优秀项目',
	url: './pages/youxiuxiangmu/list.html'
}, 
{
	name: '项目信息',
	url: './pages/xiangmuxinxi/list.html'
}, 
{
	name: '评审方案',
	url: './pages/pingshenfangan/list.html'
}, 

{
	name: '大创资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springbootj2zt8/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"指导老师","menuJump":"列表","tableName":"zhidaolaoshi"}],"menu":"指导老师管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"院系管理员","menuJump":"列表","tableName":"yuanxiguanliyuan"}],"menu":"院系管理员管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"优秀项目","menuJump":"列表","tableName":"youxiuxiangmu"}],"menu":"优秀项目管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"项目类型","menuJump":"列表","tableName":"xiangmuleixing"}],"menu":"项目类型管理"},{"child":[{"buttons":["查看","新增","修改"],"menu":"项目信息","menuJump":"列表","tableName":"xiangmuxinxi"}],"menu":"项目信息管理"},{"child":[{"buttons":["查看","审核"],"menu":"项目申报","menuJump":"列表","tableName":"xiangmushenbao"}],"menu":"项目申报管理"},{"child":[{"buttons":["查看"],"menu":"项目中检","menuJump":"列表","tableName":"xiangmuzhongjian"}],"menu":"项目中检管理"},{"child":[{"buttons":["查看"],"menu":"项目结项","menuJump":"列表","tableName":"xiangmujiexiang"}],"menu":"项目结项管理"},{"child":[{"buttons":["查看","评审"],"menu":"项目评审","menuJump":"列表","tableName":"xiangmupingshen"}],"menu":"项目评审管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"专家评审","menuJump":"列表","tableName":"zhuanjiapingshen"}],"menu":"专家评审管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"评审方案","menuJump":"列表","tableName":"pingshenfangan"}],"menu":"评审方案管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"大创资讯","tableName":"news"},{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"优秀项目列表","menuJump":"列表","tableName":"youxiuxiangmu"}],"menu":"优秀项目模块"},{"child":[{"buttons":["查看"],"menu":"项目信息列表","menuJump":"列表","tableName":"xiangmuxinxi"}],"menu":"项目信息模块"},{"child":[{"buttons":["查看"],"menu":"评审方案列表","menuJump":"列表","tableName":"pingshenfangan"}],"menu":"评审方案模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"优秀项目","menuJump":"列表","tableName":"youxiuxiangmu"}],"menu":"优秀项目管理"},{"child":[{"buttons":["查看"],"menu":"项目类型","menuJump":"列表","tableName":"xiangmuleixing"}],"menu":"项目类型管理"},{"child":[{"buttons":["查看","申报"],"menu":"项目信息","menuJump":"列表","tableName":"xiangmuxinxi"}],"menu":"项目信息管理"},{"child":[{"buttons":["新增","查看","修改"],"menu":"项目申报","menuJump":"列表","tableName":"xiangmushenbao"}],"menu":"项目申报管理"},{"child":[{"buttons":["查看","新增","修改"],"menu":"项目中检","menuJump":"列表","tableName":"xiangmuzhongjian"}],"menu":"项目中检管理"},{"child":[{"buttons":["查看","新增","修改"],"menu":"项目结项","menuJump":"列表","tableName":"xiangmujiexiang"}],"menu":"项目结项管理"},{"child":[{"buttons":["新增","查看","修改"],"menu":"项目评审","menuJump":"列表","tableName":"xiangmupingshen"}],"menu":"项目评审管理"},{"child":[{"buttons":["查看"],"menu":"专家评审","menuJump":"列表","tableName":"zhuanjiapingshen"}],"menu":"专家评审管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"优秀项目列表","menuJump":"列表","tableName":"youxiuxiangmu"}],"menu":"优秀项目模块"},{"child":[{"buttons":["查看"],"menu":"项目信息列表","menuJump":"列表","tableName":"xiangmuxinxi"}],"menu":"项目信息模块"},{"child":[{"buttons":["查看"],"menu":"评审方案列表","menuJump":"列表","tableName":"pingshenfangan"}],"menu":"评审方案模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"优秀项目","menuJump":"列表","tableName":"youxiuxiangmu"}],"menu":"优秀项目管理"},{"child":[{"buttons":["查看"],"menu":"项目类型","menuJump":"列表","tableName":"xiangmuleixing"}],"menu":"项目类型管理"},{"child":[{"buttons":["查看"],"menu":"项目信息","menuJump":"列表","tableName":"xiangmuxinxi"}],"menu":"项目信息管理"},{"child":[{"buttons":["查看","修改"],"menu":"项目申报","menuJump":"列表","tableName":"xiangmushenbao"}],"menu":"项目申报管理"},{"child":[{"buttons":["查看","修改"],"menu":"项目中检","menuJump":"列表","tableName":"xiangmuzhongjian"}],"menu":"项目中检管理"},{"child":[{"buttons":["查看","修改"],"menu":"项目结项","menuJump":"列表","tableName":"xiangmujiexiang"}],"menu":"项目结项管理"},{"child":[{"buttons":["查看"],"menu":"项目评审","menuJump":"列表","tableName":"xiangmupingshen"}],"menu":"项目评审管理"},{"child":[{"buttons":["查看"],"menu":"专家评审","menuJump":"列表","tableName":"zhuanjiapingshen"}],"menu":"专家评审管理"},{"child":[{"buttons":["查看"],"menu":"评审方案","menuJump":"列表","tableName":"pingshenfangan"}],"menu":"评审方案管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"优秀项目列表","menuJump":"列表","tableName":"youxiuxiangmu"}],"menu":"优秀项目模块"},{"child":[{"buttons":["查看"],"menu":"项目信息列表","menuJump":"列表","tableName":"xiangmuxinxi"}],"menu":"项目信息模块"},{"child":[{"buttons":["查看"],"menu":"评审方案列表","menuJump":"列表","tableName":"pingshenfangan"}],"menu":"评审方案模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"指导老师","tableName":"zhidaolaoshi"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"优秀项目","menuJump":"列表","tableName":"youxiuxiangmu"}],"menu":"优秀项目管理"},{"child":[{"buttons":["查看"],"menu":"项目类型","menuJump":"列表","tableName":"xiangmuleixing"}],"menu":"项目类型管理"},{"child":[{"buttons":["查看"],"menu":"项目信息","menuJump":"列表","tableName":"xiangmuxinxi"}],"menu":"项目信息管理"},{"child":[{"buttons":["查看","审核","修改"],"menu":"项目申报","menuJump":"列表","tableName":"xiangmushenbao"}],"menu":"项目申报管理"},{"child":[{"buttons":["查看","审核","修改"],"menu":"项目中检","menuJump":"列表","tableName":"xiangmuzhongjian"}],"menu":"项目中检管理"},{"child":[{"buttons":["查看","审核","修改"],"menu":"项目结项","menuJump":"列表","tableName":"xiangmujiexiang"}],"menu":"项目结项管理"},{"child":[{"buttons":["查看"],"menu":"项目评审","menuJump":"列表","tableName":"xiangmupingshen"}],"menu":"项目评审管理"},{"child":[{"buttons":["查看"],"menu":"专家评审","menuJump":"列表","tableName":"zhuanjiapingshen"}],"menu":"专家评审管理"},{"child":[{"buttons":["查看"],"menu":"评审方案","menuJump":"列表","tableName":"pingshenfangan"}],"menu":"评审方案管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"优秀项目列表","menuJump":"列表","tableName":"youxiuxiangmu"}],"menu":"优秀项目模块"},{"child":[{"buttons":["查看"],"menu":"项目信息列表","menuJump":"列表","tableName":"xiangmuxinxi"}],"menu":"项目信息模块"},{"child":[{"buttons":["查看"],"menu":"评审方案列表","menuJump":"列表","tableName":"pingshenfangan"}],"menu":"评审方案模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"院系管理员","tableName":"yuanxiguanliyuan"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
