import Home from './Home'
import Vue from 'vue'

const app = new Vue( Home )

app.$mount()

export default {
  config: {
    navigationBarTitleText: 'Hello',
  }
}
