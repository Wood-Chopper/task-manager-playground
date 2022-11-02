export type Item = {
  name: string
  description: string
  creationDate: Date
}

export type TodoList = {
  name: string
  items: Item[]
  creationDate: Date
}
