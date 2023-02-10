// 설계
interface iTodo {
  id: number;
  content: string;
  isCompleted: boolean;
  category: string;
  tags?: string[];
}

class Todo implements iTodo {
  id: number;
  content: string;
  isCompleted: boolean;
  category: string;
  tags?: string[];

  constructor(id: number, content: string, isCompleted: boolean, category: string, tags: string[] = []) {
    this.id = id
    this.content = content
    this.category = category
    this.isCompleted = isCompleted
    this.tags = tags
  }
}

class TTodos {
  private ids: iTodo[];

  create(
    content: string,
    isCompleted: boolean,
    category: string,
    tags?: string[]
  ): number {
    if (content.length === 0) return -1

    const newTodo = new Todo(new Date().getTime(), content, isCompleted, category, tags)
    this.ids.push(newTodo)

    return 0;
  }

  read(id: number): iTodo | iTodo[] {
    return this.ids.find(ele => ele.id === id) || []
  }

  delete(id: number) {
    const findTodoIndex = this.ids.findIndex(ele => ele.id === id)
    this.ids.splice(findTodoIndex, 1)
  }

  deleteTag(id: number, deleteTag: string[]) {
    this.delete(id)

    const tagSet = new Set(deleteTag)
    const result = this.filterArrByTag(this.ids, tagSet)

    this.ids = result
  }

  private filterArrByTag(arr: iTodo[], tagSet: Set<string>) {
    const temp = structuredClone(arr)

    const res = temp.filter(todo => {
      if (!todo.tags) return true

      for (let tag of todo.tags) {
        if (tagSet.has(tag)) return false
      }
    });

    return res
  }
}