const Tictactoe = () => {
    const texts = [
        "Aperte o play para jogar",
        "joga",
        "venceu o jogo",
    ];
    const self = {
        text: texts[1]
    };
    const template = `
        <div>
            <h1>Jogo da velha</h1>
            <p>
                Jogar contra o computador
            </p>
        </div>
    
    
    
    
    `;

    
    return lemonade.element(template, self);
}    