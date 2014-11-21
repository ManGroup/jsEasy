/**
 * Created by Antony on 14/11/19.
 */
var jsEasyLocale = angular.module("jsEasy.locale", ["ngLocale"]);

jsEasyLocale.run(["$locale" , function ($locale) {
  angular.extend($locale, {
    LOGIN: {
      text: "正在使用登录控制器",
      username:"用户名",
      password:"密码",
      loginBtn: "登录",
      resetBtn: "重置",
      backBtn: "返回主页",
      success: "登录成功",
      error: "登录失败，用户名、密码有误，请重新登录"
    },
    HOME: {
      message: "我是小狗"
    },
    INDEX: {
      title: "这是引导页面"
    },
    COMMON: {
      hello: "你好",
      login: "登录",
      helloworld : "欢迎光临"
    }
  });
}]);
