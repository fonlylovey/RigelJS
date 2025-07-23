
import WebUI from "./WebUI.js";



export default class UE
{
    static StreamMode = {WEBUI: 0, PEERSTREAM: 1};

    static UseStreamMode = UE.StreamMode.PEERSTREAM;

    //在像素流页面初始化的时候必须调用，确定使用什么模式
    static SetStreamMode(Mode)
    {
        UE.UseStreamMode = Mode;
    }

    static GetStreamMode()
    {
        return UE.UseStreamMode;
    }

    //peer 发送消息
    static EmitMessage(funName, jsonObject)
    {
        if(this.UseStreamMode == StreamMode.PEERSTREAM)
        {
            window.ps.emitMessage(jsonObject);
        }
        else
        {
            WebUI.sendMessage(funName, jsonObject);
        }
        console.log("向UE发送数据", jsonObject);
    }

    static EmitCommand(stringData)
    {
         let jsonData = {
            Name: "ExecCommandline",
            Data: {"Command": stringData}
        }
        UE.EmitMessage(jsonData);
    }

    //跳转到某个视点
    static FlyToViewpoint(time, viewpointID)
    {
        let jsonData = {
            Name: "FlyToViewpoint",
            Data: {"Time": time, "ViewPointID": viewpointID}
        }
        UE.EmitMessage(jsonData);
    }

    //设置Actor的可见性
    static SetActorVisible(actorName, isShow)
    {
        let jsonData = {
            Name: "SetActorVisible",
            Data: {"Name": actorName, "Visible":isShow}
        }
        UE.EmitMessage(jsonData);
    }
}
