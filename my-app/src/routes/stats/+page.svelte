<script>
    export let data
</script>

<div>
    <ul>
        {#each data?.records as record, index}
        <li> Quote: {record.quote}</li>
        <li> Score: {record.wpm}</li>
        {/each}
    </ul>
    
</div>