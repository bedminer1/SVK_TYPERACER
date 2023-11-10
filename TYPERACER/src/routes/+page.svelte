<script>
    import { onMount } from 'svelte';

    export let data
    const { quotes } = data

    let textDisplay = quotes[Math.floor(Math.random() * 100)].quote
    let input
    let completedTyping = false
    let timer = 0
    let startedTyping = true
    let displayedWPM = 0

    $: wordsPerMinute = Math.floor(textDisplay.split(' ').length / timer * 100 * 60)

    // if(displayedWPM < wordsPerMinute && completedTyping === false) {
     displayedWPM = wordsPerMinute
    // }

    function newQuote() {
        window.location.reload()
    }

    function checkCorrect() {
        if (input !== textDisplay) {
            return
        } else if (input === textDisplay) {
            displayedWPM = wordsPerMinute
            completedTyping = true
        }
    }

    function startTimer() {
        startedTyping = true

        if (startedTyping === true && timer === 0) {
        let timerInterval = setInterval(() => {
            timer++
        }, 10);
        } 
    }

</script>

<div class="h-full w-3/4 flex justify-center items-center flex-col">
    <div class="border h-52 w-1/2 px-2">
        <p class="text-lg">{textDisplay}</p>
    </div>
    
    <form class="w-1/2" on:submit|preventDefault={checkCorrect} autocomplete="off">
    <input type="text" on:keydown={startTimer} bind:value={input} onpaste='return false' id="textInput" class="text-black outline-none w-full mt-4 pl-2 h-8">
    </form>
    <button on:click={newQuote} class="w-auto text-2xl hover:text-red-200">Next</button>

    {#if completedTyping}
        <p class="text-4xl">Good Job!</p>
        <p class="text-3xl"> WPM: {displayedWPM}</p>
    {/if}
</div>