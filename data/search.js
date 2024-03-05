import { musicList } from "./index.js";

/** @typedef {import("./types.js").MusicList} MusicList */

export const search = () => {
  const musicListData = Object.values(musicList.list).flat(1);
  musicListData.forEach(p => {
    p.isShow = true;
    p._name = p.name;
    p._atrist = p.atrist;
    p._describe = p.describe;
  });

  /** @type {MusicList[]} */
  let currentSearchList = [];
  /**
   * @param {"name"|"atrist"|"describe"} key
   * @param {string} searchText
   */
  return (key, searchText) => {
    if (currentSearchList[0]) {
      currentSearchList.forEach((p) => {
        p.name = p._name;
        p.atrist = p._atrist;
        p.describe = p._describe;
      });
      currentSearchList = [];
    }
    if (!searchText) {
      musicListData.forEach(p => p.isShow = true);
      return;
    };

    musicListData.forEach((p) => {
      if (p[key] && p[key].includes(searchText)) {
        p[key] = replaceText(p[key], searchText);
        p.isShow = true;
        currentSearchList.push(p);
      } else {
        p.isShow = false;
      }
    });
  };
};

/** 
 * @param {string} value 
 * @param {string} text 
 */
const replaceText = (value, text) => {
  return value.replace(text, `<span class=\"text-highlight\">${text}</span>`);
};