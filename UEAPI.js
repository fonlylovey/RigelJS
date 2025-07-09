
export class UE
{
    //
    static EmitMessage(jsonObject)
    {
        window.ps.emitMessage(jsonObject);
        console.log("向UE发送数据", jsonObject);
    }

    static EmitCommand(stringData)
    {
         let jsonData = {
            Name: "ExecCommandline",
            Param: {"Command": stringData}
        }
        UE.EmitMessage(jsonData);
        window.ps.emitMessage(jsonData);
    }

    //跳转到某个视点
    static FlyToViewpoint(time, viewpointID)
    {
        let jsonData = {
            Name: "FlyToViewpoint",
            Param: {"Time": time, "ViewPointID": viewpointID}
        }
        UE.EmitMessage(jsonData);
    }

    //跳转到某个视点
    static SetLJSAActorVisible(isShow)
    {
        let jsonData = {
            Name: "SetLJSABorderVisible",
            Param: {"Visible" : isShow}
        }
        UE.EmitMessage(jsonData);
    }
}
