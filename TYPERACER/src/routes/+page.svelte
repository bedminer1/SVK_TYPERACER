<script>
    import { onMount } from 'svelte';
    export let data
    const { quotes } = data

    let textDisplay = quotes[Math.floor(Math.random() * 100)].quote
    let input
    let completedTyping = false

    function newQuote() {
        window.location.reload()
    }

    function checkCorrect() {
        if (input !== textDisplay) {
            return
        } else {
            stopTimer()
            completedTyping = true
        }
    }

    function stopTimer() {

    }

</script>

<div class="h-full w-3/4 flex justify-center items-center flex-col">
    <div class="border h-52 w-1/2 px-2">
        <p class="text-lg">{textDisplay}</p>
    </div>
    
    <form class="w-1/2" on:submit|preventDefault={checkCorrect}>
    <input type="text" bind:value={input} id="textInput" class="text-black outline-none w-full mt-4 pl-2 h-8">
    </form>

    <button on:click={newQuote}>Next</button>

    {#if completedTyping}
        <p class="text-4xl">Good Job!</p>
    {/if}
</div>