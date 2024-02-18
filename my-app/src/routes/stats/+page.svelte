<script>
    export let data
</script>

<div class="w-1/4 h-full flex flex-col items-center justify-center gap-10">
    <h1 class="text-5xl text-center">SAVED SCORES</h1>
    <ul class="text-2xl flex flex-col justify-center items-center">
        {#each data?.records as record, index}
        <li class="text-left"> Quote: {record.quote}</li>
        <li> WPM: {record.wpm}</li>
        <hr class="w-1/2">
        {/each}
    </ul>
    
</div>