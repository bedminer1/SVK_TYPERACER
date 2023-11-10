<script>
    import { onMount } from 'svelte';

    export let data
    const { quotes } = data

    let randomNumber = Math.floor(Math.random() * 100)
    let textDisplay = quotes[randomNumber].quote
    let input
    let author = quotes[randomNumber].author
    let completedTyping = false
    let timer = 0
    let startedTyping = false
    let displayedWPM = 0

    $: wordsPerMinute = Math.floor(textDisplay.split(' ').length / timer * 100 * 60)

    function newQuote() {
        window.location.reload()
    }

    function checkCorrect() {
        if (input.replace(`\'`, `\’`) !== textDisplay) {
            return
        } else if (input.replace(`\'`, `\’`) === textDisplay) {
            displayedWPM = wordsPerMinute
            completedTyping = true
        }
    }

    function startTimer() {
        if (input.length > 0) {
            startedTyping = true
        }

        if (startedTyping === true && timer === 0) {
            let timerInterval = setInterval(() => {
                timer++
            }, 10);
        } 
    }

</script>

<div class="h-full w-3/4 flex justify-center items-center flex-col mt-52">
    <div class="border h-60 w-4/5 px-2 max-w-2xl">
        <p class="text-3xl overflow-auto">{textDisplay}</p>
    </div>
    <p>
        SOURCE: {author}
    </p>
    
    <form class="w-3/4 max-w-lg" on:submit|preventDefault={checkCorrect} autocomplete="off">
    <input type="text" on:keydown={startTimer} bind:value={input} onpaste='return false' id="textInput" class="text-black outline-none w-full mt-4 pl-2 h-8">
    </form>

    <button on:click={newQuote} class="w-auto text-2xl hover:text-red-200">Next</button>

    {#if startedTyping && !completedTyping}
        <p>(started typing..)</p>
    {/if}

    {#if completedTyping}
        <p class="text-4xl">Good Job!</p>
        <p class="text-3xl"> WPM: {displayedWPM}</p>
    {/if}
</div>