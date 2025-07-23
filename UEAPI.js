
import WebUI from "./WebUI.js";

export default class UE
{
    //peer 发送消息
    static EmitMessage(jsonObject)
    {
        window.ps.emitMessage(jsonObject);
        console.log("向UE发送数据", jsonObject);
    }

    //WebUI模式发送消息
    static EmitWebUIMessage(funName, jsonObject)
    {
        WebUI.sendMessage(funName, jsonObject);
    }

    static EmitCommand(stringData)
    {
         let jsonData = {
            Name: "ExecCommandline",
            Data: {"Command": stringData}
        }
        UE.EmitMessage(jsonData);
        UE.EmitWebUIMessage("ExecCommandline", jsonData);
    }

    //跳转到某个视点
    static FlyToViewpoint(time, viewpointID)
    {
        let jsonData = {
            Name: "FlyToViewpoint",
            Data: {"Time": time, "ViewPointID": viewpointID}
        }
        UE.EmitMessage(jsonData);
        UE.EmitWebUIMessage("ExecCommandline", jsonData);
    }

    //设置Actor的可见性
    static SetActorVisible(isShow)
    {
        let jsonData = {
            Name: "SetActorVisible",
            Data: {"Name": "Pipeline_2", "Visible":false}
        }
        UE.EmitMessage(jsonData);
        UE.EmitWebUIMessage("ExecCommandline", jsonData);
    }
}
