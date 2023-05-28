import trottle from 'lodash.throttle';
import Player from '@vimeo/player';

const inframe = document.querySelector('iframe');
const player = new Player(inframe);
const KEY_STORAGE = 'videoplayer-current-time';
const time = JSON.parse(localStorage.getItem(KEY_STORAGE));

// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player,
// але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище.
// Нехай ключем для сховища буде рядок "videoplayer-current-time".

player.on(
  'timeupdate',
  trottle(function (data) {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(data.seconds));
  }),
  1000
);

// Під час перезавантаження сторінки скористайся методом setCurrentTime()
// з метою відновлення відтворення зі збереженої позиції.


player
  .setCurrentTime(time)
  .then(function (seconds) {
    seconds=JSON.parse(localStorage.getItem(KEY_STORAGE))
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
