import { Button } from 'vant'
let components = [Button]
export default function registerVant(app) {
  components.map((v) => {
    app.use(v)
  })
}
