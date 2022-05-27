import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Home from '../src/screens/Home/home'
import Options from '../src/screens/Options/options'
import Cadastrar from '../src/screens/Cadastrar/cadastro';
import Passagens from '../src/screens/Passagens/passagens';


const Rotas = {
    Home:{
        name: "Home",
        screen: Home,
    },
    Options: {
        name: "Option",
        screen: Options,
    },
    Cadastrar: {
        name: "Cadastrar",
        screen: Cadastrar,
    },
    Passagens: {
        name: "Passagens",
        screen: Passagens,
    },

};

const Navegacao = createSwitchNavigator(Rotas);
export default createAppContainer(Navegacao);