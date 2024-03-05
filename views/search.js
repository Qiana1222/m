import {
  musicList, searchKey, searchvalue, updateShowMusicList,
  updateSearchType, toSearch, musicListfilterSize
} from "../data/index.js";

const Search = {
  setup() {
    const search = () => {
      toSearch(searchvalue.type, searchvalue.value);
    };

    return {
      musicList,
      searchKey,
      searchvalue,
      musicListfilterSize,
      updateShowMusicList,
      updateSearchType,
      search
    };
  },
  template: `
  <article class="search text-color">
    <div class="search-input">
      <select class="select-style select-border select text-color" name="Category"
      @change="updateSearchType($event.target.value)">
        <option v-for="(p, key) in searchKey" :value="key">
          {{ p }}
        </option>
      </select>
      <input id="search" class="select-style text-color" type="search"  @keyup.enter="search" v-model="searchvalue.value" required>
      <div class="search-button" @click="search">搜索</div>
    </div>

    <div class="filter-size">ALL-{{musicListfilterSize.len}}</div>
    <div>类别:</div>
    <select class="select-style select-border select text-color" name="Category"
    @change="updateShowMusicList.category($event.target.value)">
      <option v-for="p of musicList.categorys" :value="p">
        {{ p }}
      </option>
    </select>
    <div>语言:</div>
    <select class="select-style select-border select text-color" name="lang"
      @change="updateShowMusicList.lang($event.target.value)">
      <option v-for="p of musicList.lang" :value="p">
        {{ p }}
      </option>
    </select>
  </article>
  `
};
export default Search;