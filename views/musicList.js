import { musicList, showMusicListType, musicListfilterSize } from "../data/index.js";
import { addTip } from "./tip.js";

const MusicList = {
  setup() {
    /** 
     * @param {string} name
     * @param {string} atrist
     */
    const copyMusicName = (name, atrist, index) => {
      let text = `点歌 ${name}  ${atrist}`;
      if (text.length > 20) {
        text = `点歌 index_${index}`;
      }
      navigator.clipboard.writeText(text).catch(() => {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      });
      addTip("已复制 " + text.slice(3));
    };

    return {
      musicList,
      musicListfilterSize,
      show: showMusicListType,
      copyMusicName
    };
  },
  template: `
  <article class="music-list-box">
    <ul class="music-list text-color">
      <li>
        <p>曲名</p>
        <p>歌手</p>
        <p>类别</p>
        <p>语种</p>
        <p>描述</p>
      </li>
      <li class="list-item-visibility" :class="{'even':musicListfilterSize.musicKey[item.name]}" v-for="(item,index) of musicList.list" @click="copyMusicName(item._name,item._atrist,index)" v-show="
      item.isShow && 
      ((show.category === 'ALL' ||  show.category === item.category) &&
      ( show.lang === 'ALL' || show.lang === item.language))
      ">
        <p v-html="item.name"></p>
        <p v-html="item.atrist"></p>
        <p>{{ item.category }}</p>
        <p>{{ item.language }}</p>
        <p v-html="item.describe"></p>
      </li>
    </ul>
  </article>
  `
};

export default MusicList;