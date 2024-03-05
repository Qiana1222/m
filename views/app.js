import MusicList from "./musicList.js";
import Search from "./search.js";
import Tip from "./tip.js";

const App = {
  components: {
    MusicList,
    Search,
    Tip
  },
  setup() {
  },
  template: `
  <article class="user-info text-color">
    <img src="./assets/userAvatar.jpg" alt="">
    <div>千雅Qiana</div>
    <div>个人势Vup｜怀揣洪荒意志的龙鱼体验官</div>
  </article>
  <Search />
  <MusicList />
  <Tip />
  `
};

export default App;