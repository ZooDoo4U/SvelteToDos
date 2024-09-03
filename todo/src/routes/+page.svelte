<script>
 
 
    let newToDo = $state("");
    
    let todos= $state([
        {
            title: "Placehoder todo",
            done: false
        }
    ]); 
    
    const checkNewTodo = async(e) =>
    {
        if( e.key ==='Enter')
        {
            let tmpStr = newToDo;
            if( tmpStr.length < 1)
            {
                alert( "Need something todo?");
            }
            
            // console.log(`newTodo == [${newToDo}]`);
            // console.log(`bingo `);
            //let xxxTmp = {title:newToDo, done:false}
            todos.push({title:tmpStr,done:false})               
            e.currentTarget.value='';
        }
        // else
        // {
        //     console.log(`new key [${e.key}]`);
        // }
    }
    
    let completedToDo =$derived(todos.filter((t)=>t.done).length);
    
</script>
  
<div class="todoContainer">New todo:   
    <input type= text bind:value={newToDo} onkeydown={(e)=>checkNewTodo(e)}/>
</div>

<hr class="todoSeperatorLine"/>
{#if todos}
{#each todos as todo}
      <div class="todoContainer">        
       <input bind:value={todo.title}/>
       <input type="checkbox" bind:checked={todo.done}>
   </div>
{/each}
{/if}
<div>You have completed {completedToDo} of {todos.length}</div>
<div>New todo == [{newToDo}]</div>

<style>
    .todoContainer
    {
        display: flex;
    }     
    
    .todoSeperatorLine {
        line-height: 20px;
    }
</style>