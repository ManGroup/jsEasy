/**
 * Created by chenyingxi on 2014/11/25.
 */

/** 这个是对于数据库表设计的 一个简要介绍  后期变动可能较大 仅供参考**/


/**用户表  (User)**/
/*
*    id          varchar(20)       用户Id  建议使用UUID系统生成      (PRIMARY KEY)
*   userid      varchar(20)        用户的登陆名
 *  password    varchar(20)        用户的登陆密码
 *   role          int              角色（外键关联role的id）
 *  sex          varchar(2)         性别
*   realname     varchar(10)        用户姓名
*   QQ            varchar(12)       qq
*   telephone    varchar(11)        电话
*   address      varchar(100)       详细地址
*   email        varchar(30)        电子邮箱
*
* */
/**用户角色表(Role)   后期可能根据角色进行权限划分**/
/**
 * role_id          int
 * role_name        varchar(10)
 */

/****/


