import { Tabbar, TabbarItem, Form, Field, Button } from 'vant'
let components = [Tabbar, TabbarItem, Form, Field, Button]
export default function registerVant(app) {
  components.map((v) => {
    app.use(v)
  })
}
