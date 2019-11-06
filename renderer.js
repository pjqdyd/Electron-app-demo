
//渲染进程

//获取进程信息
function getProcessInfo(){
    console.log("CPU使用率:", process.getCPUUsage());
    console.log("当前平台:", process.platform);
}