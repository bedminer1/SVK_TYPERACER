<script>
    let textDisplay = 'example text'
    let inputDisplay
</script>

<div class="h-full w-3/4 flex justify-center items-center flex-col">
    <div class="border h-52 w-1/2 pl-4">
        <p>{textDisplay}</p>
    </div>
    
    <input type="text" bind:value={inputDisplay} id="textInput" class="text-black outline-none w-1/2 mt-4 pl-3">
</div>