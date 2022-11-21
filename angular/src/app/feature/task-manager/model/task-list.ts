export type Item = {
  id: number
  name: string
  creationDate: Date
  checked: boolean
}

export type TaskList = {
  id: number
  name: string
  items: Item[]
  creationDate: Date
}
