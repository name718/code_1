function myAjax(url) {
  const promise = new Promise((reslove, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.readyState;
    xhr.onreadystatechange = function () {
      console.log(xhr.readyState);
      if (xhr.readyState === 4) {
        if (xhr.readyState === 200) {
          reslove(JSON.parse(xhr.responseText));
        } else {
          reject(new Error("请求失败"));
        }
      }
    };
    xhr.send(null);
  });
  return promise;
}
const URL = "../data.json";
myAjax(URL).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error)
})
