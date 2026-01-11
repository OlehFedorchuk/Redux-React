// export const addTask = (newTask) => {
//   return {
//     type: "tasks/addTask",
//     payload: newTask,
//   };
// };

// export const deleteTask = (taskID) => {
//   return {
//     type: "tasks/deleteTask",
//     payload: taskID,
//   };
// };
// export const toggleCompleted = (taskID) => {
//   return {
//     type: "tasks/toggleCompleted",
//     payload: taskID,
//   };
// };
// export const setStatusFilter = (value) => {
//   return {
//     type: "filters/setStatusFilters",
//     payload: value,
//   };
// };

// Analogue of creating actions!!!

// 1. Імпортуємо функцію createAction
import { createAction } from "@reduxjs/toolkit";

// 2. Створюємо фабрики екшенів
export const addTask = createAction("tasks/addTask");

export const deleteTask = createAction("tasks/deleteTask");

export const toggleCompleted = createAction("tasks/toggleCompleted");

export const setStatusFilter = createAction("filters/setStatusFilter");

// console.log(toggleComleted(1));
// console.log(setStatusFilter("hello"));
