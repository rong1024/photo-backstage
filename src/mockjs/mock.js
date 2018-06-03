const Mock = require('mockjs');

const Random = Mock.Random;

const adminData = () => {// eslint-disable-line

  const newObject = {
    token: Random.csentence(5, 30),
    account: Random.csentence(10000, 99999),
    name: Random.cname(),
  };
  return newObject;
};

const groups = {
  {
    "date": "2016-05-02",
    "title": "标题1",
    "status": "未审核",
    "user":"张三",
    "id":"100"
    },
    {
    "date": "2016-05-03",
    "title": "标题2",
    "status": "已审核",
    "user":"李四",
    "id":"101"
    }, 
    {
    "date": "2016-05-02",
    "title": "标题3",
    "status": "已审核",
    "user":"赵五",
    "id":"102"
    }, 
    {
    "date": "2016-05-02",
    "title": "标题4",
    "status": "已审核",
    "user":"孙四",
    "id":"103"
    }
};
Mock.mock('/admins/token', /post|get/i, adminData);// 当post或get请求到/news路由时Mock会拦截请求并返回上面的数据
Mock.mock('/groups', /post|get/i, groups);