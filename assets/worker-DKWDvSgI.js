(function(){"use strict";function main(){let runner;self.addEventListener("message",e=>{const{type,data}=e.data;if(type==="code"){const{code}=data,module=eval(code+`
self.exports = exports;`);runner=module.runner}if(type==="play"){if(!runner)return;runner.play()}if(type==="pause"){if(!runner)return;runner.pause()}if(type==="reset"){if(!runner)return;runner.reset()}if(type==="step"){if(!runner)return;runner.step()}postMessage({type:"confirmation",data:{type,messageId:data.messageId}})}),postMessage({type:"ready"})}main()})();
//# sourceMappingURL=worker-DKWDvSgI.js.map
