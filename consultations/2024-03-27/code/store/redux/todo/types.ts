export interface TodoSliceState {
    tasks: Task[]
}

export interface Task {
    id: string
    task?: string
    status?: boolean
}