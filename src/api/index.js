import axios from "axios";

const prefix = /github/.test(window.location.host)
  ? "/react-cache-router/build"
  : "";

export const getAppList = () =>
  new Promise(resolve => {
    axios
      .get(`${prefix}/app-list.json`)
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

export const getAppDetail = appName =>
  new Promise(resolve => {
    axios
      .get(`${prefix}/app-list.json`)
      .then(res => {
        return res.data;
      })
      .then(data => {
        data = data.map(item => {
          item.icon = `${prefix}/${item.icon}.svg`;
          return item;
        });
        const appDetail = data.find(item => item.title === appName);
        resolve(appDetail);
      });
  });
