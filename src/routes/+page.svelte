<script>

    import delIcon from '../deleteimage.svg';
    let newToDo = $state("");
    let newId =$state(1); 
    
    let todos= $state([
        {
            id: 0,
            title: "Placehoder todo",
            done: false
        }
    ]); 
    
    newId = newId+1;
    
    const checkNewTodo = async(e) =>
    {
        if( e.key ==='Enter')
        {
            let tmpStr = newToDo;
            if( tmpStr.length < 1)
            {
                alert( "Need something todo?");
                return;
            }
               
            todos.push({id:newId,title:tmpStr,done:false})               
            newId = newId+1;
            e.currentTarget.value='';
            newToDo='';
        }        
    }
    
    let completedToDo =$derived(todos.filter((t)=>t.done).length);    
       
    const deleteToDo = async(id) =>
    {
        console.log(`delete ${id}`);        
        todos = todos.filter((t)=>t.id!=id);
    }
    
</script>
  
<div class="todoContainer">New todo:   
    <input type= text bind:value={newToDo} onkeydown={(e)=>checkNewTodo(e)}/>
</div>

<hr class="todoSeperatorLine"/>
<p></p>
{#if todos}
{#each todos as todo}
      <div class="todoContainer">        
        <img alt="delete" src={delIcon} onclick={()=>deleteToDo(todo.id)}/>
        <input bind:value={todo.title}/>
       <input type="checkbox" bind:checked={todo.done}>
   </div>
{/each}
{/if}
<p></p>
<p></p>

<div>You have completed {completedToDo} of {todos.length}</div>

<style>
    .todoContainer
    {
        display: flex;
    }     
    
    .todoSeperatorLine {
        line-height: 20px;
    }
</style>