function teste(description, callback) {
    try {
        callback();
        console.log(`✅ Teste aprovado: ${description}`);
    } catch (error) {
        console.error(`❌ Teste reprovado: ${description}`);
    }
}

function assertEquals(actual, expected) {
    if(actual !== expected) {
        throw new Error(`🔴 ${actual} não é igual a ${expected}`);
    }
}

function isEven(num) {
    return num % 2 === 0;
}

teste('Deve retornar "true" para números pares', () => {
    assertEquals(isEven(2), true);
    assertEquals(isEven(4), true);
    assertEquals(isEven(6), true);
});

teste('Deve retornar "false" para números ímpares', () => {
    assertEquals(isEven(1), false);
    assertEquals(isEven(3), false);
    assertEquals(isEven(5), false);
});