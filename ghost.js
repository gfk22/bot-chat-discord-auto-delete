import config from "./config.js";
import cron from "cron";

export const ghost = (client) => {
  let invite = new cron.CronJob(
    "*/1 * * * *",
    async () => {
      let randomTimer = Math.floor(Math.random() * 5000) + 1000;
      setTimeout(() => {
        client.send("xie xie keep shiling mooh", config.botChannel).then((msg) =>
          setTimeout(() => {
            client.delete_message(msg.id, config.botChannel);
          }, 100)
        );
      }, randomTimer);
    },
    null,
    true,
    config.timezone
  );
};
