import request from 'superagent';
// import superagentPromisePlugin from 'superagent-promise-plugin';

let loadingNums = 0;

/**
 * 往nodejs后台请求数据
 * @param {string} url - java后台请求地址
 * @param {object} opts - 请求参数对象
 */
const doRequest = (url, opts) => {
  console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  console.log(url);
  console.log(opts);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  loadingNums =0;
  return new Promise(function (resolve, reject) {
    loadingNums ++ ;
    debugger;
    request.post('/api').send({ url: "http://172.16.16.128:8080/KQGL/" + url, opts: opts })
        .end(function (err, res) {
          loadingNums -- ;
          if (err) {
            return reject(res);
          }

          if(loadingNums == 0){
            $('#lodaing').removeClass('active');
            console.log('结束');
          }

          console.log(loadingNums);
          return resolve(res.body)
        })
  })
}

export default doRequest;