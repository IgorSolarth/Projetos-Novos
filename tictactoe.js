const Tictactoe = () => {
    const texts = [
        "Aperte o Play para Jogar",
        "joga",
        "venceu o jogo"
        


    ];
    const self = {
        text: texts [0]
    
    };
    const template = `
        <div>
           <h1>Jogo da velha</h1>
           <p>
              Jogar contra o computador <input type="checkbox" checked>
            </p>
            <div> 
                <div class="gui">
                  <span class="gui_turn"></span>
                  <span>Aperte o Play para Jogar</span>
                </div>
                <div class="board">
                  
                    <section class="board_column">
                        <span class="board_cell" data-id="1"></span>
                        <span class="board_cell" data-id="2"></span>
                        <span class="bord_cell" data-id="3"></span>
                    </section>
                    <section class="board_column">
                        <span class="board_cell" data-id="4"></span>
                        <span class="board_cell" data-id="5"></span>
                        <span class="board_cell" data-id="6"></span>
                    </section>
                    <section class="board_column">
                        <span class="board_cell" data-id="7"></span>
                        <span class="board_cell" data-id="8"></span>
                        <span class="board_cell" data-id="9"></span>
                    </section>   
                    <button class="btn">Jogar</button>


                </div>
                    
            </div>

        </div>     

    `;
    return lemonade.element(template, self);
}