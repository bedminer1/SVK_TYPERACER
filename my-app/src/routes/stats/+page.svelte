<script>
    export let data

</script>

<div class="w-full h-full flex flex-col items-center justify-start gap-10">
    <h1 class="text-5xl text-center">SAVED SCORES</h1>
    <div class="w-full h-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-4 px-10 overflow-auto">
       
        {#each data?.records as record, index}
            <div class="p-4 text-2xl h-full border-2 flex flex-col justify-center items-center bg-black shadow-lg">
                <p class="text-left"> Quote: {record.quote}</p>
                <p> WPM: {record.wpm}</p>
                <form method="post" action="?/delete">
                    <input type="hidden" id='id' name="id" value={record.id}>
                    <button type="submit">Delete</button>
                </form>
                <hr class="w-1/2">
        
            </div>
        {/each}
    </div>
    
    
</div>