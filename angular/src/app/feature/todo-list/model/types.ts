export type Item = {
  id: number
  name: string
  description: string
  creationDate: Date
}

export type TodoList = {
  id: number
  name: string
  items: Item[]
  creationDate: Date
}
