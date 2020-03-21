import axios from "axios";

const prefix = /github/.test(window.location.host)
  ? "/react-cache-router/build"
  : "";

const request = url =>
  new Promise(resolve => {
    axios
      .get(url)
      .then(res => {
        return res.data;
      })
      .then(data => {
        data = data.map(item => {
          item.icon = `${prefix}/${item.icon}.svg`;
          return item;
        });
        setTimeout(() => {
          resolve(data);
        }, 1000);
      });
  });

export default request;
