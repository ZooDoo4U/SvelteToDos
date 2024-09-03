// // https://dexie.org/docs/Tutorial/Svelte

// // db.ts
// import Dexie, { type EntityTable } from 'dexie';

// interface ToDo {
//   id: number;
//   title: string;
//   done: boolean;
// }

// const db = new Dexie('ToodsDb') as Dexie & {
//   todos: EntityTable<
//     ToDo,
//     'id' // primary key "id" (for the typings only)
//   >;
// };

// // Schema declaration:
// db.version(1).stores({
//   todos: '++id, name, age' // primary key "id" (for the runtime!)
// });

// export type { ToDo };
// export { db };

