export const initialStore = () => {
  return {
    message: null,
    todos: [
      { id: 1, title: "Make the bed", background: null },
      { id: 2, title: "Do my homework", background: null }
    ],
    contacts: [
      
      {
        id: 1,
        name: "Lucas Calvo",
        address: "2101 Ludlam Rd",
        phone: "786-914-9920",
        email: "lucascalvo2903@gmail.com",
        image: "https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png"
      }
    ]
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task': {
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map(todo =>
          todo.id === id ? { ...todo, background: color } : todo
        )
      };
    }

    case 'set_contacts': {
      return {
        ...store,
        contacts: action.payload
      };
    }

    case 'add_contact': {
      return {
        ...store,
        contacts: [...store.contacts, action.payload]
      };
    }

    default:
      throw Error('Unknown action.');
  }
}


