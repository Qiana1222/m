import { musicListData } from "../assets/list.js";
import { computed, reactive } from "../vue.js";
import { search } from "./search.js";

/** @typedef {import("./types.js").MusicList} MusicList */
/** @type {{lang:string[],catgorys:string[],list:MusicList[]}} */
export const musicList = reactive(musicListData);
export const searchKey = {
  name: "曲名",
  atrist: "歌手",
  describe: "描述",
};
export const searchvalue = reactive({
  type: "name",
  value: "",
});
export const showMusicListType = reactive({
  category: "ALL",
  lang: "ALL"
});

export const musicListfilterSize = (() => {
  const musicListData = Object.values(musicList.list).flat(1);

  return computed(() => {
    let newList = musicListData;

    const filterSize = (key, value) => {
      newList = newList.filter((p) => {
        if (p[key] === value) return p;
      }, 0);
    };

    if (showMusicListType.lang !== "ALL") {
      filterSize("language", showMusicListType.lang);
    }
    if (showMusicListType.category !== "ALL") {
      filterSize("category", showMusicListType.category);
    }
    filterSize("isShow", true);

    const musicKey = newList.reduce((result, currentValue, index) => {
      result[currentValue.name] = index % 2;
      return result;
    }, {});

    return { len: newList.length, musicKey };
  });
})();

export const updateSearchType = (type) => {
  searchvalue.type = type;
};

export const updateShowMusicList = {
  category: (category) => {
    showMusicListType.category = category;
  },
  lang: (lang) => {
    showMusicListType.lang = lang;
  }
};

export const toSearch = search();