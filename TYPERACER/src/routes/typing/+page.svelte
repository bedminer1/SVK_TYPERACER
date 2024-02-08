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
        } else if (input.replace(`\'`, `\’`) === textDisplay && !completedTyping) {
            displayedWPM = wordsPerMinute
            completedTyping = true
        } else if (completedTyping) {
            window.location.reload()
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

<div class="flex flex-col items-center justify-center w-3/4 h-full mt-52">
    <div class="w-4/5 max-w-2xl px-2 border h-60">
        <p class="overflow-auto text-3xl">{textDisplay}</p>
    </div>
    <p>
        SOURCE: {author}
    </p>
    
    <form class="w-3/4 max-w-lg" on:submit|preventDefault={checkCorrect} autocomplete="off">
    <!-- svelte-ignore a11y-autofocus -->
    <input type="text" autofocus on:keydown={startTimer} bind:value={input} onpaste='return false' id="textInput" class="w-full pl-2 mt-4 text-3xl text-black outline-none h-22">
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