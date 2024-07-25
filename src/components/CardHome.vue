<script>
export default {
    data() {
        return {
            flipped: false
        };
    }
};
</script>



<template>
    <div class="card" :class="{ 'is-flipped': flipped }" @click="flipped = !flipped">
        <div class="card__face card__face--front">
            <p>Teste front</p>
            <slot name="front">
                <div class="default-front-content">
                    Frente Card
                </div>
            </slot>
        </div>
        <div class="card__face card__face--back">
            <p>Teste back</p>
            <slot name="back">
                <div class="default-back-content">
                    Teste back
                </div>
            </slot>
        </div> 
    </div>
</template>

<style scoped>

.card {
    position: relative;
    width: 200px;
    height: 300px;
    perspective: 1000px;
    transition: transform 0.6s;
}

.card.is-flipped {
    transform: rotateY(180deg);
}

.card__face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.card__face--front {
    background-color: #181818;
}

.card__face--back {
    background-color: white;
    transform: rotateY(180deg);
}

.default-front-content, .default-back-content {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: black;
}
</style>