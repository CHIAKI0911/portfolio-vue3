Vue.createApp({
    data:function(){
        return{
                
                deadline:'',
                todo:'',
                //属性をまとめて定義
                attrs:{
                        size: 50,
                        maxlength: 200,
                },
                list:[
                    {
                        deadline:"5月20日",
                        todo:"J検試験日設定"
                    },
                    {
                        deadline:"なるはや",
                        todo:"トイレットペーパーの購入"
                    },
                    {
                        deadline:"5/19",
                        todo:"先生の相談"
                    }

                ]
            }
    },

    mounted() {
        if (localStorage.getItem('list')){
            this.list = JSON.parse(localStorage.getItem('list'));
        }
    },

    methods:{
        addTodo:function(){
            this.list.push({deadline:this.deadline,todo:this.todo});
            this.deadline = "";
            this.todo = "";
            this.saveList
        },
        removeList:function(n){
            this.list.splice(n,1);
            this.saveList
        },
        saveList:function() {
            var parsed = JSON.stringify(this.lists);
            localStorage.setItem('lists',parsed);
            
        }
    }

}).mount('#app');