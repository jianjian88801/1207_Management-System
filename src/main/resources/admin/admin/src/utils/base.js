const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootj2zt8/",
            name: "springbootj2zt8",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootj2zt8/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大创管理系统"
        } 
    }
}
export default base
