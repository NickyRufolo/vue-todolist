var app = new Vue({
    el: '#app',
    data: {
        todoList:[
        {
            testo: `Imparare HTML`,
            done : false
        },
        {
            testo: `Imparare CSS`,
            done : false
        },
        {
            testo: `Imparare Javascript`,
            done : false
        },
        {
            testo: `Imparare PHP`,
            done : false
        },
        {
            testo: `Imparare Laravel`,
            done : false
        }
    ],
    taskCompleted: []
    },
    value:``,
    methods: {
        TodoLista(indice){
            //per rimuovere oggetti all'array uso splice() dove il parametro sarà l'indexcliccato di riferimento
            this.todoList.splice(indice, 1); //quanti elmenti eliminare cioe 1 
            this.taskCompleted.push(indice)
        },
        
        inputTask() {
            let inputField = document.getElementById(`InputUtente`).value;
            this.todoList.push({testo: `${inputField}`,done : false})
        }
    }
})





