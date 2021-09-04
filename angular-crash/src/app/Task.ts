//similar to a class, here we define of the model of the task, what fields should have the task
export interface Task{
    id?: number;//! because initiality we dont have id until json server
    text: string;
    day: string;
    reminder: boolean;
}