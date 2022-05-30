const Tictactoe = () => {
    const texts = [
        "Aperte o Play para Jogar",
        "joga",
        "venceu o jogo"
        


    ];
    const self = {
        bot: true,
        turn: "",
        text: texts [0]
    
    };

    self.init = (elem) => {
        elem.addEventListener("click", () => {
            console.log("clicou");
        });
    }

    const template = `
        <div>
           <h1>Jogo da velha</h1>
           <p>
              Jogar contra o computador <input type="checkbox" checked @bind="self.bot">
            </p>
            <div> 
                <div class="gui">
                  <span class="gui_turn">{{self.turn}}</span>
                  <span>{{self.text}}</span>
                </div>
                <div class="board" @ready="self.init(this)">
                  
                    <section class="board_column">
                        <span class="board_cell" data-id="1">x</span>
                        <span class="board_cell" data-id="2"></span>
                        <span class="board_cell" data-id="3"></span>
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