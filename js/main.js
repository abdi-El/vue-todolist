const app = new Vue({
    el: '#app',
    data: {
        todos:[
            {
                text: 'Fare la spesa',
                completed: false
            },
            {
                text: 'Fare la todolist con VueJS',
                completed: false
            },
            {
                text: 'Fare esercizo',
                completed: true
            }
        ],
        newTodo: '',
    },
    methods:{
        add(){
            if (this.newTodo.length > 0){
                let newTodo = {};
                newTodo.text = this.newTodo;
                newTodo.completed = false;
                this.todos.unshift(newTodo);
                this.newTodo = '';
            } 
        },
        remove(listIndex){
            this.todos.splice(listIndex, 1);
        },
        completed(listIndex){
           this.todos[listIndex].completed = !this.todos[listIndex].completed ;
        }
    }

})