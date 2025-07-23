class WebUI {
  /**
   * 向UE5发送事件和数据
   * @param {string} eventName - 事件名称
   * @param {any} [data] - 要发送的数据，可选
   */
  static sendMessage(eventName, data) {
    // 检查是否存在UE5的接口对象
    if (typeof window.ue === "object" && typeof window.ue.interface === "object") {
      // 直接调用UE5的广播方法
      window.ue.interface.broadcast(
        eventName, 
        data !== undefined ? JSON.stringify(data) : ""
      );
    } else {
      // 如果没有UE5接口，使用hash方式模拟
      if (typeof eventName === "string") {
        const message = [eventName, ""];
        if (data !== undefined) {
          message[1] = data;
        }
        
        const encodedMessage = encodeURIComponent(JSON.stringify(message));
        
        // 使用history API或location.hash传递消息
        if (typeof history === "object" && typeof history.pushState === "function") {
          history.pushState({}, "", "#" + encodedMessage);
          history.pushState({}, "", "#" + encodeURIComponent("[]"));
        } else {
          document.location.hash = encodedMessage;
          document.location.hash = encodeURIComponent("[]");
        }
      }
    }
  }
}

// 导出类，支持ES6模块和CommonJS
export default WebUI;

// 为CommonJS环境提供兼容导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WebUI;
  module.exports.default = WebUI;
}
