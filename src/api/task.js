import news from "../mockData/news.json";
import task from "../mockData/task.json";

export default {
  getNews: () =>
    new Promise(resolve => {
      resolve(news);
    }),

  getTasks: () =>
    new Promise(resolve => {
      resolve(task);
    }),
};
