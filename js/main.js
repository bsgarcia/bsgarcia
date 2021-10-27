import { GUI } from "./gui.js";
import {createPGGGame} from "./requests.js";

$(document).ready(main);


function main() {

    GUI.hideItems();

    GUI.addYear(2021, 'publications');
    GUI.addPublication(
        {
            href: 'https://royalsocietypublishing.org/doi/full/10.1098/rstb.2019.0665',
            html: `<h1>The description–experience gap: a challenge for the neuroeconomics of decision-making under
                            uncertainty </h1>
                        <h2><b>Garcia, B.</b>, Cerrotti, F., & Palminteri, S. (2021)</h2>
                        <h3>Philosophical Transactions of the Royal Society B 376 (1819), 20190665 10</h3>`
        }
    );

    GUI.addYear(2019, 'publications');
    GUI.addPublication(
        {
            href: 'https://www.nature.com/articles/s41599-019-0362-2',
            html: `<h1>Coordination over a unique medium of exchange under information scarcity. </h1>
                        <h2>Nioche, A.*, <b>Garcia, B.*</b>, Lefebvre, G., Boraud, T., Rougier, N. P., &
                            Bourgeois-Gironde, S. (2019)</h2>
                        <h3>Palgrave Communications (Humanities and Social Sciences Communications - Nature), 5(1),
                            1-11.</h3>`
        }
    );

    GUI.addPublication(
        {
            href: 'https://www.nature.com/articles/s41599-019-0241-x',
            html: `<h1>Interaction effects between consumer information and firms' decision rules in a duopoly: how
                    cognitive features can impact market dynamics </h1>
                        <h2>Nioche, A.*, <b>Garcia, B.*</b>, Boraud, T., Rougier, N. P., & Bourgeois-Gironde, S. (2019)
                        </h2>
                        <h3>Palgrave Communications (Humanities and Social Sciences Communications - Nature), 5(1),
                            1-11.</h3>`
        }
    );

    GUI.showItems();

    GUI.setModal('space');
    GUI.setModal('pgg');
    GUI.setModal('duopoly')

    $('#demoPGG').click(createPGGGame);

}